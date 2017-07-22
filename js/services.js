angular.module('soiApp.services', []); //instantiates
var soiServices = angular.module('soiApp.services') //gets

soiServices.factory('navService', ['$http',
  function($http){

    var navService = {
      currentRoute: null,
    };
    return navService;
}]);

soiServices.factory('filterService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

  var filterService = {
    filters: {},
    showAdv: null,
    appliedFilters: false,
    schemas: null,
    objectType: null,
    vertexOnly: false,
    hasEdges: false,
    showButtons: []
  };

  filterService.initService = function(objectModel, selected, vertexOnly, showButtons) {
    filterService.appliedFilters = false;
    if(util.defined(objectModel)) {
      filterService.objectType = objectModel.objectType;
      filterService.showAdv = objectModel;
    } else {
      filterService.objectType = null;
      filterService.showAdv = null;      
    }
    
    //filterService.filters = filterService.emptyFilters;

    var defaultSelected = false;
    if(util.defined(selected)) {
      defaultSelected = selected;
    }

    if(util.defined(vertexOnly)) {
      filterService.vertexOnly = vertexOnly;
    }

    if(util.defined(showButtons)) {
      filterService.showButtons = showButtons;
    }

    // Init Schema
    filterService.schemas = [];
    for (var propertyName in modelService.models) {

      var model = modelService.models[propertyName];
      var obj = {
        displayName: model.displayName,
        objectType: model.objectType,
        model: model,
        selected: defaultSelected
      }

      if(filterService.objectType != null)  {

        if(model.isRelationship == true) {

          var found = false;
          for (var modItem in modelService.models) {
            var mod = modelService.models[modItem];
            if(!util.defined(mod,"isRelationship") || model.isRelationship == false) {
              _.each(mod.relationships, function(item) {
                if(item.model.objectType == model.objectType && _.indexOf(item.destObjectType,filterService.objectType) > -1) {
                  found=true;
                  filterService.hasEdges = true;
                } 
              });            
            }
          }

          if(found)
            filterService.schemas.push(obj);

        } else {
          if(filterService.objectType == model.objectType) {
            obj.selected = true;
            filterService.schemas.push(obj);
          }
            
        }

      } else {
        if(model.isRelationship == true)
          filterService.hasEdges = true;
        filterService.schemas.push(obj);  
      }

      
    }    

    // Init Filters
    for(obj in modelService.models) {
      filterService.modelItem = modelService.models[obj];
      _.each(filterService.modelItem.fields, function(field) {
        if(field.controlType == 'picklist' || field.controlType == 'multiselect') {
          filterService.filters[filterService.modelItem.objectType + '~' + field.schemaName] = {
            objectType: filterService.modelItem.objectType,
            fieldName: field.schemaName,
            filters: [],
            displayName: field.displayName,
            picklistOptions: field.picklistOptions.options
          };
        }
      });
    }
  }

  filterService.clearFilters = function() {
    for(var propertyName in filterService.filters) {
      var objItem = filterService.filters[propertyName];
      if(util.defined(objItem,"filters.length"))
        objItem.filters = [];
    }
  }  

  filterService.hasFiltersSelected = function() {
    for(var propertyName in filterService.filters) {
      var objItem = filterService.filters[propertyName];
      if(util.defined(objItem,"filters.length") && objItem.filters.length > 0)
        return true;
    }
    return false;
  }  

  filterService.toggelSchema = function(obj) {
     obj.selected = !obj.selected;  
  }

  filterService.emptyFilters = {

    organizationtype: {
      objectType: 'VCompany',
      fieldName: 'type',
      filters: []
    },
    organizationindustry: {
      objectType: 'VCompany',
      fieldName: 'industry',
      filters: []
    },
    industry: {
      objectType: 'VSpinOff',
      fieldName: 'industry',
      filters: []
    },
    businessmodel: {
      objectType: 'VSpinOff',
      fieldName: 'businessmodel',
      filters: []
    },
    productcategory: {
      objectType: 'VSpinOff',
      fieldName: 'productcategory',
      filters: []
    },
    status: {
      objectType: 'VSpinOff',
      fieldName: 'status',
      filters: []
    },
    typeofspinoff: {
      objectType: 'VSpinOff',
      fieldName: 'typeofspinoff',
      filters: [],
      removeDirection: 'in'
    },
    researchinstitutiontype: {
      objectType: 'VResearchInstitution',
      fieldName: 'type',
      filters: []
    },
    investmentfirmstype: {
      objectType: 'VInvestmentFirm',
      fieldName: 'type',
      filters: []
    },
    investmenttype: {
      objectType: 'VInvestment',
      fieldName: 'type',
      filters: []
    },
    investmentstage: {
      objectType: 'VInvestment',
      fieldName: 'stage',
      filters: []
    },
    investmentround: {
      objectType: 'VInvestment',
      fieldName: 'round',
      filters: []
    },
    expertise: {
      objectType: 'VPerson',
      fieldName: 'expertise',
      filters: []
    },
    role: {
      objectType: 'EWorksfor',
      fieldName: 'role',
      filters: [],
      removeDirection: 'in'
    },
    founded: {
      objectType: 'EFounded',
      fieldName: 'role',
      filters: [],
      removeDirection: 'in'
    },
    investor: {
      objectType: 'EInvestor',
      fieldName: 'role',
      filters: [],
      removeDirection: 'in'
    },
    inventor: {
      objectType: 'EInventor',
      fieldName: 'role',
      filters: [],
      removeDirection: 'in'
    },
    applicant: {
      objectType: 'EApplicant',
      fieldName: 'role',
      filters: [],
      removeDirection: 'in'
    },
    department: {
      objectType: 'ESpinOff',
      fieldName: 'department',
      filters: [],
      removeDirection: 'in'
    },
    mediatype: {
      objectType: 'EMediaTarget',
      fieldName: 'type',
      filters: [],
      removeDirection: 'in'
    },
    fundedType: {
      objectType: 'EFunded',
      fieldName: 'type',
      filters: [],
      removeDirection: 'in'
    },
    acquireType: {
      objectType: 'EAcquire',
      fieldName: 'type',
      filters: [],
      removeDirection: 'in'
    },
    partnerType: {
      objectType: 'EPartner',
      fieldName: 'type',
      filters: [],
      removeDirection: 'in'
    },
  };

  //filterService.filters = jQuery.extend(true, {}, filterService.emptyFilters);

  return filterService;

}]);


