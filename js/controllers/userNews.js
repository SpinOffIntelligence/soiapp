var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userNewsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants','filterService',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants, filterService) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vNewsGrid',
      displayName: 'News',
  		model : modelService.models.media,
      route: 'media',
      sortField: 'date',
      sortOrder: 'desc',      
      gridFields: [
        {
          name: 'Title',
          schemaName: 'title',
          fieldName: 'title',
          colSize: 3,
          route: 'mediaDetail'
        },
        {
          name: 'Event Type',
          schemaName: 'eventtype',
          fieldName: 'eventtype',
          colSize: 3,
          route: null
        },
        {
          name: 'Date',
          schemaName: 'date',
          fieldName: 'date',
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