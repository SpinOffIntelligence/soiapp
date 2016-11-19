'use strict';

angular.module('ErrorCatcher', [])
    .factory('$exceptionHandler', ['$injector', function ($injector) {
        return function errorCatcherHandler(exception, cause) {
            console.error(exception.stack);
        };
    }]);
	
/* App Module */
var myApp = angular.module('soiApp', ['ErrorCatcher','ui.router','soiApp.controllers','soiApp.services','soiApp.utilities','soiApp.modelService','ngSanitize','ui.bootstrap']);

// myApp.directive('datepicker', [
//   function() {
//     return {
//       require: '?ngModel',
//       link: function(scope, element, attributes, controller) {
//         controller.$modelValue = 'bar';
//         console.log('controller.$modelValue is: ', controller.$modelValue);
//       }
//     };
//   }
// ]);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
    // Activate hashbang
    // $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/companies');

    // states for my app
    $stateProvider
    .state('companies', {
		    url: '/companies',
        templateUrl: "partials/companies.html",
        controller: 'companiesController',
        resolve: {
          myVar: function(util, remoteDataService, $q){
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })
    .state('people', {
        url: '/people',
        templateUrl: "partials/people.html",
        controller: 'peopleController',
        resolve: {
          myVar: function(util, remoteDataService, $q){
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })
    .state('panelItem', {
        url: '/panelItem/:panelName/:recordItemId/:mode',
        templateUrl: "partials/panel.fields.item.html",
        controller: 'panelItemCtrl',
        resolve: {
          myVar: function(util){
            //code to be executed before route change goes here
            //util.setDocumentTitle("DIRECTORY");
          }
        }
      })    
    .state('edgeItem', {
        url: '/edgeItem/:panelName/:recordItemId/:mode/:edgeObjectType/:edgeRecordItemId/:destObjectType',
        templateUrl: "partials/panel.fields.edge.html",
        controller: 'edgeItemCtrl',
        resolve: {
          myVar: function(util){
            //code to be executed before route change goes here
            //util.setDocumentTitle("DIRECTORY");
          }
        }
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