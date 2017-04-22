var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('navController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'organizations';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route)
  	}

  	$scope.adminView = function() {
  		util.navigate('organizations');
  		$rootScope.$broadcast('navAdminMode',true);
  	}

}]);