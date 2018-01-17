var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var panelFieldsService = {
    panelInfo: {},
    page: 0,
    pageSize: 10
  };

  panelFieldsService.panelInfo.vPersonConnectRequestList = {
      name: 'vPersonConnectRequestList',
      model : modelService.models.personConnectRequest,
      route: 'accountConnectRequests',
      userRoute: 'userPeople',
      userListRoute: 'userPeople',
      defaultSort: 'fistname',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vUsersList = {
      name: 'vUsersList',
      model : modelService.models.user,
      route: 'users',
      userRoute: '',
      userListRoute: '',
      defaultSort: 'fistname',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete',
      showId: true
  };

  panelFieldsService.panelInfo.vEntrepreneurialResourcesList = {
      name: 'vEntrepreneurialResourcesList',
      model : modelService.models.entrepreneurialresources,
      route: 'entrepreneurialresources',
      userRoute: 'entrepreneurialResourceDetail',
      userListRoute: 'userEntrepreneurialResources',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vMediaList = {
      name: 'vMediaList',
      model : modelService.models.media,
      route: 'media',
      userRoute: 'mediaDetail',
      userListRoute: 'userNews',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vProjectsList = {
      name: 'vProjectsList',
      model : modelService.models.projects,
      route: 'projects',
      userRoute: 'projectDetail',
      userListRoute: 'userSpinOffs',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };



  panelFieldsService.panelInfo.vSpinOffList = {
      name: 'vSpinOffList',
      model : modelService.models.spinoff,
      route: 'spinoffs',
      userRoute: 'spinOffDetail',
      userListRoute: 'userSpinOffs',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vOrganizationList = {
      name: 'vOrganizationList',
      model : modelService.models.organization,
      route: 'organizations',
      userRoute: 'organizationDetail',
      userListRoute: 'userOrganizations',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vResearchInstitutionList = {
      name: 'vResearchInstitutionList',
      model : modelService.models.researchInstitution,
      route: 'researchInstitution',
      userRoute: 'researchInstitutionsDetail',      
      userListRoute: 'userResearchInstitutions',      
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
      userListRoute: 'userPeople',      
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
      userRoute: 'investmentFirmDetail', 
      userListRoute: 'userInvestmentFirms',      
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
      userRoute: 'investmentDetail', 
      userListRoute: 'userInvestment',      
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
      userListRoute: null,      
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

            } else if(modelItem.controlType == 'multiline-text') {

              var value = record[modelItem.schemaName];
              var data = [];
              var rows = value.split('^');
              for(var i=0; i<rows.length; i++) {
                var r = rows[i];
                var rowObj = {
                    idx: i,
                    values: []
                }                
                var cols = r.split('~');
                for(x=0; x<cols.length; x++) {
                  var obj = {
                    idx: j,
                    value: cols[x]
                  }
                  rowObj.values.push(obj);
                }
                data.push(rowObj);
              }              
              inData[propertyName] = data;
            } else {
              if(modelItem.controlType == 'multiline-text') {
                var data = [];
                var rowObj = {
                  idx: i,
                  values: []
                }
                data.push(rowObj);                
                for(var i=0; i<modelItem.multilineCols; i++) {
                  var obj = {
                    idx: i,
                    value: ''
                  }
                  rowObj.push(obj);
                }
                inData[propertyName] = data;
              } else {
                inData[propertyName] = val;  
              }
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
          } else if(modelItem.controlType == 'multiline-text') {
              var recValue = panelRecord[propertyName];              
              if(util.defined(recValue)) {
                var value = ""
                for(var i=0; i<recValue.length; i++) {
                  var row = recValue[i].values;
                  for(var j=0; j<row.length; j++) {
                    var col = row[j].value;
                    if(j==0)
                      value += col;
                    else value += '~'+col;
                  }
                  if(i<recValue.length-1)
                    value += '^';
                }
              }
              outData[propertyName] = value;
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
