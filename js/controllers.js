angular.module('soiApp.controllers', []); //instantiates
var controllers = angular.module('soiApp.controllers')      //gets

controllers.controller('mainCtrl', function ($scope, $rootScope, util) {
	$scope.templates =
    [{ name: 'home.html', url: 'home.html'},
     { name: 'template2.html', url: 'template2.html'}];
	$scope.template = $scope.templates[0];	
});


