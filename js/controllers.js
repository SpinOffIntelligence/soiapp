angular.module('soiApp.controllers', []); //instantiates
var controllers = angular.module('soiApp.controllers')      //gets

controllers.controller('mainCtrl', function ($scope, $rootScope, util) {
	$scope.templates =
	[{ name: 'home.html', url: 'home.html'},
	{ name: 'template2.html', url: 'template2.html'}];
	$scope.template = $scope.templates[0];

	$scope.admin=false;
	$scope.$on('navAdminMode', function(event, navAdminMode) {
		$scope.admin=navAdminMode;
	});
});


controllers.controller('visController', function ($scope, $rootScope, $stateParams, util, remoteDataService, modelService, panelFieldsService) {

  $scope.recordId = '';
  $scope.searchResults = null;
  if(util.defined($stateParams,"id"))
    $scope.recordId = $stateParams.id;

  remoteDataService.searchRecords(null, $scope.searchText, function(err, data) {
    $scope.searchResults = data;
  });


  var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
  ]);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);

});

controllers.controller('searchController', function ($scope, $rootScope, $stateParams, util, remoteDataService, modelService, panelFieldsService) {

  $scope.searchText = '';
  $scope.searchResults = null;
  if(util.defined($stateParams,"term"))
    $scope.searchText = $stateParams.term;

  $scope.search = function() {
    remoteDataService.searchRecords(null, $scope.searchText, function(err, data) {
      $scope.searchResults = data;
    });
  }

  $scope.objectTypeToName = function(objectType) {
    var fnd = util.findWhereProp(modelService.models,'objectType',objectType);
    if(util.defined(fnd)) {
      return fnd.displayName;
    }
  }

  $scope.goObj = function(result) {
    if(util.defined(result,"@class") && util.defined(result,"@rid")) {
      var prop = result["@class"];
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',prop);
      if(util.defined(fnd)) {
        util.navigate(fnd.userRoute,{id:result['@rid']});
      }
    }
  }

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

	$scope.exportCriteria = {
		field: null,
		operator: null,
		value: null
	}

	$scope.criterias = [];

	$scope.selectedObjectTypeFields=null;
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

	$scope.addCriteria = function() {
		if(!util.defined($scope,"exportCriteria.field")) {
			alert('Criteria missing field!');
		} else if(!util.defined($scope,"exportCriteria.operator")) {
			alert('Criteria missing operator!');
		} else if(!util.defined($scope,"exportCriteria.value")) {
			alert('Criteria missing value!');
		}	else {
			var obj = {
				field: $scope.exportCriteria.field.schemaName,
				operator: $scope.exportCriteria.operator,
				value: $scope.exportCriteria.value				
			}
			$scope.criterias.push(obj);
			$scope.exportCriteria = {
				field: null,
				operator: null,
				value: null
			}			
		}
	}

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

		fnd = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
		if(util.defined(fnd,"fields")) {
      var fndId = _.findWhere(fnd.fields, {schemaName: 'id'});
      if(!util.defined(fndId)) {
				var obj =  {
	      	schemaName: 'id',
	      	displayName: 'ID'
	      }
      	fnd.fields.push(obj);
      }      	
			$scope.idFields = fnd.fields;
		}
	}

	var vm = this;
	vm.submit = function(){ //function to call on form submit
		if ($scope.formData.mode != 'export' && vm.upload_form.file.$valid && vm.file) { //check if from is valid

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

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
      	if(util.defined($scope,"formData.sourceObjectType.value")) {
      		$scope.formData.sourceObjectType = $scope.formData.sourceObjectType.value;
      	} else {
      		alert('No Source Object Type selected!')
      		return;
      	}
      } else {
      	$scope.formData.sourceObjectType = null;
      }

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
      	if(util.defined($scope,"formData.targetObjectType.value")) {
      		$scope.formData.targetObjectType = $scope.formData.targetObjectType.value;
      	} else {
      		alert('No Target Object Type selected!')
      		return;
      	}
      } else {
      	$scope.formData.targetObjectType = null;
      }

      if(($scope.formData.mode == 'update' || $scope.formData.mode == 'delete') && $scope.formData.isEdge == false) {

      	if(util.defined($scope,"formData.idObjField.schemaName")) {
      		$scope.formData.idObjField = $scope.formData.idObjField.schemaName;
      	} else {
      		alert('No Id Object Field selected!')
      		return;
      	}
      } else {
	    	$scope.formData.idObjField = null;
      }

      if($scope.formData.mode == 'export') {
      	$scope.formData.criterias = $scope.criterias;
      }

			vm.upload(vm.file); //call upload function
		} else {

			if($scope.formData.mode != 'export') {
				alert('No file selected!')	
			} else {
				remoteDataService.exportRecords($scope.formData.objectType.value, $scope.criterias, function(err, data) {
					console.log('Export:');
					if($scope.formData.isEdge == '1')
						$scope.formData.isEdge=true;
					else $scope.formData.isEdge=false;
					if(util.defined(data,"exportData.length")) {
						var recordData = [];
						for(var propertyName in data.exportData) {
							recordData.push(data.exportData[propertyName]);
						}
						console.dir(recordData);
						var obj = {};
						var fnd = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
						if(util.defined(fnd,"fields.length")) {
							for(var i=0; i<fnd.fields.length; i++) {
								var f = fnd.fields[i];
								obj[f.schemaName] = f.schemaName;
							}						
							obj['id'] = 'id';
							if($scope.formData.isEdge) {
								obj['sourceid'] = 'sourceid';
								obj['targetid'] = 'targetid';
							}
						}
						var json = [obj];
						for(var i=0; i<recordData.length; i++) {
							var rec = recordData[i];
							var obj = {};
							for(var j=0; j<fnd.fields.length; j++) {
								var f = fnd.fields[j];
								if(util.defined(rec,f.schemaName)) {
									var val = rec[f.schemaName];
									val = val.replace(/["]/g, "\"\"")
									val = val.replace(/(?:\r\n|\r|\n)/g, ' ');
									if(val.indexOf(",") > -1) {
										val = '"' + val + '"';
									}
									obj[f.schemaName] = val;
								} else {
									obj[f.schemaName] = '';
								}
							}
							obj['id'] = rec['@rid'];
							if($scope.formData.isEdge) {
								obj['sourceid'] = rec['out'];
								obj['targetid'] = rec['in'];
							}							
							json.push(obj);
						}
						var csv = util.JSON2CSV(json);
			      var fileName = 'data'
			      var uri = 'data:text/csv;charset=utf-8,' + escape(csv);
			      var link = document.createElement("a");
			      link.href = uri
			        //link.style = "visibility:hidden"; Causing exception in Chrome - SR 6/15/2015
			      link.download = fileName + ".csv";
			      document.body.appendChild(link);
			      link.click();
			      document.body.removeChild(link);
					}

				});
			}
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


