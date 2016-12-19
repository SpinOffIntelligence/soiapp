var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  
  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentList, function(err, panelListData) {
  });


}]);