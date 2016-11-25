var soiControllers = angular.module('soiApp.controllers')  //gets

controllers.controller('panelListCtrl', function ($scope, $rootScope, util, panelFieldsService) {

	$scope.util = util;
	$scope.controller = 'panelListCtrl';
	$scope.mode='view';
	if(util.defined($scope,"panelName")) {
		console.log($scope.panelName);
	}
	$scope.recordCount = 0;

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId)) {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			}
		}
	}

	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.addRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add'});
	}

});

controllers.controller('panelItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.models = modelService.models;
	$scope.schemas = modelService.schemas;
	$scope._ = _;
	
	$scope.mode='view';
	$scope.controller = 'panelItemCtrl';
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}

	$scope.deleteEdge = function(objectType, recordDetail, relationItem) {
		remoteDataService.deleteEdge(objectType, $scope.recordItemId, recordDetail['@rid'], function(err, data) {
			remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
				$scope.recordDetails = data;
			});
		});
	}

	$scope.editEdge = function(objectType, recordDetail, relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'edit', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: recordDetail.id, destObjectType: relationItem.destObjectType});
	}

	$scope.getProperty = function(obj, propertyName) {
		return obj[propertyName];
	}

	$scope.getRelation = function(panelInfo, recordDetails, recordDetail, relationItem) {
		fnd = _.findWhere(recordDetails[relationItem.destObjectType], {id: recordDetail.inId});
		if(util.defined(fnd)) {
			return fnd;
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId) && $scope.recordItemId != "") {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}				
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.panelInfo.model.objectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;
			}
		}		
	}
	init();
	if($scope.mode == 'viewDetails') {
		$scope.recordDetails = {};
		for(var i=0; i <$scope.panelInfo.model.relationships.length; i++) {
			var relationship = $scope.panelInfo.model.relationships[i];
			remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
				if(util.defined(returnData,"edgeObjectType")) {
					// Get Relation ship again
					relationship = util.findWhereArray($scope.panelInfo.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

					var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
					var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
					if(!util.defined($scope,"recordDetailItem.relationships"))
						$scope.recordDetails[returnData.edgeObjectType]={};
					$scope.recordDetails[returnData.edgeObjectType].relationships = outData;
					remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
						$scope.recordDetails[returnData.edgeObjectType].details = detailsData;
					});
				}
			});
		}
		// remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
		// 	var relatedData = {};
		// 	for(var dataPropertyName in data) {
		// 		var dataItem = data[dataPropertyName];
		// 		var fndModel = util.findWhereProp(modelService.models, 'objectType', dataPropertyName);
		// 		if(fndModel != null) {
		// 			var dataItems = [];
		// 			for(var i=0; i<dataItem.length; i++) {
		// 				var di = dataItem[i];
		// 				var cleanDataObj = {};
		// 				for(var dataPropertyItemName in di) {
		// 					var fnd = _.findWhere(fndModel.fields, {schemaName: dataPropertyItemName});
		// 					if((util.defined(fnd,"showinList") && fnd.showinList == true) || (dataPropertyItemName=='id' || dataPropertyItemName=='inId' || dataPropertyItemName=='outId' || dataPropertyItemName=='name')) {
		// 						cleanDataObj[dataPropertyItemName] = di[dataPropertyItemName];
		// 					}
		// 				}
		// 				dataItems.push(cleanDataObj);
		// 			}
		// 			relatedData[dataPropertyName] = dataItems;					
		// 		}
		// 	}
		// 	$scope.recordDetails = relatedData;
		// });
	}

});


controllers.controller('panelFieldsViewEditCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService, $timeout) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	$scope.fields = null;
	$scope.schema = null;
	$scope.edgeObjectType = null;
	$scope.edgeRecordItemId = null;


	// datepicker
	$scope.dateOptions = {
    dateDisabled: false,
    formatYear: 'yy',
    startingDay: 1
	};

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];  
  $scope.popup1 = {
  	opened:false
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  // ui-select
  var vm = this;

  $scope.people = modelService.piskLists.productcategory.options;

  $scope.formatValue = function(panelField, value) {
  	if(panelField.controlType == 'multiselect') {
  		var names = _.pluck(value, 'name');
  		return names.join(", ");
  	} else{
  		return value;
  	}
  }

  // Normal
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
			if(strs.length > 3) {
				$scope.edgeObjectType = strs[3];
			}
			if(strs.length > 4) {
				$scope.edgeRecordItemId = strs[4];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			
			if($scope.edgeObjectType == null) {
				$scope.fields = $scope.panelInfo.model.fields;
				$scope.schema = modelService.schemas[$scope.panelInfo.model.objectType];
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			} else {

				var fnd = util.findDeep($scope.panelInfo.model.relationships, 'model', 'objectType', $scope.edgeObjectType);
				//_.findWhere($scope.panelInfo.model.relationships, {model.objectType: $scope.edgeObjectType});
				if(util.defined(fnd)) {
					$scope.fields = fnd.fields;
				}
				$scope.schema = modelService.schemas[$scope.edgeObjectType];
			}
		}		
	}

	if(util.defined($scope,"panelName")) {
		init();
	}

});

