var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('researchInstitutionController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  $rootScope.$broadcast('navAdminMode',true);

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vResearchInstitutionList, function(err, panelListData) {
  });


}]);