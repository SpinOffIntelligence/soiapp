soiControllers.controller('companiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, common, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route)
  	}

}]);