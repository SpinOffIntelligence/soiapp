angular.module('soiApp.modelService', []); //instantiates
angular.module('soiApp.modelService') //gets
.factory('modelService', ['$http','$state','$stateParams','$rootScope','navService',
	function($http,$state,$stateParams,$rootScope,navService){

	var modelService = {
		piskLists : {},
		models : {},
		schemas : {}
	};

	// Picklists

	modelService.piskLists.productcategory = {
		options: [
			{id: 1, name: 'Penetrations Test'},
			{id: 2, name: 'Source Code Audits'},
			{id: 3, name: 'IT Security'},
			{id: 4, name: 'ICS/SCADA Systeme'},
			{id: 5, name: 'Patient Recruitment'},
			{id: 6, name: 'Clinical Trials'},
			{id: 7, name: 'Internet'},
			{id: 8, name: 'Innovative Treatments'},
			{id: 9, name: 'Patient Centricity'},
			{id: 10, name: 'Geologische Kindergeburtstage'},
			{id: 11, name: 'Forscher Geburtstage'},
			{id: 12, name: 'Präparationsmethoden'},
			{id: 14, name: 'Fossilien'},
			{id: 15, name: 'Gesteinsbearbeitung'},
			{id: 16, name: 'Gesteinspräparatorik'},
			{id: 17, name: 'Geology'},
			{id: 18, name: 'Natural Sciences'},
			{id: 19, name: 'School Labs'},
			{id: 20, name: 'Freizeiteinrichtung'},
			{id: 21, name: 'Patient Centricity'}
		]
	};

	modelService.piskLists.industry = {
		options: [
			{id: 1, name: 'Internet'},
			{id: 2, name: 'Veterinary'},
			{id: 3, name: 'IT Security'},
			{id: 4, name: 'Computer & Network Security'},
			{id: 5, name: 'Pharmaceuticals'},
			{id: 6, name: 'Museums and Institutions'},
			{id: 7, name: 'Computer Games'},
			{id: 8, name: 'Umzugstransporte'},
			{id: 9, name: 'Human Resources'},
			{id: 10, name: 'Computer Software'},
			{id: 11, name: 'Marketing and Advertising'},
			{id: 12, name: 'Information Technology and Services'},
			{id: 14, name: 'Health / Medicine'},
			{id: 15, name: 'Management Consulting'},
			{id: 16, name: 'Environmental Services'}
		]
	};

	// Relations

	modelService.models.founded = {
		displayName: 'Founders',
    objectType: 'EFounded',
    fields: []
  }

	modelService.models.worksfor = {
		displayName: 'Worked For',
    objectType: 'EWorksfor',
    fields: [
			{
				schemaName: 'startdate',
				displayName: 'Start Date',
				readOnly: false,
				required: true,
				hidden: false,
				showinList: true,
				displayOrder: 1,
      	controlType: 'datepicker'
			},
			{
				schemaName: 'enddate',
				displayName: 'End Date',
				readOnly: false,
				required: true,
				hidden: false,
				showinList: true,
				displayOrder: 2,
      	controlType: 'datepicker'							
			},
			{
				schemaName: 'role',
				displayName: 'Role',
				readOnly: false,
				required: true,
				hidden: false,
				showinList: true,
				displayOrder: 3,
      	controlType: 'text'						
			}						
		]
	}

	// Entities

	modelService.models.organization = {
		displayName: 'Organization',
    objectType: 'VOrganization',
	  fields: [
    	{
      	schemaName: 'name',
      	displayName: 'Name',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 1,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'yearfounded',
      	displayName: 'Year Founded',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 2,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'description',
      	displayName: 'Description',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 3,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'products',
      	displayName: 'Products/Technology',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 4,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'productcategory',
      	displayName: 'Products Category',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 5,
      	controlType: 'multiselect',
      	picklistOptions: modelService.piskLists.productcategory
    	},    	
    	{
      	schemaName: 'industry',
      	displayName: 'Industry / Sector',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 6,
      	controlType: 'picklist',
      	picklistOptions: modelService.piskLists.industry
    	},
    	{
      	schemaName: 'website',
      	displayName: 'Website',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 7,
      	controlType: 'url',
    	},    	
    	{
      	schemaName: 'address',
      	displayName: 'Address',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	addressBlock: 1,
      	displayOrder: 8,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'city',
      	displayName: 'City',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	addressBlock: 1,
      	displayOrder: 9,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'state',
      	displayName: 'State/Provence',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	addressBlock: 1,
      	displayOrder: 10,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'zip',
      	displayName: 'Zip Code',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	addressBlock: 1,
      	displayOrder: 11,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,       		
      	displayOrder: 12,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,        		
      	displayOrder: 13,
      	controlType: 'email'
    	},
    	{
      	schemaName: 'size',
      	displayName: 'Number of employees',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 14,
      	controlType: 'text'       		
    	},
    	{
      	schemaName: 'source1',
      	displayName: 'Source Website 1',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 15,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'source2',
      	displayName: 'Source Website 2',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 15,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'linkedin',
      	displayName: 'LinkedIn Profile',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 16,
      	controlType: 'url' 		
    	},
  	],
		relationships: [
			{
				model: modelService.models.founded,
				destObjectType: 'VPerson'
			}
  	]
	}

	modelService.models.people = {
		displayName: 'People',
    objectType: 'VPerson',
    fields: [
    	{
      	schemaName: 'name',
      	displayName: 'Name',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
				displayOrder: 1,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
				displayOrder: 2,
      	controlType: 'text'       		
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
				displayOrder: 3,
      	controlType: 'email'        		
    	}
    ],
		relationships: [
			{
				model: modelService.models.worksfor,
				destObjectType: 'VOrganization'
			}
  	]
	}
	

	return modelService;
}]);	
