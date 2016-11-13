'use strict';

angular.module('ErrorCatcher', [])
    .factory('$exceptionHandler', ['$injector', function ($injector) {
        return function errorCatcherHandler(exception, cause) {
            console.error(exception.stack);
        };
    }]);
	
/* App Module */
var myApp = angular.module('soiApp', ['ErrorCatcher','ui.router','soiApp.controllers','soiApp.services','soiApp.utilities','ngSanitize']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
    // Activate hashbang
    // $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/companies');

    // states for my app
    $stateProvider
    .state('companies', {
		    url: '/companies',
        templateUrl: "partials/companies.html",
        controller: 'companiesController'
      })
    .state('people', {
        url: '/people',
        templateUrl: "partials/people.html"
      })
	  .state('home', {
        url: '/home',
        templateUrl: "partials/home.html",
        controller: 'SOIMainController',
        resolve: {
          myVar: function(util){
            //code to be executed before route change goes here
            //util.setDocumentTitle("DIRECTORY");
          }
        }
      })	  
});