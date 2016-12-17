var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('remoteDataService', ['$http','$rootScope','util','modelService',
  function($http, $rootScope,util,modelService){

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

  remoteDataService.exportRecords = function(objectType, criteria, callback) {
    var obj = {
      objectType: objectType,
      criteria: criteria
    };
    remoteDataService.apiCall('POST','/soi/exportRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.deleteLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/deleteLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getAllLogInfo = function(callback) {
    var obj = {
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.loadSchemas = function(q, callback) {

    if(util.propLength(modelService.schemas) == 0) {
      var schemas = [];
      for(var propertyName in modelService.models) {
        var obj = {
          objectType: modelService.models[propertyName].objectType
        }
        schemas.push(obj);
      }
      var obj = {
        schemas: schemas
      }
      remoteDataService.apiCall('POST','/soi/getSchemas',null,obj, function(err, data) {
          modelService.schemas = data;
          q.resolve();
          if(util.defined(callback)) {
            callback(null, null);
          }
      });      
    } else {
      q.resolve();
      if(util.defined(callback)) {
        callback(null, null);
      }
    }
  }

  remoteDataService.getRelationshipDetails = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationshipDetails',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(data));
    });
  }

  remoteDataService.getRelationship = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationship',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(data));
    });
  }


  remoteDataService.getEdge = function(edgeObjectType, edgeRecordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      edgeRecordItemId: edgeRecordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdge',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(data));
    });
  }

  remoteDataService.getEdgeBySource = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdgeBySource',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(data));
    });
  }

  remoteDataService.deleteEdge = function(objectType, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      sourceId: sourceId,
      targetId: targetId
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

      var returnObj={};
      for(var propertyName in data) {
        returnObj[propertyName] =  remoteDataService.prepareInboundDataArray(data[propertyName]);
      }
      callback(err, returnObj);
    });
  }



  remoteDataService.fetchRecordByProp = function(objectType, prop, value, callback) {
    var obj = {
      objectType: objectType,
      prop: prop,
      value: value
    };
    remoteDataService.apiCall('POST','/soi/fetchRecordByProp',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(data));
    });
  }

  remoteDataService.fetchRecords = function(objectType, callback) {
    var obj = {
      objectType: objectType
    };
    remoteDataService.apiCall('POST','/soi/fetchRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(data));
    });
  }


  remoteDataService.fetchPanelRecords = function(panelInfo, callback) {
  	var obj = {
  		objectType: panelInfo.model.objectType
  	};
  	remoteDataService.apiCall('POST','/soi/fetchPanelRecords',null,obj, function(err, data) {
      data = remoteDataService.prepareInboundDataArray(data);
  		callback(err, data);
  	});
  }

  remoteDataService.deletePanelRecord = function(objectType, recordId, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId
    };
    remoteDataService.apiCall('POST','/soi/deletePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updatePanelRecord = function(objectType, recordId, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
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
  
  remoteDataService.prepareInboundDataArray = function(objArray) {
    var returnArray=[];
    for(var i=0; i<objArray.length; i++) {
      var valObj = remoteDataService.prepareInboundData(objArray[i]);
      returnArray.push(valObj);
    }
    return returnArray;
  }

  remoteDataService.prepareInboundData = function(obj) {
    for(var propertyName in obj) {
      if(util.defined(obj,propertyName)) {
        var val = obj[propertyName];
        if(typeof val == 'string' && val.indexOf('.000Z') > -1) {
          var x = moment(val);
          val = new Date(x.year(), x.month(), x.day());
        }
      }
      obj[propertyName] = val;
    }
    return obj;    
  }


  return remoteDataService;

}]);

