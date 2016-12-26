var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('acquisitionController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vAcquisitionList, function(err, panelListData) {
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('adminNavController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route);
  	}

  	$scope.userview = function() {
      util.navigate('userCompanies');
  		$rootScope.$broadcast('navAdminMode',false);
  	}

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('companiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vCompanyList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('acquisitionController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vAcquisitionList, function(err, panelListData) {
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('adminNavController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route);
  	}

  	$scope.userview = function() {
      util.navigate('userCompanies');
  		$rootScope.$broadcast('navAdminMode',false);
  	}

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('companiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vCompanyList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('acquisitionController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vAcquisitionList, function(err, panelListData) {
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('adminNavController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route);
  	}

  	$scope.userview = function() {
      util.navigate('userCompanies');
  		$rootScope.$broadcast('navAdminMode',false);
  	}

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('companiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vCompanyList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('acquisitionController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vAcquisitionList, function(err, panelListData) {
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('adminNavController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route);
  	}

  	$scope.userview = function() {
      util.navigate('userCompanies');
  		$rootScope.$broadcast('navAdminMode',false);
  	}

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('companiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vCompanyList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('acquisitionController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vAcquisitionList, function(err, panelListData) {
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('adminNavController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route);
  	}

  	$scope.userview = function() {
      util.navigate('userCompanies');
  		$rootScope.$broadcast('navAdminMode',false);
  	}

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('companiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vCompanyList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('acquisitionController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vAcquisitionList, function(err, panelListData) {
  });

}]);

soiControllers.controller('adminNavController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route);
  	}

  	$scope.userview = function() {
      util.navigate('userCompanies');
  		$rootScope.$broadcast('navAdminMode',false);
  	}

}]);

soiControllers.controller('companiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vCompanyList, function(err, panelListData) {
  });


}]);

soiControllers.controller('investmentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  
  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentList, function(err, panelListData) {
  });


}]);

soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentFirmList, function(err, panelListData) {
  });


}]);

soiControllers.controller('navController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route)
  	}

  	$scope.adminView = function() {
  		util.navigate('companies');
  		$rootScope.$broadcast('navAdminMode',true);
  	}

}]);

soiControllers.controller('objectDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'remoteDataService','$timeout',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService, $timeout) {

    $scope.util = util;
    $scope.recordItemId = $stateParams.id
    $scope.mode = 'data';
    $scope.depth = 0; 

    $scope.schemas = [];
    for(var propertyName in modelService.models) {
      var obj = {
        objectType: modelService.models[propertyName].objectType,
        model: modelService.models[propertyName]
      }
      $scope.schemas.push(obj);
    }

    function loadNetwork(callback) {
      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, function(err, data) {
        $scope.recordDetailsOrig = data;
        $scope.recDetails={};
        $scope.visNodes=[];
        $scope.visEdges=[];
        for (var property in data) {
          var prop = data[property];
          if(property.indexOf('V') == 0) {
            $scope.recDetails[property] =prop;
            for(var i=0; i<prop.length; i++) {
              
              var name = prop[i]['name'];
              if(property == 'VPatent')
                var name = prop[i]['number'];

              var visObj = {
                id: prop[i]['id'],
                label: name,
                font: {size:12, color:'black', face:'arial'}
              }
              var fndModel = util.findWhereProp(modelService.models, 'objectType', property);
              if(util.defined(fndModel,"color")) {
                visObj.color = fndModel.color;
              }
              if(util.defined(fndModel,"fontColor")) {
                visObj.font.color = fndModel.fontColor;
              }
              $scope.visNodes.push(visObj);
            }
          } else {
            var fnd1 = util.findWhereDeep(prop, 'in', 'inId', $stateParams.id);
            var fnd2 = util.findWhereDeep(prop, 'out', 'outId', $stateParams.id);
            $scope.recDetails[property] = _.union(fnd1, fnd2);                

            for(var i=0; i<prop.length; i++) {
              var visObj = {
                from: prop[i]['out']['outId'],
                to: prop[i]['in']['inId']
              }
              $scope.visEdges.push(visObj);
            }
          }
        }
        callback(err, data);
      });      
    }    

    remoteDataService.fetchRecordByProp(remoteDataService.detailObjectType, '@rid', $scope.recordItemId, function(err, data) {
      if(util.defined(data,"length") && data.length > 0) {
        $scope.objData = data[0];
        var fnd = util.findWhereProp(modelService.models, 'objectType', remoteDataService.detailObjectType);
        if(util.defined(fnd)) {
          $scope.model = fnd;

          loadNetwork(function(err, data) {
            $scope.recordDetails = {};
            for(var i=0; i <$scope.model.relationships.length; i++) {
              var relationship = $scope.model.relationships[i];
              remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
                if(util.defined(returnData,"edgeObjectType")) {
                  // Get Relation ship again
                  relationship = util.findWhereArray($scope.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

                  var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
                  var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
                  if(!util.defined($scope,"recordDetailItem.relationships"))
                    $scope.recordDetails[returnData.edgeObjectType]={};
                  $scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
                  remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
                    $scope.recordDetails[returnData.edgeObjectType].details = detailsData;
                  });
                }
              });
            }
          });
        }
      }
    });

    function drawNetwork() {
      var nodes = new vis.DataSet($scope.visNodes);

      // create an array with edges
      var edges = new vis.DataSet($scope.visEdges);

      // create a network
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {};
      var network = new vis.Network(container, data, options);      
    }

    $scope.zoomOut = function() {
      $scope.depth++;
      loadNetwork(function(err, data) {
        drawNetwork();
      });
    }

    $scope.zoomIn = function() {
      if($scope.depth > 0) {
        $scope.depth--;
        loadNetwork(function(err, data) {
          drawNetwork();
        });        
      } 
    }

    $scope.toggleMode = function() {
      if($scope.mode=='data') {
        $scope.mode='graph';

        $timeout( function(){ 
          drawNetwork();
        });
      } else {
        $scope.mode='data';
      }
    }

    $scope.getCompany = function(companyId, prop) {
      var fnd = util.findDeepParent($scope.recordDetailsOrig.EFunded, 'out', 'outId', companyId);
      if(util.defined(fnd,"in")) {
        return fnd.in[prop];
      }
    }

    $scope.update = function() {
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',remoteDataService.detailObjectType);
      if(util.defined(fnd)) {      
        util.navigate('panelItem', {panelName : fnd.name, recordItemId: $scope.recordItemId, mode: 'viewDetails' })
      }
    }

    $scope.criteriaMatchIn = function() {
      return function( item ) {
        if(item.in.inId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }

    $scope.criteriaMatchOut = function() {
      return function( item ) {
        if(item.out.outId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }


}]);


controllers.controller('panelListCtrl', function ($scope, $rootScope, util, panelFieldsService) {

	$scope.util = util;
	$scope.controller = 'panelListCtrl';
	$scope.mode='view';
	if(util.defined($scope,"panelName")) {
		console.log($scope.panelName);
	}
	$scope.recordCount = 0;

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId)) {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			}
		}
	}

	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.addRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add'});
	}

});

controllers.controller('panelItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.models = modelService.models;
	$scope.schemas = modelService.schemas;
	$scope._ = _;
	
	$scope.mode='view';
	$scope.controller = 'panelItemCtrl';
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}

	function loadRelationships() {
		$scope.recordDetails = {};
		for(var i=0; i <$scope.panelInfo.model.relationships.length; i++) {
			var relationship = $scope.panelInfo.model.relationships[i];
			remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
				if(util.defined(returnData,"edgeObjectType")) {
					// Get Relation ship again
					relationship = util.findWhereArray($scope.panelInfo.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

					var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
					var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
					if(!util.defined($scope,"recordDetailItem.relationships"))
						$scope.recordDetails[returnData.edgeObjectType]={};
					$scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
					remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
						$scope.recordDetails[returnData.edgeObjectType].details = detailsData;
					});
				}
			});
		}
	}

	$scope.deleteEdge = function(objectType, recordDetail, relationItem) {
		remoteDataService.deleteEdge(objectType, $scope.recordItemId, recordDetail['in'], function(err, data) {
			remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
				loadRelationships();
			});
		});
	}

	$scope.editEdge = function(objectType, recordDetail, relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'edit', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: recordDetail['@rid'], destObjectType: relationItem.destObjectType});
	}

	$scope.getProperty = function(obj, propertyName) {
		return obj[propertyName];
	}

	$scope.getRelation = function(panelInfo, recordDetails, recordDetail, relationItem) {
		fnd = _.findWhere(recordDetails[relationItem.destObjectType], {id: recordDetail.inId});
		if(util.defined(fnd)) {
			return fnd;
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId) && $scope.recordItemId != "") {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}				
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.panelInfo.model.objectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;
			}				
		}		
		if($scope.mode == 'viewDetails') {
			loadRelationships();
		}

	}

	if(util.defined(panelFieldsService,$scope.panelName + ".panelInfo")) {
		init();
	} else {
			panelFieldsService[$scope.panelName] = {};
			panelFieldsService[$scope.panelName].panelInfo = panelFieldsService.panelInfo[$scope.panelName];
			panelFieldsService.fetchPanelRecords(panelFieldsService[$scope.panelName].panelInfo, function(err, panelListData) {
			init();
		});
	}
});


controllers.controller('panelFieldsViewEditCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService, $timeout) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$scope.schemas = modelService.schemas;
	
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	$scope.fields = null;
	$scope.schema = null;
	$scope.edgeObjectType = null;
	$scope.edgeRecordItemId = null;


	// datepicker
	$scope.dateOptions = {
    dateDisabled: false,
    formatYear: 'yy',
    startingDay: 1
	};

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];  
  $scope.popup1 = {
  	opened:false
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  // ui-select
  var vm = this;

  $scope.people = modelService.piskLists.productcategory.options;

  $scope.formatValue = function(panelField, value) {
  	if(panelField.controlType == 'multiselect') {
  		var names = _.pluck(value, 'name');
  		return names.join(", ");
  	} else{
  		return value;
  	}
  }

  // Normal
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
			if(strs.length > 3) {
				$scope.edgeObjectType = strs[3];
			}
			if(strs.length > 4) {
				$scope.edgeRecordItemId = strs[4];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			
			if($scope.edgeObjectType == null) {
				$scope.fields = $scope.panelInfo.model.fields;
				$scope.schema = modelService.schemas[$scope.panelInfo.model.objectType];
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			} else {

				var fnd = util.findDeep($scope.panelInfo.model.relationships, 'model', 'objectType', $scope.edgeObjectType);
				//_.findWhere($scope.panelInfo.model.relationships, {model.objectType: $scope.edgeObjectType});
				if(util.defined(fnd)) {
					$scope.fields = fnd.fields;
				}
				$scope.schema = modelService.schemas[$scope.edgeObjectType];
			}
		}		
	}


	$scope.removeImage = function(paneRecord, panelField) {
		paneRecord[panelField.schemaName]=null;
	}

	$scope.replaceImage = function(paneRecord, panelField) {
		
	}

	$scope.addImage = function(paneRecord, panelField) {
		util.navigate('uploadImage', {objectType: $scope.panelInfo.model.objectType, id: $scope.recordItemId, logoField: panelField.schemaName});
	}

	if(util.defined($scope,"panelName")) {
		init();
	}

});

controllers.controller('panelFieldsCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
			if(util.defined(fnd)) {
				$scope.paneRecord = fnd;
			}
		}		
	}

	if(util.defined($scope,"panelName")) {
		init();
	}


	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.getValue = function(schemaName) {
		return $scope.paneRecord[schemaName];
	}

	$scope.getSchemaType = function(field) {
		var fnd = _.findWhere(modelService.schemas[$scope.panelInfo.model.objectType], {name: field.name});
		if(util.defined(fnd)) {
			return fnd.type;
		}
	}

	$scope.editRecord = function() {
		$scope.paneRecord.backup = jQuery.extend(true, {}, $scope.paneRecord);
		$scope.mode='edit';
	}

	$scope.deleteRecord = function() {
		panelFieldsService.deletePanelRecord($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, response) {
			util.navigate($scope.panelInfo.route);
	  });
	}

	$scope.saveRecord = function() {
		if($scope.mode == 'edit') {
			panelFieldsService.updatePanelRecord($scope.panelInfo, $scope.recordItemId, $scope.paneRecord, function(err, response) {
				if($scope.parentController=='panelListCtrl')
					$scope.mode='view';
				else $scope.mode='viewDetails';
	  	});
	  } else {
	  	// Add
			panelFieldsService.addPanelRecord($scope.panelInfo.model.objectType, $scope.paneRecord, function(err, response) {
				if(util.defined(response,'length') && response.length > 0) {
					response[0].id = response[0]['@rid'];
					$scope.panelInfo.records.push(response[0]);
					$scope.recordItemId = response[0]['@rid'];
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
				} else {
					util.navigate($scope.panelInfo.route);
				}
	  	});
	  }
	}

	$scope.cancelRecord = function() {
		if($scope.mode == 'edit') {
			$scope.paneRecord = jQuery.extend(true, {}, $scope.paneRecord.backup);
			if($scope.parentController=='panelListCtrl')
				$scope.mode='view';			
			else $scope.mode='viewDetails';			
		} else {
			util.navigate($scope.panelInfo.route);
		}
	}

	$scope.viewUserDetail = function() {
		util.navigate($scope.panelInfo.userRoute, {id: $scope.recordItemId});
	}


	$scope.viewRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

	$scope.viewList = function() {
		util.navigate($scope.panelInfo.route);
	}

	$scope.addRelationship = function(relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: null, destObjectType: relationItem.destObjectType});
	}

});

controllers.controller('edgeItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.mode='view';
	$scope.controller = 'edgeItemCtrl';
	$scope.findTarget="";
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}
	if(util.defined($stateParams,"edgeObjectType")) {
		$scope.edgeObjectType = $stateParams.edgeObjectType;
	}
	if(util.defined($stateParams,"edgeRecordItemId")) {
		$scope.edgeRecordItemId = $stateParams.edgeRecordItemId;
	}
	if(util.defined($stateParams,"destObjectType")) {
		$scope.destObjectType = $stateParams.destObjectType;
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope,"edgeRecordItemId") && $scope.edgeRecordItemId != "") {


				remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
					if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data[$scope.edgeObjectType];
					}

					remoteDataService.getEdge($scope.edgeObjectType, $scope.edgeRecordItemId, function(err, data) {
						
						$scope.paneRecord = remoteDataService.prepareInboundData(data);
						$scope.paneRecordBackup = remoteDataService.prepareInboundData(data);

						var obj = {};
						for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
							if(util.defined(data,propertyName))
								obj[propertyName]=data[propertyName];
							else obj[propertyName]=null;
						}
						if(util.defined(data,"id"))
								obj.id = data.id;
						$scope.paneRecord = obj;

						if(util.defined(data,"in")) {
							$scope.targetId = data['in'];

							$scope.targets = [];
							remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
								var targets = data;
								for(var i=0; i<targets.length; i++) {
									var target = targets[i];
									var fnd = _.findWhere($scope.recordDetails, {inId: target.id});
									if(targets[i].id == $scope.targetId || !util.defined(fnd)) {
										if(targets[i].id == $scope.targetId)
											targets[i].selected=true;
										else targets[i].selected=false;										
										$scope.targets.push(target);
									}
								}
							});
						}
					});
				});
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;

				remoteDataService.getEdgeBySource($scope.edgeObjectType, $scope.recordItemId, function(err, data) {
					//if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data;
					//}
					remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
						$scope.targets = [];
						var targets = data;
						for(var i=0; i<targets.length; i++) {
							var target = targets[i];
							var fnd = _.findWhere($scope.recordDetails, {in: target.id});	
							if(!util.defined(fnd))
								$scope.targets.push(target);
						}
					});				
				});
			}
		}		
	}
	init();		

	$scope.selectTarget = function(target) {
		for(var i=0; i<$scope.targets.length; i++) {
			$scope.targets[i].selected=false;
		}
		target.selected=true;
	}

	$scope.saveEdge = function() {
		var fnd = _.findWhere($scope.targets, {selected: true});
		if(fnd != null) {
			if($scope.mode == 'add') {
				remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
				});				
			} else {
				remoteDataService.deleteEdge($scope.edgeObjectType, $scope.paneRecordBackup.out, $scope.paneRecordBackup.in, function(err, result) {
					remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
						util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
					});				
				});				
			}
		}
			
	}

	$scope.cancelEdge = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

});



soiControllers.controller('patentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPatentList, function(err, panelListData) {
  });


}]);

soiControllers.controller('peopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPeopleList, function(err, panelListData) {
  });


}]);

soiControllers.controller('universityController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  $rootScope.$broadcast('navAdminMode',true);

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vUniversityList, function(err, panelListData) {
  });


}]);

