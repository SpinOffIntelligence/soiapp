var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('peopleController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vPeopleList',
  		displayName: 'People',
      objectType: 'VPerson',
      obectId: null,
      route: 'people',
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
	      	schemaName: 'email',
	      	displayName: 'Email',
	      	readOnly: false,
	      	required: false,
	      	hidden: false,
	      	showinList: true        		
	    	},
    	],
			relationships: [
				{
					edgeType: 'EWorksfor',
					displayName: 'Worked For',
					destObjectType: 'VOrganization',
					fields: [
						{
							schemaName: 'startdate',
							displayName: 'Start Date',
							readOnly: false,
							required: true,
							hidden: false,
							showinList: true
						},
						{
							schemaName: 'enddate',
							displayName: 'End Date',
							readOnly: false,
							required: true,
							hidden: false,
							showinList: true							
						},
						{
							schemaName: 'role',
							displayName: 'Role',
							readOnly: false,
							required: true,
							hidden: false,
							showinList: true							
						}						
					]
				}
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