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




