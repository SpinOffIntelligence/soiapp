'use strict';

angular.module('ErrorCatcher', [])
    .factory('$exceptionHandler', ['$injector', function ($injector) {
        return function errorCatcherHandler(exception, cause) {
            console.error(exception.stack);
        };
    }]);
	
/* App Module */
var myApp = angular.module('soiApp', ['ErrorCatcher','ui.router','soiApp.controllers','soiApp.services','soiApp.utilities','soiApp.modelService','ngSanitize','ui.select','ui.bootstrap','ngFileUpload','ui.grid']);

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
    $urlRouterProvider.otherwise('/companies');

    // states for my app
    $stateProvider    
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
    .state('companyDetail', {
        url: '/companyDetail/:id',
        templateUrl: "partials/companyDetail.html",
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
        url: '/peopleDetail/:id',
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
        url: '/patentDetail/:id',
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
	  .state('aquisitionsDetail', {
        url: '/aquisitionsDetail/:id',
        templateUrl: "partials/aquisitionsDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            remoteDataService.detailObjectType = 'VAcquisition';
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('universitiesDetail', {
        url: '/universitiesDetail/:id',
        templateUrl: "partials/universitiesDetail.html",
        controller: 'objectDetailController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            remoteDataService.detailObjectType = 'VUniversity';
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('fundingDetail', {
        url: '/fundingDetail/:id',
        templateUrl: "partials/fundingDetail.html",
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
	  .state('investorsDetail', {
        url: '/investorsDetail/:id',
        templateUrl: "partials/investorsDetail.html",
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
    .state('userCompanies', {
        url: '/userCompanies',
        templateUrl: "partials/userCompanies.html",
        controller: 'userCompaniesController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('userInvestors', {
        url: '/userInvestors',
        templateUrl: "partials/userInvestors.html",
        controller: 'userInvestorsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('userAquisitions', {
        url: '/userAquisitions',
        templateUrl: "partials/userAquisitions.html",
        controller: 'userAquisitionsController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	   .state('userFunding', {
        url: '/userFunding',
        templateUrl: "partials/userFunding.html",
        controller: 'userFundingController',
        resolve: {
          myVar: function(util, remoteDataService,$rootScope , $q){
            $rootScope.$broadcast('navAdminMode',false);
            var defer = $q.defer();
            remoteDataService.loadSchemas(defer);
            return defer.promise;            
          }
        }                
      })    
	  .state('userUniversities', {
        url: '/userUniversities',
        templateUrl: "partials/userUniversities.html",
        controller: 'userUniversitiesController',
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
        templateUrl: "partials/userPeople.html",
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
    .state('upload', {
        url: '/upload',
        templateUrl: "partials/upload.html",
        controller: 'uploadController'
      })    
    .state('companies', {
		    url: '/companies',
        templateUrl: "partials/companies.html",
        controller: 'companiesController',
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
    .state('university', {
        url: '/university',
        templateUrl: "partials/university.html",
        controller: 'universityController',
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
    .state('relatedcompany', {
        url: '/relatedcompany',
        templateUrl: "partials/relatedCompany.html",
        controller: 'relatedCompanyController',
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
    .state('acquisition', {
        url: '/acquisition',
        templateUrl: "partials/acquisition.html",
        controller: 'acquisitionController',
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
        url: '/edgeItem/:panelName/:recordItemId/:mode/:edgeObjectType/:edgeRecordItemId/:destObjectType',
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
