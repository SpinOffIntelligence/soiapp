var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userSpinOffsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vSpinOffGrid',
  		model : modelService.models.spinoff,
      route: 'spinoffs',
      sortField: 'name',
      sortOrder: 'asc',
      gridFields: [
        {
          name: 'Organiztion Name',
          fieldName: 'name',
          schemaName: 'name'
        },
        {
          name: 'Product Categories',
          schemaName: 'productcategory',
          fieldName: 'productcategory',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
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
    //   data: data.records,
    //   rowHeight:'auto'
    // };  
  });

}]);