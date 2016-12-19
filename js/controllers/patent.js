var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('patentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPatentList, function(err, panelListData) {
  });


}]);