soiControllers.controller('uploadController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {
  console.log('hi');
  $scope.formData = {
    mode: null,
    objectType: null,
    sourceObjectType: null,
    targetObjectType: null,
    isEdge: 0
  }

  $scope.sourceObjects = [];
  $scope.targetObjects = [];
  $scope.arrRelObjects = [];
  $scope.arrObjects = [];

  $scope.exportCriteria = {
    field: null,
    operator: null,
    value: null
  }

  $scope.criterias = [];

  $scope.selectedObjectTypeFields=null;
  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType,
      sourceObjectTypes: [],
      targetObjectTypes: []     
    }   
    if(util.defined(modelService.models,propertyName + '.isRelationship') && modelService.models[propertyName].isRelationship == true) {
      $scope.arrRelObjects.push(obj);
    }
  }

  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType
    }   
    if(!util.defined(modelService.models,propertyName + '.isRelationship') || modelService.models[propertyName].isRelationship == false) {
      $scope.arrObjects.push(obj);

      if(util.defined(modelService,'models.' + propertyName + '.relationships')) {
        for(var i=0; i<modelService.models[propertyName].relationships.length; i++) {
          var rel = modelService.models[propertyName].relationships[i];
          var fnd = _.findWhere($scope.arrRelObjects, {value: rel.model.objectType});
          var obj = {};
          if(util.defined(fnd)) {
            var fndDupe = _.findWhere(fnd.sourceObjectTypes, {value: modelService.models[propertyName].objectType});
            if(!util.defined(fndDupe)) {
              obj = {
                name: modelService.models[propertyName].displayName,
                value: modelService.models[propertyName].objectType
              }
              fnd.sourceObjectTypes.push(obj);              
            }

            fndDupe = _.findWhere(fnd.targetObjectTypes, {value: rel.destObjectType});
            if(!util.defined(fndDupe)) {

              var fndObj = util.findWhereProp(modelService.models, 'objectType', rel.destObjectType);
              if(util.defined(fndObj)) {
                obj = {
                  name: fndObj.displayName,
                  value: rel.destObjectType
                }           
                fnd.targetObjectTypes.push(obj);                
              }
            }
          }
        }
      }
    }
  }

  remoteDataService.getAllLogInfo(function(err, logInfo) {
    $scope.logInfo = logInfo;
    $scope.jobs = [];
    var lastJob;
    for(var i=0; i<logInfo.length; i++) {
      var data = logInfo[i];
      if(data.file != lastJob) {
        var obj = {
          file: data.file,
          startdatetime: data.startdatetime,
          mode: data.mode,
          sortDate : moment(data.startdatetime).unix()
        }
        $scope.jobs.push(obj);
        lastJob = data.file;
      }
    }
  });

  $scope.deleteCriteria = function(criteria) {
    for(var i=0; i<$scope.criterias.length; i++) {
      if($scope.criterias[i].field == criteria.field) {
        $scope.criterias.splice(i, 1);
        return;
      }
    }
  }

  $scope.addCriteria = function() {
    if(!util.defined($scope,"exportCriteria.field")) {
      alert('Criteria missing field!');
    } else if(!util.defined($scope,"exportCriteria.operator")) {
      alert('Criteria missing operator!');
    } else if(!util.defined($scope,"exportCriteria.value")) {
      alert('Criteria missing value!');
    } else {
      var obj = {
        field: $scope.exportCriteria.field.schemaName,
        operator: $scope.exportCriteria.operator,
        value: $scope.exportCriteria.value        
      }
      $scope.criterias.push(obj);
      $scope.exportCriteria = {
        field: null,
        operator: null,
        value: null
      }     
    }
  }

  $scope.deleteDetails = function(job) {
    remoteDataService.deleteLogInfo(job.file, function(err, logInfo) {
      $state.transitionTo($state.current, $stateParams, {
        reload: true,
        inherit: false,
        notify: true
      });     
    });
  }

  $scope.getDetails = function(job) {
    $scope.logDetails = [];
    $scope.jobDetails = job;
    for(var i=0; i<$scope.logInfo.length; i++) {
      var data = $scope.logInfo[i];
      if(data.file == job.file) {
        var obj = {
          info: data.info
        }
        $scope.logDetails.push(obj);
      }
    }
  }

  $scope.selectObjectType = function() {
    var fnd = _.findWhere($scope.arrRelObjects, {value: $scope.formData.objectType.value});
    if(util.defined(fnd)) {
      $scope.sourceObjects = fnd.sourceObjectTypes;
      $scope.targetObjects = fnd.targetObjectTypes;     
    }

    fnd = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
    if(util.defined(fnd,"fields")) {
      var fndId = _.findWhere(fnd.fields, {schemaName: 'id'});
      if(!util.defined(fndId)) {
        var obj =  {
          schemaName: 'id',
          displayName: 'ID'
        }
        fnd.fields.push(obj);
      }       
      $scope.idFields = fnd.fields;
    }
  }

  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if ($scope.formData.mode != 'export' && vm.upload_form.file.$valid && vm.file) { //check if from is valid

      if(!util.defined($scope,"formData.mode.length") || $scope.formData.mode.length == 0) {
        alert('No Mode selected!')
        return;
      }

      if(util.defined($scope,"formData.objectType.value")) {
        $scope.formData.objectType = $scope.formData.objectType.value;
      } else {
        alert('No Object Type selected!')
        return;
      }

      if($scope.formData.isEdge == "1")
        $scope.formData.isEdge = true;
      else $scope.formData.isEdge = false;

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.sourceObjectType.value")) {
          $scope.formData.sourceObjectType = $scope.formData.sourceObjectType.value;
        } else {
          alert('No Source Object Type selected!')
          return;
        }
      } else {
        $scope.formData.sourceObjectType = null;
      }

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.targetObjectType.value")) {
          $scope.formData.targetObjectType = $scope.formData.targetObjectType.value;
        } else {
          alert('No Target Object Type selected!')
          return;
        }
      } else {
        $scope.formData.targetObjectType = null;
      }

      if(($scope.formData.mode == 'update' || $scope.formData.mode == 'delete') && $scope.formData.isEdge == false) {

        if(util.defined($scope,"formData.idObjField.schemaName")) {
          $scope.formData.idObjField = $scope.formData.idObjField.schemaName;
        } else {
          alert('No Id Object Field selected!')
          return;
        }
      } else {
        $scope.formData.idObjField = null;
      }

      if($scope.formData.mode == 'export') {
        $scope.formData.criterias = $scope.criterias;
      }

      vm.upload(vm.file); //call upload function
    } else {

      if($scope.formData.mode != 'export') {
        alert('No file selected!')  
      } else {
        remoteDataService.exportRecords($scope.formData.objectType.value, $scope.criterias, function(err, data) {
          console.log('Export:');
          if($scope.formData.isEdge == '1')
            $scope.formData.isEdge=true;
          else $scope.formData.isEdge=false;
          if(util.defined(data,"exportData.length")) {
            var recordData = [];
            for(var propertyName in data.exportData) {
              recordData.push(data.exportData[propertyName]);
            }
            console.dir(recordData);
            var obj = {};
            var model = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
            if(util.defined(model,"fields.length")) {
              for(var i=0; i<model.fields.length; i++) {
                var f = model.fields[i];
                obj[f.schemaName] = f.schemaName;
              }           
              obj['id'] = 'id';
              if($scope.formData.isEdge) {
                obj['sourceid'] = 'sourceid';
                obj['targetid'] = 'targetid';
              }
            }
            var json = [obj];
            for(var i=0; i<recordData.length; i++) {
              var rec = recordData[i];
              var obj = {};
              for(var j=0; j<model.fields.length; j++) {
                var f = model.fields[j];
                var schemaInfo = modelService.schemas[$scope.formData.objectType.value][f.schemaName];

                if(util.defined(rec,f.schemaName)) {
                  var val = rec[f.schemaName];
                  if(schemaInfo.type == 'string') {
                    if(util.defined(val) && val.length > 0) {
                      val = val.replace(/["]/g, "\"\"")
                      val = val.replace(/(?:\r\n|\r|\n)/g, ' ');
                      if(val.indexOf(",") > -1) {
                        val = '"' + val + '"';
                      }
                      obj[f.schemaName] = val;                    
                    } else {
                      obj[f.schemaName] = '';  
                    }
                  } if(schemaInfo.type== 'date') {
                    obj[f.schemaName] = moment(val).format("YYYY-MM-DD");
                  }else {
                    obj[f.schemaName] = val; 
                  }
                } else {
                  obj[f.schemaName] = '';
                }
              }
              obj['id'] = rec['@rid'];
              if($scope.formData.isEdge) {
                obj['sourceid'] = rec['out'];
                obj['targetid'] = rec['in'];
              }             
              json.push(obj);
            }
            var csv = util.JSON2CSV(json);
            var fileName = 'data'
            var uri = 'data:text/csv;charset=utf-8,' + escape(csv);
            var link = document.createElement("a");
            link.href = uri
              //link.style = "visibility:hidden"; Causing exception in Chrome - SR 6/15/2015
            link.download = fileName + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }

        });
      }
    }
  }


  vm.upload = function (file) {
    Upload.upload({
      url: '/upload', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData,
        schemas: modelService.schemas
      } //pass file as data, should be user ng-model
  }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        remoteDataService.getLogInfo($scope.file, function(err, data) {

          $timeout( function(){ 
            $state.transitionTo($state.current, $stateParams, {
              reload: true,
              inherit: false,
              notify: true
            });
          }, 3000);

        });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});


soiControllers.controller('uploadImageController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {

  $scope.formData = {
    objectType : $stateParams.objectType,
    logoField: $stateParams.logoField,
    id: $stateParams.id
  }


  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
      vm.upload(vm.file); //call upload function
    } else {
      alert('No file selected!');
    }
  }

  vm.upload = function (file) {
    Upload.upload({
      url: '/uploadImage', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData
      } //pass file as data, should be user ng-model
    }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        // remoteDataService.getLogInfo($scope.file, function(err, data) {
        // });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});


soiControllers.controller('userAquisitionsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.acquisition,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Acquisition',
          schemaName: 'name',
          fieldName: 'name',
          route: 'aquisitionsDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        },
        {
          name: 'Date',
          fieldName: 'closedate',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {
                name: 'closedate',
                formatMethod:  util.formatDate,
                formatMethodParam: "MMM, YYYY"              }
              
            ]
          }
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);

soiControllers.controller('userCompaniesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.company,
      route: 'companies',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'companyDetail'
        },
        {
          name: 'Product Categories',
          schemaName: 'productcategory',
          fieldName: 'productcategory',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);

soiControllers.controller('userFundingController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'VInvestment',
  		model : modelService.models.investment,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Investment',
          schemaName: 'name',
          fieldName: 'name',
          route: 'fundingDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);

soiControllers.controller('userInvestorsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vInvestmentGrid',
  		model : modelService.models.investmentfirm,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'investorsDetail'
        },
        {
          name: 'Industry / Sector',
          schemaName: 'industry',
          fieldName: 'industry',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);

soiControllers.controller('userPeopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vPeopleGrid',
  		model : modelService.models.people,
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'People Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'peopleDetail'
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        },
        {
          name: 'Primary Job',
          schemaName: null,
          fieldName: 'role',
          select: 'outE(EWorksfor).role AS role'
        },
        {
          name: 'Primary Company',
          schemaName: null,
          fieldName: 'company',
          select: "OUT('EWorksfor').name AS company"
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions2 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions2 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });
}]);

soiControllers.controller('userUniversitiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vUniversityGrid',
  		model : modelService.models.university,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'universitiesDetail'
        },
        {
          name: 'Year Founded',
          schemaName: 'yearfounded',
          fieldName: 'yearfounded',
          route: null
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  
  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentFirmList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('navController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route)
  	}

  	$scope.adminView = function() {
  		util.navigate('companies');
  		$rootScope.$broadcast('navAdminMode',true);
  	}

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('objectDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'remoteDataService','$timeout',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService, $timeout) {

    $scope.util = util;
    $scope.recordItemId = $stateParams.id
    $scope.mode = 'data';
    $scope.depth = 0; 

    $scope.schemas = [];
    for(var propertyName in modelService.models) {
      var obj = {
        objectType: modelService.models[propertyName].objectType,
        model: modelService.models[propertyName]
      }
      $scope.schemas.push(obj);
    }

    function loadNetwork(callback) {
      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, function(err, data) {
        $scope.recordDetailsOrig = data;
        $scope.recDetails={};
        $scope.visNodes=[];
        $scope.visEdges=[];
        for (var property in data) {
          var prop = data[property];
          if(property.indexOf('V') == 0) {
            $scope.recDetails[property] =prop;
            for(var i=0; i<prop.length; i++) {
              
              var name = prop[i]['name'];
              if(property == 'VPatent')
                var name = prop[i]['number'];

              var visObj = {
                id: prop[i]['id'],
                label: name,
                font: {size:12, color:'black', face:'arial'}
              }
              var fndModel = util.findWhereProp(modelService.models, 'objectType', property);
              if(util.defined(fndModel,"color")) {
                visObj.color = fndModel.color;
              }
              if(util.defined(fndModel,"fontColor")) {
                visObj.font.color = fndModel.fontColor;
              }
              $scope.visNodes.push(visObj);
            }
          } else {
            var fnd1 = util.findWhereDeep(prop, 'in', 'inId', $stateParams.id);
            var fnd2 = util.findWhereDeep(prop, 'out', 'outId', $stateParams.id);
            $scope.recDetails[property] = _.union(fnd1, fnd2);                

            for(var i=0; i<prop.length; i++) {
              var visObj = {
                from: prop[i]['out']['outId'],
                to: prop[i]['in']['inId']
              }
              $scope.visEdges.push(visObj);
            }
          }
        }
        callback(err, data);
      });      
    }    

    remoteDataService.fetchRecordByProp(remoteDataService.detailObjectType, '@rid', $scope.recordItemId, function(err, data) {
      if(util.defined(data,"length") && data.length > 0) {
        $scope.objData = data[0];
        var fnd = util.findWhereProp(modelService.models, 'objectType', remoteDataService.detailObjectType);
        if(util.defined(fnd)) {
          $scope.model = fnd;

          loadNetwork(function(err, data) {
            $scope.recordDetails = {};
            for(var i=0; i <$scope.model.relationships.length; i++) {
              var relationship = $scope.model.relationships[i];
              remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
                if(util.defined(returnData,"edgeObjectType")) {
                  // Get Relation ship again
                  relationship = util.findWhereArray($scope.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

                  var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
                  var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
                  if(!util.defined($scope,"recordDetailItem.relationships"))
                    $scope.recordDetails[returnData.edgeObjectType]={};
                  $scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
                  remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
                    $scope.recordDetails[returnData.edgeObjectType].details = detailsData;
                  });
                }
              });
            }
          });
        }
      }
    });

    function drawNetwork() {
      var nodes = new vis.DataSet($scope.visNodes);

      // create an array with edges
      var edges = new vis.DataSet($scope.visEdges);

      // create a network
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {};
      var network = new vis.Network(container, data, options);      
    }

    $scope.zoomOut = function() {
      $scope.depth++;
      loadNetwork(function(err, data) {
        drawNetwork();
      });
    }

    $scope.zoomIn = function() {
      if($scope.depth > 0) {
        $scope.depth--;
        loadNetwork(function(err, data) {
          drawNetwork();
        });        
      } 
    }

    $scope.toggleMode = function() {
      if($scope.mode=='data') {
        $scope.mode='graph';

        $timeout( function(){ 
          drawNetwork();
        });
      } else {
        $scope.mode='data';
      }
    }

    $scope.getCompany = function(companyId, prop) {
      var fnd = util.findDeepParent($scope.recordDetailsOrig.EFunded, 'out', 'outId', companyId);
      if(util.defined(fnd,"in")) {
        return fnd.in[prop];
      }
    }

    $scope.update = function() {
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',remoteDataService.detailObjectType);
      if(util.defined(fnd)) {      
        util.navigate('panelItem', {panelName : fnd.name, recordItemId: $scope.recordItemId, mode: 'viewDetails' })
      }
    }

    $scope.criteriaMatchIn = function() {
      return function( item ) {
        if(item.in.inId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }

    $scope.criteriaMatchOut = function() {
      return function( item ) {
        if(item.out.outId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets

controllers.controller('panelListCtrl', function ($scope, $rootScope, util, panelFieldsService) {

	$scope.util = util;
	$scope.controller = 'panelListCtrl';
	$scope.mode='view';
	if(util.defined($scope,"panelName")) {
		console.log($scope.panelName);
	}
	$scope.recordCount = 0;

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId)) {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			}
		}
	}

	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.addRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add'});
	}

});

controllers.controller('panelItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.models = modelService.models;
	$scope.schemas = modelService.schemas;
	$scope._ = _;
	
	$scope.mode='view';
	$scope.controller = 'panelItemCtrl';
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}

	function loadRelationships() {
		$scope.recordDetails = {};
		for(var i=0; i <$scope.panelInfo.model.relationships.length; i++) {
			var relationship = $scope.panelInfo.model.relationships[i];
			remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
				if(util.defined(returnData,"edgeObjectType")) {
					// Get Relation ship again
					relationship = util.findWhereArray($scope.panelInfo.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

					var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
					var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
					if(!util.defined($scope,"recordDetailItem.relationships"))
						$scope.recordDetails[returnData.edgeObjectType]={};
					$scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
					remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
						$scope.recordDetails[returnData.edgeObjectType].details = detailsData;
					});
				}
			});
		}
	}

	$scope.deleteEdge = function(objectType, recordDetail, relationItem) {
		remoteDataService.deleteEdge(objectType, $scope.recordItemId, recordDetail['in'], function(err, data) {
			remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
				loadRelationships();
			});
		});
	}

	$scope.editEdge = function(objectType, recordDetail, relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'edit', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: recordDetail['@rid'], destObjectType: relationItem.destObjectType});
	}

	$scope.getProperty = function(obj, propertyName) {
		return obj[propertyName];
	}

	$scope.getRelation = function(panelInfo, recordDetails, recordDetail, relationItem) {
		fnd = _.findWhere(recordDetails[relationItem.destObjectType], {id: recordDetail.inId});
		if(util.defined(fnd)) {
			return fnd;
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId) && $scope.recordItemId != "") {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}				
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.panelInfo.model.objectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;
			}				
		}		
		if($scope.mode == 'viewDetails') {
			loadRelationships();
		}

	}

	if(util.defined(panelFieldsService,$scope.panelName + ".panelInfo")) {
		init();
	} else {
			panelFieldsService[$scope.panelName] = {};
			panelFieldsService[$scope.panelName].panelInfo = panelFieldsService.panelInfo[$scope.panelName];
			panelFieldsService.fetchPanelRecords(panelFieldsService[$scope.panelName].panelInfo, function(err, panelListData) {
			init();
		});
	}
});


controllers.controller('panelFieldsViewEditCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService, $timeout) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$scope.schemas = modelService.schemas;
	
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	$scope.fields = null;
	$scope.schema = null;
	$scope.edgeObjectType = null;
	$scope.edgeRecordItemId = null;


	// datepicker
	$scope.dateOptions = {
    dateDisabled: false,
    formatYear: 'yy',
    startingDay: 1
	};

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];  
  $scope.popup1 = {
  	opened:false
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  // ui-select
  var vm = this;

  $scope.people = modelService.piskLists.productcategory.options;

  $scope.formatValue = function(panelField, value) {
  	if(panelField.controlType == 'multiselect') {
  		var names = _.pluck(value, 'name');
  		return names.join(", ");
  	} else{
  		return value;
  	}
  }

  // Normal
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
			if(strs.length > 3) {
				$scope.edgeObjectType = strs[3];
			}
			if(strs.length > 4) {
				$scope.edgeRecordItemId = strs[4];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			
			if($scope.edgeObjectType == null) {
				$scope.fields = $scope.panelInfo.model.fields;
				$scope.schema = modelService.schemas[$scope.panelInfo.model.objectType];
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			} else {

				var fnd = util.findDeep($scope.panelInfo.model.relationships, 'model', 'objectType', $scope.edgeObjectType);
				//_.findWhere($scope.panelInfo.model.relationships, {model.objectType: $scope.edgeObjectType});
				if(util.defined(fnd)) {
					$scope.fields = fnd.fields;
				}
				$scope.schema = modelService.schemas[$scope.edgeObjectType];
			}
		}		
	}


	$scope.removeImage = function(paneRecord, panelField) {
		paneRecord[panelField.schemaName]=null;
	}

	$scope.replaceImage = function(paneRecord, panelField) {
		
	}

	$scope.addImage = function(paneRecord, panelField) {
		util.navigate('uploadImage', {objectType: $scope.panelInfo.model.objectType, id: $scope.recordItemId, logoField: panelField.schemaName});
	}

	if(util.defined($scope,"panelName")) {
		init();
	}

});

controllers.controller('panelFieldsCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
			if(util.defined(fnd)) {
				$scope.paneRecord = fnd;
			}
		}		
	}

	if(util.defined($scope,"panelName")) {
		init();
	}


	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.getValue = function(schemaName) {
		return $scope.paneRecord[schemaName];
	}

	$scope.getSchemaType = function(field) {
		var fnd = _.findWhere(modelService.schemas[$scope.panelInfo.model.objectType], {name: field.name});
		if(util.defined(fnd)) {
			return fnd.type;
		}
	}

	$scope.editRecord = function() {
		$scope.paneRecord.backup = jQuery.extend(true, {}, $scope.paneRecord);
		$scope.mode='edit';
	}

	$scope.deleteRecord = function() {
		panelFieldsService.deletePanelRecord($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, response) {
			util.navigate($scope.panelInfo.route);
	  });
	}

	$scope.saveRecord = function() {
		if($scope.mode == 'edit') {
			panelFieldsService.updatePanelRecord($scope.panelInfo, $scope.recordItemId, $scope.paneRecord, function(err, response) {
				if($scope.parentController=='panelListCtrl')
					$scope.mode='view';
				else $scope.mode='viewDetails';
	  	});
	  } else {
	  	// Add
			panelFieldsService.addPanelRecord($scope.panelInfo.model.objectType, $scope.paneRecord, function(err, response) {
				if(util.defined(response,'length') && response.length > 0) {
					response[0].id = response[0]['@rid'];
					$scope.panelInfo.records.push(response[0]);
					$scope.recordItemId = response[0]['@rid'];
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
				} else {
					util.navigate($scope.panelInfo.route);
				}
	  	});
	  }
	}

	$scope.cancelRecord = function() {
		if($scope.mode == 'edit') {
			$scope.paneRecord = jQuery.extend(true, {}, $scope.paneRecord.backup);
			if($scope.parentController=='panelListCtrl')
				$scope.mode='view';			
			else $scope.mode='viewDetails';			
		} else {
			util.navigate($scope.panelInfo.route);
		}
	}

	$scope.viewUserDetail = function() {
		util.navigate($scope.panelInfo.userRoute, {id: $scope.recordItemId});
	}


	$scope.viewRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

	$scope.viewList = function() {
		util.navigate($scope.panelInfo.route);
	}

	$scope.addRelationship = function(relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: null, destObjectType: relationItem.destObjectType});
	}

});

