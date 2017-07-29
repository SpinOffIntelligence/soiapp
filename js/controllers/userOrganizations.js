var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userOrganizationsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','filterService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, filterService) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vOrganiztionGrid',
      displayName: 'Organiztions',
  		model : modelService.models.organization,
      route: 'organizationDetail',
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
          route: 'organizationDetail'
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


  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  filterService.initService($scope.gridInfo.model, null, false, null, true);
  filterService.setFilters($stateParams.object, $stateParams.prop, $stateParams.value);

  gridService.fetchRecords($scope.gridInfo, filterService.filters, filterService.schemas, function(err, data) {
    $scope.gridInfo.rawData = data.rawData;
  });

}]);