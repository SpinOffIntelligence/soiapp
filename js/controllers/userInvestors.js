var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userInvestorsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vInvestmentGrid',
  		model : modelService.models.investment,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'investorsDetail'
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          schemaName: 'amount',
          fieldName: 'amount',
          route: null
        },
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