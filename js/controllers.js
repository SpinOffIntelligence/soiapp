angular.module('soiApp.controllers', []); //instantiates
var controllers = angular.module('soiApp.controllers')      //gets

controllers.controller('mainCtrl', function ($scope, $rootScope, util) {
	$scope.templates =
	[{ name: 'home.html', url: 'home.html'},
	{ name: 'template2.html', url: 'template2.html'}];
	$scope.template = $scope.templates[0];	
});

controllers.controller('uploadController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {
	console.log('hi');
	$scope.formData = {
		mode: null,
		objectType: null,
		sourceObjectType: null,
		targetObjectType: null,
		isEdge: 0
	}

	$scope.sourceObjects = [];
	$scope.targetObjects = [];
	$scope.arrRelObjects = [];
	$scope.arrObjects = [];
	for(var propertyName in modelService.models) {
		var obj = {
			name: modelService.models[propertyName].displayName,
			value: modelService.models[propertyName].objectType,
			sourceObjectTypes: [],
			targetObjectTypes: []			
		}		
		if(util.defined(modelService.models,propertyName + '.isRelationship') && modelService.models[propertyName].isRelationship == true) {
			$scope.arrRelObjects.push(obj);
		}
	}

	for(var propertyName in modelService.models) {
		var obj = {
			name: modelService.models[propertyName].displayName,
			value: modelService.models[propertyName].objectType
		}		
		if(!util.defined(modelService.models,propertyName + '.isRelationship') || modelService.models[propertyName].isRelationship == false) {
			$scope.arrObjects.push(obj);

			if(util.defined(modelService,'models.' + propertyName + '.relationships')) {
				for(var i=0; i<modelService.models[propertyName].relationships.length; i++) {
					var rel = modelService.models[propertyName].relationships[i];
					var fnd = _.findWhere($scope.arrRelObjects, {value: rel.model.objectType});
					var obj = {};
					if(util.defined(fnd)) {
						var fndDupe = _.findWhere(fnd.sourceObjectTypes, {value: modelService.models[propertyName].objectType});
						if(!util.defined(fndDupe)) {
							obj = {
								name: modelService.models[propertyName].displayName,
								value: modelService.models[propertyName].objectType
							}
							fnd.sourceObjectTypes.push(obj);							
						}

						fndDupe = _.findWhere(fnd.targetObjectTypes, {value: rel.destObjectType});
						if(!util.defined(fndDupe)) {

							var fndObj = util.findWhereProp(modelService.models, 'objectType', rel.destObjectType);
							if(util.defined(fndObj)) {
								obj = {
									name: fndObj.displayName,
									value: rel.destObjectType
								}						
								fnd.targetObjectTypes.push(obj);								
							}
						}
					}
				}
			}
		}
	}

	remoteDataService.getAllLogInfo(function(err, logInfo) {
		$scope.logInfo = logInfo;
		$scope.jobs = [];
		var lastJob;
		for(var i=0; i<logInfo.length; i++) {
			var data = logInfo[i];
			if(data.file != lastJob) {
				var obj = {
					file: data.file,
					startdatetime: data.startdatetime,
					mode: data.mode,
					sortDate : moment(data.startdatetime).unix()
				}
				$scope.jobs.push(obj);
				lastJob = data.file;
			}
		}
	});

	$scope.deleteDetails = function(job) {
		remoteDataService.deleteLogInfo(job.file, function(err, logInfo) {
      $state.transitionTo($state.current, $stateParams, {
        reload: true,
        inherit: false,
        notify: true
      });			
		});
	}

	$scope.getDetails = function(job) {
		$scope.logDetails = [];
		$scope.jobDetails = job;
		for(var i=0; i<$scope.logInfo.length; i++) {
			var data = $scope.logInfo[i];
			if(data.file == job.file) {
				var obj = {
					info: data.info
				}
				$scope.logDetails.push(obj);
			}
		}
	}

	$scope.selectObjectType = function() {
		var fnd = _.findWhere($scope.arrRelObjects, {value: $scope.formData.objectType.value});
		if(util.defined(fnd)) {
			$scope.sourceObjects = fnd.sourceObjectTypes;
			$scope.targetObjects = fnd.targetObjectTypes;			
		}
	}

	var vm = this;
	vm.submit = function(){ //function to call on form submit
		if (vm.upload_form.file.$valid && vm.file) { //check if from is valid

      if(!util.defined($scope,"formData.mode.length") || $scope.formData.mode.length == 0) {
      	alert('No Mode selected!')
      	return;
      }

      if(util.defined($scope,"formData.objectType.value")) {
      	$scope.formData.objectType = $scope.formData.objectType.value;
      } else {
      	alert('No Object Type selected!')
      	return;
      }

      if($scope.formData.isEdge == "1")
      	$scope.formData.isEdge = true;
      else $scope.formData.isEdge = false;

      if($scope.formData.isEdge && util.defined($scope,"formData.sourceObjectType.value")) {
      	$scope.formData.sourceObjectType = $scope.formData.sourceObjectType.value;
      } else {
      	if($scope.formData.isEdge) {
      		alert('No Source Object Type selected!')
      		return;
      	}
      	$scope.formData.sourceObjectType = null;
      }

      if($scope.formData.isEdge && util.defined($scope,"formData.targetObjectType.value")) {
      	$scope.formData.targetObjectType = $scope.formData.targetObjectType.value;
      } else {
      	if($scope.formData.isEdge) {
      		alert('No Target Object Type selected!')
      		return;
      	}
      	$scope.formData.targetObjectType = null;
      }
			vm.upload(vm.file); //call upload function
		} else {
			alert('No file selected!')
		}
	}


  vm.upload = function (file) {
  	Upload.upload({
      url: '/upload', //webAPI exposed to upload the file
      data:{
      	file:file,
      	formData: $scope.formData
      } //pass file as data, should be user ng-model
  }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
      	$scope.strLog = resp.data.strLog;
      	$scope.file = resp.data.file;

      	remoteDataService.getLogInfo($scope.file, function(err, data) {

					$timeout( function(){ 
		        $state.transitionTo($state.current, $stateParams, {
		          reload: true,
		          inherit: false,
		          notify: true
		        });
					}, 3000);

      	});

      } else {
      	$window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
  	console.log('Error status: ' + resp.status);
  	$window.alert('Error status: ' + resp.status);
  }, function (evt) { 
  	console.log(evt);
  	var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
  	console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };	

});