controllers.controller('edgeItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.mode='view';
	$scope.controller = 'edgeItemCtrl';
	$scope.findTarget="";
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}
	if(util.defined($stateParams,"edgeObjectType")) {
		$scope.edgeObjectType = $stateParams.edgeObjectType;
	}
	if(util.defined($stateParams,"edgeRecordItemId")) {
		$scope.edgeRecordItemId = $stateParams.edgeRecordItemId;
	}
	if(util.defined($stateParams,"destObjectType")) {
		$scope.destObjectType = $stateParams.destObjectType;
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope,"edgeRecordItemId") && $scope.edgeRecordItemId != "") {


				remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
					if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data[$scope.edgeObjectType];
					}

					remoteDataService.getEdge($scope.edgeObjectType, $scope.edgeRecordItemId, function(err, data) {
						
						$scope.paneRecord = remoteDataService.prepareInboundData(data);
						$scope.paneRecordBackup = remoteDataService.prepareInboundData(data);

						var obj = {};
						for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
							if(util.defined(data,propertyName))
								obj[propertyName]=data[propertyName];
							else obj[propertyName]=null;
						}
						if(util.defined(data,"id"))
								obj.id = data.id;
						$scope.paneRecord = obj;

						if(util.defined(data,"in")) {
							$scope.targetId = data['in'];

							$scope.targets = [];
							remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
								var targets = data;
								for(var i=0; i<targets.length; i++) {
									var target = targets[i];
									var fnd = _.findWhere($scope.recordDetails, {inId: target.id});
									if(targets[i].id == $scope.targetId || !util.defined(fnd)) {
										if(targets[i].id == $scope.targetId)
											targets[i].selected=true;
										else targets[i].selected=false;										
										$scope.targets.push(target);
									}
								}
							});
						}
					});
				});
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;

				remoteDataService.getEdgeBySource($scope.edgeObjectType, $scope.recordItemId, function(err, data) {
					//if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data;
					//}
					remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
						$scope.targets = [];
						var targets = data;
						for(var i=0; i<targets.length; i++) {
							var target = targets[i];
							var fnd = _.findWhere($scope.recordDetails, {in: target.id});	
							if(!util.defined(fnd))
								$scope.targets.push(target);
						}
					});				
				});
			}
		}		
	}
	init();		

	$scope.selectTarget = function(target) {
		for(var i=0; i<$scope.targets.length; i++) {
			$scope.targets[i].selected=false;
		}
		target.selected=true;
	}

	$scope.saveEdge = function() {
		var fnd = _.findWhere($scope.targets, {selected: true});
		if(fnd != null) {
			if($scope.mode == 'add') {
				remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
				});				
			} else {
				remoteDataService.deleteEdge($scope.edgeObjectType, $scope.paneRecordBackup.out, $scope.paneRecordBackup.in, function(err, result) {
					remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
						util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
					});				
				});				
			}
		}
			
	}

	$scope.cancelEdge = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

});


var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('patentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPatentList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('peopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPeopleList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('universityController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  $rootScope.$broadcast('navAdminMode',true);

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vUniversityList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {
  console.log('hi');
  $scope.formData = {
    mode: null,
    objectType: null,
    sourceObjectType: null,
    targetObjectType: null,
    isEdge: 0
  }

  $scope.sourceObjects = [];
  $scope.targetObjects = [];
  $scope.arrRelObjects = [];
  $scope.arrObjects = [];

  $scope.exportCriteria = {
    field: null,
    operator: null,
    value: null
  }

  $scope.criterias = [];

  $scope.selectedObjectTypeFields=null;
  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType,
      sourceObjectTypes: [],
      targetObjectTypes: []     
    }   
    if(util.defined(modelService.models,propertyName + '.isRelationship') && modelService.models[propertyName].isRelationship == true) {
      $scope.arrRelObjects.push(obj);
    }
  }

  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType
    }   
    if(!util.defined(modelService.models,propertyName + '.isRelationship') || modelService.models[propertyName].isRelationship == false) {
      $scope.arrObjects.push(obj);

      if(util.defined(modelService,'models.' + propertyName + '.relationships')) {
        for(var i=0; i<modelService.models[propertyName].relationships.length; i++) {
          var rel = modelService.models[propertyName].relationships[i];
          var fnd = _.findWhere($scope.arrRelObjects, {value: rel.model.objectType});
          var obj = {};
          if(util.defined(fnd)) {
            var fndDupe = _.findWhere(fnd.sourceObjectTypes, {value: modelService.models[propertyName].objectType});
            if(!util.defined(fndDupe)) {
              obj = {
                name: modelService.models[propertyName].displayName,
                value: modelService.models[propertyName].objectType
              }
              fnd.sourceObjectTypes.push(obj);              
            }

            fndDupe = _.findWhere(fnd.targetObjectTypes, {value: rel.destObjectType});
            if(!util.defined(fndDupe)) {

              var fndObj = util.findWhereProp(modelService.models, 'objectType', rel.destObjectType);
              if(util.defined(fndObj)) {
                obj = {
                  name: fndObj.displayName,
                  value: rel.destObjectType
                }           
                fnd.targetObjectTypes.push(obj);                
              }
            }
          }
        }
      }
    }
  }

  remoteDataService.getAllLogInfo(function(err, logInfo) {
    $scope.logInfo = logInfo;
    $scope.jobs = [];
    var lastJob;
    for(var i=0; i<logInfo.length; i++) {
      var data = logInfo[i];
      if(data.file != lastJob) {
        var obj = {
          file: data.file,
          startdatetime: data.startdatetime,
          mode: data.mode,
          sortDate : moment(data.startdatetime).unix()
        }
        $scope.jobs.push(obj);
        lastJob = data.file;
      }
    }
  });

  $scope.deleteCriteria = function(criteria) {
    for(var i=0; i<$scope.criterias.length; i++) {
      if($scope.criterias[i].field == criteria.field) {
        $scope.criterias.splice(i, 1);
        return;
      }
    }
  }

  $scope.addCriteria = function() {
    if(!util.defined($scope,"exportCriteria.field")) {
      alert('Criteria missing field!');
    } else if(!util.defined($scope,"exportCriteria.operator")) {
      alert('Criteria missing operator!');
    } else if(!util.defined($scope,"exportCriteria.value")) {
      alert('Criteria missing value!');
    } else {
      var obj = {
        field: $scope.exportCriteria.field.schemaName,
        operator: $scope.exportCriteria.operator,
        value: $scope.exportCriteria.value        
      }
      $scope.criterias.push(obj);
      $scope.exportCriteria = {
        field: null,
        operator: null,
        value: null
      }     
    }
  }

  $scope.deleteDetails = function(job) {
    remoteDataService.deleteLogInfo(job.file, function(err, logInfo) {
      $state.transitionTo($state.current, $stateParams, {
        reload: true,
        inherit: false,
        notify: true
      });     
    });
  }

  $scope.getDetails = function(job) {
    $scope.logDetails = [];
    $scope.jobDetails = job;
    for(var i=0; i<$scope.logInfo.length; i++) {
      var data = $scope.logInfo[i];
      if(data.file == job.file) {
        var obj = {
          info: data.info
        }
        $scope.logDetails.push(obj);
      }
    }
  }

  $scope.selectObjectType = function() {
    var fnd = _.findWhere($scope.arrRelObjects, {value: $scope.formData.objectType.value});
    if(util.defined(fnd)) {
      $scope.sourceObjects = fnd.sourceObjectTypes;
      $scope.targetObjects = fnd.targetObjectTypes;     
    }

    fnd = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
    if(util.defined(fnd,"fields")) {
      var fndId = _.findWhere(fnd.fields, {schemaName: 'id'});
      if(!util.defined(fndId)) {
        var obj =  {
          schemaName: 'id',
          displayName: 'ID'
        }
        fnd.fields.push(obj);
      }       
      $scope.idFields = fnd.fields;
    }
  }

  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if ($scope.formData.mode != 'export' && vm.upload_form.file.$valid && vm.file) { //check if from is valid

      if(!util.defined($scope,"formData.mode.length") || $scope.formData.mode.length == 0) {
        alert('No Mode selected!')
        return;
      }

      if(util.defined($scope,"formData.objectType.value")) {
        $scope.formData.objectType = $scope.formData.objectType.value;
      } else {
        alert('No Object Type selected!')
        return;
      }

      if($scope.formData.isEdge == "1")
        $scope.formData.isEdge = true;
      else $scope.formData.isEdge = false;

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.sourceObjectType.value")) {
          $scope.formData.sourceObjectType = $scope.formData.sourceObjectType.value;
        } else {
          alert('No Source Object Type selected!')
          return;
        }
      } else {
        $scope.formData.sourceObjectType = null;
      }

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.targetObjectType.value")) {
          $scope.formData.targetObjectType = $scope.formData.targetObjectType.value;
        } else {
          alert('No Target Object Type selected!')
          return;
        }
      } else {
        $scope.formData.targetObjectType = null;
      }

      if(($scope.formData.mode == 'update' || $scope.formData.mode == 'delete') && $scope.formData.isEdge == false) {

        if(util.defined($scope,"formData.idObjField.schemaName")) {
          $scope.formData.idObjField = $scope.formData.idObjField.schemaName;
        } else {
          alert('No Id Object Field selected!')
          return;
        }
      } else {
        $scope.formData.idObjField = null;
      }

      if($scope.formData.mode == 'export') {
        $scope.formData.criterias = $scope.criterias;
      }

      vm.upload(vm.file); //call upload function
    } else {

      if($scope.formData.mode != 'export') {
        alert('No file selected!')  
      } else {
        remoteDataService.exportRecords($scope.formData.objectType.value, $scope.criterias, function(err, data) {
          console.log('Export:');
          if($scope.formData.isEdge == '1')
            $scope.formData.isEdge=true;
          else $scope.formData.isEdge=false;
          if(util.defined(data,"exportData.length")) {
            var recordData = [];
            for(var propertyName in data.exportData) {
              recordData.push(data.exportData[propertyName]);
            }
            console.dir(recordData);
            var obj = {};
            var model = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
            if(util.defined(model,"fields.length")) {
              for(var i=0; i<model.fields.length; i++) {
                var f = model.fields[i];
                obj[f.schemaName] = f.schemaName;
              }           
              obj['id'] = 'id';
              if($scope.formData.isEdge) {
                obj['sourceid'] = 'sourceid';
                obj['targetid'] = 'targetid';
              }
            }
            var json = [obj];
            for(var i=0; i<recordData.length; i++) {
              var rec = recordData[i];
              var obj = {};
              for(var j=0; j<model.fields.length; j++) {
                var f = model.fields[j];
                var schemaInfo = modelService.schemas[$scope.formData.objectType.value][f.schemaName];

                if(util.defined(rec,f.schemaName)) {
                  var val = rec[f.schemaName];
                  if(schemaInfo.type == 'string') {
                    if(util.defined(val) && val.length > 0) {
                      val = val.replace(/["]/g, "\"\"")
                      val = val.replace(/(?:\r\n|\r|\n)/g, ' ');
                      if(val.indexOf(",") > -1) {
                        val = '"' + val + '"';
                      }
                      obj[f.schemaName] = val;                    
                    } else {
                      obj[f.schemaName] = '';  
                    }
                  } if(schemaInfo.type== 'date') {
                    obj[f.schemaName] = moment(val).format("YYYY-MM-DD");
                  }else {
                    obj[f.schemaName] = val; 
                  }
                } else {
                  obj[f.schemaName] = '';
                }
              }
              obj['id'] = rec['@rid'];
              if($scope.formData.isEdge) {
                obj['sourceid'] = rec['out'];
                obj['targetid'] = rec['in'];
              }             
              json.push(obj);
            }
            var csv = util.JSON2CSV(json);
            var fileName = 'data'
            var uri = 'data:text/csv;charset=utf-8,' + escape(csv);
            var link = document.createElement("a");
            link.href = uri
              //link.style = "visibility:hidden"; Causing exception in Chrome - SR 6/15/2015
            link.download = fileName + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }

        });
      }
    }
  }


  vm.upload = function (file) {
    Upload.upload({
      url: '/upload', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData,
        schemas: modelService.schemas
      } //pass file as data, should be user ng-model
  }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        remoteDataService.getLogInfo($scope.file, function(err, data) {

          $timeout( function(){ 
            $state.transitionTo($state.current, $stateParams, {
              reload: true,
              inherit: false,
              notify: true
            });
          }, 3000);

        });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});

var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadImageController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {

  $scope.formData = {
    objectType : $stateParams.objectType,
    logoField: $stateParams.logoField,
    id: $stateParams.id
  }


  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
      vm.upload(vm.file); //call upload function
    } else {
      alert('No file selected!');
    }
  }

  vm.upload = function (file) {
    Upload.upload({
      url: '/uploadImage', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData
      } //pass file as data, should be user ng-model
    }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        // remoteDataService.getLogInfo($scope.file, function(err, data) {
        // });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});

var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userAquisitionsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.acquisition,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Acquisition',
          schemaName: 'name',
          fieldName: 'name',
          route: 'aquisitionsDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        },
        {
          name: 'Date',
          fieldName: 'closedate',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {
                name: 'closedate',
                formatMethod:  util.formatDate,
                formatMethodParam: "MMM, YYYY"              }
              
            ]
          }
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userCompaniesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.company,
      route: 'companies',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'companyDetail'
        },
        {
          name: 'Product Categories',
          schemaName: 'productcategory',
          fieldName: 'productcategory',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userFundingController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'VInvestment',
  		model : modelService.models.investment,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Investment',
          schemaName: 'name',
          fieldName: 'name',
          route: 'fundingDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userInvestorsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vInvestmentGrid',
  		model : modelService.models.investmentfirm,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'investorsDetail'
        },
        {
          name: 'Industry / Sector',
          schemaName: 'industry',
          fieldName: 'industry',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userPeopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vPeopleGrid',
  		model : modelService.models.people,
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'People Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'peopleDetail'
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        },
        {
          name: 'Primary Job',
          schemaName: null,
          fieldName: 'role',
          select: 'outE(EWorksfor).role AS role'
        },
        {
          name: 'Primary Company',
          schemaName: null,
          fieldName: 'company',
          select: "OUT('EWorksfor').name AS company"
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions2 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions2 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });
}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userUniversitiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vUniversityGrid',
  		model : modelService.models.university,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'universitiesDetail'
        },
        {
          name: 'Year Founded',
          schemaName: 'yearfounded',
          fieldName: 'yearfounded',
          route: null
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  
  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentFirmList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('navController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route)
  	}

  	$scope.adminView = function() {
  		util.navigate('companies');
  		$rootScope.$broadcast('navAdminMode',true);
  	}

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('objectDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'remoteDataService','$timeout',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService, $timeout) {

    $scope.util = util;
    $scope.recordItemId = $stateParams.id
    $scope.mode = 'data';
    $scope.depth = 0; 

    $scope.schemas = [];
    for(var propertyName in modelService.models) {
      var obj = {
        objectType: modelService.models[propertyName].objectType,
        model: modelService.models[propertyName]
      }
      $scope.schemas.push(obj);
    }

    function loadNetwork(callback) {
      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, function(err, data) {
        $scope.recordDetailsOrig = data;
        $scope.recDetails={};
        $scope.visNodes=[];
        $scope.visEdges=[];
        for (var property in data) {
          var prop = data[property];
          if(property.indexOf('V') == 0) {
            $scope.recDetails[property] =prop;
            for(var i=0; i<prop.length; i++) {
              
              var name = prop[i]['name'];
              if(property == 'VPatent')
                var name = prop[i]['number'];

              var visObj = {
                id: prop[i]['id'],
                label: name,
                font: {size:12, color:'black', face:'arial'}
              }
              var fndModel = util.findWhereProp(modelService.models, 'objectType', property);
              if(util.defined(fndModel,"color")) {
                visObj.color = fndModel.color;
              }
              if(util.defined(fndModel,"fontColor")) {
                visObj.font.color = fndModel.fontColor;
              }
              $scope.visNodes.push(visObj);
            }
          } else {
            var fnd1 = util.findWhereDeep(prop, 'in', 'inId', $stateParams.id);
            var fnd2 = util.findWhereDeep(prop, 'out', 'outId', $stateParams.id);
            $scope.recDetails[property] = _.union(fnd1, fnd2);                

            for(var i=0; i<prop.length; i++) {
              var visObj = {
                from: prop[i]['out']['outId'],
                to: prop[i]['in']['inId']
              }
              $scope.visEdges.push(visObj);
            }
          }
        }
        callback(err, data);
      });      
    }    

    remoteDataService.fetchRecordByProp(remoteDataService.detailObjectType, '@rid', $scope.recordItemId, function(err, data) {
      if(util.defined(data,"length") && data.length > 0) {
        $scope.objData = data[0];
        var fnd = util.findWhereProp(modelService.models, 'objectType', remoteDataService.detailObjectType);
        if(util.defined(fnd)) {
          $scope.model = fnd;

          loadNetwork(function(err, data) {
            $scope.recordDetails = {};
            for(var i=0; i <$scope.model.relationships.length; i++) {
              var relationship = $scope.model.relationships[i];
              remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
                if(util.defined(returnData,"edgeObjectType")) {
                  // Get Relation ship again
                  relationship = util.findWhereArray($scope.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

                  var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
                  var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
                  if(!util.defined($scope,"recordDetailItem.relationships"))
                    $scope.recordDetails[returnData.edgeObjectType]={};
                  $scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
                  remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
                    $scope.recordDetails[returnData.edgeObjectType].details = detailsData;
                  });
                }
              });
            }
          });
        }
      }
    });

    function drawNetwork() {
      var nodes = new vis.DataSet($scope.visNodes);

      // create an array with edges
      var edges = new vis.DataSet($scope.visEdges);

      // create a network
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {};
      var network = new vis.Network(container, data, options);      
    }

    $scope.zoomOut = function() {
      $scope.depth++;
      loadNetwork(function(err, data) {
        drawNetwork();
      });
    }

    $scope.zoomIn = function() {
      if($scope.depth > 0) {
        $scope.depth--;
        loadNetwork(function(err, data) {
          drawNetwork();
        });        
      } 
    }

    $scope.toggleMode = function() {
      if($scope.mode=='data') {
        $scope.mode='graph';

        $timeout( function(){ 
          drawNetwork();
        });
      } else {
        $scope.mode='data';
      }
    }

    $scope.getCompany = function(companyId, prop) {
      var fnd = util.findDeepParent($scope.recordDetailsOrig.EFunded, 'out', 'outId', companyId);
      if(util.defined(fnd,"in")) {
        return fnd.in[prop];
      }
    }

    $scope.update = function() {
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',remoteDataService.detailObjectType);
      if(util.defined(fnd)) {      
        util.navigate('panelItem', {panelName : fnd.name, recordItemId: $scope.recordItemId, mode: 'viewDetails' })
      }
    }

    $scope.criteriaMatchIn = function() {
      return function( item ) {
        if(item.in.inId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }

    $scope.criteriaMatchOut = function() {
      return function( item ) {
        if(item.out.outId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets

controllers.controller('panelListCtrl', function ($scope, $rootScope, util, panelFieldsService) {

	$scope.util = util;
	$scope.controller = 'panelListCtrl';
	$scope.mode='view';
	if(util.defined($scope,"panelName")) {
		console.log($scope.panelName);
	}
	$scope.recordCount = 0;

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId)) {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			}
		}
	}

	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.addRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add'});
	}

});

controllers.controller('panelItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.models = modelService.models;
	$scope.schemas = modelService.schemas;
	$scope._ = _;
	
	$scope.mode='view';
	$scope.controller = 'panelItemCtrl';
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}

	function loadRelationships() {
		$scope.recordDetails = {};
		for(var i=0; i <$scope.panelInfo.model.relationships.length; i++) {
			var relationship = $scope.panelInfo.model.relationships[i];
			remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
				if(util.defined(returnData,"edgeObjectType")) {
					// Get Relation ship again
					relationship = util.findWhereArray($scope.panelInfo.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

					var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
					var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
					if(!util.defined($scope,"recordDetailItem.relationships"))
						$scope.recordDetails[returnData.edgeObjectType]={};
					$scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
					remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
						$scope.recordDetails[returnData.edgeObjectType].details = detailsData;
					});
				}
			});
		}
	}

	$scope.deleteEdge = function(objectType, recordDetail, relationItem) {
		remoteDataService.deleteEdge(objectType, $scope.recordItemId, recordDetail['in'], function(err, data) {
			remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
				loadRelationships();
			});
		});
	}

	$scope.editEdge = function(objectType, recordDetail, relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'edit', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: recordDetail['@rid'], destObjectType: relationItem.destObjectType});
	}

	$scope.getProperty = function(obj, propertyName) {
		return obj[propertyName];
	}

	$scope.getRelation = function(panelInfo, recordDetails, recordDetail, relationItem) {
		fnd = _.findWhere(recordDetails[relationItem.destObjectType], {id: recordDetail.inId});
		if(util.defined(fnd)) {
			return fnd;
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId) && $scope.recordItemId != "") {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}				
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.panelInfo.model.objectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;
			}				
		}		
		if($scope.mode == 'viewDetails') {
			loadRelationships();
		}

	}

	if(util.defined(panelFieldsService,$scope.panelName + ".panelInfo")) {
		init();
	} else {
			panelFieldsService[$scope.panelName] = {};
			panelFieldsService[$scope.panelName].panelInfo = panelFieldsService.panelInfo[$scope.panelName];
			panelFieldsService.fetchPanelRecords(panelFieldsService[$scope.panelName].panelInfo, function(err, panelListData) {
			init();
		});
	}
});


