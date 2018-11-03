var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userSpinOffsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','filterService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, filterService) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vSpinOffGrid',
      displayName: 'Spin Off Companies',
  		model : modelService.models.spinoff,
      route: 'spinoffs',
      sortField: 'statsdegreecentrality',
      sortOrder: 'desc',
      gridFields: [
        {
          name: 'Organiztion Name',
          schemaName: 'name',
          fieldName: 'name',
          colSize: 2,
          hasLogo: true,
          route: 'spinOffDetail'
        },
        {
          name: 'Headquarters Location',
          schemaName: 'city',
          fieldName: 'city',
          colSize: 1,
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Product Categories',
          schemaName: 'productcategory',
          fieldName: 'productcategory',
          colSize: 1,
          route: null
        },
        {
          name: 'Summary',
          schemaName: 'description',
          fieldName: 'description',
          colSize: 2,
          route: null
        },
        {
          name: 'Data Quality',
          schemaName: 'dataquailityscore',
          fieldName: 'dataquailityscore',
          colSize: 1,
          route: null
        },
        {
          name: 'Prestige Score',
          schemaName: 'prestigescore',
          fieldName: 'prestigescore',
          colSize: 1,
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
  });

}]);