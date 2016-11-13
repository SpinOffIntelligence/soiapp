var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('companiesController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService) {


  	var fetchPanelFieldsParams = {
        objectType: 'VOrganization',
        obectId: null,
        fields: [
        	{
	        	schemaName: 'name',
	        	diaplyName: 'Name',
	        	readOnly: false,
	        	required: true,
	        	hidden: false,
	        	showinList: true        		
        	},
        	{
	        	schemaName: 'phone',
	        	diaplyName: 'Phone',
	        	readOnly: false,
	        	required: false,
	        	hidden: false,
	        	showinList: true        		
        	},
        	{
	        	schemaName: 'size',
	        	diaplyName: 'Number of employees',
	        	readOnly: false,
	        	required: false,
	        	hidden: false,
	        	showinList: true        		
        	},
        	{
	        	schemaName: 'website',
	        	diaplyName: 'Website',
	        	readOnly: false,
	        	required: false,
	        	hidden: false,
	        	showinList: true        		
        	},
        ],
        defaultSort: 'name',
        sortReverse: true
  };


  panelFieldsService.fetchPanelRecords(fetchPanelFieldsParams, function(err, panelListData) {
  })


}]);