var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userInvestmentFirmsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vInvestmentFirmGrid',
  		model : modelService.models.investmentfirm,
      route: 'investmentFirms',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Investment Firm Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'investmentFirmDetail'
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