angular.module('soiApp.controllers', []); //instantiates
var controllers = angular.module('soiApp.controllers')      //gets

controllers.controller('mainCtrl', function ($scope, $rootScope, util) {
	$scope.templates =
	[{ name: 'home.html', url: 'home.html'},
	{ name: 'template2.html', url: 'template2.html'}];
	$scope.template = $scope.templates[0];

	$scope.admin=false;
  $scope.loggedIn=false;
	$scope.$on('navAdminMode', function(event, navAdminMode) {
		$scope.admin=navAdminMode;
	});
});

controllers.controller('loginController', function ($scope, $rootScope, util) {
  $scope.util = util;
  $scope.loginForm = {
    email: null,
    password: null,
    submitted: false
  }

  $scope.login = function() {
    $scope.loginForm.submitted = true;
  }
});

controllers.controller('registerController', function ($scope, $rootScope, util) {
  $scope.util = util;
  $scope.loginForm = {
    email: null,
    password: null,
    submitted: false
  }

  $scope.register = function() {
    $scope.loginForm.submitted = true;
  }
});

controllers.controller('forgotController', function ($scope, $rootScope, util) {
  $scope.util = util;
  $scope.loginForm = {
    email: null,
    password: null,
    submitted: false
  }

  $scope.forgotSubmit = function() {
    $scope.loginForm.submitted = true;
  }
});


controllers.controller('filtersController', function ($scope, $rootScope, util, gridService, modelService, statsService, filterService) {

    $scope.filterService = filterService;
    $scope.piskLists = modelService.piskLists;

    // datepicker
    $scope.dateOptions = {
      dateDisabled: false,
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];  



    $scope.hasFiltersSelected = function() {
      return filterService.hasFiltersSelected();
    }

    $scope.hasButton = function(buttonName) {
      var fnd = _.indexOf(filterService.showButtons, buttonName);
      return (fnd >= 0);
    }

    $scope.hasFilters = function(objectType) {
      var fnd = _.findWhere(modelService.models, {
        objectType: objectType
      });
      if (util.defined(fnd)) {
        var pickLists = _.where(fnd.fields, {
          controlType: 'picklist'
        });
        var multiSelect = _.where(fnd.fields, {
          controlType: 'multiselect'
        });
        var dateSelect = _.where(fnd.fields, {
          controlType: 'datepicker'
        });

        if (pickLists.length > 0 || multiSelect.length > 0 || dateSelect.length > 0)
          return true;
      }
      return false;
    }

    $scope.getFilters = function(objectType) {
      console.log($scope.piskLists.department.options);      
      return util.findObjParent(filterService.filters, 'objectType', objectType);
    }
    
    $scope.hasFiltersCheck = function(obj) {
      var fndFilters = util.findObjParent(filterService.filters, 'objectType', obj.objectType);
      var found=false;
      _.each(fndFilters, function(item){
        if((util.defined(item, "filters.length") && item.filters.length > 0) ||
            item.startDate != null || item.endDate != null)
          found = true;
      })
      return found;    
    }


    $scope.hasVectorColor = function() {
      return function(item) {
        if (util.defined(item, "model.color") && util.defined(item, "objectType") && item.objectType.indexOf('V') == 0) {
          return 1;
        }
        return 0;
      }
    }

    $scope.hasEdgeColor = function() {
      return function(item) {
        if (util.defined(item, "model.color") && util.defined(item, "objectType") && item.objectType.indexOf('E') == 0) {
          return 1;
        }
        return 0;
      }
    }

    $scope.getColor = function(obj) {
      if (obj.selected)
        return obj.model.color;
      else return '#cccccc';
    }

    $scope.getTextColor = function(obj) {
      if (obj.selected)
        return obj.model.fontColor;
      else return '#000000';
    }

    $scope.toggelSchema = function(obj) {
      if(filterService.objectType == null || filterService.objectType != obj.objectType) {
        filterService.toggelSchema(obj);
        $rootScope.$broadcast('toggelSchema');        
      }
    }

    $scope.hideAdvFilters = function(obj) {
      filterService.showAdv = null;
      $rootScope.$broadcast('hideAdvFilters');
    }

    $scope.setAdvFilters = function(obj) {
      filterService.showAdv = obj.model;
      $rootScope.$broadcast('setAdvFilters');
    }

    $scope.applyFilters = function() {
      filterService.appliedFilters = true;
      $rootScope.$broadcast('applyFilters'); 
    }

    $scope.clearFilters = function() {
      filterService.clearFilters();
      $rootScope.$broadcast('clearFilters');
    }


});

