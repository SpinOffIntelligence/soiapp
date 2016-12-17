var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userPeopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vPeopleGrid',
  		model : modelService.models.people,
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'People Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'peopleDetail'
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        },
        {
          name: 'Primary Job',
          schemaName: null,
          fieldName: 'role',
          select: 'outE(EWorksfor).role AS role'
        },
        {
          name: 'Primary Company',
          schemaName: null,
          fieldName: 'company',
          select: "OUT('EWorksfor').name AS company"
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

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions2 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });
}]);