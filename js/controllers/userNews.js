var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userNewsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

    $scope.util = util;

  	$scope.gridInfo = {
  		name: 'vNewsGrid',
  		model : modelService.models.media,
      route: 'media',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Title',
          schemaName: 'title',
          fieldName: 'title',
          route: 'mediaDetail'
        },
        {
          name: 'Event Type',
          schemaName: 'eventtype',
          fieldName: 'eventtype',
          route: null
        },
        {
          name: 'Date',
          fieldName: 'date',
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