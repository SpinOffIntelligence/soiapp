var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('mediaController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vMediaList, function(err, panelListData) {
  });


}]);