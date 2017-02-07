angular.module('soiApp.controllers', []); //instantiates
var controllers = angular.module('soiApp.controllers')      //gets

controllers.controller('mainCtrl', function ($scope, $rootScope, util) {
	$scope.templates =
	[{ name: 'home.html', url: 'home.html'},
	{ name: 'template2.html', url: 'template2.html'}];
	$scope.template = $scope.templates[0];

	$scope.admin=false;
	$scope.$on('navAdminMode', function(event, navAdminMode) {
		$scope.admin=navAdminMode;
	});
});

controllers.controller('networkController', function ($scope, $rootScope, util, gridService, modelService) {
  $scope.util = util;
  $scope.showAdv = $scope.$parent.showAdv;
  
  $scope.zoomOut = function() {
    $scope.$parent.zoomOut()
  }

  $scope.zoomIn = function() {
    $scope.$parent.zoomIn()
  }

  $scope.getCompany = function(companyId, prop) {
    $scope.$parent.zoomIn(companyId, prop);
  }

  $scope.toggelSchema = function(obj) {
    $scope.$parent.toggelSchema(obj);
  }

  $scope.applyFilters = function() {
    $scope.$parent.applyFilters();
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

  $scope.$on("userDetailsDataLoaded", function (event, subject, message) {
    $scope.allRecords = $scope.$parent.recDetails[$scope.recordInfo.recordsName];
    if(util.defined($scope,"allRecords") && $scope.allRecords.length > 0) {
      $scope.records = $scope.allRecords.slice(($scope.pageNumber*$scope.pageSize), ($scope.pageNumber*$scope.pageSize)+$scope.pageSize);
      $scope.pages = Math.floor($scope.allRecords.length / $scope.pageSize);
    }    
  });

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

controllers.controller('userDetailsRelatedController', function ($scope, $rootScope, util, gridService, modelService) {
  $scope.idName = 'inId';
  if($scope.recordInfo.direction != 'in') {
    $scope.idName = 'outId';
  }
  $scope.otherInfo = [];

  $scope.pageNumber = 0;
  $scope.pageSize = 10;
  $scope.pages = 0;

  $scope.records = [];

  if(typeof $scope.recordInfo.otherFields == 'object') {
    _.each($scope.recordInfo.otherFields, function(field) {
      var fndObj = util.findWhereProp(modelService.models,'objectType',field.objectType);
      if(util.defined(fndObj)) {
        var fnd = _.findWhere(fndObj.fields, {schemaName: field.schemaName})
        if(util.defined(fnd)) {
          $scope.otherInfo.push({controlType: fnd.controlType, schemaName: field.schemaName, direction: field.direction, label: field.label});
        }
      }
    });

  } else {
    var otherInfo = $scope.recordInfo.otherFields.split(',');
    _.each(otherInfo, function(field) {
      var fndObj = util.findWhereProp(modelService.models,'objectType',$scope.recordInfo.recordsName);
      if(util.defined(fndObj)) {
        var fnd = _.findWhere(fndObj.fields, {schemaName: field})
        if(util.defined(fnd)) {
          $scope.otherInfo.push({controlType: fnd.controlType, schemaName: field});
        }
      }
    });      
  }

  $scope.iconClass = ['fa',$scope.recordInfo.avatar,'fa-2x','obj-details-logo'];

  $scope.$on("userDetailsDataLoaded", function (event, subject, message) {
    $scope.allRecords = $scope.$parent.recDetails[$scope.recordInfo.recordsName];
    if(util.defined($scope,"allRecords") && $scope.allRecords.length > 0) {
      $scope.records = $scope.allRecords.slice(($scope.pageNumber*$scope.pageSize), ($scope.pageNumber*$scope.pageSize)+$scope.pageSize);
      $scope.pages = Math.floor($scope.allRecords.length / $scope.pageSize);
    }
  });
  
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
    gridService.fetchRecords($scope.gridInfo, function(err, data) {
      $scope.$parent.gridInfo.rawData = data.rawData;
    });
  }  
});



controllers.controller('picklistsController', function ($scope, $rootScope, $stateParams, util, remoteDataService, modelService, panelFieldsService) {

  $scope.formData = {
    mode : 'Add',
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

  
  function init() {
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
            description: pickVal.description
          }
          $scope.pickListData[pickVal.type].options.push(obj)
        }
      }

    });
  }
  initAddValues();
  init();

  $scope.changeOption = function(mode) {
    if(mode == 'Add') {
      initAddValues();
    } else {
      init();
      $scope.formData.pickListValues = $scope.pickListData[$scope.formData.pickListType.name].options;
    }
  }


  $scope.addEditInputs = function(typeName) {
    for(i=0; i<10; i++) {
      var obj = {
        name: null,
        description: null
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
        //$scope.formData.pickListType.name = typeName;
        init();
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
        description: null
      }
      $scope.addValues.push(obj);
    }        
  }

  $scope.selectPickListType = function(pickListType) {
    $scope.formData.pickListValues = $scope.pickListData[pickListType].options;
  }

  $scope.addPickList = function() {
    remoteDataService.addPickListValues($scope.formData.typeName, $scope.addValues, function(err, data) {
      if(!util.defined(err)) {
        alert('Pick List values added!');
        initAddValues();
        $scope.formData.mode = 'Edit';
        $scope.formData.typeName='';
        init();
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

  remoteDataService.searchRecords(null, $scope.searchText, function(err, data) {
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

controllers.controller('searchController', function ($scope, $rootScope, $stateParams, util, remoteDataService, modelService, panelFieldsService) {

  $scope.searchText = '';
  $scope.searchResults = null;
  if(util.defined($stateParams,"term"))
    $scope.searchText = $stateParams.term;

  $scope.search = function() {
    remoteDataService.searchRecords(null, $scope.searchText, function(err, data) {
      $scope.searchResults = data;
    });
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

});