controllers.controller('panelFieldsViewEditCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService, $timeout) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$scope.schemas = modelService.schemas;
	
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	$scope.fields = null;
	$scope.schema = null;
	$scope.edgeObjectType = null;
	$scope.edgeRecordItemId = null;


	// datepicker
	$scope.dateOptions = {
    dateDisabled: false,
    formatYear: 'yy',
    startingDay: 1
	};

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];  
  $scope.popup1 = {
  	opened:false
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  // ui-select
  var vm = this;

  $scope.people = modelService.piskLists.productcategory.options;

  $scope.formatValue = function(panelField, value) {
  	if(panelField.controlType == 'multiselect') {
  		var names = _.pluck(value, 'name');
  		return names.join(", ");
  	} else{
  		return value;
  	}
  }

  // Normal
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
			if(strs.length > 3) {
				$scope.edgeObjectType = strs[3];
			}
			if(strs.length > 4) {
				$scope.edgeRecordItemId = strs[4];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			
			if($scope.edgeObjectType == null) {
				$scope.fields = $scope.panelInfo.model.fields;
				$scope.schema = modelService.schemas[$scope.panelInfo.model.objectType];
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			} else {

				var fnd = util.findDeep($scope.panelInfo.model.relationships, 'model', 'objectType', $scope.edgeObjectType);
				//_.findWhere($scope.panelInfo.model.relationships, {model.objectType: $scope.edgeObjectType});
				if(util.defined(fnd)) {
					$scope.fields = fnd.fields;
				}
				$scope.schema = modelService.schemas[$scope.edgeObjectType];
			}
		}		
	}


	$scope.removeImage = function(paneRecord, panelField) {
		paneRecord[panelField.schemaName]=null;
	}

	$scope.replaceImage = function(paneRecord, panelField) {
		
	}

	$scope.addImage = function(paneRecord, panelField) {
		util.navigate('uploadImage', {objectType: $scope.panelInfo.model.objectType, id: $scope.recordItemId, logoField: panelField.schemaName});
	}

	if(util.defined($scope,"panelName")) {
		init();
	}

});

controllers.controller('panelFieldsCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
			if(util.defined(fnd)) {
				$scope.paneRecord = fnd;
			}
		}		
	}

	if(util.defined($scope,"panelName")) {
		init();
	}


	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.getValue = function(schemaName) {
		return $scope.paneRecord[schemaName];
	}

	$scope.getSchemaType = function(field) {
		var fnd = _.findWhere(modelService.schemas[$scope.panelInfo.model.objectType], {name: field.name});
		if(util.defined(fnd)) {
			return fnd.type;
		}
	}

	$scope.editRecord = function() {
		$scope.paneRecord.backup = jQuery.extend(true, {}, $scope.paneRecord);
		$scope.mode='edit';
	}

	$scope.deleteRecord = function() {
		panelFieldsService.deletePanelRecord($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, response) {
			util.navigate($scope.panelInfo.route);
	  });
	}

	$scope.saveRecord = function() {
		if($scope.mode == 'edit') {
			panelFieldsService.updatePanelRecord($scope.panelInfo, $scope.recordItemId, $scope.paneRecord, function(err, response) {
				if($scope.parentController=='panelListCtrl')
					$scope.mode='view';
				else $scope.mode='viewDetails';
	  	});
	  } else {
	  	// Add
			panelFieldsService.addPanelRecord($scope.panelInfo.model.objectType, $scope.paneRecord, function(err, response) {
				if(util.defined(response,'length') && response.length > 0) {
					response[0].id = response[0]['@rid'];
					$scope.panelInfo.records.push(response[0]);
					$scope.recordItemId = response[0]['@rid'];
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
				} else {
					util.navigate($scope.panelInfo.route);
				}
	  	});
	  }
	}

	$scope.cancelRecord = function() {
		if($scope.mode == 'edit') {
			$scope.paneRecord = jQuery.extend(true, {}, $scope.paneRecord.backup);
			if($scope.parentController=='panelListCtrl')
				$scope.mode='view';			
			else $scope.mode='viewDetails';			
		} else {
			util.navigate($scope.panelInfo.route);
		}
	}

	$scope.viewUserDetail = function() {
		util.navigate($scope.panelInfo.userRoute, {id: $scope.recordItemId});
	}


	$scope.viewRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

	$scope.viewList = function() {
		util.navigate($scope.panelInfo.route);
	}

	$scope.addRelationship = function(relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: null, destObjectType: relationItem.destObjectType});
	}

});

controllers.controller('edgeItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.mode='view';
	$scope.controller = 'edgeItemCtrl';
	$scope.findTarget="";
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}
	if(util.defined($stateParams,"edgeObjectType")) {
		$scope.edgeObjectType = $stateParams.edgeObjectType;
	}
	if(util.defined($stateParams,"edgeRecordItemId")) {
		$scope.edgeRecordItemId = $stateParams.edgeRecordItemId;
	}
	if(util.defined($stateParams,"destObjectType")) {
		$scope.destObjectType = $stateParams.destObjectType;
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope,"edgeRecordItemId") && $scope.edgeRecordItemId != "") {


				remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
					if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data[$scope.edgeObjectType];
					}

					remoteDataService.getEdge($scope.edgeObjectType, $scope.edgeRecordItemId, function(err, data) {
						
						$scope.paneRecord = remoteDataService.prepareInboundData(data);
						$scope.paneRecordBackup = remoteDataService.prepareInboundData(data);

						var obj = {};
						for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
							if(util.defined(data,propertyName))
								obj[propertyName]=data[propertyName];
							else obj[propertyName]=null;
						}
						if(util.defined(data,"id"))
								obj.id = data.id;
						$scope.paneRecord = obj;

						if(util.defined(data,"in")) {
							$scope.targetId = data['in'];

							$scope.targets = [];
							remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
								var targets = data;
								for(var i=0; i<targets.length; i++) {
									var target = targets[i];
									var fnd = _.findWhere($scope.recordDetails, {inId: target.id});
									if(targets[i].id == $scope.targetId || !util.defined(fnd)) {
										if(targets[i].id == $scope.targetId)
											targets[i].selected=true;
										else targets[i].selected=false;										
										$scope.targets.push(target);
									}
								}
							});
						}
					});
				});
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;

				remoteDataService.getEdgeBySource($scope.edgeObjectType, $scope.recordItemId, function(err, data) {
					//if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data;
					//}
					remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
						$scope.targets = [];
						var targets = data;
						for(var i=0; i<targets.length; i++) {
							var target = targets[i];
							var fnd = _.findWhere($scope.recordDetails, {in: target.id});	
							if(!util.defined(fnd))
								$scope.targets.push(target);
						}
					});				
				});
			}
		}		
	}
	init();		

	$scope.selectTarget = function(target) {
		for(var i=0; i<$scope.targets.length; i++) {
			$scope.targets[i].selected=false;
		}
		target.selected=true;
	}

	$scope.saveEdge = function() {
		var fnd = _.findWhere($scope.targets, {selected: true});
		if(fnd != null) {
			if($scope.mode == 'add') {
				remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
				});				
			} else {
				remoteDataService.deleteEdge($scope.edgeObjectType, $scope.paneRecordBackup.out, $scope.paneRecordBackup.in, function(err, result) {
					remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
						util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
					});				
				});				
			}
		}
			
	}

	$scope.cancelEdge = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

});


var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('patentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPatentList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('peopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPeopleList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('universityController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  $rootScope.$broadcast('navAdminMode',true);

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vUniversityList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {
  console.log('hi');
  $scope.formData = {
    mode: null,
    objectType: null,
    sourceObjectType: null,
    targetObjectType: null,
    isEdge: 0
  }

  $scope.sourceObjects = [];
  $scope.targetObjects = [];
  $scope.arrRelObjects = [];
  $scope.arrObjects = [];

  $scope.exportCriteria = {
    field: null,
    operator: null,
    value: null
  }

  $scope.criterias = [];

  $scope.selectedObjectTypeFields=null;
  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType,
      sourceObjectTypes: [],
      targetObjectTypes: []     
    }   
    if(util.defined(modelService.models,propertyName + '.isRelationship') && modelService.models[propertyName].isRelationship == true) {
      $scope.arrRelObjects.push(obj);
    }
  }

  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType
    }   
    if(!util.defined(modelService.models,propertyName + '.isRelationship') || modelService.models[propertyName].isRelationship == false) {
      $scope.arrObjects.push(obj);

      if(util.defined(modelService,'models.' + propertyName + '.relationships')) {
        for(var i=0; i<modelService.models[propertyName].relationships.length; i++) {
          var rel = modelService.models[propertyName].relationships[i];
          var fnd = _.findWhere($scope.arrRelObjects, {value: rel.model.objectType});
          var obj = {};
          if(util.defined(fnd)) {
            var fndDupe = _.findWhere(fnd.sourceObjectTypes, {value: modelService.models[propertyName].objectType});
            if(!util.defined(fndDupe)) {
              obj = {
                name: modelService.models[propertyName].displayName,
                value: modelService.models[propertyName].objectType
              }
              fnd.sourceObjectTypes.push(obj);              
            }

            fndDupe = _.findWhere(fnd.targetObjectTypes, {value: rel.destObjectType});
            if(!util.defined(fndDupe)) {

              var fndObj = util.findWhereProp(modelService.models, 'objectType', rel.destObjectType);
              if(util.defined(fndObj)) {
                obj = {
                  name: fndObj.displayName,
                  value: rel.destObjectType
                }           
                fnd.targetObjectTypes.push(obj);                
              }
            }
          }
        }
      }
    }
  }

  remoteDataService.getAllLogInfo(function(err, logInfo) {
    $scope.logInfo = logInfo;
    $scope.jobs = [];
    var lastJob;
    for(var i=0; i<logInfo.length; i++) {
      var data = logInfo[i];
      if(data.file != lastJob) {
        var obj = {
          file: data.file,
          startdatetime: data.startdatetime,
          mode: data.mode,
          sortDate : moment(data.startdatetime).unix()
        }
        $scope.jobs.push(obj);
        lastJob = data.file;
      }
    }
  });

  $scope.deleteCriteria = function(criteria) {
    for(var i=0; i<$scope.criterias.length; i++) {
      if($scope.criterias[i].field == criteria.field) {
        $scope.criterias.splice(i, 1);
        return;
      }
    }
  }

  $scope.addCriteria = function() {
    if(!util.defined($scope,"exportCriteria.field")) {
      alert('Criteria missing field!');
    } else if(!util.defined($scope,"exportCriteria.operator")) {
      alert('Criteria missing operator!');
    } else if(!util.defined($scope,"exportCriteria.value")) {
      alert('Criteria missing value!');
    } else {
      var obj = {
        field: $scope.exportCriteria.field.schemaName,
        operator: $scope.exportCriteria.operator,
        value: $scope.exportCriteria.value        
      }
      $scope.criterias.push(obj);
      $scope.exportCriteria = {
        field: null,
        operator: null,
        value: null
      }     
    }
  }

  $scope.deleteDetails = function(job) {
    remoteDataService.deleteLogInfo(job.file, function(err, logInfo) {
      $state.transitionTo($state.current, $stateParams, {
        reload: true,
        inherit: false,
        notify: true
      });     
    });
  }

  $scope.getDetails = function(job) {
    $scope.logDetails = [];
    $scope.jobDetails = job;
    for(var i=0; i<$scope.logInfo.length; i++) {
      var data = $scope.logInfo[i];
      if(data.file == job.file) {
        var obj = {
          info: data.info
        }
        $scope.logDetails.push(obj);
      }
    }
  }

  $scope.selectObjectType = function() {
    var fnd = _.findWhere($scope.arrRelObjects, {value: $scope.formData.objectType.value});
    if(util.defined(fnd)) {
      $scope.sourceObjects = fnd.sourceObjectTypes;
      $scope.targetObjects = fnd.targetObjectTypes;     
    }

    fnd = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
    if(util.defined(fnd,"fields")) {
      var fndId = _.findWhere(fnd.fields, {schemaName: 'id'});
      if(!util.defined(fndId)) {
        var obj =  {
          schemaName: 'id',
          displayName: 'ID'
        }
        fnd.fields.push(obj);
      }       
      $scope.idFields = fnd.fields;
    }
  }

  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if ($scope.formData.mode != 'export' && vm.upload_form.file.$valid && vm.file) { //check if from is valid

      if(!util.defined($scope,"formData.mode.length") || $scope.formData.mode.length == 0) {
        alert('No Mode selected!')
        return;
      }

      if(util.defined($scope,"formData.objectType.value")) {
        $scope.formData.objectType = $scope.formData.objectType.value;
      } else {
        alert('No Object Type selected!')
        return;
      }

      if($scope.formData.isEdge == "1")
        $scope.formData.isEdge = true;
      else $scope.formData.isEdge = false;

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.sourceObjectType.value")) {
          $scope.formData.sourceObjectType = $scope.formData.sourceObjectType.value;
        } else {
          alert('No Source Object Type selected!')
          return;
        }
      } else {
        $scope.formData.sourceObjectType = null;
      }

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.targetObjectType.value")) {
          $scope.formData.targetObjectType = $scope.formData.targetObjectType.value;
        } else {
          alert('No Target Object Type selected!')
          return;
        }
      } else {
        $scope.formData.targetObjectType = null;
      }

      if(($scope.formData.mode == 'update' || $scope.formData.mode == 'delete') && $scope.formData.isEdge == false) {

        if(util.defined($scope,"formData.idObjField.schemaName")) {
          $scope.formData.idObjField = $scope.formData.idObjField.schemaName;
        } else {
          alert('No Id Object Field selected!')
          return;
        }
      } else {
        $scope.formData.idObjField = null;
      }

      if($scope.formData.mode == 'export') {
        $scope.formData.criterias = $scope.criterias;
      }

      vm.upload(vm.file); //call upload function
    } else {

      if($scope.formData.mode != 'export') {
        alert('No file selected!')  
      } else {
        remoteDataService.exportRecords($scope.formData.objectType.value, $scope.criterias, function(err, data) {
          console.log('Export:');
          if($scope.formData.isEdge == '1')
            $scope.formData.isEdge=true;
          else $scope.formData.isEdge=false;
          if(util.defined(data,"exportData.length")) {
            var recordData = [];
            for(var propertyName in data.exportData) {
              recordData.push(data.exportData[propertyName]);
            }
            console.dir(recordData);
            var obj = {};
            var model = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
            if(util.defined(model,"fields.length")) {
              for(var i=0; i<model.fields.length; i++) {
                var f = model.fields[i];
                obj[f.schemaName] = f.schemaName;
              }           
              obj['id'] = 'id';
              if($scope.formData.isEdge) {
                obj['sourceid'] = 'sourceid';
                obj['targetid'] = 'targetid';
              }
            }
            var json = [obj];
            for(var i=0; i<recordData.length; i++) {
              var rec = recordData[i];
              var obj = {};
              for(var j=0; j<model.fields.length; j++) {
                var f = model.fields[j];
                var schemaInfo = modelService.schemas[$scope.formData.objectType.value][f.schemaName];

                if(util.defined(rec,f.schemaName)) {
                  var val = rec[f.schemaName];
                  if(schemaInfo.type == 'string') {
                    if(util.defined(val) && val.length > 0) {
                      val = val.replace(/["]/g, "\"\"")
                      val = val.replace(/(?:\r\n|\r|\n)/g, ' ');
                      if(val.indexOf(",") > -1) {
                        val = '"' + val + '"';
                      }
                      obj[f.schemaName] = val;                    
                    } else {
                      obj[f.schemaName] = '';  
                    }
                  } if(schemaInfo.type== 'date') {
                    obj[f.schemaName] = moment(val).format("YYYY-MM-DD");
                  }else {
                    obj[f.schemaName] = val; 
                  }
                } else {
                  obj[f.schemaName] = '';
                }
              }
              obj['id'] = rec['@rid'];
              if($scope.formData.isEdge) {
                obj['sourceid'] = rec['out'];
                obj['targetid'] = rec['in'];
              }             
              json.push(obj);
            }
            var csv = util.JSON2CSV(json);
            var fileName = 'data'
            var uri = 'data:text/csv;charset=utf-8,' + escape(csv);
            var link = document.createElement("a");
            link.href = uri
              //link.style = "visibility:hidden"; Causing exception in Chrome - SR 6/15/2015
            link.download = fileName + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }

        });
      }
    }
  }


  vm.upload = function (file) {
    Upload.upload({
      url: '/upload', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData,
        schemas: modelService.schemas
      } //pass file as data, should be user ng-model
  }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        remoteDataService.getLogInfo($scope.file, function(err, data) {

          $timeout( function(){ 
            $state.transitionTo($state.current, $stateParams, {
              reload: true,
              inherit: false,
              notify: true
            });
          }, 3000);

        });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});

