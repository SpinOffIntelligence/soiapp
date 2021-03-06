var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userInvestmentFirmsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','filterService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, filterService) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vInvestmentFirmGrid',
      displayName: 'Investment Firms',
  		model : modelService.models.investmentfirm,
      route: 'investmentFirms',
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
          name: 'Investment Firm Name',
          schemaName: 'name',
          fieldName: 'name',
          colSize: 2,
          route: 'investmentFirmDetail'
        },
        {
          name: 'Industry / Sector',
          schemaName: 'industry',
          fieldName: 'industry',
          colSize: 3,
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          colSize: 3,
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Summary',
          schemaName: 'description',
          fieldName: 'description',
          colSize: 3,
          route: null
        }
      ]
  };

  $scope.objectType = null;
  if(util.defined($stateParams,"object")) {
    $scope.objectType = $scope.gridInfo.model;
    filterService.initService($scope.gridInfo.model, null, false, null, true);
    filterService.setFilters($stateParams.object, $stateParams.prop, $stateParams.value);
  }

  gridService.fetchRecords($scope.gridInfo, filterService.filters, null, function(err, data) {
    $scope.gridInfo.rawData = data.rawData;
    // $scope.gridOptions1 = {
    //   columnDefs: data.columnDefs,
    //   data: data.records
    // };  
  });

}]);