controllers.controller('userGridListController', function ($scope, $rootScope, util, gridService, modelService, statsService, filterService) {


  $scope.showFilters = false;
  if(util.defined($scope,"$parent.objectType")) {
    // has filters set
    filterService.initService($scope.gridInfo.model, null, false, ['apply'], false);  
  } else {
    filterService.initService($scope.gridInfo.model, null, false, ['apply'], true);
  }
  

  $scope.toggelSort = function(sortField) {

    if(sortField == '$score') {
      sortField = statsService.currentMode.value;
    }    

    $scope.gridInfo.sortField=sortField;
    if($scope.gridInfo.sortOrder == 'asc')
      $scope.gridInfo.sortOrder = 'desc'
    else $scope.gridInfo.sortOrder = 'asc'

    gridService.fetchRecords($scope.gridInfo, filterService.filters, filterService.schemas, function(err, data) {
      $scope.gridInfo.rawData = data.rawData;
    });
  }

  $scope.goDetail = function(route, params) {
    util.navigate(route, {id: params});
  }

  $scope.getItemSchemaName = function(item) {
    if(item.schemaName == '$score') {
      return statsService.currentMode.value;
    }
    return item.schemaName;
  }


  $scope.getGridItemValue = function(obj, item, model) {

    if(item.fieldName == '$score') {
      item.fieldName = statsService.currentMode.value;
    }

    var displayValue = obj[item.fieldName];
    if(util.defined(item,"select"))
      displayValue = obj[item.fieldName][0];

    var fnd = _.findWhere(model.fields, {schemaName: item.fieldName})
    if(util.defined(fnd)) {    
      var controlType = fnd.controlType;
      var schemaType = modelService.schemas[model.objectType][item.fieldName].type;
      displayValue = util.formatData(controlType,schemaType, displayValue);
    }
    return displayValue;
  }

  $scope.$on('applyFilters', function() {
    gridService.fetchRecords($scope.gridInfo, filterService.filters, filterService.schemas, function(err, data) {
      $scope.gridInfo.rawData = data.rawData;
    });
  });

  $scope.$on('clearFilters', function() {
    gridService.fetchRecords($scope.gridInfo, filterService.filters, filterService.schemas, function(err, data) {
      $scope.gridInfo.rawData = data.rawData;
    });
  });

});

