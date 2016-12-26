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

  remoteDataService.searchRecords = function(objectTypes, terms, callback) {
    var obj = {
      objectType: objectTypes,
      terms: terms
    };
    remoteDataService.apiCall('POST','/soi/searchRecords',null,obj, function(err, data) {
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

  remoteDataService.removeImage = function(objectType, recordId, field, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      field: field
    };
    remoteDataService.apiCall('POST','/soi/removeImage',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.fetchGridRecords = function(gridInfo, callback) {
    var obj = {
      objectType: gridInfo.model.objectType,
      gridFields: gridInfo.gridFields
    };
    remoteDataService.apiCall('POST','/soi/fetchGridRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[gridInfo.model.objectType]}));
  }

  remoteDataService.getRelationshipDetails = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationshipDetails',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getRelationship = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationship',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }


  remoteDataService.getEdge = function(edgeObjectType, edgeRecordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      edgeRecordItemId: edgeRecordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdge',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getEdgeBySource = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdgeBySource',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
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


  remoteDataService.getRecordDetails = function(objectType, recordId, depth, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      depth: depth
    };
    remoteDataService.apiCall('POST','/soi/getRecordDetails',null,obj, function(err, data) {
      var returnObj={};
      for(var propertyName in data) {
        returnObj[propertyName] =  remoteDataService.prepareInboundDataArray(this.schema, data[propertyName]);
      }
      callback(err, returnObj);
    }.bind({schema: modelService.schemas[objectType]}));
  }



  remoteDataService.fetchRecordByProp = function(objectType, prop, value, callback) {
    var obj = {
      objectType: objectType,
      prop: prop,
      value: value,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/fetchRecordByProp',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }

  remoteDataService.fetchRecords = function(objectType, callback) {
    var obj = {
      objectType: objectType
    };
    remoteDataService.apiCall('POST','/soi/fetchRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }


  remoteDataService.fetchPanelRecords = function(panelInfo, callback) {
  	var obj = {
  		objectType: panelInfo.model.objectType,
      schema: modelService.schemas[panelInfo.model.objectType]
  	};

  	remoteDataService.apiCall('POST','/soi/fetchPanelRecords',null,obj, function(err, data) {
      data = remoteDataService.prepareInboundDataArray(this.schema, data);
  		callback(err, data);
  	}.bind( {schema: modelService.schemas[panelInfo.model.objectType]}));
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
  
  remoteDataService.prepareInboundDataArray = function(schema, objArray) {
    var returnArray=[];
    for(var i=0; i<objArray.length; i++) {
      var valObj = remoteDataService.prepareInboundData(schema, objArray[i]);
      returnArray.push(valObj);
    }
    return returnArray;
  }

  remoteDataService.prepareInboundData = function(schema, obj) {
    var retObj = {};
    for(var propertyName in obj) {
      var val = null;
      if(util.defined(obj,propertyName)) {
        val = obj[propertyName];
        var schemaInfo = schema[propertyName];
        if(util.defined(schemaInfo,"type") && schemaInfo.type == 'date') {
          var x = moment(val);
          val = new Date(x.year(), x.month(), x.date());
        }
      }
      retObj[propertyName] = val;
    }
    return retObj;    
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

  remoteDataService.exportRecords = function(objectType, criteria, callback) {
    var obj = {
      objectType: objectType,
      criteria: criteria,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/exportRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  return remoteDataService;

}]);

