var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userUniversitiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

    $scope.util = util;

  	$scope.gridInfo = {
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

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords($scope.gridInfo, function(err, data) {
    $scope.gridInfo.rawData = data.rawData;
    // $scope.gridOptions1 = {
    //   columnDefs: data.columnDefs,
    //   data: data.records
    // };  
  });

}]);