var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('navController', ['util', '$scope', '$rootScope', '$state', '$stateParams','remoteDataService',
  function (util, $scope, $rootScope, $state, $stateParams, remoteDataService) {

  	$scope.util = util;
    $scope.userSession = remoteDataService.userSession;
  	$scope.route = 'organizations';
  	//util.navigate($scope.route);

    $scope.logout = function() {
      $rootScope.$broadcast('loggedOut');     
    }

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route)
  	}

  	$scope.adminView = function() {
  		util.navigate('organizations');
  		$rootScope.$broadcast('navAdminMode',true);
  	}

}]);