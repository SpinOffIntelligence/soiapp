var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('acquisitionController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.vAcquisitionList, function(err, panelListData) {
  });

}]);