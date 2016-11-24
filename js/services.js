angular.module('soiApp.services', []); //instantiates
var soiServices = angular.module('soiApp.services') //gets

soiServices.factory('navService', ['$http',
  function($http){

    var navService = {
      currentRoute: null,
    };
    return navService;
}]);

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


  remoteDataService.loadSchemas = function(q, callback) {
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

soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var panelFieldsService = {};

  panelFieldsService.prepareInboudData = function(panelInfo, records) {
    var schema = modelService.schemas[panelInfo.model.objectType];

    var inRecords=[];
    for(j=0; j<records.length; j++) {
      var inData = {};
      var record = records[j];
      for(var propertyName in schema) {
        var schemaItem = schema[propertyName];
        var val = record[propertyName];
        if(util.defined(schemaItem)) {
          var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
          if(util.defined(modelItem,"controlType") && util.defined(record,propertyName)) {
            if(modelItem.controlType == 'multiselect') {

              var names = val.split(';');
              var inObj = [];
              for(var i=0; i<names.length; i++) {
                inObj.push({id: i, name: names[i]});
              }
              inData[propertyName] = inObj;
            } else {
              inData[propertyName] = val;
            }
          }
        }
      }
      if(util.defined(record,'id')) {
          inData['id'] = record['id'];
      }
      inRecords.push(inData);
    }
    return inRecords;
  }


  panelFieldsService.prepareOutboudData = function(panelInfo, panelRecord) {
    var schema = modelService.schemas[panelInfo.model.objectType];
    var outData = {};
    for(var propertyName in schema) {
      var schemaItem = schema[propertyName];
      if(util.defined(schemaItem)) {
        var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
        if(util.defined(modelItem,"controlType") && util.defined(panelRecord,propertyName)) {
          if(modelItem.controlType == 'multiselect') {

            var names = _.pluck(panelRecord[propertyName], 'name');
            var outText = '';
            if(util.defined(names,'length')) {
              for(var i=0; i<names.length; i++) {
                if(i == names.length-1)
                  outText += names[i];
                else outText += names[i] + ';';
              }
              outData[propertyName] = outText;
            }
          } else {
            outData[propertyName] = panelRecord[propertyName];
          }
        }
      }
    }
    if(util.defined(panelRecord,'id')) {
        outData['id'] = panelRecord['id'];
    }
    return outData;
  }

	panelFieldsService.fetchPanelRecords = function(panelInfo, callback) {
		remoteDataService.fetchPanelRecords(panelInfo, function(err, data) {
			var panelName = panelInfo.name;
			panelFieldsService[panelName] = {
        panelInfo: panelInfo
      };
      if(util.defined(data,"length"))
  		  panelFieldsService[panelName].panelInfo.records = panelFieldsService.prepareInboudData(panelInfo, data);
			$rootScope.$broadcast('fetchPanelRecords',panelName);
			callback(null,data);
		});
	};

  panelFieldsService.deletePanelRecord = function(objectType, recordId, callback) {
    remoteDataService.deletePanelRecord(objectType, recordId, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.updatePanelRecord = function(panelInfo, recordId, panelRecord, callback) {

    var outRecord = panelFieldsService.prepareOutboudData(panelInfo, panelRecord);

    remoteDataService.updatePanelRecord(panelInfo.model.objectType, recordId, outRecord, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.addPanelRecord = function(objectType, panelRecord, callback) {
    remoteDataService.addPanelRecord(objectType, panelRecord, function(err, data) {
      callback(err, data);
    });
  };

  return panelFieldsService;
}]);
