var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('entrepreneurialResourcesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vEntrepreneurialResourcesList, function(err, panelListData) {
  });


}]);