controllers.controller('networkController', function ($scope, $rootScope, util, gridService, modelService, statsService, filterService, remoteDataService) {

  $scope.util = util;
  $scope.showAdv = $scope.$parent.showAdv;

  //$scope.statsCurrentMode = statsService.currentMode;
  $scope.statsOptions = statsService.options;
  $scope.smode = statsService.currentMode;
  $scope.filters = filterService.filters;

    $scope.setPathSrcMode = function(obj) {
      remoteDataService.path.src = null;
      remoteDataService.path.dest = null;

      remoteDataService.path.src = obj;
      remoteDataService.path.dest = null;
      //util.navigate('search');
    }

    $scope.setPathDestMode = function(obj) {
      remoteDataService.path.dest = obj;
      util.navigate('search');
    }


  $scope.clearFilters = function() {
    $scope.$parent.clearFilters();
  }

  $scope.findNodes = function() {
    $scope.$parent.findNodes();
  }

  $scope.showFilters = function() {
    return $scope.$parent.showFilters;
  }

  $scope.toggleFilters = function() {
    $scope.$parent.toggleFilters();
  }

  $scope.setSMode = function(statsCurrentMode) {
    console.log(statsCurrentMode.value);
    $scope.$parent.setStatsMode(statsCurrentMode);
  }

  $scope.zoomOut = function() {
    $scope.$parent.zoomOut();
  }

  $scope.zoomIn = function() {
    $scope.$parent.zoomIn();
  }

  $scope.hideFilters = function() {
    $scope.$parent.hideFilters();
  }

  $scope.getOrganization = function(orgId, prop) {
    $scope.$parent.zoomIn(orgId, prop);
  }

  $scope.applyFilters = function() {
    $scope.$parent.applyFilters();
  }

  $scope.getEntityName = function(modelName) {
    var fndObj = util.findWhereProp(modelService.models,'objectType',modelName);  
    if(util.defined(fndObj)) {
      return fndObj.displayName;
    }
    return null;
  }

  $scope.getColor = function(obj) {
    if(obj.selected)
      return obj.model.color;
    else return '#cccccc';
  }

  $scope.getTextColor = function(obj) {
    if(obj.selected)
      return obj.model.fontColor;
    else return '#000000';
  }

  $scope.hasVectorColor = function() {
    return function( item ) {  
      if(util.defined(item,"model.color") && util.defined(item,"objectType") && item.objectType.indexOf('V') == 0) {
        return 1;
      }
      return 0;
    }
  }

  $scope.hasEdgeColor = function() {
    return function( item ) {  
      if(util.defined(item,"model.color") && util.defined(item,"objectType") && item.objectType.indexOf('E') == 0) {
        return 1;
      }
      return 0;
    }
  }

  $scope.hasSetFilter = function(scope, obj) {
    var fnd = util.getObjProperty(scope.filters, 'objectType', obj.objectType, 'filters');
    return (util.defined(fnd, "filters.length") && fnd.filters.length > 0);
  }

});

controllers.controller('userDetailsRelatedTableController', function ($scope, $rootScope, util, gridService, modelService) {
  $scope.util = util;
  $scope.idName = 'inId';
  if($scope.recordInfo.direction != 'in') {
    $scope.idName = 'outId';
  }
  $scope.fields = [];

  $scope.pageNumber = 0;
  $scope.pageSize = 10;
  $scope.pages = 0;  

  _.each($scope.recordInfo.fields, function(field) {
    var fndObj = util.findWhereProp(modelService.models,'objectType',field.objectType);
    if(util.defined(fndObj)) {
      var fnd = _.findWhere(fndObj.fields, {schemaName: field.schemaName})
      if(util.defined(fnd)) {
        $scope.fields.push({controlType: fnd.controlType, schemaName: field.schemaName});
      }
    }
  });

  $scope.iconClass = ['fa',$scope.recordInfo.avatar,'fa-2x','obj-details-logo'];

  //$rootScope.$on("userDetailsDataLoaded", function (event, subject, message) {
    $scope.allRecords = _.each($scope.$parent.recDetails[$scope.recordInfo.recordsName], function(item) {
      if(item['in']['inId'] == $scope.$parent.recordItemId)
        item.direction = 'out';
      else item.direction = 'in';
    });      
    if($scope.recordInfo.direction != 'both') {
      $scope.allRecords = _.reject($scope.$parent.recDetails[$scope.recordInfo.recordsName], function(item) {
        return (item[$scope.recordInfo.direction][$scope.idName] == $scope.$parent.recordItemId)
      });      
    }
    if(util.defined($scope,"allRecords") && $scope.allRecords.length > 0) {
      $scope.records = $scope.allRecords.slice(($scope.pageNumber*$scope.pageSize), ($scope.pageNumber*$scope.pageSize)+$scope.pageSize);
      $scope.pages = Math.floor($scope.allRecords.length / $scope.pageSize);
    }    
  //});

  $scope.pageRight = function() {
    if($scope.pageNumber < $scope.pages) {
      $scope.pageNumber++;
      $scope.records = $scope.allRecords.slice(($scope.pageNumber*$scope.pageSize), ($scope.pageNumber*$scope.pageSize)+$scope.pageSize);      
    }
  }

  $scope.pageLeft = function() {
    if($scope.pageNumber > 0) {
      $scope.pageNumber--;
      $scope.records = $scope.allRecords.slice(($scope.pageNumber*$scope.pageSize), ($scope.pageNumber*$scope.pageSize)+$scope.pageSize);      
    }
  }

});

