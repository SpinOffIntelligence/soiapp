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
			$scope.recordCount = $scope.panelInfo.records.length;

			$scope.currentPage = $scope.panelInfo.currentPage;
			$scope.pages = [];
			var numberOfPages = 0;
			if(panelFieldsService.pageSize > 0)
				numberOfPages = Math.ceil($scope.panelInfo.size / panelFieldsService.pageSize);
			for(var i=1; i<=numberOfPages; i++) {
				var obj = {
					pageNumber: i,
					selected: false
				}
				if($scope.currentPage == i)
					obj.selected = true;
				$scope.pages.push(obj);
			}

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

	function loadRelationships() {
		$scope.recordDetails = {};
		if(!util.defined($scope,"panelInfo.model.relationships"))
			return;
		for(var i=0; i <$scope.panelInfo.model.relationships.length; i++) {
			var relationship = $scope.panelInfo.model.relationships[i];
			remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
				if(util.defined(returnData,"edgeObjectType")) {

					var fnd = util.findDeepAny(returnData.data,'in_EPartner','#16:7')

					// Get Relation ship again
					relationship = util.findWhereArray($scope.panelInfo.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

					var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];

          for(var x=0; x<relationship.destObjectType.length; x++) {
          	var destObjectType = relationship.destObjectType[x];
						var outData = _.where(returnData.data, {'@class': destObjectType});

						if(!util.defined($scope,"recordDetails" + "." + returnData.edgeObjectType + ".relationships"))  {
							$scope.recordDetails[returnData.edgeObjectType]={
								pageSize: 10,
								pageNumber: 0,
								pages: 0
							};
							$scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { 
								return (obj['@rid'] == $scope.recordItemId);
							});
							$scope.recordDetails[returnData.edgeObjectType].pages = Math.ceil($scope.recordDetails[returnData.edgeObjectType].relationships.length / $scope.recordDetails[returnData.edgeObjectType].pageSize);

						} else {
							var newItems = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
							$scope.recordDetails[returnData.edgeObjectType].relationships = _.union($scope.recordDetails[returnData.edgeObjectType].relationships, newItems);
						}

						remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
							if(!util.defined($scope,"recordDetails" + "." + returnData.edgeObjectType + ".details"))  {
								$scope.recordDetails[returnData.edgeObjectType].details = detailsData;	
							} else {
								$scope.recordDetails[returnData.edgeObjectType].details.data = _.union($scope.recordDetails[returnData.edgeObjectType].details.data, detailsData.data);
							}
						});
					}
				}
			});
		}
	}

	$scope.deleteEdge = function(objectType, recordDetail, relationItem) {
		remoteDataService.deleteEdge(objectType, $scope.recordItemId, recordDetail['in'], function(err, data) {
			remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, 0, null, null, null, function(err, data) {
				loadRelationships();
			});
		});
	}

	$scope.editEdge = function(objectType, recordDetail, relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'edit', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: recordDetail['@rid'], sourceObjectType: $scope.panelInfo.model.objectType, relationItemObjectType: relationItem.model.objectType});
	}

	$scope.getProperty = function(obj, propertyName) {
		return obj[propertyName];
	}

	// $scope.getRelation = function(panelInfo, recordDetails, recordDetail, relationItem) {
	// 	fnd = _.findWhere(recordDetails[relationItem.destObjectType], {id: recordDetail.inId});
	// 	if(util.defined(fnd)) {
	// 		return fnd;
	// 	}
	// }

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId) && $scope.recordItemId != "") {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				} else {

				  panelFieldsService.fetchPanelRecord(panelFieldsService.panelInfo[$scope.panelName], $scope.recordItemId, function(err, recordData) {
				  	$scope.paneRecord = recordData[0];
				  });

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
		if($scope.mode == 'viewDetails') {
			loadRelationships();
		}

	}

	if(util.defined(panelFieldsService,$scope.panelName + ".panelInfo")) {
		init();
	} else {
			panelFieldsService[$scope.panelName] = {};
			panelFieldsService[$scope.panelName].panelInfo = panelFieldsService.panelInfo[$scope.panelName];
			panelFieldsService.fetchPanelRecords(panelFieldsService[$scope.panelName].panelInfo, function(err, panelListData) {
			init();
		});
	}
});


