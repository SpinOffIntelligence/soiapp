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
          name: 'Score',
          schemaName: 'statsdegreecentrality',
          fieldName: 'statsdegreecentrality',
          colSize: 1
        },      
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
          colSize: 3,
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
          colSize: 3,
          route: null
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

  gridService.fetchRecords($scope.gridInfo, filterService.filters, null, function(err, data) {
    $scope.gridInfo.rawData = data.rawData;
  });

}]);