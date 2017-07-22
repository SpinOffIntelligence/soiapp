var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userEntrepreneurialResourcesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','filterService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, filterService) {

    $scope.util = util;

    $scope.gridInfo = {
      name: 'vEntrepreneurialResourcesGrid',
      displayName: 'Entrepreneurial Resources',
      model : modelService.models.entrepreneurialresources,
      route: 'entrepreneurialresource',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Score',
          schemaName: 'statsdegreecentrality',
          fieldName: 'statsdegreecentrality',
          colSize: 1
        },      
        {
          name: 'Name',
          schemaName: 'name',
          fieldName: 'name',
          colSize: 3,
          route: 'entrepreneurialResourceDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          colSize: 4,
          route: null
        },
        {
          name: 'Services',
          schemaName: 'services',
          fieldName: 'services',
          colSize: 4,
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

  gridService.fetchRecords($scope.gridInfo, filterService.filters, null, function(err, data) {
    $scope.gridInfo.rawData = data.rawData;
    // $scope.gridOptions1 = {
    //   columnDefs: data.columnDefs,
    //   data: data.records
    // };  
  });

}]);