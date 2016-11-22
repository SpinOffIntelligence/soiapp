var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('companiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vCompanyList',
  		model : modelService.models.company,
      route: 'companies',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };


  panelFieldsService.fetchPanelRecords(panelInfo, function(err, panelListData) {
  });


}]);