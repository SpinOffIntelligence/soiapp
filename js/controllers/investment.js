var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vInvestmentList',
  		model : modelService.models.investment,
      route: 'investment',
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