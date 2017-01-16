var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userInvestorsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

    $scope.util = util;

  	var gridInfo = {
  		name: 'vInvestmentGrid',
  		model : modelService.models.investmentfirm,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'investorsDetail'
        },
        {
          name: 'Industry / Sector',
          schemaName: 'industry',
          fieldName: 'industry',
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

  $scope.gotoPage = function(pageNum) {
    $scope.gridInfo.currentPage = pageNum;
    gridService.fetchRecords($scope.gridInfo, function(err, data) {
      $scope.rawData = data.rawData;
    });
  }

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.rawData = data.rawData;
    // $scope.gridOptions1 = {
    //   columnDefs: data.columnDefs,
    //   data: data.records
    // };  
  });

}]);