var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadImageController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {

  $scope.formData = {
    objectType : $stateParams.objectType,
    logoField: $stateParams.logoField,
    id: $stateParams.id
  }


  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
      vm.upload(vm.file); //call upload function
    } else {
      alert('No file selected!');
    }
  }

  vm.upload = function (file) {
    Upload.upload({
      url: '/uploadImage', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData
      } //pass file as data, should be user ng-model
    }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        // remoteDataService.getLogInfo($scope.file, function(err, data) {
        // });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});

var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userAquisitionsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.acquisition,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Acquisition',
          schemaName: 'name',
          fieldName: 'name',
          route: 'aquisitionsDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        },
        {
          name: 'Date',
          fieldName: 'closedate',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {
                name: 'closedate',
                formatMethod:  util.formatDate,
                formatMethodParam: "MMM, YYYY"              }
              
            ]
          }
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userCompaniesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.company,
      route: 'companies',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'companyDetail'
        },
        {
          name: 'Product Categories',
          schemaName: 'productcategory',
          fieldName: 'productcategory',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userFundingController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'VInvestment',
  		model : modelService.models.investment,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Investment',
          schemaName: 'name',
          fieldName: 'name',
          route: 'fundingDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userInvestorsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vInvestmentGrid',
  		model : modelService.models.investmentfirm,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'investorsDetail'
        },
        {
          name: 'Industry / Sector',
          schemaName: 'industry',
          fieldName: 'industry',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userPeopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vPeopleGrid',
  		model : modelService.models.people,
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'People Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'peopleDetail'
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        },
        {
          name: 'Primary Job',
          schemaName: null,
          fieldName: 'role',
          select: 'outE(EWorksfor).role AS role'
        },
        {
          name: 'Primary Company',
          schemaName: null,
          fieldName: 'company',
          select: "OUT('EWorksfor').name AS company"
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions2 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions2 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });
}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userUniversitiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vUniversityGrid',
  		model : modelService.models.university,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'universitiesDetail'
        },
        {
          name: 'Year Founded',
          schemaName: 'yearfounded',
          fieldName: 'yearfounded',
          route: null
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  
  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentFirmList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('navController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route)
  	}

  	$scope.adminView = function() {
  		util.navigate('companies');
  		$rootScope.$broadcast('navAdminMode',true);
  	}

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('objectDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'remoteDataService','$timeout',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService, $timeout) {

    $scope.util = util;
    $scope.recordItemId = $stateParams.id
    $scope.mode = 'data';
    $scope.depth = 0; 

    $scope.schemas = [];
    for(var propertyName in modelService.models) {
      var obj = {
        objectType: modelService.models[propertyName].objectType,
        model: modelService.models[propertyName]
      }
      $scope.schemas.push(obj);
    }

    function loadNetwork(callback) {
      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, function(err, data) {
        $scope.recordDetailsOrig = data;
        $scope.recDetails={};
        $scope.visNodes=[];
        $scope.visEdges=[];
        for (var property in data) {
          var prop = data[property];
          if(property.indexOf('V') == 0) {
            $scope.recDetails[property] =prop;
            for(var i=0; i<prop.length; i++) {
              
              var name = prop[i]['name'];
              if(property == 'VPatent')
                var name = prop[i]['number'];

              var visObj = {
                id: prop[i]['id'],
                label: name,
                font: {size:12, color:'black', face:'arial'}
              }
              var fndModel = util.findWhereProp(modelService.models, 'objectType', property);
              if(util.defined(fndModel,"color")) {
                visObj.color = fndModel.color;
              }
              if(util.defined(fndModel,"fontColor")) {
                visObj.font.color = fndModel.fontColor;
              }
              $scope.visNodes.push(visObj);
            }
          } else {
            var fnd1 = util.findWhereDeep(prop, 'in', 'inId', $stateParams.id);
            var fnd2 = util.findWhereDeep(prop, 'out', 'outId', $stateParams.id);
            $scope.recDetails[property] = _.union(fnd1, fnd2);                

            for(var i=0; i<prop.length; i++) {
              var visObj = {
                from: prop[i]['out']['outId'],
                to: prop[i]['in']['inId']
              }
              $scope.visEdges.push(visObj);
            }
          }
        }
        callback(err, data);
      });      
    }    

    remoteDataService.fetchRecordByProp(remoteDataService.detailObjectType, '@rid', $scope.recordItemId, function(err, data) {
      if(util.defined(data,"length") && data.length > 0) {
        $scope.objData = data[0];
        var fnd = util.findWhereProp(modelService.models, 'objectType', remoteDataService.detailObjectType);
        if(util.defined(fnd)) {
          $scope.model = fnd;

          loadNetwork(function(err, data) {
            $scope.recordDetails = {};
            for(var i=0; i <$scope.model.relationships.length; i++) {
              var relationship = $scope.model.relationships[i];
              remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
                if(util.defined(returnData,"edgeObjectType")) {
                  // Get Relation ship again
                  relationship = util.findWhereArray($scope.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

                  var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
                  var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
                  if(!util.defined($scope,"recordDetailItem.relationships"))
                    $scope.recordDetails[returnData.edgeObjectType]={};
                  $scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
                  remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
                    $scope.recordDetails[returnData.edgeObjectType].details = detailsData;
                  });
                }
              });
            }
          });
        }
      }
    });

    function drawNetwork() {
      var nodes = new vis.DataSet($scope.visNodes);

      // create an array with edges
      var edges = new vis.DataSet($scope.visEdges);

      // create a network
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {};
      var network = new vis.Network(container, data, options);      
    }

    $scope.zoomOut = function() {
      $scope.depth++;
      loadNetwork(function(err, data) {
        drawNetwork();
      });
    }

    $scope.zoomIn = function() {
      if($scope.depth > 0) {
        $scope.depth--;
        loadNetwork(function(err, data) {
          drawNetwork();
        });        
      } 
    }

    $scope.toggleMode = function() {
      if($scope.mode=='data') {
        $scope.mode='graph';

        $timeout( function(){ 
          drawNetwork();
        });
      } else {
        $scope.mode='data';
      }
    }

    $scope.getCompany = function(companyId, prop) {
      var fnd = util.findDeepParent($scope.recordDetailsOrig.EFunded, 'out', 'outId', companyId);
      if(util.defined(fnd,"in")) {
        return fnd.in[prop];
      }
    }

    $scope.update = function() {
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',remoteDataService.detailObjectType);
      if(util.defined(fnd)) {      
        util.navigate('panelItem', {panelName : fnd.name, recordItemId: $scope.recordItemId, mode: 'viewDetails' })
      }
    }

    $scope.criteriaMatchIn = function() {
      return function( item ) {
        if(item.in.inId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }

    $scope.criteriaMatchOut = function() {
      return function( item ) {
        if(item.out.outId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets

controllers.controller('panelListCtrl', function ($scope, $rootScope, util, panelFieldsService) {

	$scope.util = util;
	$scope.controller = 'panelListCtrl';
	$scope.mode='view';
	if(util.defined($scope,"panelName")) {
		console.log($scope.panelName);
	}
	$scope.recordCount = 0;

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId)) {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			}
		}
	}

	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.addRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add'});
	}

});

controllers.controller('panelItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.models = modelService.models;
	$scope.schemas = modelService.schemas;
	$scope._ = _;
	
	$scope.mode='view';
	$scope.controller = 'panelItemCtrl';
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}

	function loadRelationships() {
		$scope.recordDetails = {};
		for(var i=0; i <$scope.panelInfo.model.relationships.length; i++) {
			var relationship = $scope.panelInfo.model.relationships[i];
			remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
				if(util.defined(returnData,"edgeObjectType")) {
					// Get Relation ship again
					relationship = util.findWhereArray($scope.panelInfo.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

					var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
					var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
					if(!util.defined($scope,"recordDetailItem.relationships"))
						$scope.recordDetails[returnData.edgeObjectType]={};
					$scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
					remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
						$scope.recordDetails[returnData.edgeObjectType].details = detailsData;
					});
				}
			});
		}
	}

	$scope.deleteEdge = function(objectType, recordDetail, relationItem) {
		remoteDataService.deleteEdge(objectType, $scope.recordItemId, recordDetail['in'], function(err, data) {
			remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
				loadRelationships();
			});
		});
	}

	$scope.editEdge = function(objectType, recordDetail, relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'edit', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: recordDetail['@rid'], destObjectType: relationItem.destObjectType});
	}

	$scope.getProperty = function(obj, propertyName) {
		return obj[propertyName];
	}

	$scope.getRelation = function(panelInfo, recordDetails, recordDetail, relationItem) {
		fnd = _.findWhere(recordDetails[relationItem.destObjectType], {id: recordDetail.inId});
		if(util.defined(fnd)) {
			return fnd;
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId) && $scope.recordItemId != "") {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}				
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.panelInfo.model.objectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;
			}				
		}		
		if($scope.mode == 'viewDetails') {
			loadRelationships();
		}

	}

	if(util.defined(panelFieldsService,$scope.panelName + ".panelInfo")) {
		init();
	} else {
			panelFieldsService[$scope.panelName] = {};
			panelFieldsService[$scope.panelName].panelInfo = panelFieldsService.panelInfo[$scope.panelName];
			panelFieldsService.fetchPanelRecords(panelFieldsService[$scope.panelName].panelInfo, function(err, panelListData) {
			init();
		});
	}
});


controllers.controller('panelFieldsViewEditCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService, $timeout) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$scope.schemas = modelService.schemas;
	
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	$scope.fields = null;
	$scope.schema = null;
	$scope.edgeObjectType = null;
	$scope.edgeRecordItemId = null;


	// datepicker
	$scope.dateOptions = {
    dateDisabled: false,
    formatYear: 'yy',
    startingDay: 1
	};

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];  
  $scope.popup1 = {
  	opened:false
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  // ui-select
  var vm = this;

  $scope.people = modelService.piskLists.productcategory.options;

  $scope.formatValue = function(panelField, value) {
  	if(panelField.controlType == 'multiselect') {
  		var names = _.pluck(value, 'name');
  		return names.join(", ");
  	} else{
  		return value;
  	}
  }

  // Normal
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
			if(strs.length > 3) {
				$scope.edgeObjectType = strs[3];
			}
			if(strs.length > 4) {
				$scope.edgeRecordItemId = strs[4];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			
			if($scope.edgeObjectType == null) {
				$scope.fields = $scope.panelInfo.model.fields;
				$scope.schema = modelService.schemas[$scope.panelInfo.model.objectType];
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			} else {

				var fnd = util.findDeep($scope.panelInfo.model.relationships, 'model', 'objectType', $scope.edgeObjectType);
				//_.findWhere($scope.panelInfo.model.relationships, {model.objectType: $scope.edgeObjectType});
				if(util.defined(fnd)) {
					$scope.fields = fnd.fields;
				}
				$scope.schema = modelService.schemas[$scope.edgeObjectType];
			}
		}		
	}


	$scope.removeImage = function(paneRecord, panelField) {
		paneRecord[panelField.schemaName]=null;
	}

	$scope.replaceImage = function(paneRecord, panelField) {
		
	}

	$scope.addImage = function(paneRecord, panelField) {
		util.navigate('uploadImage', {objectType: $scope.panelInfo.model.objectType, id: $scope.recordItemId, logoField: panelField.schemaName});
	}

	if(util.defined($scope,"panelName")) {
		init();
	}

});

controllers.controller('panelFieldsCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
			if(util.defined(fnd)) {
				$scope.paneRecord = fnd;
			}
		}		
	}

	if(util.defined($scope,"panelName")) {
		init();
	}


	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.getValue = function(schemaName) {
		return $scope.paneRecord[schemaName];
	}

	$scope.getSchemaType = function(field) {
		var fnd = _.findWhere(modelService.schemas[$scope.panelInfo.model.objectType], {name: field.name});
		if(util.defined(fnd)) {
			return fnd.type;
		}
	}

	$scope.editRecord = function() {
		$scope.paneRecord.backup = jQuery.extend(true, {}, $scope.paneRecord);
		$scope.mode='edit';
	}

	$scope.deleteRecord = function() {
		panelFieldsService.deletePanelRecord($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, response) {
			util.navigate($scope.panelInfo.route);
	  });
	}

	$scope.saveRecord = function() {
		if($scope.mode == 'edit') {
			panelFieldsService.updatePanelRecord($scope.panelInfo, $scope.recordItemId, $scope.paneRecord, function(err, response) {
				if($scope.parentController=='panelListCtrl')
					$scope.mode='view';
				else $scope.mode='viewDetails';
	  	});
	  } else {
	  	// Add
			panelFieldsService.addPanelRecord($scope.panelInfo.model.objectType, $scope.paneRecord, function(err, response) {
				if(util.defined(response,'length') && response.length > 0) {
					response[0].id = response[0]['@rid'];
					$scope.panelInfo.records.push(response[0]);
					$scope.recordItemId = response[0]['@rid'];
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
				} else {
					util.navigate($scope.panelInfo.route);
				}
	  	});
	  }
	}

	$scope.cancelRecord = function() {
		if($scope.mode == 'edit') {
			$scope.paneRecord = jQuery.extend(true, {}, $scope.paneRecord.backup);
			if($scope.parentController=='panelListCtrl')
				$scope.mode='view';			
			else $scope.mode='viewDetails';			
		} else {
			util.navigate($scope.panelInfo.route);
		}
	}

	$scope.viewUserDetail = function() {
		util.navigate($scope.panelInfo.userRoute, {id: $scope.recordItemId});
	}


	$scope.viewRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

	$scope.viewList = function() {
		util.navigate($scope.panelInfo.route);
	}

	$scope.addRelationship = function(relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: null, destObjectType: relationItem.destObjectType});
	}

});

controllers.controller('edgeItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.mode='view';
	$scope.controller = 'edgeItemCtrl';
	$scope.findTarget="";
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}
	if(util.defined($stateParams,"edgeObjectType")) {
		$scope.edgeObjectType = $stateParams.edgeObjectType;
	}
	if(util.defined($stateParams,"edgeRecordItemId")) {
		$scope.edgeRecordItemId = $stateParams.edgeRecordItemId;
	}
	if(util.defined($stateParams,"destObjectType")) {
		$scope.destObjectType = $stateParams.destObjectType;
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope,"edgeRecordItemId") && $scope.edgeRecordItemId != "") {


				remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
					if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data[$scope.edgeObjectType];
					}

					remoteDataService.getEdge($scope.edgeObjectType, $scope.edgeRecordItemId, function(err, data) {
						
						$scope.paneRecord = remoteDataService.prepareInboundData(data);
						$scope.paneRecordBackup = remoteDataService.prepareInboundData(data);

						var obj = {};
						for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
							if(util.defined(data,propertyName))
								obj[propertyName]=data[propertyName];
							else obj[propertyName]=null;
						}
						if(util.defined(data,"id"))
								obj.id = data.id;
						$scope.paneRecord = obj;

						if(util.defined(data,"in")) {
							$scope.targetId = data['in'];

							$scope.targets = [];
							remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
								var targets = data;
								for(var i=0; i<targets.length; i++) {
									var target = targets[i];
									var fnd = _.findWhere($scope.recordDetails, {inId: target.id});
									if(targets[i].id == $scope.targetId || !util.defined(fnd)) {
										if(targets[i].id == $scope.targetId)
											targets[i].selected=true;
										else targets[i].selected=false;										
										$scope.targets.push(target);
									}
								}
							});
						}
					});
				});
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;

				remoteDataService.getEdgeBySource($scope.edgeObjectType, $scope.recordItemId, function(err, data) {
					//if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data;
					//}
					remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
						$scope.targets = [];
						var targets = data;
						for(var i=0; i<targets.length; i++) {
							var target = targets[i];
							var fnd = _.findWhere($scope.recordDetails, {in: target.id});	
							if(!util.defined(fnd))
								$scope.targets.push(target);
						}
					});				
				});
			}
		}		
	}
	init();		

	$scope.selectTarget = function(target) {
		for(var i=0; i<$scope.targets.length; i++) {
			$scope.targets[i].selected=false;
		}
		target.selected=true;
	}

	$scope.saveEdge = function() {
		var fnd = _.findWhere($scope.targets, {selected: true});
		if(fnd != null) {
			if($scope.mode == 'add') {
				remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
				});				
			} else {
				remoteDataService.deleteEdge($scope.edgeObjectType, $scope.paneRecordBackup.out, $scope.paneRecordBackup.in, function(err, result) {
					remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
						util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
					});				
				});				
			}
		}
			
	}

	$scope.cancelEdge = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

});


var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('patentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPatentList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('peopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPeopleList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('universityController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  $rootScope.$broadcast('navAdminMode',true);

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vUniversityList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {
  console.log('hi');
  $scope.formData = {
    mode: null,
    objectType: null,
    sourceObjectType: null,
    targetObjectType: null,
    isEdge: 0
  }

  $scope.sourceObjects = [];
  $scope.targetObjects = [];
  $scope.arrRelObjects = [];
  $scope.arrObjects = [];

  $scope.exportCriteria = {
    field: null,
    operator: null,
    value: null
  }

  $scope.criterias = [];

  $scope.selectedObjectTypeFields=null;
  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType,
      sourceObjectTypes: [],
      targetObjectTypes: []     
    }   
    if(util.defined(modelService.models,propertyName + '.isRelationship') && modelService.models[propertyName].isRelationship == true) {
      $scope.arrRelObjects.push(obj);
    }
  }

  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType
    }   
    if(!util.defined(modelService.models,propertyName + '.isRelationship') || modelService.models[propertyName].isRelationship == false) {
      $scope.arrObjects.push(obj);

      if(util.defined(modelService,'models.' + propertyName + '.relationships')) {
        for(var i=0; i<modelService.models[propertyName].relationships.length; i++) {
          var rel = modelService.models[propertyName].relationships[i];
          var fnd = _.findWhere($scope.arrRelObjects, {value: rel.model.objectType});
          var obj = {};
          if(util.defined(fnd)) {
            var fndDupe = _.findWhere(fnd.sourceObjectTypes, {value: modelService.models[propertyName].objectType});
            if(!util.defined(fndDupe)) {
              obj = {
                name: modelService.models[propertyName].displayName,
                value: modelService.models[propertyName].objectType
              }
              fnd.sourceObjectTypes.push(obj);              
            }

            fndDupe = _.findWhere(fnd.targetObjectTypes, {value: rel.destObjectType});
            if(!util.defined(fndDupe)) {

              var fndObj = util.findWhereProp(modelService.models, 'objectType', rel.destObjectType);
              if(util.defined(fndObj)) {
                obj = {
                  name: fndObj.displayName,
                  value: rel.destObjectType
                }           
                fnd.targetObjectTypes.push(obj);                
              }
            }
          }
        }
      }
    }
  }

  remoteDataService.getAllLogInfo(function(err, logInfo) {
    $scope.logInfo = logInfo;
    $scope.jobs = [];
    var lastJob;
    for(var i=0; i<logInfo.length; i++) {
      var data = logInfo[i];
      if(data.file != lastJob) {
        var obj = {
          file: data.file,
          startdatetime: data.startdatetime,
          mode: data.mode,
          sortDate : moment(data.startdatetime).unix()
        }
        $scope.jobs.push(obj);
        lastJob = data.file;
      }
    }
  });

  $scope.deleteCriteria = function(criteria) {
    for(var i=0; i<$scope.criterias.length; i++) {
      if($scope.criterias[i].field == criteria.field) {
        $scope.criterias.splice(i, 1);
        return;
      }
    }
  }

  $scope.addCriteria = function() {
    if(!util.defined($scope,"exportCriteria.field")) {
      alert('Criteria missing field!');
    } else if(!util.defined($scope,"exportCriteria.operator")) {
      alert('Criteria missing operator!');
    } else if(!util.defined($scope,"exportCriteria.value")) {
      alert('Criteria missing value!');
    } else {
      var obj = {
        field: $scope.exportCriteria.field.schemaName,
        operator: $scope.exportCriteria.operator,
        value: $scope.exportCriteria.value        
      }
      $scope.criterias.push(obj);
      $scope.exportCriteria = {
        field: null,
        operator: null,
        value: null
      }     
    }
  }

  $scope.deleteDetails = function(job) {
    remoteDataService.deleteLogInfo(job.file, function(err, logInfo) {
      $state.transitionTo($state.current, $stateParams, {
        reload: true,
        inherit: false,
        notify: true
      });     
    });
  }

  $scope.getDetails = function(job) {
    $scope.logDetails = [];
    $scope.jobDetails = job;
    for(var i=0; i<$scope.logInfo.length; i++) {
      var data = $scope.logInfo[i];
      if(data.file == job.file) {
        var obj = {
          info: data.info
        }
        $scope.logDetails.push(obj);
      }
    }
  }

  $scope.selectObjectType = function() {
    var fnd = _.findWhere($scope.arrRelObjects, {value: $scope.formData.objectType.value});
    if(util.defined(fnd)) {
      $scope.sourceObjects = fnd.sourceObjectTypes;
      $scope.targetObjects = fnd.targetObjectTypes;     
    }

    fnd = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
    if(util.defined(fnd,"fields")) {
      var fndId = _.findWhere(fnd.fields, {schemaName: 'id'});
      if(!util.defined(fndId)) {
        var obj =  {
          schemaName: 'id',
          displayName: 'ID'
        }
        fnd.fields.push(obj);
      }       
      $scope.idFields = fnd.fields;
    }
  }

  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if ($scope.formData.mode != 'export' && vm.upload_form.file.$valid && vm.file) { //check if from is valid

      if(!util.defined($scope,"formData.mode.length") || $scope.formData.mode.length == 0) {
        alert('No Mode selected!')
        return;
      }

      if(util.defined($scope,"formData.objectType.value")) {
        $scope.formData.objectType = $scope.formData.objectType.value;
      } else {
        alert('No Object Type selected!')
        return;
      }

      if($scope.formData.isEdge == "1")
        $scope.formData.isEdge = true;
      else $scope.formData.isEdge = false;

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.sourceObjectType.value")) {
          $scope.formData.sourceObjectType = $scope.formData.sourceObjectType.value;
        } else {
          alert('No Source Object Type selected!')
          return;
        }
      } else {
        $scope.formData.sourceObjectType = null;
      }

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.targetObjectType.value")) {
          $scope.formData.targetObjectType = $scope.formData.targetObjectType.value;
        } else {
          alert('No Target Object Type selected!')
          return;
        }
      } else {
        $scope.formData.targetObjectType = null;
      }

      if(($scope.formData.mode == 'update' || $scope.formData.mode == 'delete') && $scope.formData.isEdge == false) {

        if(util.defined($scope,"formData.idObjField.schemaName")) {
          $scope.formData.idObjField = $scope.formData.idObjField.schemaName;
        } else {
          alert('No Id Object Field selected!')
          return;
        }
      } else {
        $scope.formData.idObjField = null;
      }

      if($scope.formData.mode == 'export') {
        $scope.formData.criterias = $scope.criterias;
      }

      vm.upload(vm.file); //call upload function
    } else {

      if($scope.formData.mode != 'export') {
        alert('No file selected!')  
      } else {
        remoteDataService.exportRecords($scope.formData.objectType.value, $scope.criterias, function(err, data) {
          console.log('Export:');
          if($scope.formData.isEdge == '1')
            $scope.formData.isEdge=true;
          else $scope.formData.isEdge=false;
          if(util.defined(data,"exportData.length")) {
            var recordData = [];
            for(var propertyName in data.exportData) {
              recordData.push(data.exportData[propertyName]);
            }
            console.dir(recordData);
            var obj = {};
            var model = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
            if(util.defined(model,"fields.length")) {
              for(var i=0; i<model.fields.length; i++) {
                var f = model.fields[i];
                obj[f.schemaName] = f.schemaName;
              }           
              obj['id'] = 'id';
              if($scope.formData.isEdge) {
                obj['sourceid'] = 'sourceid';
                obj['targetid'] = 'targetid';
              }
            }
            var json = [obj];
            for(var i=0; i<recordData.length; i++) {
              var rec = recordData[i];
              var obj = {};
              for(var j=0; j<model.fields.length; j++) {
                var f = model.fields[j];
                var schemaInfo = modelService.schemas[$scope.formData.objectType.value][f.schemaName];

                if(util.defined(rec,f.schemaName)) {
                  var val = rec[f.schemaName];
                  if(schemaInfo.type == 'string') {
                    if(util.defined(val) && val.length > 0) {
                      val = val.replace(/["]/g, "\"\"")
                      val = val.replace(/(?:\r\n|\r|\n)/g, ' ');
                      if(val.indexOf(",") > -1) {
                        val = '"' + val + '"';
                      }
                      obj[f.schemaName] = val;                    
                    } else {
                      obj[f.schemaName] = '';  
                    }
                  } if(schemaInfo.type== 'date') {
                    obj[f.schemaName] = moment(val).format("YYYY-MM-DD");
                  }else {
                    obj[f.schemaName] = val; 
                  }
                } else {
                  obj[f.schemaName] = '';
                }
              }
              obj['id'] = rec['@rid'];
              if($scope.formData.isEdge) {
                obj['sourceid'] = rec['out'];
                obj['targetid'] = rec['in'];
              }             
              json.push(obj);
            }
            var csv = util.JSON2CSV(json);
            var fileName = 'data'
            var uri = 'data:text/csv;charset=utf-8,' + escape(csv);
            var link = document.createElement("a");
            link.href = uri
              //link.style = "visibility:hidden"; Causing exception in Chrome - SR 6/15/2015
            link.download = fileName + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }

        });
      }
    }
  }


  vm.upload = function (file) {
    Upload.upload({
      url: '/upload', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData,
        schemas: modelService.schemas
      } //pass file as data, should be user ng-model
  }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        remoteDataService.getLogInfo($scope.file, function(err, data) {

          $timeout( function(){ 
            $state.transitionTo($state.current, $stateParams, {
              reload: true,
              inherit: false,
              notify: true
            });
          }, 3000);

        });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});