controllers.controller('panelFieldsViewEditCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService, remoteDataService, $timeout) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$scope.schemas = modelService.schemas;
	
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

  $scope.addMultilineRow = function(paneRecord, panelField) {
  	var values = []
  	if(!util.defined(paneRecord[panelField.schemaName])) {
  		values = paneRecord[panelField.schemaName] = [];
  	} else {
  		values = paneRecord[panelField.schemaName];
  	}
		var rowObj = {
      idx: values.length,
      values: []
    }
		for(var i=0; i<panelField.multilineCols; i++) {
      var obj = {
        idx: i,
        value: ''
      }
      rowObj.values.push(obj)
    }  	
		values.push(rowObj);
  }

  $scope.delMultilineRow = function(paneRecord, panelField, row) {
  	paneRecord[panelField.schemaName].splice(row.idx,1);
  }

	$scope.getMultiLineItemsName = function(schemaName) {
		return schemaName + 'multiline-text';
	}

	$scope.getMultiLineItems = function(paneRecord, schemaName) {
		var key = schemaName + 'multiline-text';
		if(util.defined(paneRecord,key)) {
			var values = paneRecord[key];
			return values;			
		}
	}

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


	$scope.removeImage = function(paneRecord, panelField) {
		remoteDataService.removeImage($scope.panelInfo.model.objectType, $scope.recordItemId, panelField.schemaName, function(err, data) {
			paneRecord[panelField.schemaName]=null;	
		})
	}

	$scope.replaceImage = function(paneRecord, panelField) {
		util.navigate('uploadImage', {objectType: $scope.panelInfo.model.objectType, id: $scope.recordItemId, logoField: panelField.schemaName});
	}

	$scope.addImage = function(paneRecord, panelField) {
		util.navigate('uploadImage', {objectType: $scope.panelInfo.model.objectType, id: $scope.recordItemId, logoField: panelField.schemaName});
	}

	if(util.defined($scope,"panelName")) {
		init();
	}

});

controllers.controller('panelFieldsCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$mode = null;
	$scope.submitted = false;
	$scope.inputError = {};
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

  $scope.getEntityName = function(record) {
  	if(util.defined(record,'@class')) {
  		var modelName =record['@class'];
  		var fndObj = util.findWhereProp(modelService.models,'objectType',modelName);	
  		if(util.defined(fndObj)) {
  			return fndObj.displayName;
  		}
  	}
  	
    return null;
  }

	$scope.pageLeft = function(relationInfo) {
		relationInfo.pageNumber--;
	}

	$scope.pageRight = function(relationInfo) {
		relationInfo.pageNumber++;
	}

	$scope.showItem = function(relationInfo, index) {
    	var pageNumber = relationInfo.pageNumber
    	var pageSize = relationInfo.pageSize;
    	var startIndex = pageNumber * pageSize;
    	var endIndex = startIndex + pageSize;

  		if(index >= startIndex && index <= endIndex)
          return 1;
      else return 0;

	}

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

	$scope.saveRecord = function(thisForm) {
		$scope.submitted = true;

		if (thisForm.userForm.$valid) {

			// Custom Validation if needed

			// for(var i=0; i<$scope.panelInfo.model.fields.length; i++) {
			// 	var field = $scope.panelInfo.model.fields[i];
			// 	var rec = $scope.paneRecord[field.schemaName];

			// 	if(field.controlType == 'money') {
			// 		var valid = /[0-9\.]/.test(rec);
			// 		if(!valid) {
			// 			$scope.inputError[field.schemaName].err = 'Amount of money is invalid, only numbers and decimals allowed.'
			// 		}
			// 	}
			// }

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

	$scope.viewUserDetail = function() {
		util.navigate($scope.panelInfo.userRoute, {id: $scope.recordItemId});
	}


	$scope.viewRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

	$scope.viewList = function() {
		util.navigate($scope.panelInfo.route);
	}

	$scope.addRelationship = function(relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: null, sourceObjectType: $scope.panelInfo.model.objectType, relationItemObjectType: relationItem.model.objectType});
	}

});