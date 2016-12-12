var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userCompaniesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, uiGridConstants) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.company,
      route: 'companies',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete',
      displayMode: 'grid',
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          route: 'companyDetail'
        },
        {
          name: 'Product Categories',
          schemaName: 'productcategory',
          route: null
        },
        {
          name: 'Headquarters Location',
          schemaName: null,
          name: 'location',
          formula: {
            pattern : '%(values[0].value)s, %(values[1].value)s',
            fields: [
              'city',
              'country'
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, params);
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  panelFieldsService.fetchPanelRecords(panelInfo, function(err, panelListData) {
    $scope.myData = panelFieldsService[panelInfo.name].panelInfo.gridInfo.gridData;
    $scope.gridOptions1 = {
      columnDefs: panelFieldsService[panelInfo.name].panelInfo.gridInfo.columnDefs,
      data: panelFieldsService[panelInfo.name].panelInfo.gridInfo.gridData
    };  
  });
}]);