var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('usersController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vUsersList, function(err, panelListData) {
  });


}]);