var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadImageController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {

  $scope.formData = {
    objectType : $stateParams.objectType,
    logoField: $stateParams.logoField,
    id: $stateParams.id
  }


  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
      vm.upload(vm.file); //call upload function
    } else {
      alert('No file selected!');
    }
  }

  vm.upload = function (file) {
    Upload.upload({
      url: '/uploadImage', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData
      } //pass file as data, should be user ng-model
    }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        // remoteDataService.getLogInfo($scope.file, function(err, data) {
        // });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});

var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userAquisitionsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.acquisition,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Acquisition',
          schemaName: 'name',
          fieldName: 'name',
          route: 'aquisitionsDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        },
        {
          name: 'Date',
          fieldName: 'closedate',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {
                name: 'closedate',
                formatMethod:  util.formatDate,
                formatMethodParam: "MMM, YYYY"              }
              
            ]
          }
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userCompaniesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.company,
      route: 'companies',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'companyDetail'
        },
        {
          name: 'Product Categories',
          schemaName: 'productcategory',
          fieldName: 'productcategory',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userFundingController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'VInvestment',
  		model : modelService.models.investment,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Investment',
          schemaName: 'name',
          fieldName: 'name',
          route: 'fundingDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userInvestorsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vInvestmentGrid',
  		model : modelService.models.investmentfirm,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'investorsDetail'
        },
        {
          name: 'Industry / Sector',
          schemaName: 'industry',
          fieldName: 'industry',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userPeopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vPeopleGrid',
  		model : modelService.models.people,
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'People Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'peopleDetail'
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        },
        {
          name: 'Primary Job',
          schemaName: null,
          fieldName: 'role',
          select: 'outE(EWorksfor).role AS role'
        },
        {
          name: 'Primary Company',
          schemaName: null,
          fieldName: 'company',
          select: "OUT('EWorksfor').name AS company"
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions2 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions2 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });
}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userUniversitiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vUniversityGrid',
  		model : modelService.models.university,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'universitiesDetail'
        },
        {
          name: 'Year Founded',
          schemaName: 'yearfounded',
          fieldName: 'yearfounded',
          route: null
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  
  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentFirmList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('navController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route)
  	}

  	$scope.adminView = function() {
  		util.navigate('companies');
  		$rootScope.$broadcast('navAdminMode',true);
  	}

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('objectDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'remoteDataService','$timeout',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService, $timeout) {

    $scope.util = util;
    $scope.recordItemId = $stateParams.id
    $scope.mode = 'data';
    $scope.depth = 0; 

    $scope.schemas = [];
    for(var propertyName in modelService.models) {
      var obj = {
        objectType: modelService.models[propertyName].objectType,
        model: modelService.models[propertyName]
      }
      $scope.schemas.push(obj);
    }

    function loadNetwork(callback) {
      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, function(err, data) {
        $scope.recordDetailsOrig = data;
        $scope.recDetails={};
        $scope.visNodes=[];
        $scope.visEdges=[];
        for (var property in data) {
          var prop = data[property];
          if(property.indexOf('V') == 0) {
            $scope.recDetails[property] =prop;
            for(var i=0; i<prop.length; i++) {
              
              var name = prop[i]['name'];
              if(property == 'VPatent')
                var name = prop[i]['number'];

              var visObj = {
                id: prop[i]['id'],
                label: name,
                font: {size:12, color:'black', face:'arial'}
              }
              var fndModel = util.findWhereProp(modelService.models, 'objectType', property);
              if(util.defined(fndModel,"color")) {
                visObj.color = fndModel.color;
              }
              if(util.defined(fndModel,"fontColor")) {
                visObj.font.color = fndModel.fontColor;
              }
              $scope.visNodes.push(visObj);
            }
          } else {
            var fnd1 = util.findWhereDeep(prop, 'in', 'inId', $stateParams.id);
            var fnd2 = util.findWhereDeep(prop, 'out', 'outId', $stateParams.id);
            $scope.recDetails[property] = _.union(fnd1, fnd2);                

            for(var i=0; i<prop.length; i++) {
              var visObj = {
                from: prop[i]['out']['outId'],
                to: prop[i]['in']['inId']
              }
              $scope.visEdges.push(visObj);
            }
          }
        }
        callback(err, data);
      });      
    }    

    remoteDataService.fetchRecordByProp(remoteDataService.detailObjectType, '@rid', $scope.recordItemId, function(err, data) {
      if(util.defined(data,"length") && data.length > 0) {
        $scope.objData = data[0];
        var fnd = util.findWhereProp(modelService.models, 'objectType', remoteDataService.detailObjectType);
        if(util.defined(fnd)) {
          $scope.model = fnd;

          loadNetwork(function(err, data) {
            $scope.recordDetails = {};
            for(var i=0; i <$scope.model.relationships.length; i++) {
              var relationship = $scope.model.relationships[i];
              remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
                if(util.defined(returnData,"edgeObjectType")) {
                  // Get Relation ship again
                  relationship = util.findWhereArray($scope.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

                  var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
                  var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
                  if(!util.defined($scope,"recordDetailItem.relationships"))
                    $scope.recordDetails[returnData.edgeObjectType]={};
                  $scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
                  remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
                    $scope.recordDetails[returnData.edgeObjectType].details = detailsData;
                  });
                }
              });
            }
          });
        }
      }
    });

    function drawNetwork() {
      var nodes = new vis.DataSet($scope.visNodes);

      // create an array with edges
      var edges = new vis.DataSet($scope.visEdges);

      // create a network
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {};
      var network = new vis.Network(container, data, options);      
    }

    $scope.zoomOut = function() {
      $scope.depth++;
      loadNetwork(function(err, data) {
        drawNetwork();
      });
    }

    $scope.zoomIn = function() {
      if($scope.depth > 0) {
        $scope.depth--;
        loadNetwork(function(err, data) {
          drawNetwork();
        });        
      } 
    }

    $scope.toggleMode = function() {
      if($scope.mode=='data') {
        $scope.mode='graph';

        $timeout( function(){ 
          drawNetwork();
        });
      } else {
        $scope.mode='data';
      }
    }

    $scope.getCompany = function(companyId, prop) {
      var fnd = util.findDeepParent($scope.recordDetailsOrig.EFunded, 'out', 'outId', companyId);
      if(util.defined(fnd,"in")) {
        return fnd.in[prop];
      }
    }

    $scope.update = function() {
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',remoteDataService.detailObjectType);
      if(util.defined(fnd)) {      
        util.navigate('panelItem', {panelName : fnd.name, recordItemId: $scope.recordItemId, mode: 'viewDetails' })
      }
    }

    $scope.criteriaMatchIn = function() {
      return function( item ) {
        if(item.in.inId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }

    $scope.criteriaMatchOut = function() {
      return function( item ) {
        if(item.out.outId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets

controllers.controller('panelListCtrl', function ($scope, $rootScope, util, panelFieldsService) {

	$scope.util = util;
	$scope.controller = 'panelListCtrl';
	$scope.mode='view';
	if(util.defined($scope,"panelName")) {
		console.log($scope.panelName);
	}
	$scope.recordCount = 0;

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId)) {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			}
		}
	}

	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.addRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add'});
	}

});

controllers.controller('panelItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.models = modelService.models;
	$scope.schemas = modelService.schemas;
	$scope._ = _;
	
	$scope.mode='view';
	$scope.controller = 'panelItemCtrl';
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}

	function loadRelationships() {
		$scope.recordDetails = {};
		for(var i=0; i <$scope.panelInfo.model.relationships.length; i++) {
			var relationship = $scope.panelInfo.model.relationships[i];
			remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
				if(util.defined(returnData,"edgeObjectType")) {
					// Get Relation ship again
					relationship = util.findWhereArray($scope.panelInfo.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

					var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
					var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
					if(!util.defined($scope,"recordDetailItem.relationships"))
						$scope.recordDetails[returnData.edgeObjectType]={};
					$scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
					remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
						$scope.recordDetails[returnData.edgeObjectType].details = detailsData;
					});
				}
			});
		}
	}

	$scope.deleteEdge = function(objectType, recordDetail, relationItem) {
		remoteDataService.deleteEdge(objectType, $scope.recordItemId, recordDetail['in'], function(err, data) {
			remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
				loadRelationships();
			});
		});
	}

	$scope.editEdge = function(objectType, recordDetail, relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'edit', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: recordDetail['@rid'], destObjectType: relationItem.destObjectType});
	}

	$scope.getProperty = function(obj, propertyName) {
		return obj[propertyName];
	}

	$scope.getRelation = function(panelInfo, recordDetails, recordDetail, relationItem) {
		fnd = _.findWhere(recordDetails[relationItem.destObjectType], {id: recordDetail.inId});
		if(util.defined(fnd)) {
			return fnd;
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId) && $scope.recordItemId != "") {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}				
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.panelInfo.model.objectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;
			}				
		}		
		if($scope.mode == 'viewDetails') {
			loadRelationships();
		}

	}

	if(util.defined(panelFieldsService,$scope.panelName + ".panelInfo")) {
		init();
	} else {
			panelFieldsService[$scope.panelName] = {};
			panelFieldsService[$scope.panelName].panelInfo = panelFieldsService.panelInfo[$scope.panelName];
			panelFieldsService.fetchPanelRecords(panelFieldsService[$scope.panelName].panelInfo, function(err, panelListData) {
			init();
		});
	}
});


controllers.controller('panelFieldsViewEditCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService, $timeout) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$scope.schemas = modelService.schemas;
	
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	$scope.fields = null;
	$scope.schema = null;
	$scope.edgeObjectType = null;
	$scope.edgeRecordItemId = null;


	// datepicker
	$scope.dateOptions = {
    dateDisabled: false,
    formatYear: 'yy',
    startingDay: 1
	};

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];  
  $scope.popup1 = {
  	opened:false
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  // ui-select
  var vm = this;

  $scope.people = modelService.piskLists.productcategory.options;

  $scope.formatValue = function(panelField, value) {
  	if(panelField.controlType == 'multiselect') {
  		var names = _.pluck(value, 'name');
  		return names.join(", ");
  	} else{
  		return value;
  	}
  }

  // Normal
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
			if(strs.length > 3) {
				$scope.edgeObjectType = strs[3];
			}
			if(strs.length > 4) {
				$scope.edgeRecordItemId = strs[4];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			
			if($scope.edgeObjectType == null) {
				$scope.fields = $scope.panelInfo.model.fields;
				$scope.schema = modelService.schemas[$scope.panelInfo.model.objectType];
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			} else {

				var fnd = util.findDeep($scope.panelInfo.model.relationships, 'model', 'objectType', $scope.edgeObjectType);
				//_.findWhere($scope.panelInfo.model.relationships, {model.objectType: $scope.edgeObjectType});
				if(util.defined(fnd)) {
					$scope.fields = fnd.fields;
				}
				$scope.schema = modelService.schemas[$scope.edgeObjectType];
			}
		}		
	}


	$scope.removeImage = function(paneRecord, panelField) {
		paneRecord[panelField.schemaName]=null;
	}

	$scope.replaceImage = function(paneRecord, panelField) {
		
	}

	$scope.addImage = function(paneRecord, panelField) {
		util.navigate('uploadImage', {objectType: $scope.panelInfo.model.objectType, id: $scope.recordItemId, logoField: panelField.schemaName});
	}

	if(util.defined($scope,"panelName")) {
		init();
	}

});

controllers.controller('panelFieldsCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
			if(util.defined(fnd)) {
				$scope.paneRecord = fnd;
			}
		}		
	}

	if(util.defined($scope,"panelName")) {
		init();
	}


	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.getValue = function(schemaName) {
		return $scope.paneRecord[schemaName];
	}

	$scope.getSchemaType = function(field) {
		var fnd = _.findWhere(modelService.schemas[$scope.panelInfo.model.objectType], {name: field.name});
		if(util.defined(fnd)) {
			return fnd.type;
		}
	}

	$scope.editRecord = function() {
		$scope.paneRecord.backup = jQuery.extend(true, {}, $scope.paneRecord);
		$scope.mode='edit';
	}

	$scope.deleteRecord = function() {
		panelFieldsService.deletePanelRecord($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, response) {
			util.navigate($scope.panelInfo.route);
	  });
	}

	$scope.saveRecord = function() {
		if($scope.mode == 'edit') {
			panelFieldsService.updatePanelRecord($scope.panelInfo, $scope.recordItemId, $scope.paneRecord, function(err, response) {
				if($scope.parentController=='panelListCtrl')
					$scope.mode='view';
				else $scope.mode='viewDetails';
	  	});
	  } else {
	  	// Add
			panelFieldsService.addPanelRecord($scope.panelInfo.model.objectType, $scope.paneRecord, function(err, response) {
				if(util.defined(response,'length') && response.length > 0) {
					response[0].id = response[0]['@rid'];
					$scope.panelInfo.records.push(response[0]);
					$scope.recordItemId = response[0]['@rid'];
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
				} else {
					util.navigate($scope.panelInfo.route);
				}
	  	});
	  }
	}

	$scope.cancelRecord = function() {
		if($scope.mode == 'edit') {
			$scope.paneRecord = jQuery.extend(true, {}, $scope.paneRecord.backup);
			if($scope.parentController=='panelListCtrl')
				$scope.mode='view';			
			else $scope.mode='viewDetails';			
		} else {
			util.navigate($scope.panelInfo.route);
		}
	}

	$scope.viewUserDetail = function() {
		util.navigate($scope.panelInfo.userRoute, {id: $scope.recordItemId});
	}


	$scope.viewRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

	$scope.viewList = function() {
		util.navigate($scope.panelInfo.route);
	}

	$scope.addRelationship = function(relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: null, destObjectType: relationItem.destObjectType});
	}

});

controllers.controller('edgeItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.mode='view';
	$scope.controller = 'edgeItemCtrl';
	$scope.findTarget="";
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}
	if(util.defined($stateParams,"edgeObjectType")) {
		$scope.edgeObjectType = $stateParams.edgeObjectType;
	}
	if(util.defined($stateParams,"edgeRecordItemId")) {
		$scope.edgeRecordItemId = $stateParams.edgeRecordItemId;
	}
	if(util.defined($stateParams,"destObjectType")) {
		$scope.destObjectType = $stateParams.destObjectType;
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope,"edgeRecordItemId") && $scope.edgeRecordItemId != "") {


				remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
					if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data[$scope.edgeObjectType];
					}

					remoteDataService.getEdge($scope.edgeObjectType, $scope.edgeRecordItemId, function(err, data) {
						
						$scope.paneRecord = remoteDataService.prepareInboundData(data);
						$scope.paneRecordBackup = remoteDataService.prepareInboundData(data);

						var obj = {};
						for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
							if(util.defined(data,propertyName))
								obj[propertyName]=data[propertyName];
							else obj[propertyName]=null;
						}
						if(util.defined(data,"id"))
								obj.id = data.id;
						$scope.paneRecord = obj;

						if(util.defined(data,"in")) {
							$scope.targetId = data['in'];

							$scope.targets = [];
							remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
								var targets = data;
								for(var i=0; i<targets.length; i++) {
									var target = targets[i];
									var fnd = _.findWhere($scope.recordDetails, {inId: target.id});
									if(targets[i].id == $scope.targetId || !util.defined(fnd)) {
										if(targets[i].id == $scope.targetId)
											targets[i].selected=true;
										else targets[i].selected=false;										
										$scope.targets.push(target);
									}
								}
							});
						}
					});
				});
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;

				remoteDataService.getEdgeBySource($scope.edgeObjectType, $scope.recordItemId, function(err, data) {
					//if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data;
					//}
					remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
						$scope.targets = [];
						var targets = data;
						for(var i=0; i<targets.length; i++) {
							var target = targets[i];
							var fnd = _.findWhere($scope.recordDetails, {in: target.id});	
							if(!util.defined(fnd))
								$scope.targets.push(target);
						}
					});				
				});
			}
		}		
	}
	init();		

	$scope.selectTarget = function(target) {
		for(var i=0; i<$scope.targets.length; i++) {
			$scope.targets[i].selected=false;
		}
		target.selected=true;
	}

	$scope.saveEdge = function() {
		var fnd = _.findWhere($scope.targets, {selected: true});
		if(fnd != null) {
			if($scope.mode == 'add') {
				remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
				});				
			} else {
				remoteDataService.deleteEdge($scope.edgeObjectType, $scope.paneRecordBackup.out, $scope.paneRecordBackup.in, function(err, result) {
					remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
						util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
					});				
				});				
			}
		}
			
	}

	$scope.cancelEdge = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

});


