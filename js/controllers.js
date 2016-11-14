angular.module('soiApp.controllers', []); //instantiates
var controllers = angular.module('soiApp.controllers')      //gets

controllers.controller('mainCtrl', function ($scope, $rootScope, util) {
	$scope.templates =
    [{ name: 'home.html', url: 'home.html'},
     { name: 'template2.html', url: 'template2.html'}];
	$scope.template = $scope.templates[0];	
});

controllers.controller('panelListCtrl', function ($scope, $rootScope, util, panelFieldsService) {
	//$scope.panelName - Passed in by ngRepeat;
	if(util.defined($scope,"panelName")) {
		console.log($scope.panelName);
	}
	$scope.recordCount = 0;

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope,"panelInfo.records.length")) {
				$scope.recordCount = $scope.panelInfo.records.length;
			}
		}		
	}

	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.getAddButtonText = function() {
		if(util.defined($scope,"panelInfo.addButtonText"))
			return $scope.panelInfo.addButtonText
		else return 'Add';
	}

	$scope.addRecord = function() {
	}
});

controllers.controller('panelFieldsCtrl', function ($scope, $rootScope, util, panelFieldsService) {
	//$scope.panelName - Passed in by ngRepeat;
	$scope.mode = 'view';
	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 1) {
				$scope.panelName = strs[0];
				$scope.recordItemId = strs[1];
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

	if(util.defined($scope,"panelName") && util.defined($scope,"recordItemId")) {
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

	$scope.getEditButtonName = function() {
		if(util.defined($scope,"panelInfo.editButtonText"))
			return $scope.panelInfo.editButtonText
		else return 'Edit';
	}

	$scope.getDeleteButtonName = function() {
		if(util.defined($scope,"panelInfo.deleteButtonText"))
			return $scope.panelInfo.deleteButtonText
		else return 'Delete';
	}

	$scope.editRecord = function() {
		$scope.paneRecord.backup = jQuery.extend(true, {}, $scope.paneRecord);
		$scope.mode='edit';
	}

	$scope.saveRecord = function() {
		$scope.mode='view';
	}

	$scope.cancelRecord = function() {
		$scope.paneRecord = jQuery.extend(true, {}, $scope.paneRecord.backup);
		$scope.mode='view';
	}


});
