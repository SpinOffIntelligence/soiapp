var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('adminNavController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route);
  	}

  	$scope.userview = function() {
      util.navigate('userCompanies');
  		$rootScope.$broadcast('navAdminMode',false);
  	}

}]);