var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentFirmList, function(err, panelListData) {
  });


}]);