controllers.controller('userDetailsRelatedController', function ($scope, $rootScope, util, gridService, modelService, panelFieldsService) {
  $scope.idName = 'inId';
  if($scope.recordInfo.direction != 'in') {
    $scope.idName = 'outId';
  }
  $scope.otherInfo = [];

  $scope.pageNumber = 0;
  $scope.pageSize = 10;
  $scope.pages = 0;
  $scope.viewMode = 'stats';
  $scope.statsInfo = [];

  $scope.records = [];

  if(typeof $scope.recordInfo.otherFields == 'object') {
    _.each($scope.recordInfo.otherFields, function(field) {
      var fndObj = util.findWhereProp(modelService.models,'objectType',field.objectType);
      if(util.defined(fndObj)) {
        var fnd = _.findWhere(fndObj.fields, {schemaName: field.schemaName})
        if(util.defined(fnd)) {
          $scope.otherInfo.push({controlType: fnd.controlType, schemaName: field.schemaName, direction: field.direction, label: field.label, displayName: fnd.displayName});
        }
      }
    });

  } else {
    var fndObj = util.findWhereProp(modelService.models,'objectType',$scope.recordInfo.recordsName);
    if(util.defined(fndObj)) {
      var fields = $scope.recordInfo.otherFields.split(',');
      _.each(fields, function(field) {
        var fnd = _.findWhere(fndObj.fields, {schemaName: field})
        if(util.defined(fnd)) {
          $scope.otherInfo.push({controlType: fnd.controlType, schemaName: field, displayName: fnd.displayName});
        }
      });
    }
  }

  $scope.iconClass = ['fa',$scope.recordInfo.avatar,'fa-2x','obj-details-logo'];

  $scope.allRecords = _.each($scope.$parent.recDetails[$scope.recordInfo.recordsName], function(item) {
    if(item['in']['inId'] == $scope.$parent.recordItemId)
      item.direction = 'out';
    else item.direction = 'in';
  });      
  if($scope.recordInfo.direction != 'both') {
    $scope.allRecords = _.reject($scope.$parent.recDetails[$scope.recordInfo.recordsName], function(item) {
      return (item[$scope.recordInfo.direction][$scope.idName] == $scope.$parent.recordItemId)
    });      
  }
  if(util.defined($scope,"allRecords") && $scope.allRecords.length > 0) {
    $scope.records = $scope.allRecords.slice(($scope.pageNumber*$scope.pageSize), ($scope.pageNumber*$scope.pageSize)+$scope.pageSize);
    $scope.pages = Math.floor($scope.allRecords.length / $scope.pageSize);
  }

  // Setup Stats Info
  _.each($scope.otherInfo, function(info) {
    
    var infoStatsItem = {
      displayName: info.displayName,
      values: []
    }
    var infoItems = util.wherePropExists($scope.allRecords, info.schemaName);
    _.each(infoItems, function(item) {
      // Find value
      var fnd = _.findWhere(infoStatsItem.values, {value: item[info.schemaName]});
      if(util.defined(fnd)) {
        fnd.count++;
      } else {
        infoStatsItem.values.push({
          value: item[info.schemaName],
          count: 1
        })
      }
    });
    $scope.statsInfo.push(infoStatsItem);

  });

  $scope.setViewMode = function(mode) {
    $scope.viewMode = mode;
  }

  $scope.gotoFilteredList = function(item, record, index) {

    var edgePropName = item.schemaName;
    var edgePropValue = record[edgePropName];
    var otherField = $scope.recordInfo.otherFields[index];
    var otherFieldObjectType = $scope.recordInfo.recordsName
    if(util.defined(otherField,"objectType")) {
      otherFieldObjectType = otherField.objectType;
    }
    var relatedItemModel = $scope.$parent.getEntity(record,record.direction, null);

    var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',relatedItemModel.objectType);
    if(util.defined(fnd,"userListRoute")) {
      util.navigate(fnd.userListRoute + "Filter",{object: otherFieldObjectType, prop: edgePropName, value: edgePropValue});
    }

  }
  
  $scope.goRoute = function(record, routeInfo) {
    var idName = 'inId';
    if(record.direction != 'in') {
      idName = 'outId';
    }
    var fnd = util.findPropArrayReturnProp($scope.$parent.recDetails, 'id',record[record.direction][idName]);
    if(util.defined(fnd)) {
      var fndObj = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',fnd);
      if(util.defined(fndObj)) {
        util.navigate(fndObj.userRoute,{id:record[record.direction][idName]})
      }
    }
  }

  $scope.pageRight = function() {
    if($scope.pageNumber < $scope.pages) {
      $scope.pageNumber++;
      $scope.records = $scope.allRecords.slice(($scope.pageNumber*$scope.pageSize), ($scope.pageNumber*$scope.pageSize)+$scope.pageSize);      
    }
  }

  $scope.pageLeft = function() {
    if($scope.pageNumber > 0) {
      $scope.pageNumber--;
      $scope.records = $scope.allRecords.slice(($scope.pageNumber*$scope.pageSize), ($scope.pageNumber*$scope.pageSize)+$scope.pageSize);      
    }
  }


});

