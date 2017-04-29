var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userEntrepreneurialResourcesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

    $scope.util = util;

    $scope.gridInfo = {
      name: 'vEntrepreneurialResourcesGrid',
      model : modelService.models.entrepreneurialresources,
      route: 'entrepreneurialresource',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'entrepreneurialResourceDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Services',
          fieldName: 'services',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords($scope.gridInfo, function(err, data) {
    $scope.gridInfo.rawData = data.rawData;
    // $scope.gridOptions1 = {
    //   columnDefs: data.columnDefs,
    //   data: data.records
    // };  
  });

}]);