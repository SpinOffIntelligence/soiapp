var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('peopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPeopleList, function(err, panelListData) {
  });


}]);