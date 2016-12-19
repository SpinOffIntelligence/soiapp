var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userAquisitionsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.acquisition,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Acquisition',
          schemaName: 'name',
          fieldName: 'name',
          route: 'aquisitionsDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
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
          name: 'Date',
          fieldName: 'closedate',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {
                name: 'closedate',
                formatMethod:  util.formatDate,
                formatMethodParam: "MMM, YYYY"              }
              
            ]
          }
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

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);