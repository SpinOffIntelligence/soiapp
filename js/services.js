angular.module('soiApp.services', []); //instantiates
var soiServices = angular.module('soiApp.services') //gets

soiServices.factory('navService', ['$http',
  function($http){

    var navService = {
      currentRoute: null,
    };
    return navService;
}]);

soiServices.factory('remoteDataService', ['$http','$rootScope','util',
  function($http, $rootScope,util){

  var remoteDataService = {};

	remoteDataService.apiCall = function(method, route, cacheKey, params, callback) {
      if (!util.defined(remoteDataService.data)) remoteDataService.data = {};
      if (util.defined(cacheKey) && util.defined(remoteDataService.data[cacheKey])) {
      	callback(null, remoteDataService.data[cacheKey]);
      } else {
          if (!util.defined(params)) params = {};
          return $http({
              url: route,
              method: method,
              data: params
          }).then(function(resp) {
              remoteDataService.data[cacheKey] = resp.data;
              callback(null, resp.data);
          }).catch(function(resp) {
          		callback(resp.status, null);
          });
      }
  };

  remoteDataService.fetchPanelRecords = function(fetchPanelFieldsParams, callback) {

  	var obj = {
  		fetchPanelFieldsParams: fetchPanelFieldsParams
  	};

  	remoteDataService.apiCall('POST','/soi/fetchRecords',null,obj, function(err, data) {
  		callback(err, data);
  	});
  }
  

	return remoteDataService;

}]);

soiServices.factory('panelFieldsService', ['$http','util','remoteDataService',
  function($http,util,remoteDataService){

	var panelFieldsService = {};

	panelFieldsService.fetchPanelRecords = function(fetchPanelFieldsParams, callback) {
		remoteDataService.fetchPanelRecords(fetchPanelFieldsParams, function(err, data) {
			callback(null,data);
		});
	};

  return panelFieldsService;
}]);
