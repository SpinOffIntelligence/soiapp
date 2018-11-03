var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userResearchInstitutionsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','filterService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, filterService) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vResearchInstitutionGrid',
      displayName: 'Research Institutions',
  		model : modelService.models.researchInstitution,
      route: 'researchInstitutions',
      sortField: 'statsdegreecentrality',
      sortOrder: 'desc',
      gridFields: [
        {
          name: 'Research Institution Name',
          schemaName: 'name',
          fieldName: 'name',
          colSize: 2,
          route: 'researchInstitutionsDetail'
        },
        {
          name: 'Year Founded',
          schemaName: 'yearfounded',
          fieldName: 'yearfounded',
          colSize: 1,
          route: null
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          colSize: 1,
          route: null
        },
        {
          name: 'Summary',
          schemaName: 'description',
          fieldName: 'description',
          colSize: 1,
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