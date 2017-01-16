var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userUniversitiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

    $scope.util = util;

  	var gridInfo = {
  		name: 'vUniversityGrid',
  		model : modelService.models.university,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'University Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'universitiesDetail'
        },
        {
          name: 'Year Founded',
          schemaName: 'yearfounded',
          fieldName: 'yearfounded',
          route: null
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        }
      ]
  };

  $scope.gotoPage = function(pageNum) {
    $scope.gridInfo.currentPage = pageNum;
    gridService.fetchRecords($scope.gridInfo, function(err, data) {
      $scope.rawData = data.rawData;
    });
  }

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.rawData = data.rawData;
    // $scope.gridOptions1 = {
    //   columnDefs: data.columnDefs,
    //   data: data.records
    // };  
  });

}]);