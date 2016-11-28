var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vInvestmentFirmList',
  		model : modelService.models.investmentfirm,
      route: 'investmentfirm',
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