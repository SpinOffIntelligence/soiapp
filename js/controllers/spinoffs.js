var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('spinoffsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vSpinOffList, function(err, panelListData) {
  });


}]);