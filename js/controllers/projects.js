var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('projectsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vProjectsList, function(err, panelListData) {
  });


}]);