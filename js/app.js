'use strict';

angular.module('ErrorCatcher', [])
    .factory('$exceptionHandler', ['$injector', function ($injector) {
        return function errorCatcherHandler(exception, cause) {
            console.error(exception.stack);
        };
    }]);
	
/* App Module */
var myApp = angular.module('soiApp', ['colorpicker.module','ErrorCatcher','ui.router','soiApp.controllers','soiApp.services','soiApp.utilities','soiApp.modelService','ngSanitize','ui.select','ui.bootstrap','ngFileUpload','ui.grid','angularModalService']);

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

myApp.filter('slice', function() {
  return function(arr, start, end) {
    return (arr || []).slice(start, end);
  };
});

myApp.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
    // Activate hashbang
    // $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/login');

    // states for my app
    $stateProvider    
    .state('login', {
        url: '/login',
        templateUrl: "partials/login.html",
        controller: 'loginController'
      })        
    .state('register', {
        url: '/register',
        templateUrl: "partials/register.html",
        controller: 'registerController'
      })        
    .state('forgot', {
        url: '/forgot',
        templateUrl: "partials/forgot.html",
        controller: 'forgotController'
      })        
    .state('profile', {
        url: '/profile',
        templateUrl: "partials/profile.html",
        controller: 'profileController'
      })        
    .state('uploadImage', {
        url: '/uploadImage/:objectType/:id/:logoField',
        templateUrl: "partials/uploadImage.html",
        controller: 'uploadImageController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })        
    .state('vis', {
        url: '/vis/:id',
        templateUrl: "partials/vis.html",
        controller: 'visController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })        
    $stateProvider    
    .state('search', {
        url: '/search/:term/:object',
        templateUrl: "partials/search.html",
        controller: 'searchController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })       
    .state('userNetwork', {
        url: '/userNetwork/:id',
        templateUrl: "partials/userNetwork.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.detailObjectType = 'VCompany';
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })        
    .state('spinOffDetail', {
        url: '/spinOffDetail/:id/:mode',
        templateUrl: "partials/spinOffDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.detailObjectType = 'VSpinOff';
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })        
    .state('entrepreneurialResourceDetail', {
        url: '/entrepreneurialResourceDetail/:id/:mode',
        templateUrl: "partials/entrepreneurialResourceDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.detailObjectType = 'VEntrepreneurialResource';
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })        
    .state('organizationDetail', {
        url: '/organizationDetail/:id/:mode',
        templateUrl: "partials/organizationDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.detailObjectType = 'VCompany';
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })        
    .state('peopleDetail', {
        url: '/peopleDetail/:id/:mode',
        templateUrl: "partials/peopleDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.detailObjectType = 'VPerson';
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })        
    .state('patentDetail', {
        url: '/patentDetail/:id/:mode',
        templateUrl: "partials/patentDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            remoteDataService.detailObjectType = 'VPatent';
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('mediaDetail', {
        url: '/mediaDetail/:id/:mode',
        templateUrl: "partials/mediaDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            remoteDataService.detailObjectType = 'VMedia';
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('researchInstitutionsDetail', {
        url: '/researchInstitutionsDetail/:id/:mode',
        templateUrl: "partials/researchInstitutionsDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            remoteDataService.detailObjectType = 'VResearchInstitution';
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('investmentDetail', {
        url: '/investmentDetail/:id/:mode',
        templateUrl: "partials/investmentDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            remoteDataService.detailObjectType = 'VInvestment';
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('investmentFirmDetail', {
        url: '/investmentFirmDetail/:id/:mode',
        templateUrl: "partials/investmentFirmDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            remoteDataService.detailObjectType = 'VInvestmentFirm';
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('userSpinOffs', {
        url: '/userSpinOffs',
        templateUrl: "partials/userGridList.html",
        controller: 'userSpinOffsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('userSpinOffsFilter', {
        url: '/userSpinOffs/:object/:prop/:value',
        templateUrl: "partials/userGridList.html",
        controller: 'userSpinOffsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('userOrganizationsFilter', {
        url: '/userOrganizations/:object/:prop/:value',
        templateUrl: "partials/userGridList.html",
        controller: 'userOrganizationsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('userOrganizations', {
        url: '/userOrganizations',
        templateUrl: "partials/userGridList.html",
        controller: 'userOrganizationsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('userInvestmentFirms', {
        url: '/userInvestmentFirms',
        templateUrl: "partials/userGridList.html",
        controller: 'userInvestmentFirmsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('userInvestmentFirmsFilter', {
        url: '/userInvestmentFirms/:object/:prop/:value',
        templateUrl: "partials/userGridList.html",
        controller: 'userInvestmentFirmsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('userNews', {
        url: '/userNews',
        templateUrl: "partials/userGridList.html",
        controller: 'userNewsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('userNewsFilter', {
        url: '/userNews/:object/:prop/:value',
        templateUrl: "partials/userGridList.html",
        controller: 'userNewsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('userEntrepreneurialResources', {
        url: '/userEntrepreneurialResources',
        templateUrl: "partials/userGridList.html",
        controller: 'userEntrepreneurialResourcesController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('userEntrepreneurialResourcesFilter', {
        url: '/userEntrepreneurialResources/:object/:prop/:value',
        templateUrl: "partials/userGridList.html",
        controller: 'userEntrepreneurialResourcesController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
     .state('userInvestment', {
        url: '/userInvestment',
        templateUrl: "partials/userGridList.html",
        controller: 'userInvestmentsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	   .state('userInvestmentFilter', {
        url: '/userInvestment/:object/:prop/:value',
        templateUrl: "partials/userGridList.html",
        controller: 'userInvestmentsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('userResearchInstitutions', {
        url: '/userResearchInstitutions',
        templateUrl: "partials/userGridList.html",
        controller: 'userResearchInstitutionsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('userResearchInstitutionsFilter', {
        url: '/userResearchInstitutions/:object/:prop/:value',
        templateUrl: "partials/userGridList.html",
        controller: 'userResearchInstitutionsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('userPeople', {
        url: '/userPeople',
        templateUrl: "partials/userGridList.html",
        controller: 'userPeopleController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })
    .state('userPeopleFilter', {
        url: '/userPeople/:object/:prop/:value',
        templateUrl: "partials/userGridList.html",
        controller: 'userPeopleController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })
    .state('picklists', {
        url: '/picklists',
        templateUrl: "partials/picklists.html",
        controller: 'picklistsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('upload', {
        url: '/upload',
        templateUrl: "partials/upload.html",
        controller: 'uploadController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
    .state('spinoffs', {
		    url: '/spinoffs',
        templateUrl: "partials/spinoffs.html",
        controller: 'spinoffsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })
    .state('investmentfirms', {
        url: '/investmentfirms',
        templateUrl: "partials/investmentFirms.html",
        controller: 'investmentFirmsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })
    .state('organizations', {
        url: '/organizations',
        templateUrl: "partials/organizations.html",
        controller: 'organizationsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
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
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })
    .state('researchInstitution', {
        url: '/researchInstitution',
        templateUrl: "partials/researchInstitution.html",
        controller: 'researchInstitutionController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })
    .state('patent', {
        url: '/patent',
        templateUrl: "partials/patent.html",
        controller: 'patentController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })
    .state('investmentfirm', {
        url: '/investmentfirm',
        templateUrl: "partials/investmentFirm.html",
        controller: 'investmentFirmController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })
    .state('investment', {
        url: '/investment',
        templateUrl: "partials/investment.html",
        controller: 'investmentController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })
    .state('media', {
        url: '/media',
        templateUrl: "partials/media.html",
        controller: 'mediaController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })
    .state('entrepreneurialResources', {
        url: '/entrepreneurialResources',
        templateUrl: "partials/entrepreneurialResources.html",
        controller: 'entrepreneurialResourcesController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
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
          myVar: function(util, remoteDataService, $rootScope, $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })    
    .state('edgeItem', {
        url: '/edgeItem/:panelName/:recordItemId/:mode/:edgeObjectType/:edgeRecordItemId/:sourceObjectType/:relationItemObjectType',
        templateUrl: "partials/panel.fields.edge.html",
        controller: 'edgeItemCtrl',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })    
	  .state('home', {
        url: '/home',
        templateUrl: "partials/home.html",
        controller: 'SOIMainController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',true);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }        
      })	  
});
