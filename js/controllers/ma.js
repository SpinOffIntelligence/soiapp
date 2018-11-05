var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('maController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {
  
  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vMAList, function(err, panelListData) {
  });


}]);