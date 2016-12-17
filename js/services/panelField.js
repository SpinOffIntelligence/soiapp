var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var panelFieldsService = {};

  panelFieldsService.companiesInfo = {
      name: 'vCompanyList',
      model : modelService.models.company,
      route: 'companies',
      userRoute: 'companyDetail',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };


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


      if(panelInfo.displayMode == 'grid') {
        if(!util.defined(panelInfo,"gridFields.length")) {
          alert('Error no gridFields defined!');
          callback(500,null);
          return;
        }
        var columnDefs = [];
        for(var i=0; i<panelInfo.gridFields.length; i++) {
          var gf = panelInfo.gridFields[i];
          var obj = {};
          obj.name = gf.name;
          if(util.defined(gf,"route")) {
            obj.cellTemplate = sprintf("<div style='padding:5px'><a ng-click=\"grid.appScope.goDetail('%s', row.entity.id)\">{{row.entity['Company Name']}}</a></div>", gf.route);
            //obj.cellTemplate = '<a ng-href="#" ng-click="grid.appScope.test()">{{ COL_FIELD }}</a>'
          } 
          columnDefs.push(obj);
        }
        panelFieldsService[panelName].panelInfo.gridInfo = {};
        panelFieldsService[panelName].panelInfo.gridInfo.columnDefs = columnDefs;

        var gridData = [];
        for(var i=0; i<data.length; i++) {
          var rec = data[i];
          var recObj = {
            id: rec['@rid']
          };
          for(j=0; j<panelInfo.gridFields.length; j++) {
            var gf = panelInfo.gridFields[j];
            if(util.defined(gf,"schemaName")) {
              if(util.defined(rec,gf.schemaName)) {
                recObj[gf.name] = rec[gf.schemaName]
              } else {
                recObj[gf.name] = '';
              }
            } else if(util.defined(gf,"formula.fields.length")) {
              var flds = [];
              for(var x=0; x<gf.formula.fields.length; x++) {
                var fld = gf.formula.fields[x];
                var obj = {};
                if(util.defined(rec,"fld"))
                  obj.value = rec[fld];
                else obj.value = '';
                flds.push(obj);
              }
              recObj[gf.name] = sprintf(gf.formula.pattern, {values: flds});

            }
          }
          gridData.push(recObj);
        }
        panelFieldsService[panelName].panelInfo.gridInfo.gridData = gridData;
      }
			$rootScope.$broadcast('fetchPanelRecords',panelName);
			callback(null,gridData);
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
