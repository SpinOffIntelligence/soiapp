var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('navController', ['util', '$scope', '$rootScope', '$state', '$stateParams','userSessionService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, userSessionService, modelService) {

  	$scope.util = util;
    $scope.userSession = userSessionService.userSession;
  	$scope.route = 'organizations';
    $scope.models = modelService.models;
  	//util.navigate($scope.route);

    $scope.logout = function() {
      $rootScope.$broadcast('loggedOut');     
    }

    $rootScope.$on('loggedIn', function(event, record) {
      $scope.userSession = userSessionService.userSession;
    });
    

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route)
  	}

  	$scope.adminView = function() {
  		util.navigate('organizations');
  		$rootScope.$broadcast('navAdminMode',true);
  	}

}]);