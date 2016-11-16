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

controllers.controller('panelItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams) {
	
	$scope.util = util;
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
				for(var propertyName in $scope.panelInfo.schema) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;
			}
		}		
	}
	init();

});

controllers.controller('panelFieldsCtrl', function ($scope, $rootScope, util, panelFieldsService) {
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
		var fnd = _.findWhere($scope.panelInfo.schema, {name: field.name});
		if(util.defined(fnd)) {
			return fnd.type;
		}
	}

	$scope.editRecord = function() {
		$scope.paneRecord.backup = jQuery.extend(true, {}, $scope.paneRecord);
		$scope.mode='edit';
	}

	$scope.saveRecord = function() {
		if($scope.mode == 'edit') {
			panelFieldsService.savePanelRecord($scope.panelInfo, $scope.paneRecord, function(err, response) {
				$scope.mode='view';
	  	});
	  } else {

	  }
	}

	$scope.cancelRecord = function() {
		$scope.paneRecord = jQuery.extend(true, {}, $scope.paneRecord.backup);
		$scope.mode='viewDetails';			
	}

	$scope.viewRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

	$scope.viewList = function() {
		util.navigate($scope.panelInfo.route);
	}


});