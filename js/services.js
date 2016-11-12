'use strict';

/* Services */

var soiServices = angular.module('soiServices', []);

soiServices.factory('soiDirectoryService', ['$http',
  function($http){

    var soiDirectoryService = {
      searchType: null,
      searchText: null,
      industries: null
    };

    return soiDirectoryService;

}]);