var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('patentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPatentList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('peopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPeopleList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('universityController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  $rootScope.$broadcast('navAdminMode',true);

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vUniversityList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {
  console.log('hi');
  $scope.formData = {
    mode: null,
    objectType: null,
    sourceObjectType: null,
    targetObjectType: null,
    isEdge: 0
  }

  $scope.sourceObjects = [];
  $scope.targetObjects = [];
  $scope.arrRelObjects = [];
  $scope.arrObjects = [];

  $scope.exportCriteria = {
    field: null,
    operator: null,
    value: null
  }

  $scope.criterias = [];

  $scope.selectedObjectTypeFields=null;
  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType,
      sourceObjectTypes: [],
      targetObjectTypes: []     
    }   
    if(util.defined(modelService.models,propertyName + '.isRelationship') && modelService.models[propertyName].isRelationship == true) {
      $scope.arrRelObjects.push(obj);
    }
  }

  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType
    }   
    if(!util.defined(modelService.models,propertyName + '.isRelationship') || modelService.models[propertyName].isRelationship == false) {
      $scope.arrObjects.push(obj);

      if(util.defined(modelService,'models.' + propertyName + '.relationships')) {
        for(var i=0; i<modelService.models[propertyName].relationships.length; i++) {
          var rel = modelService.models[propertyName].relationships[i];
          var fnd = _.findWhere($scope.arrRelObjects, {value: rel.model.objectType});
          var obj = {};
          if(util.defined(fnd)) {
            var fndDupe = _.findWhere(fnd.sourceObjectTypes, {value: modelService.models[propertyName].objectType});
            if(!util.defined(fndDupe)) {
              obj = {
                name: modelService.models[propertyName].displayName,
                value: modelService.models[propertyName].objectType
              }
              fnd.sourceObjectTypes.push(obj);              
            }

            fndDupe = _.findWhere(fnd.targetObjectTypes, {value: rel.destObjectType});
            if(!util.defined(fndDupe)) {

              var fndObj = util.findWhereProp(modelService.models, 'objectType', rel.destObjectType);
              if(util.defined(fndObj)) {
                obj = {
                  name: fndObj.displayName,
                  value: rel.destObjectType
                }           
                fnd.targetObjectTypes.push(obj);                
              }
            }
          }
        }
      }
    }
  }

  remoteDataService.getAllLogInfo(function(err, logInfo) {
    $scope.logInfo = logInfo;
    $scope.jobs = [];
    var lastJob;
    for(var i=0; i<logInfo.length; i++) {
      var data = logInfo[i];
      if(data.file != lastJob) {
        var obj = {
          file: data.file,
          startdatetime: data.startdatetime,
          mode: data.mode,
          sortDate : moment(data.startdatetime).unix()
        }
        $scope.jobs.push(obj);
        lastJob = data.file;
      }
    }
  });

  $scope.deleteCriteria = function(criteria) {
    for(var i=0; i<$scope.criterias.length; i++) {
      if($scope.criterias[i].field == criteria.field) {
        $scope.criterias.splice(i, 1);
        return;
      }
    }
  }

  $scope.addCriteria = function() {
    if(!util.defined($scope,"exportCriteria.field")) {
      alert('Criteria missing field!');
    } else if(!util.defined($scope,"exportCriteria.operator")) {
      alert('Criteria missing operator!');
    } else if(!util.defined($scope,"exportCriteria.value")) {
      alert('Criteria missing value!');
    } else {
      var obj = {
        field: $scope.exportCriteria.field.schemaName,
        operator: $scope.exportCriteria.operator,
        value: $scope.exportCriteria.value        
      }
      $scope.criterias.push(obj);
      $scope.exportCriteria = {
        field: null,
        operator: null,
        value: null
      }     
    }
  }

  $scope.deleteDetails = function(job) {
    remoteDataService.deleteLogInfo(job.file, function(err, logInfo) {
      $state.transitionTo($state.current, $stateParams, {
        reload: true,
        inherit: false,
        notify: true
      });     
    });
  }

  $scope.getDetails = function(job) {
    $scope.logDetails = [];
    $scope.jobDetails = job;
    for(var i=0; i<$scope.logInfo.length; i++) {
      var data = $scope.logInfo[i];
      if(data.file == job.file) {
        var obj = {
          info: data.info
        }
        $scope.logDetails.push(obj);
      }
    }
  }

  $scope.selectObjectType = function() {
    var fnd = _.findWhere($scope.arrRelObjects, {value: $scope.formData.objectType.value});
    if(util.defined(fnd)) {
      $scope.sourceObjects = fnd.sourceObjectTypes;
      $scope.targetObjects = fnd.targetObjectTypes;     
    }

    fnd = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
    if(util.defined(fnd,"fields")) {
      var fndId = _.findWhere(fnd.fields, {schemaName: 'id'});
      if(!util.defined(fndId)) {
        var obj =  {
          schemaName: 'id',
          displayName: 'ID'
        }
        fnd.fields.push(obj);
      }       
      $scope.idFields = fnd.fields;
    }
  }

  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if ($scope.formData.mode != 'export' && vm.upload_form.file.$valid && vm.file) { //check if from is valid

      if(!util.defined($scope,"formData.mode.length") || $scope.formData.mode.length == 0) {
        alert('No Mode selected!')
        return;
      }

      if(util.defined($scope,"formData.objectType.value")) {
        $scope.formData.objectType = $scope.formData.objectType.value;
      } else {
        alert('No Object Type selected!')
        return;
      }

      if($scope.formData.isEdge == "1")
        $scope.formData.isEdge = true;
      else $scope.formData.isEdge = false;

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.sourceObjectType.value")) {
          $scope.formData.sourceObjectType = $scope.formData.sourceObjectType.value;
        } else {
          alert('No Source Object Type selected!')
          return;
        }
      } else {
        $scope.formData.sourceObjectType = null;
      }

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.targetObjectType.value")) {
          $scope.formData.targetObjectType = $scope.formData.targetObjectType.value;
        } else {
          alert('No Target Object Type selected!')
          return;
        }
      } else {
        $scope.formData.targetObjectType = null;
      }

      if(($scope.formData.mode == 'update' || $scope.formData.mode == 'delete') && $scope.formData.isEdge == false) {

        if(util.defined($scope,"formData.idObjField.schemaName")) {
          $scope.formData.idObjField = $scope.formData.idObjField.schemaName;
        } else {
          alert('No Id Object Field selected!')
          return;
        }
      } else {
        $scope.formData.idObjField = null;
      }

      if($scope.formData.mode == 'export') {
        $scope.formData.criterias = $scope.criterias;
      }

      vm.upload(vm.file); //call upload function
    } else {

      if($scope.formData.mode != 'export') {
        alert('No file selected!')  
      } else {
        remoteDataService.exportRecords($scope.formData.objectType.value, $scope.criterias, function(err, data) {
          console.log('Export:');
          if($scope.formData.isEdge == '1')
            $scope.formData.isEdge=true;
          else $scope.formData.isEdge=false;
          if(util.defined(data,"exportData.length")) {
            var recordData = [];
            for(var propertyName in data.exportData) {
              recordData.push(data.exportData[propertyName]);
            }
            console.dir(recordData);
            var obj = {};
            var model = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
            if(util.defined(model,"fields.length")) {
              for(var i=0; i<model.fields.length; i++) {
                var f = model.fields[i];
                obj[f.schemaName] = f.schemaName;
              }           
              obj['id'] = 'id';
              if($scope.formData.isEdge) {
                obj['sourceid'] = 'sourceid';
                obj['targetid'] = 'targetid';
              }
            }
            var json = [obj];
            for(var i=0; i<recordData.length; i++) {
              var rec = recordData[i];
              var obj = {};
              for(var j=0; j<model.fields.length; j++) {
                var f = model.fields[j];
                var schemaInfo = modelService.schemas[$scope.formData.objectType.value][f.schemaName];

                if(util.defined(rec,f.schemaName)) {
                  var val = rec[f.schemaName];
                  if(schemaInfo.type == 'string') {
                    if(util.defined(val) && val.length > 0) {
                      val = val.replace(/["]/g, "\"\"")
                      val = val.replace(/(?:\r\n|\r|\n)/g, ' ');
                      if(val.indexOf(",") > -1) {
                        val = '"' + val + '"';
                      }
                      obj[f.schemaName] = val;                    
                    } else {
                      obj[f.schemaName] = '';  
                    }
                  } if(schemaInfo.type== 'date') {
                    obj[f.schemaName] = moment(val).format("YYYY-MM-DD");
                  }else {
                    obj[f.schemaName] = val; 
                  }
                } else {
                  obj[f.schemaName] = '';
                }
              }
              obj['id'] = rec['@rid'];
              if($scope.formData.isEdge) {
                obj['sourceid'] = rec['out'];
                obj['targetid'] = rec['in'];
              }             
              json.push(obj);
            }
            var csv = util.JSON2CSV(json);
            var fileName = 'data'
            var uri = 'data:text/csv;charset=utf-8,' + escape(csv);
            var link = document.createElement("a");
            link.href = uri
              //link.style = "visibility:hidden"; Causing exception in Chrome - SR 6/15/2015
            link.download = fileName + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }

        });
      }
    }
  }


  vm.upload = function (file) {
    Upload.upload({
      url: '/upload', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData,
        schemas: modelService.schemas
      } //pass file as data, should be user ng-model
  }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        remoteDataService.getLogInfo($scope.file, function(err, data) {

          $timeout( function(){ 
            $state.transitionTo($state.current, $stateParams, {
              reload: true,
              inherit: false,
              notify: true
            });
          }, 3000);

        });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});

var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadImageController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {

  $scope.formData = {
    objectType : $stateParams.objectType,
    logoField: $stateParams.logoField,
    id: $stateParams.id
  }


  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
      vm.upload(vm.file); //call upload function
    } else {
      alert('No file selected!');
    }
  }

  vm.upload = function (file) {
    Upload.upload({
      url: '/uploadImage', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData
      } //pass file as data, should be user ng-model
    }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        // remoteDataService.getLogInfo($scope.file, function(err, data) {
        // });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});

var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userAquisitionsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.acquisition,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Acquisition',
          schemaName: 'name',
          fieldName: 'name',
          route: 'aquisitionsDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        },
        {
          name: 'Date',
          fieldName: 'closedate',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {
                name: 'closedate',
                formatMethod:  util.formatDate,
                formatMethodParam: "MMM, YYYY"              }
              
            ]
          }
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userCompaniesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.company,
      route: 'companies',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'companyDetail'
        },
        {
          name: 'Product Categories',
          schemaName: 'productcategory',
          fieldName: 'productcategory',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userFundingController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'VInvestment',
  		model : modelService.models.investment,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Investment',
          schemaName: 'name',
          fieldName: 'name',
          route: 'fundingDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userInvestorsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vInvestmentGrid',
  		model : modelService.models.investmentfirm,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'investorsDetail'
        },
        {
          name: 'Industry / Sector',
          schemaName: 'industry',
          fieldName: 'industry',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userPeopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vPeopleGrid',
  		model : modelService.models.people,
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'People Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'peopleDetail'
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        },
        {
          name: 'Primary Job',
          schemaName: null,
          fieldName: 'role',
          select: 'outE(EWorksfor).role AS role'
        },
        {
          name: 'Primary Company',
          schemaName: null,
          fieldName: 'company',
          select: "OUT('EWorksfor').name AS company"
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions2 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions2 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });
}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userUniversitiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vUniversityGrid',
  		model : modelService.models.university,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'universitiesDetail'
        },
        {
          name: 'Year Founded',
          schemaName: 'yearfounded',
          fieldName: 'yearfounded',
          route: null
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  
  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vInvestmentFirmList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('navController', ['util', '$scope', '$rootScope', '$state', '$stateParams',
  function (util, $scope, $rootScope, $state, $stateParams) {

  	$scope.util = util;
  	$scope.route = 'companies';
  	//util.navigate($scope.route);

  	$scope.navigate = function(route) {
  		$scope.route = route;
  		util.navigate(route)
  	}

  	$scope.adminView = function() {
  		util.navigate('companies');
  		$rootScope.$broadcast('navAdminMode',true);
  	}

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('objectDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'remoteDataService','$timeout',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService, $timeout) {

    $scope.util = util;
    $scope.recordItemId = $stateParams.id
    $scope.mode = 'data';
    $scope.depth = 0; 

    $scope.schemas = [];
    for(var propertyName in modelService.models) {
      var obj = {
        objectType: modelService.models[propertyName].objectType,
        model: modelService.models[propertyName]
      }
      $scope.schemas.push(obj);
    }

    function loadNetwork(callback) {
      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, function(err, data) {
        $scope.recordDetailsOrig = data;
        $scope.recDetails={};
        $scope.visNodes=[];
        $scope.visEdges=[];
        for (var property in data) {
          var prop = data[property];
          if(property.indexOf('V') == 0) {
            $scope.recDetails[property] =prop;
            for(var i=0; i<prop.length; i++) {
              
              var name = prop[i]['name'];
              if(property == 'VPatent')
                var name = prop[i]['number'];

              var visObj = {
                id: prop[i]['id'],
                label: name,
                font: {size:12, color:'black', face:'arial'}
              }
              var fndModel = util.findWhereProp(modelService.models, 'objectType', property);
              if(util.defined(fndModel,"color")) {
                visObj.color = fndModel.color;
              }
              if(util.defined(fndModel,"fontColor")) {
                visObj.font.color = fndModel.fontColor;
              }
              $scope.visNodes.push(visObj);
            }
          } else {
            var fnd1 = util.findWhereDeep(prop, 'in', 'inId', $stateParams.id);
            var fnd2 = util.findWhereDeep(prop, 'out', 'outId', $stateParams.id);
            $scope.recDetails[property] = _.union(fnd1, fnd2);                

            for(var i=0; i<prop.length; i++) {
              var visObj = {
                from: prop[i]['out']['outId'],
                to: prop[i]['in']['inId']
              }
              $scope.visEdges.push(visObj);
            }
          }
        }
        callback(err, data);
      });      
    }    

    remoteDataService.fetchRecordByProp(remoteDataService.detailObjectType, '@rid', $scope.recordItemId, function(err, data) {
      if(util.defined(data,"length") && data.length > 0) {
        $scope.objData = data[0];
        var fnd = util.findWhereProp(modelService.models, 'objectType', remoteDataService.detailObjectType);
        if(util.defined(fnd)) {
          $scope.model = fnd;

          loadNetwork(function(err, data) {
            $scope.recordDetails = {};
            for(var i=0; i <$scope.model.relationships.length; i++) {
              var relationship = $scope.model.relationships[i];
              remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
                if(util.defined(returnData,"edgeObjectType")) {
                  // Get Relation ship again
                  relationship = util.findWhereArray($scope.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

                  var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
                  var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
                  if(!util.defined($scope,"recordDetailItem.relationships"))
                    $scope.recordDetails[returnData.edgeObjectType]={};
                  $scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
                  remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
                    $scope.recordDetails[returnData.edgeObjectType].details = detailsData;
                  });
                }
              });
            }
          });
        }
      }
    });

    function drawNetwork() {
      var nodes = new vis.DataSet($scope.visNodes);

      // create an array with edges
      var edges = new vis.DataSet($scope.visEdges);

      // create a network
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {};
      var network = new vis.Network(container, data, options);      
    }

    $scope.zoomOut = function() {
      $scope.depth++;
      loadNetwork(function(err, data) {
        drawNetwork();
      });
    }

    $scope.zoomIn = function() {
      if($scope.depth > 0) {
        $scope.depth--;
        loadNetwork(function(err, data) {
          drawNetwork();
        });        
      } 
    }

    $scope.toggleMode = function() {
      if($scope.mode=='data') {
        $scope.mode='graph';

        $timeout( function(){ 
          drawNetwork();
        });
      } else {
        $scope.mode='data';
      }
    }

    $scope.getCompany = function(companyId, prop) {
      var fnd = util.findDeepParent($scope.recordDetailsOrig.EFunded, 'out', 'outId', companyId);
      if(util.defined(fnd,"in")) {
        return fnd.in[prop];
      }
    }

    $scope.update = function() {
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',remoteDataService.detailObjectType);
      if(util.defined(fnd)) {      
        util.navigate('panelItem', {panelName : fnd.name, recordItemId: $scope.recordItemId, mode: 'viewDetails' })
      }
    }

    $scope.criteriaMatchIn = function() {
      return function( item ) {
        if(item.in.inId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }

    $scope.criteriaMatchOut = function() {
      return function( item ) {
        if(item.out.outId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets

controllers.controller('panelListCtrl', function ($scope, $rootScope, util, panelFieldsService) {

	$scope.util = util;
	$scope.controller = 'panelListCtrl';
	$scope.mode='view';
	if(util.defined($scope,"panelName")) {
		console.log($scope.panelName);
	}
	$scope.recordCount = 0;

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId)) {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			}
		}
	}

	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.addRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add'});
	}

});

controllers.controller('panelItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.models = modelService.models;
	$scope.schemas = modelService.schemas;
	$scope._ = _;
	
	$scope.mode='view';
	$scope.controller = 'panelItemCtrl';
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}

	function loadRelationships() {
		$scope.recordDetails = {};
		for(var i=0; i <$scope.panelInfo.model.relationships.length; i++) {
			var relationship = $scope.panelInfo.model.relationships[i];
			remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
				if(util.defined(returnData,"edgeObjectType")) {
					// Get Relation ship again
					relationship = util.findWhereArray($scope.panelInfo.model.relationships, 'model', 'objectType', returnData.edgeObjectType);

					var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
					var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
					if(!util.defined($scope,"recordDetailItem.relationships"))
						$scope.recordDetails[returnData.edgeObjectType]={};
					$scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
					remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
						$scope.recordDetails[returnData.edgeObjectType].details = detailsData;
					});
				}
			});
		}
	}

	$scope.deleteEdge = function(objectType, recordDetail, relationItem) {
		remoteDataService.deleteEdge(objectType, $scope.recordItemId, recordDetail['in'], function(err, data) {
			remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
				loadRelationships();
			});
		});
	}

	$scope.editEdge = function(objectType, recordDetail, relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'edit', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: recordDetail['@rid'], destObjectType: relationItem.destObjectType});
	}

	$scope.getProperty = function(obj, propertyName) {
		return obj[propertyName];
	}

	$scope.getRelation = function(panelInfo, recordDetails, recordDetail, relationItem) {
		fnd = _.findWhere(recordDetails[relationItem.destObjectType], {id: recordDetail.inId});
		if(util.defined(fnd)) {
			return fnd;
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope.recordItemId) && $scope.recordItemId != "") {
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}				
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.panelInfo.model.objectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;
			}				
		}		
		if($scope.mode == 'viewDetails') {
			loadRelationships();
		}

	}

	if(util.defined(panelFieldsService,$scope.panelName + ".panelInfo")) {
		init();
	} else {
			panelFieldsService[$scope.panelName] = {};
			panelFieldsService[$scope.panelName].panelInfo = panelFieldsService.panelInfo[$scope.panelName];
			panelFieldsService.fetchPanelRecords(panelFieldsService[$scope.panelName].panelInfo, function(err, panelListData) {
			init();
		});
	}
});


controllers.controller('panelFieldsViewEditCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService, $timeout) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$scope.schemas = modelService.schemas;
	
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	$scope.fields = null;
	$scope.schema = null;
	$scope.edgeObjectType = null;
	$scope.edgeRecordItemId = null;


	// datepicker
	$scope.dateOptions = {
    dateDisabled: false,
    formatYear: 'yy',
    startingDay: 1
	};

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];  
  $scope.popup1 = {
  	opened:false
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  // ui-select
  var vm = this;

  $scope.people = modelService.piskLists.productcategory.options;

  $scope.formatValue = function(panelField, value) {
  	if(panelField.controlType == 'multiselect') {
  		var names = _.pluck(value, 'name');
  		return names.join(", ");
  	} else{
  		return value;
  	}
  }

  // Normal
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
			if(strs.length > 3) {
				$scope.edgeObjectType = strs[3];
			}
			if(strs.length > 4) {
				$scope.edgeRecordItemId = strs[4];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			
			if($scope.edgeObjectType == null) {
				$scope.fields = $scope.panelInfo.model.fields;
				$scope.schema = modelService.schemas[$scope.panelInfo.model.objectType];
				var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
				if(util.defined(fnd)) {
					$scope.paneRecord = fnd;
				}
			} else {

				var fnd = util.findDeep($scope.panelInfo.model.relationships, 'model', 'objectType', $scope.edgeObjectType);
				//_.findWhere($scope.panelInfo.model.relationships, {model.objectType: $scope.edgeObjectType});
				if(util.defined(fnd)) {
					$scope.fields = fnd.fields;
				}
				$scope.schema = modelService.schemas[$scope.edgeObjectType];
			}
		}		
	}


	$scope.removeImage = function(paneRecord, panelField) {
		paneRecord[panelField.schemaName]=null;
	}

	$scope.replaceImage = function(paneRecord, panelField) {
		
	}

	$scope.addImage = function(paneRecord, panelField) {
		util.navigate('uploadImage', {objectType: $scope.panelInfo.model.objectType, id: $scope.recordItemId, logoField: panelField.schemaName});
	}

	if(util.defined($scope,"panelName")) {
		init();
	}

});

