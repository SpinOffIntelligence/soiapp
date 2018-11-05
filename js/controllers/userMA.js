var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userMAController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','filterService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, filterService) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'VAcquisition',
      displayName: 'Mergers & Acquisitions',
  		model : modelService.models.acquisition,
      route: 'ma',
      sortField: 'statsdegreecentrality',
      sortOrder: 'desc',
      gridFields: [
        {
          name: 'Merger & Acquisition',
          schemaName: 'name',
          fieldName: 'name',
          colSize: 2,
          route: 'maDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          colSize: 1,
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          schemaName: 'amount',
          colSize: 1,          
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
          name: 'Summary',
          schemaName: 'description',
          fieldName: 'description',
          colSize: 2,
          route: null
        },
        {
          name: 'Degree Centrality',
          schemaName: 'statsdegreecentrality',
          fieldName: 'statsdegreecentrality',
          colSize: 1
        },
        {
          name: 'Between Centrality',
          schemaName: 'statsbetweencentrality',
          fieldName: 'statsbetweencentrality',
          colSize: 1
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