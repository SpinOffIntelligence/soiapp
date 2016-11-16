var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('companiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vOrgList',
  		displayName: 'Organization',
        objectType: 'VOrganization',
        obectId: null,
        route: 'companies',
        fields: [
        	{
	        	schemaName: 'name',
	        	displayName: 'Name',
	        	readOnly: false,
	        	required: true,
	        	hidden: false,
	        	showinList: true        		
        	},
        	{
	        	schemaName: 'phone',
	        	displayName: 'Phone',
	        	readOnly: false,
	        	required: false,
	        	hidden: false,
	        	showinList: true        		
        	},
        	{
	        	schemaName: 'size',
	        	displayName: 'Number of employees',
	        	readOnly: false,
	        	required: false,
	        	hidden: false,
	        	showinList: true        		
        	},
        	{
	        	schemaName: 'website',
	        	displayName: 'Website',
	        	readOnly: false,
	        	required: false,
	        	hidden: false,
	        	showinList: true        		
        	},
        ],
        defaultSort: 'name',
        sortReverse: true,
        allowEdit: true,
        allowDelete: true,
        addButtonText: 'Add',
        editButtonText: 'Edit',
        deleteButtonText: 'Delete'
  };


  panelFieldsService.fetchPanelRecords(panelInfo, function(err, panelListData) {
  });


}]);