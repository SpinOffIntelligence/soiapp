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

  remoteDataService.getEdge = function(edgeObjectType, edgeRecordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      edgeRecordItemId: edgeRecordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.deleteEdge = function(recordId, callback) {
    var obj = {
      recordId: recordId
    };
    remoteDataService.apiCall('POST','/soi/deleteEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updateEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/updateEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/addEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }


  remoteDataService.getRecordDetails = function(objectType, recordId, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId
    };
    remoteDataService.apiCall('POST','/soi/getRecordDetails',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.fetchRecords = function(objectType, callback) {
    var obj = {
      objectType: objectType
    };
    remoteDataService.apiCall('POST','/soi/fetchRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }


  remoteDataService.fetchPanelRecords = function(panelInfo, callback) {
  	var obj = {
  		panelInfo: panelInfo
  	};
  	remoteDataService.apiCall('POST','/soi/fetchPanelRecords',null,obj, function(err, data) {
  		callback(err, data);
  	});
  }

  remoteDataService.deletePanelRecord = function(objectType, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/deletePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updatePanelRecord = function(objectType, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/updatePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addPanelRecord = function(objectType, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/addPanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }  
  

  return remoteDataService;

}]);

soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService',
  function($rootScope,util,remoteDataService){

	var panelFieldsService = {};

	panelFieldsService.fetchPanelRecords = function(panelInfo, callback) {
		remoteDataService.fetchPanelRecords(panelInfo, function(err, data) {
			var panelName = panelInfo.name;
			panelFieldsService[panelName] = {
        panelInfo: panelInfo
      };
      if(util.defined(data,"records"))
  		  panelFieldsService[panelName].panelInfo.records = data.records;

      if(util.defined(data,"schemas"))
        panelFieldsService[panelName].panelInfo.schemas = data.schemas;
			$rootScope.$broadcast('fetchPanelRecords',panelName);
			callback(null,data);
		});
	};

  panelFieldsService.deletePanelRecord = function(panelInfo, panelRecord, callback) {
    remoteDataService.deletePanelRecord(panelInfo.objectType, panelRecord, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.updatePanelRecord = function(panelInfo, panelRecord, callback) {
    remoteDataService.updatePanelRecord(panelInfo.objectType, panelRecord, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.addPanelRecord = function(panelInfo, panelRecord, callback) {
    remoteDataService.addPanelRecord(panelInfo.objectType, panelRecord, function(err, data) {
      callback(err, data);
    });
  };

  return panelFieldsService;
}]);
