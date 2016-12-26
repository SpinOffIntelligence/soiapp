angular.module('soiApp.services', []); //instantiates
var soiServices = angular.module('soiApp.services') //gets

soiServices.factory('navService', ['$http',
  function($http){

    var navService = {
      currentRoute: null,
    };
    return navService;
}]);

soiServices.factory('gridService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var gridService = {};

	gridService.fetchRecords = function(gridInfo, callback) {
		remoteDataService.fetchGridRecords(gridInfo, function(err, data) {

        var retObj = {
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
            height: 150
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