controllers.controller('panelFieldsCtrl', function ($scope, $rootScope, util, panelFieldsService, modelService) {
	//$scope.panelName - Passed in by ngRepeat;

	$scope.util = util;
	$mode = null;
	$scope.recordItemId = null;
	$scope.panelName = null;
	if(util.defined($scope,"$parent.controller"))
		$scope.parentController = $scope.$parent.controller;

	if(util.defined($scope,"recordInfo")) {
		console.log($scope.recordInfo);
		if($scope.recordInfo.indexOf('~') > -1) {
			var strs = $scope.recordInfo.split('~');
			if(strs.length > 0) {
				$scope.panelName = strs[0];
			}
			if(strs.length > 1) {
				$scope.recordItemId = strs[1];
			}
			if(strs.length > 2) {
				$scope.mode = strs[2];
			}
		}
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;
			var fnd = _.findWhere($scope.panelInfo.records, {id: $scope.recordItemId});
			if(util.defined(fnd)) {
				$scope.paneRecord = fnd;
			}
		}		
	}

	if(util.defined($scope,"panelName")) {
		init();
	}


	$scope.$on('fetchPanelRecords', function(event, panelName) {
		if($scope.panelName == panelName)
			init();
	});

	$scope.getValue = function(schemaName) {
		return $scope.paneRecord[schemaName];
	}

	$scope.getSchemaType = function(field) {
		var fnd = _.findWhere(modelService.schemas[$scope.panelInfo.model.objectType], {name: field.name});
		if(util.defined(fnd)) {
			return fnd.type;
		}
	}

	$scope.editRecord = function() {
		$scope.paneRecord.backup = jQuery.extend(true, {}, $scope.paneRecord);
		$scope.mode='edit';
	}

	$scope.deleteRecord = function() {
		panelFieldsService.deletePanelRecord($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, response) {
			util.navigate($scope.panelInfo.route);
	  });
	}

	$scope.saveRecord = function() {
		if($scope.mode == 'edit') {
			panelFieldsService.updatePanelRecord($scope.panelInfo, $scope.recordItemId, $scope.paneRecord, function(err, response) {
				if($scope.parentController=='panelListCtrl')
					$scope.mode='view';
				else $scope.mode='viewDetails';
	  	});
	  } else {
	  	// Add
			panelFieldsService.addPanelRecord($scope.panelInfo.model.objectType, $scope.paneRecord, function(err, response) {
				if(util.defined(response,'length') && response.length > 0) {
					response[0].id = response[0]['@rid'];
					$scope.panelInfo.records.push(response[0]);
					$scope.recordItemId = response[0]['@rid'];
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
				} else {
					util.navigate($scope.panelInfo.route);
				}
	  	});
	  }
	}

	$scope.cancelRecord = function() {
		if($scope.mode == 'edit') {
			$scope.paneRecord = jQuery.extend(true, {}, $scope.paneRecord.backup);
			if($scope.parentController=='panelListCtrl')
				$scope.mode='view';			
			else $scope.mode='viewDetails';			
		} else {
			util.navigate($scope.panelInfo.route);
		}
	}

	$scope.viewUserDetail = function() {
		util.navigate($scope.panelInfo.userRoute, {id: $scope.recordItemId});
	}


	$scope.viewRecord = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

	$scope.viewList = function() {
		util.navigate($scope.panelInfo.route);
	}

	$scope.addRelationship = function(relationItem) {
		util.navigate('edgeItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'add', edgeObjectType: relationItem.model.objectType, edgeRecordItemId: null, destObjectType: relationItem.destObjectType});
	}

});

controllers.controller('edgeItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
	
	$scope.util = util;
	$scope.mode='view';
	$scope.controller = 'edgeItemCtrl';
	$scope.findTarget="";
	if(util.defined($stateParams,"panelName")) {
		$scope.panelName = $stateParams.panelName;
	}
	if(util.defined($stateParams,"recordItemId")) {
		$scope.recordItemId = $stateParams.recordItemId;
	}
	if(util.defined($stateParams,"mode")) {
		$scope.mode = $stateParams.mode;
	}
	if(util.defined($stateParams,"edgeObjectType")) {
		$scope.edgeObjectType = $stateParams.edgeObjectType;
	}
	if(util.defined($stateParams,"edgeRecordItemId")) {
		$scope.edgeRecordItemId = $stateParams.edgeRecordItemId;
	}
	if(util.defined($stateParams,"destObjectType")) {
		$scope.destObjectType = $stateParams.destObjectType;
	}

	function init() {
		if(util.defined(panelFieldsService,$scope.panelName)) {
			$scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

			if(util.defined($scope,"edgeRecordItemId") && $scope.edgeRecordItemId != "") {


				remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, function(err, data) {
					if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data[$scope.edgeObjectType];
					}

					remoteDataService.getEdge($scope.edgeObjectType, $scope.edgeRecordItemId, function(err, data) {
						
						$scope.paneRecord = remoteDataService.prepareInboundData(data);
						$scope.paneRecordBackup = remoteDataService.prepareInboundData(data);

						var obj = {};
						for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
							if(util.defined(data,propertyName))
								obj[propertyName]=data[propertyName];
							else obj[propertyName]=null;
						}
						if(util.defined(data,"id"))
								obj.id = data.id;
						$scope.paneRecord = obj;

						if(util.defined(data,"in")) {
							$scope.targetId = data['in'];

							$scope.targets = [];
							remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
								var targets = data;
								for(var i=0; i<targets.length; i++) {
									var target = targets[i];
									var fnd = _.findWhere($scope.recordDetails, {inId: target.id});
									if(targets[i].id == $scope.targetId || !util.defined(fnd)) {
										if(targets[i].id == $scope.targetId)
											targets[i].selected=true;
										else targets[i].selected=false;										
										$scope.targets.push(target);
									}
								}
							});
						}
					});
				});
			} else {
				// Add mode no ID
				$scope.mode = 'add';
				var obj = {};
				for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
					obj[propertyName]=null;
				}
				$scope.paneRecord = obj;

				remoteDataService.getEdgeBySource($scope.edgeObjectType, $scope.recordItemId, function(err, data) {
					//if(util.defined(data,$scope.edgeObjectType)) {
						$scope.recordDetails = 	data;
					//}
					remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
						$scope.targets = [];
						var targets = data;
						for(var i=0; i<targets.length; i++) {
							var target = targets[i];
							var fnd = _.findWhere($scope.recordDetails, {in: target.id});	
							if(!util.defined(fnd))
								$scope.targets.push(target);
						}
					});				
				});
			}
		}		
	}
	init();		

	$scope.selectTarget = function(target) {
		for(var i=0; i<$scope.targets.length; i++) {
			$scope.targets[i].selected=false;
		}
		target.selected=true;
	}

	$scope.saveEdge = function() {
		var fnd = _.findWhere($scope.targets, {selected: true});
		if(fnd != null) {
			if($scope.mode == 'add') {
				remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
					util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
				});				
			} else {
				remoteDataService.deleteEdge($scope.edgeObjectType, $scope.paneRecordBackup.out, $scope.paneRecordBackup.in, function(err, result) {
					remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
						util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});	
					});				
				});				
			}
		}
			
	}

	$scope.cancelEdge = function() {
		util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
	}

});


var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('patentController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPatentList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('peopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vPeopleList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('universityController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

  $rootScope.$broadcast('navAdminMode',true);

  panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo.vUniversityList, function(err, panelListData) {
  });


}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {
  console.log('hi');
  $scope.formData = {
    mode: null,
    objectType: null,
    sourceObjectType: null,
    targetObjectType: null,
    isEdge: 0
  }

  $scope.sourceObjects = [];
  $scope.targetObjects = [];
  $scope.arrRelObjects = [];
  $scope.arrObjects = [];

  $scope.exportCriteria = {
    field: null,
    operator: null,
    value: null
  }

  $scope.criterias = [];

  $scope.selectedObjectTypeFields=null;
  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType,
      sourceObjectTypes: [],
      targetObjectTypes: []     
    }   
    if(util.defined(modelService.models,propertyName + '.isRelationship') && modelService.models[propertyName].isRelationship == true) {
      $scope.arrRelObjects.push(obj);
    }
  }

  for(var propertyName in modelService.models) {
    var obj = {
      name: modelService.models[propertyName].displayName,
      value: modelService.models[propertyName].objectType
    }   
    if(!util.defined(modelService.models,propertyName + '.isRelationship') || modelService.models[propertyName].isRelationship == false) {
      $scope.arrObjects.push(obj);

      if(util.defined(modelService,'models.' + propertyName + '.relationships')) {
        for(var i=0; i<modelService.models[propertyName].relationships.length; i++) {
          var rel = modelService.models[propertyName].relationships[i];
          var fnd = _.findWhere($scope.arrRelObjects, {value: rel.model.objectType});
          var obj = {};
          if(util.defined(fnd)) {
            var fndDupe = _.findWhere(fnd.sourceObjectTypes, {value: modelService.models[propertyName].objectType});
            if(!util.defined(fndDupe)) {
              obj = {
                name: modelService.models[propertyName].displayName,
                value: modelService.models[propertyName].objectType
              }
              fnd.sourceObjectTypes.push(obj);              
            }

            fndDupe = _.findWhere(fnd.targetObjectTypes, {value: rel.destObjectType});
            if(!util.defined(fndDupe)) {

              var fndObj = util.findWhereProp(modelService.models, 'objectType', rel.destObjectType);
              if(util.defined(fndObj)) {
                obj = {
                  name: fndObj.displayName,
                  value: rel.destObjectType
                }           
                fnd.targetObjectTypes.push(obj);                
              }
            }
          }
        }
      }
    }
  }

  remoteDataService.getAllLogInfo(function(err, logInfo) {
    $scope.logInfo = logInfo;
    $scope.jobs = [];
    var lastJob;
    for(var i=0; i<logInfo.length; i++) {
      var data = logInfo[i];
      if(data.file != lastJob) {
        var obj = {
          file: data.file,
          startdatetime: data.startdatetime,
          mode: data.mode,
          sortDate : moment(data.startdatetime).unix()
        }
        $scope.jobs.push(obj);
        lastJob = data.file;
      }
    }
  });

  $scope.deleteCriteria = function(criteria) {
    for(var i=0; i<$scope.criterias.length; i++) {
      if($scope.criterias[i].field == criteria.field) {
        $scope.criterias.splice(i, 1);
        return;
      }
    }
  }

  $scope.addCriteria = function() {
    if(!util.defined($scope,"exportCriteria.field")) {
      alert('Criteria missing field!');
    } else if(!util.defined($scope,"exportCriteria.operator")) {
      alert('Criteria missing operator!');
    } else if(!util.defined($scope,"exportCriteria.value")) {
      alert('Criteria missing value!');
    } else {
      var obj = {
        field: $scope.exportCriteria.field.schemaName,
        operator: $scope.exportCriteria.operator,
        value: $scope.exportCriteria.value        
      }
      $scope.criterias.push(obj);
      $scope.exportCriteria = {
        field: null,
        operator: null,
        value: null
      }     
    }
  }

  $scope.deleteDetails = function(job) {
    remoteDataService.deleteLogInfo(job.file, function(err, logInfo) {
      $state.transitionTo($state.current, $stateParams, {
        reload: true,
        inherit: false,
        notify: true
      });     
    });
  }

  $scope.getDetails = function(job) {
    $scope.logDetails = [];
    $scope.jobDetails = job;
    for(var i=0; i<$scope.logInfo.length; i++) {
      var data = $scope.logInfo[i];
      if(data.file == job.file) {
        var obj = {
          info: data.info
        }
        $scope.logDetails.push(obj);
      }
    }
  }

  $scope.selectObjectType = function() {
    var fnd = _.findWhere($scope.arrRelObjects, {value: $scope.formData.objectType.value});
    if(util.defined(fnd)) {
      $scope.sourceObjects = fnd.sourceObjectTypes;
      $scope.targetObjects = fnd.targetObjectTypes;     
    }

    fnd = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
    if(util.defined(fnd,"fields")) {
      var fndId = _.findWhere(fnd.fields, {schemaName: 'id'});
      if(!util.defined(fndId)) {
        var obj =  {
          schemaName: 'id',
          displayName: 'ID'
        }
        fnd.fields.push(obj);
      }       
      $scope.idFields = fnd.fields;
    }
  }

  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if ($scope.formData.mode != 'export' && vm.upload_form.file.$valid && vm.file) { //check if from is valid

      if(!util.defined($scope,"formData.mode.length") || $scope.formData.mode.length == 0) {
        alert('No Mode selected!')
        return;
      }

      if(util.defined($scope,"formData.objectType.value")) {
        $scope.formData.objectType = $scope.formData.objectType.value;
      } else {
        alert('No Object Type selected!')
        return;
      }

      if($scope.formData.isEdge == "1")
        $scope.formData.isEdge = true;
      else $scope.formData.isEdge = false;

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.sourceObjectType.value")) {
          $scope.formData.sourceObjectType = $scope.formData.sourceObjectType.value;
        } else {
          alert('No Source Object Type selected!')
          return;
        }
      } else {
        $scope.formData.sourceObjectType = null;
      }

      if($scope.formData.isEdge && $scope.formData.mode == 'add') {
        if(util.defined($scope,"formData.targetObjectType.value")) {
          $scope.formData.targetObjectType = $scope.formData.targetObjectType.value;
        } else {
          alert('No Target Object Type selected!')
          return;
        }
      } else {
        $scope.formData.targetObjectType = null;
      }

      if(($scope.formData.mode == 'update' || $scope.formData.mode == 'delete') && $scope.formData.isEdge == false) {

        if(util.defined($scope,"formData.idObjField.schemaName")) {
          $scope.formData.idObjField = $scope.formData.idObjField.schemaName;
        } else {
          alert('No Id Object Field selected!')
          return;
        }
      } else {
        $scope.formData.idObjField = null;
      }

      if($scope.formData.mode == 'export') {
        $scope.formData.criterias = $scope.criterias;
      }

      vm.upload(vm.file); //call upload function
    } else {

      if($scope.formData.mode != 'export') {
        alert('No file selected!')  
      } else {
        remoteDataService.exportRecords($scope.formData.objectType.value, $scope.criterias, function(err, data) {
          console.log('Export:');
          if($scope.formData.isEdge == '1')
            $scope.formData.isEdge=true;
          else $scope.formData.isEdge=false;
          if(util.defined(data,"exportData.length")) {
            var recordData = [];
            for(var propertyName in data.exportData) {
              recordData.push(data.exportData[propertyName]);
            }
            console.dir(recordData);
            var obj = {};
            var model = util.findWhereProp(modelService.models, 'objectType', $scope.formData.objectType.value);
            if(util.defined(model,"fields.length")) {
              for(var i=0; i<model.fields.length; i++) {
                var f = model.fields[i];
                obj[f.schemaName] = f.schemaName;
              }           
              obj['id'] = 'id';
              if($scope.formData.isEdge) {
                obj['sourceid'] = 'sourceid';
                obj['targetid'] = 'targetid';
              }
            }
            var json = [obj];
            for(var i=0; i<recordData.length; i++) {
              var rec = recordData[i];
              var obj = {};
              for(var j=0; j<model.fields.length; j++) {
                var f = model.fields[j];
                var schemaInfo = modelService.schemas[$scope.formData.objectType.value][f.schemaName];

                if(util.defined(rec,f.schemaName)) {
                  var val = rec[f.schemaName];
                  if(schemaInfo.type == 'string') {
                    if(util.defined(val) && val.length > 0) {
                      val = val.replace(/["]/g, "\"\"")
                      val = val.replace(/(?:\r\n|\r|\n)/g, ' ');
                      if(val.indexOf(",") > -1) {
                        val = '"' + val + '"';
                      }
                      obj[f.schemaName] = val;                    
                    } else {
                      obj[f.schemaName] = '';  
                    }
                  } if(schemaInfo.type== 'date') {
                    obj[f.schemaName] = moment(val).format("YYYY-MM-DD");
                  }else {
                    obj[f.schemaName] = val; 
                  }
                } else {
                  obj[f.schemaName] = '';
                }
              }
              obj['id'] = rec['@rid'];
              if($scope.formData.isEdge) {
                obj['sourceid'] = rec['out'];
                obj['targetid'] = rec['in'];
              }             
              json.push(obj);
            }
            var csv = util.JSON2CSV(json);
            var fileName = 'data'
            var uri = 'data:text/csv;charset=utf-8,' + escape(csv);
            var link = document.createElement("a");
            link.href = uri
              //link.style = "visibility:hidden"; Causing exception in Chrome - SR 6/15/2015
            link.download = fileName + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }

        });
      }
    }
  }


  vm.upload = function (file) {
    Upload.upload({
      url: '/upload', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData,
        schemas: modelService.schemas
      } //pass file as data, should be user ng-model
  }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        remoteDataService.getLogInfo($scope.file, function(err, data) {

          $timeout( function(){ 
            $state.transitionTo($state.current, $stateParams, {
              reload: true,
              inherit: false,
              notify: true
            });
          }, 3000);

        });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});

var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadImageController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, $state, $stateParams, $timeout) {

  $scope.formData = {
    objectType : $stateParams.objectType,
    logoField: $stateParams.logoField,
    id: $stateParams.id
  }


  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
      vm.upload(vm.file); //call upload function
    } else {
      alert('No file selected!');
    }
  }

  vm.upload = function (file) {
    Upload.upload({
      url: '/uploadImage', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData
      } //pass file as data, should be user ng-model
    }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        // remoteDataService.getLogInfo($scope.file, function(err, data) {
        // });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});

var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userAquisitionsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.acquisition,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Acquisition',
          schemaName: 'name',
          fieldName: 'name',
          route: 'aquisitionsDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        },
        {
          name: 'Date',
          fieldName: 'closedate',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {
                name: 'closedate',
                formatMethod:  util.formatDate,
                formatMethodParam: "MMM, YYYY"              }
              
            ]
          }
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userCompaniesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vCompanyGrid',
  		model : modelService.models.company,
      route: 'companies',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'companyDetail'
        },
        {
          name: 'Product Categories',
          schemaName: 'productcategory',
          fieldName: 'productcategory',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userFundingController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'VInvestment',
  		model : modelService.models.investment,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Investment',
          schemaName: 'name',
          fieldName: 'name',
          route: 'fundingDetail'
        },
        {
          name: 'Type',
          schemaName: 'type',
          fieldName: 'type',
          route: null
        },
        {
          name: 'Amount',
          fieldName: 'amount',
          route: null,
          formula: {
            pattern : '€ %(values[0].value)s',
            fields: [
              {
                name: 'amount',
                formatMethod:  util.formatMoney,
                formatMethodParam: ""              
              }
            ]
          }          
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userInvestorsController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vInvestmentGrid',
  		model : modelService.models.investmentfirm,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'investorsDetail'
        },
        {
          name: 'Industry / Sector',
          schemaName: 'industry',
          fieldName: 'industry',
          route: null
        },
        {
          name: 'Headquarters Location',
          fieldName: 'location',
          formula: {
            pattern : '%(values[0].value)s',
            fields: [
              {name: 'city'}
            ]
          }
        },
        {
          name: 'Description',
          schemaName: 'description',
          fieldName: 'description',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userPeopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vPeopleGrid',
  		model : modelService.models.people,
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'People Name',
          fieldName: 'name',
          formula: {
            pattern : '<img class="media-object small-logo" src="%(values[0].value)s"> %(values[1].value)s',
            fields: [
              {name: 'logo'},
              {name: 'name'}
            ]
          },
          logo: true,
          route: 'peopleDetail'
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        },
        {
          name: 'Primary Job',
          schemaName: null,
          fieldName: 'role',
          select: 'outE(EWorksfor).role AS role'
        },
        {
          name: 'Primary Company',
          schemaName: null,
          fieldName: 'company',
          select: "OUT('EWorksfor').name AS company"
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions2 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions2 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });
}]);
var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('userUniversitiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','gridService','modelService', 'uiGridConstants',
  function (util, $scope, $rootScope, $state, $stateParams, gridService, modelService, uiGridConstants) {

  	var gridInfo = {
  		name: 'vUniversityGrid',
  		model : modelService.models.university,
      route: 'universities',
      defaultSort: 'name',
      sortReverse: true,
      gridFields: [
        {
          name: 'Company Name',
          schemaName: 'name',
          fieldName: 'name',
          route: 'universitiesDetail'
        },
        {
          name: 'Year Founded',
          schemaName: 'yearfounded',
          fieldName: 'yearfounded',
          route: null
        },
        {
          name: 'City',
          schemaName: 'city',
          fieldName: 'city',
          route: null
        }
      ]
  };

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.gridOptions1 = {
      columnDefs: null,
      data: null
  };  

  gridService.fetchRecords(gridInfo, function(err, data) {
    $scope.gridOptions1 = {
      columnDefs: data.columnDefs,
      data: data.records
    };  
  });

}]);