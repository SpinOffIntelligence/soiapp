var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userPeopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','statsService','filterService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, statsService, filterService) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vPeopleGrid',
      displayName: 'People',
  		model : modelService.models.people,
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
          name: 'People Name',
          colSize: 2,
          schemaName: 'name',
          fieldName: 'name',
          route: 'peopleDetail'
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          colSize: 3,
          route: null
        },
        {
          name: 'Primary Job',
          schemaName: null,
          fieldName: 'role',
          colSize: 3,
          select: 'outE(EWorksfor).role AS role'
        },
        {
          name: 'Primary Organization',
          schemaName: null,
          fieldName: 'organization',
          colSize: 3,
          select: "OUT('EWorksfor').name AS organization"
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