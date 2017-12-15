var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('accountConnectRequestsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPersonConnectRequestList, function(err, panelListData) {
  });


}]);