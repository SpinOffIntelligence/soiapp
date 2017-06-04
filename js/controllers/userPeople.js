var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userPeopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','statsService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, statsService) {

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

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions2 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords($scope.gridInfo, function(err, data) {
    $scope.gridInfo.rawData = data.rawData;
    // $scope.gridOptions2 = {
    //   columnDefs: data.columnDefs,
    //   data: data.records
    // };  
  });
}]);