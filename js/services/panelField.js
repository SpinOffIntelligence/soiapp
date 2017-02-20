var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var panelFieldsService = {
    panelInfo: {},
    page: 0,
    pageSize: 10
  };

  panelFieldsService.panelInfo.vSpinOffList = {
      name: 'vSpinOffList',
      model : modelService.models.spinoff,
      route: 'spinoffs',
      userRoute: 'spinOffDetail',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vCompanyList = {
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

  panelFieldsService.panelInfo.vUniversityList = {
      name: 'vUniversityList',
      model : modelService.models.university,
      route: 'university',
      userRoute: 'universitiesDetail',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPeopleList = {
      name: 'vPeopleList',
      model: modelService.models.people,
      route: 'people',
      userRoute: 'peopleDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentFirmList = {
      name: 'vInvestmentFirmList',
      model : modelService.models.investmentfirm,
      route: 'investmentfirm',
      userRoute: 'investorsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentList = {
      name: 'vInvestmentList',
      model : modelService.models.investment,
      route: 'investment',
      userRoute: 'fundingDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vAcquisitionList = {
      name: 'vAcquisitionList',
      model : modelService.models.acquisition,
      route: 'acquisition',
      userRoute: 'aquisitionsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPatentList = {
      name: 'vPatentList',
      model : modelService.models.patent,
      route: 'patent',
      userRoute: 'patentDetail', 
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

  panelFieldsService.fetchPanelRecord = function(panelInfo, id, callback) {
    remoteDataService.fetchPanelRecord(panelInfo, id, function(err, data) {

      var panelName = panelInfo.name;
      panelFieldsService[panelName] = {
        panelInfo: panelInfo
      };
      if(util.defined(data,"length")) {
        var records = panelFieldsService.prepareInboudData(panelInfo, data);
      }
      $rootScope.$broadcast('fetchPanelRecords',panelName);
      callback(null,records);
    });
  };

	panelFieldsService.fetchPanelRecords = function(panelInfo, callback) {
		remoteDataService.fetchPanelRecords(panelInfo, function(err, data) {

			var panelName = panelInfo.name;
      panelInfo.size = data.size;

			panelFieldsService[panelName] = {
        panelInfo: panelInfo
      };
      if(util.defined(data,"records.length")) {
  		  panelFieldsService[panelName].panelInfo.records = panelFieldsService.prepareInboudData(panelInfo, data.records);
      }
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
