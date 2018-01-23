var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userPatentsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','statsService','filterService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, statsService, filterService) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vPatentGrid',
      displayName: 'Patents',
  		model : modelService.models.patent,
      sortField: statsService.currentMode.value,
      sortOrder: 'desc',
      gridFields: [
        {
          name: 'Score',
          schemaName: '$score',
          fieldName: '$score',
          colSize: 1
        },            
        {
          name: 'Name',
          colSize: 4,
          schemaName: 'name',
          fieldName: 'name',
          route: 'patentDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          colSize: 3,
          route: null
        },
        {
          name: 'Application Date',
          schemaName: 'applicationdate',
          fieldName: 'applicationdate',
          colSize: 3,
          route: null
        }
      ]
  };

  $scope.objectType = null;
  if(util.defined($stateParams,"object")) {
    $scope.objectType = $scope.gridInfo.model;
    filterService.initService($scope.gridInfo.model, null, false, null, true);
    filterService.setFilters($stateParams.object, $stateParams.prop, $stateParams.value);
  }

  gridService.fetchRecords($scope.gridInfo, filterService.filters, null, function(err, data) {
    $scope.gridInfo.rawData = data.rawData;
    // $scope.gridOptions2 = {
    //   columnDefs: data.columnDefs,
    //   data: data.records
    // };  
  });
}]);