var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userCompaniesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.company,
      route: 'companies',
      sortField: 'name',
      sortOrder: 'asc',
      criteria: [{
        field: 'type',
        operator: 'equals',
        value: 'Spin-Off'
      }],
      gridFields: [
        {
          name: 'Company Name',
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