controllers.controller('userPageController', function ($scope, $rootScope, util, gridService) {
  $scope.gotoPage = function(pageNum) {
    $scope.gridInfo.currentPage = pageNum;
    gridService.fetchRecords($scope.gridInfo, filterService.filters, filterService.schemas, function(err, data) {
      $scope.$parent.gridInfo.rawData = data.rawData;
    });
  }  
});

controllers.controller('adminPageController', function ($scope, $rootScope, util, panelFieldsService) {
  $scope.gotoPage = function(pageNumber) {
    $scope.panelInfo.currentPage = pageNumber;
    panelFieldsService.fetchPanelRecords(panelFieldsService.panelInfo[$scope.panelName], function(err, panelListData) {
    });   
  }
});


controllers.controller('picklistsController', function ($scope, $rootScope, $stateParams, util, remoteDataService, modelService, panelFieldsService) {

  $scope.formData = {
    mode : 'Edit',
    pickListValues: null,
    pickListType: {}
  }

  function initAddValues() {
    $scope.addValues = [];
    for(i=0; i<10; i++) {
      var obj = {
        name: null,
        description: null
      }
      $scope.addValues.push(obj);
    }    
  }

  
  function init(callback) {
    remoteDataService.getPickListValues(function(err, data) {
      $scope.pickOptions = [];
      for(var i=0; i<data.length; i++) {
        var pickVal = data[i];
        if(util.defined(pickVal,'type')) {
          var fnd = _.findWhere($scope.pickOptions, {name: pickVal.type});
          if(!util.defined(fnd)) {
            var obj = {
              id: i,
              name: pickVal.type
            }
            $scope.pickOptions.push(obj);
          }        
        }
      }

      // For models
      $scope.pickListData = {};
      for(var i=0; i<data.length; i++) {
        var pickVal = data[i];
        if(util.defined(pickVal,'type')) {
          if(!util.defined($scope.pickListData,pickVal.type)) {
            if(!util.defined($scope,"formData.pickListType.name"))
              $scope.formData.pickListType.name = pickVal.type
            $scope.pickListData[pickVal.type] = {options:[]};
          }
          var obj = {
            id: pickVal['@rid'],
            name: pickVal.name,
            description: pickVal.description,
            color: pickVal.color
          }
          $scope.pickListData[pickVal.type].options.push(obj)
        }
      }
      callback(err, data);

    });
  }
  initAddValues();
  init(function(err, data) {
    $scope.formData.pickListValues = $scope.pickListData[$scope.formData.pickListType.name].options;
  });

  $scope.changeOption = function(mode) {
    if(mode == 'Add') {
      initAddValues();
    } else {
      init(function(err, data) {
        $scope.formData.pickListValues = $scope.pickListData[$scope.formData.pickListType.name].options;
      });
      
    }
  }


  $scope.addEditInputs = function(typeName) {
    for(i=0; i<10; i++) {
      var obj = {
        name: null,
        description: null,
        color: null
      }
      $scope.formData.pickListValues.push(obj);
    }
  }

  $scope.saveValues = function() {
    var typeName = $scope.formData.pickListType.name;
    remoteDataService.savePickListValues(typeName, $scope.formData.pickListValues, function(err, data) {
      if(!util.defined(err)) {
        alert('Pick List values saved!');
        initAddValues();
        $scope.formData.mode = 'Edit';
        init(function(err, data) {
          $scope.formData.pickListValues = $scope.pickListData[$scope.formData.pickListType.name].options;
        });
      } else {
        alert(err);
      }
      //initAddValues();
    });

  }

  $scope.addInputs = function() {
    for(i=0; i<10; i++) {
      var obj = {
        name: null,
        description: null,
        color: null
      }
      $scope.addValues.push(obj);
    }        
  }

  $scope.selectPickListType = function(pickListType) {
    $scope.formData.pickListValues = $scope.pickListData[pickListType].options;
  }

  $scope.removePickListItem = function(itemId) {
    remoteDataService.removePickListItem($scope.formData.pickListType.name, itemId, function(err, data) {
      init(function(err, data) {
        $scope.formData.pickListValues=$scope.pickListData[$scope.formData.pickListType.name].options;;
      });
    });
  }

  $scope.addPickList = function() {
    remoteDataService.addPickListValues($scope.formData.typeName, $scope.addValues, function(err, data) {
      if(!util.defined(err)) {
        alert('Pick List values added!');
        initAddValues();
        $scope.formData.mode = 'Edit';
        $scope.formData.typeName='';
        init(function(err, data) {
        });
      } else {
        alert(err);
      }
      //initAddValues();
    });
  }

});