soiServices.factory('statsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

  var statsService = {
    currentMode: {name: 'Degree Centrality', value: 'statsdegreecentrality'},
    options: [
      {name: 'Degree Centrality', value: 'statsdegreecentrality'},
      {name: 'Betweeness Centrality', value: 'statsbetweencentrality'}
    ]
  };
  return statsService;

}]);


soiServices.factory('gridService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var gridService = {
    pageSize: 10
  };

	gridService.fetchRecords = function(gridInfo, filters, schemas, callback) {
		remoteDataService.fetchGridRecords(gridInfo, filters, schemas, function(err, ret) {

        var data = ret.records;
        gridInfo.size = ret.size;
        gridInfo.currentPage = gridInfo.currentPage;
        gridInfo.pages = [];
        var numberOfPages = 0;
        if(gridService.pageSize > 0)
          numberOfPages = Math.ceil(gridInfo.size / gridService.pageSize);
        for(var i=1; i<=numberOfPages; i++) {
          var obj = {
            pageNumber: i,
            selected: false
          }
          if(gridInfo.currentPage == i)
            obj.selected = true;
          gridInfo.pages.push(obj);
        }

        var retObj = {
          rawData: data,
        	columnDefs: null,
        	records: null
        };

        if(!util.defined(gridInfo,"gridFields.length")) {
          alert('Error no gridFields defined!');
          callback(500,null);
          return;
        }
        var columnDefs = [];
        for(var i=0; i<gridInfo.gridFields.length; i++) {
          var gf = gridInfo.gridFields[i];
          var obj = {
            
          };
          obj.name = gf.name;
          if(util.defined(gf,"fieldName")) {
          	obj.field = gf.fieldName;
          } else {
	          alert('Error no fieldName defined!');
	          callback(500,null);
	          return;
          }
          if(util.defined(gf,"route") && util.defined(gf,"logo")) {
            obj.cellTemplate = sprintf("<div style='padding:5px'><div ng-click=\"grid.appScope.goDetail('%s', row.entity.id)\" class=\"click-link\" ng-bind-html=\"row.entity['%s']\"></a></div>", gf.route, obj.field);
            //obj.cellTemplate = '<a ng-href="#" ng-click="grid.appScope.test()">{{ COL_FIELD }}</a>'
          } else if(util.defined(gf,"route")) {
            obj.cellTemplate = sprintf("<div style='padding:5px'><a ng-click=\"grid.appScope.goDetail('%s', row.entity.id)\" class=\"click-link\">{{row.entity['%s']}}</a></div>", gf.route, obj.field);
          }
          columnDefs.push(obj);
        }
        retObj.columnDefs = columnDefs;

        var gridData = [];
        for(var i=0; i<data.length; i++) {
          var rec = data[i];
          var recObj = {
            id: rec['@rid']
          };
          for(j=0; j<gridInfo.gridFields.length; j++) {
            var gf = gridInfo.gridFields[j];
            if(util.defined(gf,"schemaName")) {
              if(util.defined(rec,gf.schemaName)) {
                recObj[gf.schemaName] = rec[gf.schemaName]
              } else {
                recObj[gf.schemaName] = '';
              }
            } else if(util.defined(gf,"formula.fields.length")) {
              var flds = [];
              for(var x=0; x<gf.formula.fields.length; x++) {
                var fld = gf.formula.fields[x];

                var obj = {};
                if(util.defined(fld,"name") && util.defined(rec,fld.name)) {
                  if(util.defined(fld,"formatMethod")) {
                    obj.value = fld.formatMethod(rec[fld.name], fld.formatMethodParam);
                  } else {
                    if(util.defined(gf,"logo") && fld.name == 'logo') {
                      obj.value = '/www/logos/' + rec[fld.name];
                    } else {
                      obj.value = rec[fld.name];
                    }
                  }
                } else {
                  if(util.defined(gf,"logo") && fld.name == 'logo') {
                    obj.value = '/soiapp/img/logos/emptyLogo.png';
                  } else {
                    obj.value = '';  
                  }
                }
                flds.push(obj);
              }
              recObj[gf.fieldName] = sprintf(gf.formula.pattern, {values: flds});
            } else if(util.defined(gf,"select")) {
            	var selObj = rec[gf.fieldName];
            	if(util.defined(selObj,"length")) {
            		var value = '';
            		for(var k=0; k<selObj.length; k++) {
            			var val = selObj[k];
            			if(k == selObj.length-1) {
            				value += val;
            			} else {
            				value += val + ', ';
            			}
            		}
            		recObj[gf.fieldName] = value;

            	} else {
            		recObj[gf.fieldName] = selObj;
            	}
            }
          }
          gridData.push(recObj);
        }
        retObj.records = gridData;
				callback(err, retObj)
		});
	}

    return gridService;
}]);
