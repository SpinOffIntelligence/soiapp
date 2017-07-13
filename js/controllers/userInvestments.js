var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userInvestmentsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','filterService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, filterService) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'VInvestment',
      displayName: 'Investments',
  		model : modelService.models.investment,
      route: 'researchInstitutions',
      sortField: 'statsdegreecentrality',
      sortOrder: 'desc',
      gridFields: [
        {
          name: 'Score',
          schemaName: 'statsdegreecentrality',
          fieldName: 'statsdegreecentrality',
          colSize: 1
        },      
        {
          name: 'Investment',
          schemaName: 'name',
          fieldName: 'name',
          colSize: 2,
          route: 'investmentDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          colSize: 3,
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          schemaName: 'amount',
          colSize: 3,          
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          colSize: 3,
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

  gridService.fetchRecords($scope.gridInfo, filterService.filters, function(err, data) {
    $scope.gridInfo.rawData = data.rawData;
    // $scope.gridOptions1 = {
    //   columnDefs: data.columnDefs,
    //   data: data.records
    // };  
  });

}]);