controllers.controller('visController', function ($scope, $rootScope, $stateParams, util, remoteDataService, modelService, panelFieldsService) {

  $scope.recordId = '';
  $scope.searchResults = null;
  if(util.defined($stateParams,"id"))
    $scope.recordId = $stateParams.id;

  remoteDataService.searchRecords($scope.searchText, null, null, function(err, data) {
    $scope.searchResults = data;
  });


  var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
  ]);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);

});

controllers.controller('searchController', function ($scope, $rootScope, $stateParams, util, remoteDataService, modelService, panelFieldsService, filterService) {

  $scope.screenStuff = {
    searchText: null,
    showFilters: false,
    searchResults: null,
    sortField: 'name',
    sortOrder: false,
    sortOrderSel: 'Asc',
    groupResults: false,
    showAdv: false,
    notSearchText: null,
    err: null
  };

  $scope.path = remoteDataService.path;
  $scope.shortPathResult = null;

  filterService.initService(null, true, true, [], true);

  function initScreen() {
    if(util.defined($scope,"path.src") && util.defined($scope,"path.dest")) {
      remoteDataService.findShortestPathDetail($scope.path.src.id, $scope.path.dest.id, $scope.path.mode, function(err, data) {
        //$scope.shortPathResult = data;

        var searchResults = [];
        for(var i=0; i<data.length; i++) {
          var item = data[i];
          if(util.defined(item,"results") && item.results.length > 0) {
            for(var j=0; j<item.results.length; j++) {
              var fndItem = item.results[j];
              fndItem.id = fndItem['@rid'];
              var fnd = util.findWhereProp(modelService.models,'objectType',fndItem['@class']);
              if(util.defined(fnd)) {
                fndItem.displayName = fnd.displayName;
                if(!util.defined(fndItem,"name")) {
                  var fndName = _.findWhere(fnd.fields, {showInSearchResults: true});
                  if(util.defined(fndName)) {
                    fndItem.name = fndItem[fndName.schemaName];
                  }
                }
              }
              searchResults.push(fndItem);
            }
          }
        }

        $scope.screenStuff.sortField=null;
        $scope.screenStuff.sortOrder=null;
        searchResults = _.sortBy(searchResults, function(obj) { return obj.sortNum; });
        $scope.screenStuff.searchResults = searchResults;
      });
    }
  }
  initScreen();

  $scope.showScore = function(score) {
    if(score == 0)
      return 0;
    else return 1000 - score;
  }

  $scope.getPathName = function() {
    if(remoteDataService.path.mode == 'shortest')
      return 'Shortest';
    if(remoteDataService.path.mode == 'best')
      return 'Best';
  }

  $scope.clearShortestPath = function() {
    remoteDataService.path.src = null;
    remoteDataService.path.dest = null;
    $scope.path = remoteDataService.path;
    $scope.shortPathResult = null;
    $scope.screenStuff.searchResults = null;
  }

  
  $scope.setShortestPathMode = function(mode) {
    remoteDataService.path.mode = mode;
    $scope.path = remoteDataService.path;
    initScreen();
  }


  $scope.setShortestSrc = function(obj) {
    remoteDataService.path.src = obj;
    remoteDataService.path.dest = null;
    $scope.path = remoteDataService.path;
  }

  $scope.setShortestDest = function(obj) {
    remoteDataService.path.dest = obj;
    initScreen();
  }

  $scope.search = function() {
    $scope.screenStuff.err = null;
    if(!util.defined($scope,"screenStuff.searchText") || $scope.screenStuff.searchText.length == 0) {
      $scope.screenStuff.err = 'Please enter search terms.';
      return;
    }
    remoteDataService.searchRecords($scope.screenStuff.searchText, $scope.screenStuff.notSearchText, filterService.schemas, filterService.filters, function(err, data) {
      var searchResults = [];
      for(var i=0; i<data.length; i++) {
        var item = data[i];
        if(util.defined(item,"results") && item.results.length > 0) {
          for(var j=0; j<item.results.length; j++) {
            var fndItem = item.results[j];
            fndItem.id = fndItem['@rid'];
            var fnd = util.findWhereProp(modelService.models,'objectType',fndItem['@class']);
            if(util.defined(fnd)) {
              fndItem.displayName = fnd.displayName;
              if(!util.defined(fndItem,"name")) {
                var fndName = _.findWhere(fnd.fields, {showInSearchResults: true});
                if(util.defined(fndName)) {
                  fndItem.name = fndItem[fndName.schemaName];
                }
              }
            }
            searchResults.push(fndItem);
          }
        }
      }
      $scope.screenStuff.searchResults = searchResults;
    });
  }

  $scope.showResults = function(objectType, rec) {
    var fndModel = util.findWhereProp(modelService.models,'objectType',objectType);
     if(util.defined(fndModel)) {
      var fnd = _.findWhere(fndModel.fields, {showInSearchResults: true});
      if(util.defined(fnd)) {
        return rec[fnd.schemaName];
      }
    }
    return rec.name;
  }

  $scope.objectTypeToName = function(objectType) {
    var fnd = util.findWhereProp(modelService.models,'objectType',objectType);
    if(util.defined(fnd)) {
      return fnd.displayName;
    }
  }

  $scope.goObj = function(result) {
    if(util.defined(result,"@class") && util.defined(result,"@rid")) {
      var prop = result["@class"];
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',prop);
      if(util.defined(fnd)) {
        util.navigate(fnd.userRoute,{id:result['@rid']});
      }
    }
  }  

  $scope.toggelSortOrder = function(order) {
    if(order == 'Asc')
      $scope.screenStuff.sortOrder = false;
    if(order == 'Desc')
      $scope.screenStuff.sortOrder = true;
  }

  $scope.toggelSort = function(sortField) {
    $scope.screenStuff.sortField=sortField;
  }

$scope.toggelTableSort = function(sortField) {

    if($scope.screenStuff.sortField == sortField) {
      $scope.screenStuff.sortOrder = !$scope.screenStuff.sortOrder;
    } else {
      $scope.screenStuff.sortField=sortField;
      $scope.screenStuff.sortOrder = false;
    }
  }  


});