controllers.controller('panelFieldsCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
			if(util.defined(fnd)) {
				$scope.paneRecord = fnd;
			}
		}		
	}

	if(util.defined($scope,"panelName")) {
		init();
	}


	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.getValue = function(schemaName) {
		return $scope.paneRecord[schemaName];
	}

	$scope.getSchemaType = function(field) {
		var fnd = _.findWhere(modelService.schemas[$scope.panelInfo.model.objectType], {name: field.name});
		if(util.defined(fnd)) {
			return fnd.type;
		}
	}

	$scope.editRecord = function() {
		$scope.paneRecord.backup = jQuery.extend(true, {}, $scope.paneRecord);
		$scope.mode='edit';
	}

	$scope.deleteRecord = function() {
		panelFieldsService.deletePanelRecord($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, response) {
			util.navigate($scope.panelInfo.route);
	  });
	}

	$scope.saveRecord = function() {
		if($scope.mode == 'edit') {
			panelFieldsService.updatePanelRecord($scope.panelInfo, $scope.recordItemId, $scope.paneRecord, function(err, response) {
				if($scope.parentController=='panelListCtrl')
					$scope.mode='view';
				else $scope.mode='viewDetails';
	  	});
	  } else {
	  	// Add
			panelFieldsService.addPanelRecord($scope.panelInfo.model.objectType, $scope.paneRecord, function(err, response) {
				if(util.defined(response,'length') && response.length > 0) {
					response[0].id = response[0]['@rid'];
					$scope.panelInfo.records.push(response[0]);
					$scope.recordItemId = response[0]['@rid'];
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
				} else {
					util.navigate($scope.panelInfo.route);
				}
	  	});
	  }
	}

	$scope.cancelRecord = function() {
		if($scope.mode == 'edit') {
			$scope.paneRecord = jQuery.extend(true, {}, $scope.paneRecord.backup);
			if($scope.parentController=='panelListCtrl')
				$scope.mode='view';			
			else $scope.mode='viewDetails';			
		} else {
			util.navigate($scope.panelInfo.route);
		}
	}

	$scope.viewRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

	$scope.viewList = function() {
		util.navigate($scope.panelInfo.route);
	}

	$scope.addRelationship = function(relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: null, destObjectType: relationItem.destObjectType});
	}

});

controllers.controller('edgeItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.mode='view';
	$scope.controller = 'edgeItemCtrl';
	$scope.findTarget="";
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}
	if(util.defined($stateParams,"edgeObjectType")) {
		$scope.edgeObjectType = $stateParams.edgeObjectType;
	}
	if(util.defined($stateParams,"edgeRecordItemId")) {
		$scope.edgeRecordItemId = $stateParams.edgeRecordItemId;
	}
	if(util.defined($stateParams,"destObjectType")) {
		$scope.destObjectType = $stateParams.destObjectType;
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope,"edgeRecordItemId") && $scope.edgeRecordItemId != "") {


				remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
					if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data[$scope.edgeObjectType];
					}

					remoteDataService.getEdge($scope.edgeObjectType, $scope.edgeRecordItemId, function(err, data) {
						
						$scope.paneRecord = remoteDataService.prepareInboundData(data);
						var obj = {};
						for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
							if(util.defined(data,propertyName))
								obj[propertyName]=data[propertyName];
							else obj[propertyName]=null;
						}
						if(util.defined(data,"id"))
								obj.id = data.id;
						$scope.paneRecord = obj;

						if(util.defined(data,"in")) {
							$scope.targetId = data['in'];

							$scope.targets = [];
							remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
								var targets = data;
								for(var i=0; i<targets.length; i++) {
									var target = targets[i];
									var fnd = _.findWhere($scope.recordDetails, {inId: target.id});
									if(targets[i].id == $scope.targetId || !util.defined(fnd)) {
										if(targets[i].id == $scope.targetId)
											targets[i].selected=true;
										else targets[i].selected=false;										
										$scope.targets.push(target);
									}
								}
							});
						}
					});
				});
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;

				remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
					if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data[$scope.edgeObjectType];
					}
					remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
						$scope.targets = [];
						var targets = data;
						for(var i=0; i<targets.length; i++) {
							var target = targets[i];
							var fnd = _.findWhere($scope.recordDetails, {inId: target.id});	
							if(!util.defined(fnd))
								$scope.targets.push(target);
						}
					});				
				});
			}
		}		
	}
	init();		

	$scope.selectTarget = function(target) {
		for(var i=0; i<$scope.targets.length; i++) {
			$scope.targets[i].selected=false;
		}
		target.selected=true;
	}

	$scope.saveEdge = function() {
		var fnd = _.findWhere($scope.targets, {selected: true});
		if(fnd != null) {
			if($scope.mode == 'add') {
				remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
				});				
			} else {
				remoteDataService.updateEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
				});				
			}
		}
			
	}

	$scope.cancelEdge = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

});

