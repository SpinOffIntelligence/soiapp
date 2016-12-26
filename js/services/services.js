var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vInvestmentFirmList',
  		model : modelService.models.investmentfirm,
      route: 'investmentfirm',
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
  modelService.piskLists.companytype = {
    options: [
      {id: 1, name: 'Spin-Off'},
      {id: 2, name: 'Other'}
    ]
  }

  modelService.piskLists.acquisitiontype = {
    options: [
      {id: 1, name: 'Acquisition'},
      {id: 2, name: 'Merger'}
    ]
  }

  modelService.piskLists.investmentfirmtype = {
    options: [
      {id: 1, name: 'VC'},
      {id: 2, name: 'Management Investment'},
      {id: 3, name: 'Unit Investment Trusts'}
    ]
  }

  modelService.piskLists.invesmenttype = {
    options: [
      {id: 1, name: 'Seed'},
      {id: 2, name: 'Series A'},
      {id: 2, name: 'Series B'},
      {id: 2, name: 'Series C'}      
    ]
  }

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

  modelService.piskLists.universitytype = {
  options: [
    {id: 1, name: 'University'},
    {id: 2, name: 'Research Institute'},
    {id: 3, name: 'University of Applied Science'},
    {id: 3, name: 'Technical University'}
  ]};

  modelService.piskLists.phase = {
    options: [
      {id: 1, name: 'Early'},
      {id: 2, name: 'Growth'},
      {id: 3, name: 'Maturity'},
      {id: 4, name: 'Possible Exit'}
    ]
  }

  modelService.piskLists.businessmodel = {
    options: [
      {id: 1, name: 'Direct Sales'},
      {id: 2, name: 'Franchise'},
      {id: 3, name: 'Freemium', description: 'For companies that offer personal or business services via the Internet, the freemium business model is common. Under a freemium model, business give away a service at no cost to the consumer as a way to establish the foundation for future transactions. Companies that offer a basic-level service for free build relationships with customers and eventually offer advanced services as add-ons or advertisement-free options at a cost. The freemium model tends to work well for Internet-based businesses with little customer acquisition costs but high lifetime value. Spotify and Skype both operate under a freemium business model.'},
      {id: 4, name: 'Subscription'}
    ]
  }

  modelService.piskLists.typeofspinoff = {
    options: [
      {id: 1, name: 'Direct'},
      {id: 2, name: 'Employee'},
      {id: 3, name: 'Joint Employee'},
      {id: 4, name: 'Joint R&D'},
      {id: 4, name: 'R&D'}
    ]
  }

  modelService.piskLists.programs = {
    options: [
      {id: 1, name: 'Computer Science'},
      {id: 2, name: 'Humanities'},
      {id: 3, name: 'Life Sciences'},
      {id: 4, name: 'Sociology'},
      {id: 5, name: 'Liberal Arts'},      
      {id: 6, name: 'Biochemistry'},      
      {id: 7, name: 'Hospitality Management'},      
      {id: 8, name: 'Social Work'},      
      {id: 9, name: 'Health care administration'},      
      {id: 10, name: 'Anthropology'},      
      {id: 11, name: 'Education'},      
      {id: 12, name: 'Sports management'},      
      {id: 13, name: 'Public relations'},      
      {id: 14, name: 'Film studies'},      
      {id: 15, name: 'Music'},      
      {id: 16, name: 'Chemistry'},      
      {id: 17, name: 'Interior design'},      
      {id: 18, name: 'Communications'},      
      {id: 19, name: 'Spanish'},      
      {id: 20, name: 'Social science'},      
      {id: 21, name: 'Psychology'},
      {id: 22, name: 'Biology'},      
      {id: 23, name: 'Pharmacy'},      
      {id: 24, name: 'Electrical Engineering'},      
      {id: 25, name: 'Veterinary Medicine'},      
      {id: 26, name: 'Geological Sciences'},
      {id: 27, name: 'Mathematics'},
      {id: 28, name: 'Physics'},
      {id: 29, name: 'Medicine'},
      {id: 30, name: 'Philosophy'},
      {id: 31, name: 'Spiritual Science'},
      {id: 32, name: 'Politics Sciences'},
      {id: 33, name: 'Social Sciences'},
      {id: 34, name: 'Environmental Sciences'},
      {id: 35, name: 'Economics'}
    ]
  };

	// Relations
  modelService.models.acquired = {
    displayName: 'Acquired',
    objectType: 'EAcquired',
    fields: [],
    isRelationship: true
  }

  
  modelService.models.acquirer = {
    displayName: 'Acquirer',
    objectType: 'EAcquirer',
    fields: [],
    isRelationship: true
  }

  modelService.models.board = {
    displayName: 'Board Member',
    objectType: 'EBoardMember',
    fields: [],
    isRelationship: true
  }

  modelService.models.advisor = {
    displayName: 'Advisor',
    objectType: 'EAdvisor',
    fields: [],
    isRelationship: true
  }

  modelService.models.funded = {
    displayName: 'Funded',
    objectType: 'EFunded',
    fields: [],
    isRelationship: true
  }

  modelService.models.investor = {
    displayName: 'Investor',
    objectType: 'EInvestor',
    fields: [],
    isRelationship: true
  }


  modelService.models.coapplicant = {
    displayName: 'Co Applicant',
    objectType: 'ECoApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.applicant = {
    displayName: 'Applicant',
    objectType: 'EApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.inventor = {
    displayName: 'Inventor',
    objectType: 'EInventor',
    fields: [],
    isRelationship: true
  }

  modelService.models.supplier = {
    displayName: 'Supplier',
    objectType: 'ESupplier',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.customer = {
    displayName: 'Customer',
    objectType: 'ECustomer',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.partner = {
    displayName: 'Partner',
    objectType: 'EPartner',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

	modelService.models.founded = {
		displayName: 'Founders',
    objectType: 'EFounded',
    fields: [],
    isRelationship: true
  }

  modelService.models.spinoff = {
    displayName: 'Spun Off',
    objectType: 'ESpinOff',
    fields: [
      {
        schemaName: 'department',
        displayName: 'Department',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text'
      },
      {
        schemaName: 'typeofspinoff',
        displayName: 'Type of Spinoff',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.typeofspinoff
      }      
    ],
    isRelationship: true
  }

  modelService.models.teaches = {
    displayName: 'Teachers',
    objectType: 'ETeaches',
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
        schemaName: 'post',
        displayName: 'Post',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'text'           
      }           
    ],
    isRelationship: true
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
		],
    isRelationship: true
	}

	// Entities
  modelService.models.acquisition = {
    displayName: 'Acquisition',
    objectType: 'VAcquisition',
    color: '#92a8d1',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.acquisitiontype
      },
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.acquirer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.acquired,
        destObjectType: 'VCompany'
      }
    ]
  }


  modelService.models.investment = {
    displayName: 'Investment',
    objectType: 'VInvestment',
    color: '#f7786b',    
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
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.invesmenttype
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'datepicker'
      },
      {
        schemaName: 'details',
        displayName: 'Details',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'textarea'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.investor,
        destObjectType: 'VInvestmentFirm'
      },
      {
        model: modelService.models.funded,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.advisor,
        destObjectType: 'VPerson'
      }
    ]
  }

  modelService.models.patent = {
    displayName: 'Patent',
    objectType: 'VPatent',
    color: '#034f84',
    fontColor: 'white',
    fields: [
      {
        schemaName: 'name',
        displayName: 'Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'number',
        displayName: 'Patent Number',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'text'
      },
      {
        schemaName: 'applicationdate',
        displayName: 'Application Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'datepicker'
      },
      {
        schemaName: 'dategranted',
        displayName: 'Date Granted',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'ipc2',
        displayName: 'IPC main class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'text'
      },
      {
        schemaName: 'ipcindex',
        displayName: 'IPC index class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'ipcreclasified',
        displayName: 'Reclasified IPC (MCD)',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'text'
      },
      {
        schemaName: 'ipcsearch',
        displayName: 'IPC-Search file',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'text'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL1',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'url'
      },
      {
        schemaName: 'source2',
        displayName: 'Source URL2',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 11,
        controlType: 'url'
      }],
      relationships: [
        {
          model: modelService.models.applicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.coapplicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.inventor,
          destObjectType: 'VPerson'
        }
      ]
    }

  modelService.models.investmentfirm = {
    displayName: 'Investment Firm',
    objectType: 'VInvestmentFirm',
    color: '#deeaee',        
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.investmentfirmtype
      },
      {
        schemaName: 'yearfounded',
        displayName: 'Year Founded',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 3,
        controlType: 'text'
      },      
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 4,
        controlType: 'textarea'
      },
      {
        schemaName: 'industry',
        displayName: 'Industry / Sector',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.industry
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 10,
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
        displayOrder: 11,
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
        displayOrder: 12,
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
        displayOrder: 13,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,          
        displayOrder: 14,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,            
        displayOrder: 15,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of employees',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 16,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 17,
        controlType: 'url'    
      },
      {
        schemaName: 'source2',
        displayName: 'Source Website 2',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 18,
        controlType: 'url'    
      },
      {
        schemaName: 'linkedin',
        displayName: 'LinkedIn Profile',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 19,
        controlType: 'url'    
      },
    ],
    relationships: [
      {
        model: modelService.models.founded,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      }
    ]
  }

	modelService.models.company = {
		displayName: 'Company',
    objectType: 'VCompany',
    color: '#b1cbbb',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.companytype
      },
    	{
      	schemaName: 'yearfounded',
      	displayName: 'Year Founded',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 3,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'description',
      	displayName: 'Description',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 4,
      	controlType: 'textarea'
    	},    	
      {
        schemaName: 'logo',
        displayName: 'Logo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'image'
      },      
    	{
      	schemaName: 'products',
      	displayName: 'Products/Technology',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 5,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'productcategory',
      	displayName: 'Products Category',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 6,
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
      	displayOrder: 7,
      	controlType: 'picklist',
      	picklistOptions: modelService.piskLists.industry
    	},
      {
        schemaName: 'phase',
        displayName: 'Phase of Development',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 8,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.phase
      },
      {
        schemaName: 'businessmodel',
        displayName: 'Business Model',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.businessmodel
      },
    	{
      	schemaName: 'website',
      	displayName: 'Website',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 10,
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
      	displayOrder: 11,
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
      	displayOrder: 12,
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
      	displayOrder: 13,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,       		
      	displayOrder: 14,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,        		
      	displayOrder: 15,
      	controlType: 'email'
    	},
    	{
      	schemaName: 'size',
      	displayName: 'Number of employees',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 16,
      	controlType: 'text'       		
    	},
    	{
      	schemaName: 'source1',
      	displayName: 'Source Website 1',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 17,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'source2',
      	displayName: 'Source Website 2',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 18,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'linkedin',
      	displayName: 'LinkedIn Profile',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 19,
      	controlType: 'url' 		
    	},
  	],
		relationships: [
			{
				model: modelService.models.founded,
				destObjectType: 'VPerson'
			},
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.supplier,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.customer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.partner,
        destObjectType: 'VCompany'
      }
  	]
	}

  modelService.models.university = {
    displayName: 'University',
    objectType: 'VUniversity',
    color: '#eea29a',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.universitytype      
      },

      {
        schemaName: 'programs',
        displayName: 'Programs',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'multiselect',
        picklistOptions: modelService.piskLists.programs
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 6,
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
        displayOrder: 7,
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
        displayOrder: 8,
        controlType: 'text'
      },      
      {
        schemaName: 'provence',
        displayName: 'State/Provence',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 9,
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
        displayOrder: 10,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 11,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 12,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of students',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 13,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 14,
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
        model: modelService.models.teaches,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.spinoff,
        destObjectType: 'VCompany'
      }
    ]
  }  

	modelService.models.people = {
		displayName: 'People',
    objectType: 'VPerson',
    color: '#c94c4c',
    fontColor: 'white',    
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
        schemaName: 'logo',
        displayName: 'photo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'image'
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
    	},     
      {
        schemaName: 'address',
        displayName: 'Address',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 4,
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
        displayOrder: 5,
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
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'country',
        displayName: 'Country',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 7,
        controlType: 'text'
      }      
    ],
		relationships: [
			{
				model: modelService.models.worksfor,
				destObjectType: 'VCompany'
			}
  	]
	}
	

	return modelService;
}]);	

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var panelFieldsService = {
    panelInfo: {}
  };

  panelFieldsService.panelInfo.vCompanyList = {
      name: 'vCompanyList',
      model : modelService.models.company,
      route: 'companies',
      userRoute: 'companyDetail',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vUniversityList = {
      name: 'vUniversityList',
      model : modelService.models.university,
      route: 'university',
      userRoute: 'universitiesDetail',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPeopleList = {
      name: 'vPeopleList',
      model: modelService.models.people,
      route: 'people',
      userRoute: 'peopleDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentFirmList = {
      name: 'vInvestmentFirmList',
      model : modelService.models.investmentfirm,
      route: 'investmentfirm',
      userRoute: 'investorsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentList = {
      name: 'vInvestmentList',
      model : modelService.models.investment,
      route: 'investment',
      userRoute: 'fundingDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vAcquisitionList = {
      name: 'vAcquisitionList',
      model : modelService.models.acquisition,
      route: 'acquisition',
      userRoute: 'aquisitionsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPatentList = {
      name: 'vPatentList',
      model : modelService.models.patent,
      route: 'patent',
      userRoute: 'patentDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.prepareInboudData = function(panelInfo, records) {
    var schema = modelService.schemas[panelInfo.model.objectType];

    var inRecords=[];
    for(j=0; j<records.length; j++) {
      var inData = {};
      var record = records[j];
      for(var propertyName in schema) {
        var schemaItem = schema[propertyName];
        var val = record[propertyName];
        if(util.defined(schemaItem)) {
          var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
          if(util.defined(modelItem,"controlType") && util.defined(record,propertyName)) {
            if(modelItem.controlType == 'multiselect') {

              var names = val.split(';');
              var inObj = [];
              for(var i=0; i<names.length; i++) {
                inObj.push({id: i, name: names[i]});
              }
              inData[propertyName] = inObj;
            } else {
              inData[propertyName] = val;
            }
          }
        }
      }
      if(util.defined(record,'id')) {
          inData['id'] = record['id'];
      }
      inRecords.push(inData);
    }
    return inRecords;
  }


  panelFieldsService.prepareOutboudData = function(panelInfo, panelRecord) {
    var schema = modelService.schemas[panelInfo.model.objectType];
    var outData = {};
    for(var propertyName in schema) {
      var schemaItem = schema[propertyName];
      if(util.defined(schemaItem)) {
        var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
        if(util.defined(modelItem,"controlType") && util.defined(panelRecord,propertyName)) {
          if(modelItem.controlType == 'multiselect') {

            var names = _.pluck(panelRecord[propertyName], 'name');
            var outText = '';
            if(util.defined(names,'length')) {
              for(var i=0; i<names.length; i++) {
                if(i == names.length-1)
                  outText += names[i];
                else outText += names[i] + ';';
              }
              outData[propertyName] = outText;
            }
          } else {
            outData[propertyName] = panelRecord[propertyName];
          }
        }
      }
    }
    if(util.defined(panelRecord,'id')) {
        outData['id'] = panelRecord['id'];
    }
    return outData;
  }

	panelFieldsService.fetchPanelRecords = function(panelInfo, callback) {
		remoteDataService.fetchPanelRecords(panelInfo, function(err, data) {
			var panelName = panelInfo.name;
			panelFieldsService[panelName] = {
        panelInfo: panelInfo
      };
      if(util.defined(data,"length")) {
  		  panelFieldsService[panelName].panelInfo.records = panelFieldsService.prepareInboudData(panelInfo, data);
      }
      $rootScope.$broadcast('fetchPanelRecords',panelName);
			callback(null,data);
		});
	};

  panelFieldsService.deletePanelRecord = function(objectType, recordId, callback) {
    remoteDataService.deletePanelRecord(objectType, recordId, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.updatePanelRecord = function(panelInfo, recordId, panelRecord, callback) {

    var outRecord = panelFieldsService.prepareOutboudData(panelInfo, panelRecord);

    remoteDataService.updatePanelRecord(panelInfo.model.objectType, recordId, outRecord, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.addPanelRecord = function(objectType, panelRecord, callback) {
    remoteDataService.addPanelRecord(objectType, panelRecord, function(err, data) {
      callback(err, data);
    });
  };

  return panelFieldsService;
}]);

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('remoteDataService', ['$http','$rootScope','util','modelService',
  function($http, $rootScope,util,modelService){

  var remoteDataService = {};

	remoteDataService.apiCall = function(method, route, cacheKey, params, callback) {
      if (!util.defined(remoteDataService.data)) remoteDataService.data = {};
      if (util.defined(cacheKey) && util.defined(remoteDataService.data[cacheKey])) {
      	callback(null, remoteDataService.data[cacheKey]);
      } else {
          if (!util.defined(params)) params = {};
          return $http({
              url: route,
              method: method,
              data: params
          }).then(function(resp) {
              remoteDataService.data[cacheKey] = resp.data;
              callback(null, resp.data);
          }).catch(function(resp) {
          		callback(resp.status, null);
          });
      }
  };

  remoteDataService.searchRecords = function(objectTypes, terms, callback) {
    var obj = {
      objectType: objectTypes,
      terms: terms
    };
    remoteDataService.apiCall('POST','/soi/searchRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.loadSchemas = function(q, callback) {

    if(util.propLength(modelService.schemas) == 0) {
      var schemas = [];
      for(var propertyName in modelService.models) {
        var obj = {
          objectType: modelService.models[propertyName].objectType
        }
        schemas.push(obj);
      }
      var obj = {
        schemas: schemas
      }
      remoteDataService.apiCall('POST','/soi/getSchemas',null,obj, function(err, data) {
          modelService.schemas = data;
          q.resolve();
          if(util.defined(callback)) {
            callback(null, null);
          }
      });      
    } else {
      q.resolve();
      if(util.defined(callback)) {
        callback(null, null);
      }
    }
  }

  remoteDataService.fetchGridRecords = function(gridInfo, callback) {
    var obj = {
      objectType: gridInfo.model.objectType,
      gridFields: gridInfo.gridFields
    };
    remoteDataService.apiCall('POST','/soi/fetchGridRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[gridInfo.model.objectType]}));
  }

  remoteDataService.getRelationshipDetails = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationshipDetails',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getRelationship = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationship',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }


  remoteDataService.getEdge = function(edgeObjectType, edgeRecordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      edgeRecordItemId: edgeRecordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdge',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getEdgeBySource = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdgeBySource',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.deleteEdge = function(objectType, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/deleteEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updateEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/updateEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/addEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }


  remoteDataService.getRecordDetails = function(objectType, recordId, depth, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      depth: depth
    };
    remoteDataService.apiCall('POST','/soi/getRecordDetails',null,obj, function(err, data) {
      var returnObj={};
      for(var propertyName in data) {
        returnObj[propertyName] =  remoteDataService.prepareInboundDataArray(this.schema, data[propertyName]);
      }
      callback(err, returnObj);
    }.bind({schema: modelService.schemas[objectType]}));
  }



  remoteDataService.fetchRecordByProp = function(objectType, prop, value, callback) {
    var obj = {
      objectType: objectType,
      prop: prop,
      value: value,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/fetchRecordByProp',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }

  remoteDataService.fetchRecords = function(objectType, callback) {
    var obj = {
      objectType: objectType
    };
    remoteDataService.apiCall('POST','/soi/fetchRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }


  remoteDataService.fetchPanelRecords = function(panelInfo, callback) {
  	var obj = {
  		objectType: panelInfo.model.objectType,
      schema: modelService.schemas[panelInfo.model.objectType]
  	};

  	remoteDataService.apiCall('POST','/soi/fetchPanelRecords',null,obj, function(err, data) {
      data = remoteDataService.prepareInboundDataArray(this.schema, data);
  		callback(err, data);
  	}.bind( {schema: modelService.schemas[panelInfo.model.objectType]}));
  }

  remoteDataService.deletePanelRecord = function(objectType, recordId, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId
    };
    remoteDataService.apiCall('POST','/soi/deletePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updatePanelRecord = function(objectType, recordId, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/updatePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addPanelRecord = function(objectType, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/addPanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }  
  
  remoteDataService.prepareInboundDataArray = function(schema, objArray) {
    var returnArray=[];
    for(var i=0; i<objArray.length; i++) {
      var valObj = remoteDataService.prepareInboundData(schema, objArray[i]);
      returnArray.push(valObj);
    }
    return returnArray;
  }

  remoteDataService.prepareInboundData = function(schema, obj) {
    for(var propertyName in obj) {
      if(util.defined(obj,propertyName)) {
        var val = obj[propertyName];
        var schemaInfo = schema[propertyName];
        if(util.defined(schemaInfo,"type") && schemaInfo.type == 'date') {
          var x = moment(val);
          val = new Date(x.year(), x.month(), x.date());
        }
      }
      obj[propertyName] = val;
    }
    return obj;    
  }

  remoteDataService.deleteLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/deleteLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getAllLogInfo = function(callback) {
    var obj = {
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.exportRecords = function(objectType, criteria, callback) {
    var obj = {
      objectType: objectType,
      criteria: criteria,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/exportRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  return remoteDataService;

}]);


var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vInvestmentFirmList',
  		model : modelService.models.investmentfirm,
      route: 'investmentfirm',
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
  modelService.piskLists.companytype = {
    options: [
      {id: 1, name: 'Spin-Off'},
      {id: 2, name: 'Other'}
    ]
  }

  modelService.piskLists.acquisitiontype = {
    options: [
      {id: 1, name: 'Acquisition'},
      {id: 2, name: 'Merger'}
    ]
  }

  modelService.piskLists.investmentfirmtype = {
    options: [
      {id: 1, name: 'VC'},
      {id: 2, name: 'Management Investment'},
      {id: 3, name: 'Unit Investment Trusts'}
    ]
  }

  modelService.piskLists.invesmenttype = {
    options: [
      {id: 1, name: 'Seed'},
      {id: 2, name: 'Series A'},
      {id: 2, name: 'Series B'},
      {id: 2, name: 'Series C'}      
    ]
  }

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

  modelService.piskLists.universitytype = {
  options: [
    {id: 1, name: 'University'},
    {id: 2, name: 'Research Institute'},
    {id: 3, name: 'University of Applied Science'},
    {id: 3, name: 'Technical University'}
  ]};

  modelService.piskLists.phase = {
    options: [
      {id: 1, name: 'Early'},
      {id: 2, name: 'Growth'},
      {id: 3, name: 'Maturity'},
      {id: 4, name: 'Possible Exit'}
    ]
  }

  modelService.piskLists.businessmodel = {
    options: [
      {id: 1, name: 'Direct Sales'},
      {id: 2, name: 'Franchise'},
      {id: 3, name: 'Freemium', description: 'For companies that offer personal or business services via the Internet, the freemium business model is common. Under a freemium model, business give away a service at no cost to the consumer as a way to establish the foundation for future transactions. Companies that offer a basic-level service for free build relationships with customers and eventually offer advanced services as add-ons or advertisement-free options at a cost. The freemium model tends to work well for Internet-based businesses with little customer acquisition costs but high lifetime value. Spotify and Skype both operate under a freemium business model.'},
      {id: 4, name: 'Subscription'}
    ]
  }

  modelService.piskLists.typeofspinoff = {
    options: [
      {id: 1, name: 'Direct'},
      {id: 2, name: 'Employee'},
      {id: 3, name: 'Joint Employee'},
      {id: 4, name: 'Joint R&D'},
      {id: 4, name: 'R&D'}
    ]
  }

  modelService.piskLists.programs = {
    options: [
      {id: 1, name: 'Computer Science'},
      {id: 2, name: 'Humanities'},
      {id: 3, name: 'Life Sciences'},
      {id: 4, name: 'Sociology'},
      {id: 5, name: 'Liberal Arts'},      
      {id: 6, name: 'Biochemistry'},      
      {id: 7, name: 'Hospitality Management'},      
      {id: 8, name: 'Social Work'},      
      {id: 9, name: 'Health care administration'},      
      {id: 10, name: 'Anthropology'},      
      {id: 11, name: 'Education'},      
      {id: 12, name: 'Sports management'},      
      {id: 13, name: 'Public relations'},      
      {id: 14, name: 'Film studies'},      
      {id: 15, name: 'Music'},      
      {id: 16, name: 'Chemistry'},      
      {id: 17, name: 'Interior design'},      
      {id: 18, name: 'Communications'},      
      {id: 19, name: 'Spanish'},      
      {id: 20, name: 'Social science'},      
      {id: 21, name: 'Psychology'},
      {id: 22, name: 'Biology'},      
      {id: 23, name: 'Pharmacy'},      
      {id: 24, name: 'Electrical Engineering'},      
      {id: 25, name: 'Veterinary Medicine'},      
      {id: 26, name: 'Geological Sciences'},
      {id: 27, name: 'Mathematics'},
      {id: 28, name: 'Physics'},
      {id: 29, name: 'Medicine'},
      {id: 30, name: 'Philosophy'},
      {id: 31, name: 'Spiritual Science'},
      {id: 32, name: 'Politics Sciences'},
      {id: 33, name: 'Social Sciences'},
      {id: 34, name: 'Environmental Sciences'},
      {id: 35, name: 'Economics'}
    ]
  };

	// Relations
  modelService.models.acquired = {
    displayName: 'Acquired',
    objectType: 'EAcquired',
    fields: [],
    isRelationship: true
  }

  
  modelService.models.acquirer = {
    displayName: 'Acquirer',
    objectType: 'EAcquirer',
    fields: [],
    isRelationship: true
  }

  modelService.models.board = {
    displayName: 'Board Member',
    objectType: 'EBoardMember',
    fields: [],
    isRelationship: true
  }

  modelService.models.advisor = {
    displayName: 'Advisor',
    objectType: 'EAdvisor',
    fields: [],
    isRelationship: true
  }

  modelService.models.funded = {
    displayName: 'Funded',
    objectType: 'EFunded',
    fields: [],
    isRelationship: true
  }

  modelService.models.investor = {
    displayName: 'Investor',
    objectType: 'EInvestor',
    fields: [],
    isRelationship: true
  }


  modelService.models.coapplicant = {
    displayName: 'Co Applicant',
    objectType: 'ECoApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.applicant = {
    displayName: 'Applicant',
    objectType: 'EApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.inventor = {
    displayName: 'Inventor',
    objectType: 'EInventor',
    fields: [],
    isRelationship: true
  }

  modelService.models.supplier = {
    displayName: 'Supplier',
    objectType: 'ESupplier',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.customer = {
    displayName: 'Customer',
    objectType: 'ECustomer',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.partner = {
    displayName: 'Partner',
    objectType: 'EPartner',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

	modelService.models.founded = {
		displayName: 'Founders',
    objectType: 'EFounded',
    fields: [],
    isRelationship: true
  }

  modelService.models.spinoff = {
    displayName: 'Spun Off',
    objectType: 'ESpinOff',
    fields: [
      {
        schemaName: 'department',
        displayName: 'Department',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text'
      },
      {
        schemaName: 'typeofspinoff',
        displayName: 'Type of Spinoff',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.typeofspinoff
      }      
    ],
    isRelationship: true
  }

  modelService.models.teaches = {
    displayName: 'Teachers',
    objectType: 'ETeaches',
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
        schemaName: 'post',
        displayName: 'Post',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'text'           
      }           
    ],
    isRelationship: true
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
		],
    isRelationship: true
	}

	// Entities
  modelService.models.acquisition = {
    displayName: 'Acquisition',
    objectType: 'VAcquisition',
    color: '#92a8d1',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.acquisitiontype
      },
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.acquirer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.acquired,
        destObjectType: 'VCompany'
      }
    ]
  }


  modelService.models.investment = {
    displayName: 'Investment',
    objectType: 'VInvestment',
    color: '#f7786b',    
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
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.invesmenttype
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'datepicker'
      },
      {
        schemaName: 'details',
        displayName: 'Details',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'textarea'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.investor,
        destObjectType: 'VInvestmentFirm'
      },
      {
        model: modelService.models.funded,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.advisor,
        destObjectType: 'VPerson'
      }
    ]
  }

  modelService.models.patent = {
    displayName: 'Patent',
    objectType: 'VPatent',
    color: '#034f84',
    fontColor: 'white',
    fields: [
      {
        schemaName: 'name',
        displayName: 'Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'number',
        displayName: 'Patent Number',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'text'
      },
      {
        schemaName: 'applicationdate',
        displayName: 'Application Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'datepicker'
      },
      {
        schemaName: 'dategranted',
        displayName: 'Date Granted',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'ipc2',
        displayName: 'IPC main class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'text'
      },
      {
        schemaName: 'ipcindex',
        displayName: 'IPC index class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'ipcreclasified',
        displayName: 'Reclasified IPC (MCD)',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'text'
      },
      {
        schemaName: 'ipcsearch',
        displayName: 'IPC-Search file',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'text'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL1',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'url'
      },
      {
        schemaName: 'source2',
        displayName: 'Source URL2',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 11,
        controlType: 'url'
      }],
      relationships: [
        {
          model: modelService.models.applicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.coapplicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.inventor,
          destObjectType: 'VPerson'
        }
      ]
    }

  modelService.models.investmentfirm = {
    displayName: 'Investment Firm',
    objectType: 'VInvestmentFirm',
    color: '#deeaee',        
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.investmentfirmtype
      },
      {
        schemaName: 'yearfounded',
        displayName: 'Year Founded',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 3,
        controlType: 'text'
      },      
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 4,
        controlType: 'textarea'
      },
      {
        schemaName: 'industry',
        displayName: 'Industry / Sector',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.industry
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 10,
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
        displayOrder: 11,
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
        displayOrder: 12,
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
        displayOrder: 13,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,          
        displayOrder: 14,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,            
        displayOrder: 15,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of employees',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 16,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 17,
        controlType: 'url'    
      },
      {
        schemaName: 'source2',
        displayName: 'Source Website 2',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 18,
        controlType: 'url'    
      },
      {
        schemaName: 'linkedin',
        displayName: 'LinkedIn Profile',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 19,
        controlType: 'url'    
      },
    ],
    relationships: [
      {
        model: modelService.models.founded,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      }
    ]
  }

	modelService.models.company = {
		displayName: 'Company',
    objectType: 'VCompany',
    color: '#b1cbbb',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.companytype
      },
    	{
      	schemaName: 'yearfounded',
      	displayName: 'Year Founded',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 3,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'description',
      	displayName: 'Description',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 4,
      	controlType: 'textarea'
    	},    	
      {
        schemaName: 'logo',
        displayName: 'Logo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'image'
      },      
    	{
      	schemaName: 'products',
      	displayName: 'Products/Technology',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 5,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'productcategory',
      	displayName: 'Products Category',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 6,
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
      	displayOrder: 7,
      	controlType: 'picklist',
      	picklistOptions: modelService.piskLists.industry
    	},
      {
        schemaName: 'phase',
        displayName: 'Phase of Development',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 8,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.phase
      },
      {
        schemaName: 'businessmodel',
        displayName: 'Business Model',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.businessmodel
      },
    	{
      	schemaName: 'website',
      	displayName: 'Website',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 10,
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
      	displayOrder: 11,
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
      	displayOrder: 12,
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
      	displayOrder: 13,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,       		
      	displayOrder: 14,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,        		
      	displayOrder: 15,
      	controlType: 'email'
    	},
    	{
      	schemaName: 'size',
      	displayName: 'Number of employees',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 16,
      	controlType: 'text'       		
    	},
    	{
      	schemaName: 'source1',
      	displayName: 'Source Website 1',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 17,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'source2',
      	displayName: 'Source Website 2',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 18,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'linkedin',
      	displayName: 'LinkedIn Profile',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 19,
      	controlType: 'url' 		
    	},
  	],
		relationships: [
			{
				model: modelService.models.founded,
				destObjectType: 'VPerson'
			},
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.supplier,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.customer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.partner,
        destObjectType: 'VCompany'
      }
  	]
	}

  modelService.models.university = {
    displayName: 'University',
    objectType: 'VUniversity',
    color: '#eea29a',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.universitytype      
      },

      {
        schemaName: 'programs',
        displayName: 'Programs',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'multiselect',
        picklistOptions: modelService.piskLists.programs
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 6,
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
        displayOrder: 7,
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
        displayOrder: 8,
        controlType: 'text'
      },      
      {
        schemaName: 'provence',
        displayName: 'State/Provence',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 9,
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
        displayOrder: 10,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 11,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 12,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of students',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 13,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 14,
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
        model: modelService.models.teaches,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.spinoff,
        destObjectType: 'VCompany'
      }
    ]
  }  

	modelService.models.people = {
		displayName: 'People',
    objectType: 'VPerson',
    color: '#c94c4c',
    fontColor: 'white',    
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
        schemaName: 'logo',
        displayName: 'photo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'image'
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
    	},     
      {
        schemaName: 'address',
        displayName: 'Address',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 4,
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
        displayOrder: 5,
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
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'country',
        displayName: 'Country',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 7,
        controlType: 'text'
      }      
    ],
		relationships: [
			{
				model: modelService.models.worksfor,
				destObjectType: 'VCompany'
			}
  	]
	}
	

	return modelService;
}]);	

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var panelFieldsService = {
    panelInfo: {}
  };

  panelFieldsService.panelInfo.vCompanyList = {
      name: 'vCompanyList',
      model : modelService.models.company,
      route: 'companies',
      userRoute: 'companyDetail',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vUniversityList = {
      name: 'vUniversityList',
      model : modelService.models.university,
      route: 'university',
      userRoute: 'universitiesDetail',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPeopleList = {
      name: 'vPeopleList',
      model: modelService.models.people,
      route: 'people',
      userRoute: 'peopleDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentFirmList = {
      name: 'vInvestmentFirmList',
      model : modelService.models.investmentfirm,
      route: 'investmentfirm',
      userRoute: 'investorsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentList = {
      name: 'vInvestmentList',
      model : modelService.models.investment,
      route: 'investment',
      userRoute: 'fundingDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vAcquisitionList = {
      name: 'vAcquisitionList',
      model : modelService.models.acquisition,
      route: 'acquisition',
      userRoute: 'aquisitionsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPatentList = {
      name: 'vPatentList',
      model : modelService.models.patent,
      route: 'patent',
      userRoute: 'patentDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.prepareInboudData = function(panelInfo, records) {
    var schema = modelService.schemas[panelInfo.model.objectType];

    var inRecords=[];
    for(j=0; j<records.length; j++) {
      var inData = {};
      var record = records[j];
      for(var propertyName in schema) {
        var schemaItem = schema[propertyName];
        var val = record[propertyName];
        if(util.defined(schemaItem)) {
          var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
          if(util.defined(modelItem,"controlType") && util.defined(record,propertyName)) {
            if(modelItem.controlType == 'multiselect') {

              var names = val.split(';');
              var inObj = [];
              for(var i=0; i<names.length; i++) {
                inObj.push({id: i, name: names[i]});
              }
              inData[propertyName] = inObj;
            } else {
              inData[propertyName] = val;
            }
          }
        }
      }
      if(util.defined(record,'id')) {
          inData['id'] = record['id'];
      }
      inRecords.push(inData);
    }
    return inRecords;
  }


  panelFieldsService.prepareOutboudData = function(panelInfo, panelRecord) {
    var schema = modelService.schemas[panelInfo.model.objectType];
    var outData = {};
    for(var propertyName in schema) {
      var schemaItem = schema[propertyName];
      if(util.defined(schemaItem)) {
        var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
        if(util.defined(modelItem,"controlType") && util.defined(panelRecord,propertyName)) {
          if(modelItem.controlType == 'multiselect') {

            var names = _.pluck(panelRecord[propertyName], 'name');
            var outText = '';
            if(util.defined(names,'length')) {
              for(var i=0; i<names.length; i++) {
                if(i == names.length-1)
                  outText += names[i];
                else outText += names[i] + ';';
              }
              outData[propertyName] = outText;
            }
          } else {
            outData[propertyName] = panelRecord[propertyName];
          }
        }
      }
    }
    if(util.defined(panelRecord,'id')) {
        outData['id'] = panelRecord['id'];
    }
    return outData;
  }

	panelFieldsService.fetchPanelRecords = function(panelInfo, callback) {
		remoteDataService.fetchPanelRecords(panelInfo, function(err, data) {
			var panelName = panelInfo.name;
			panelFieldsService[panelName] = {
        panelInfo: panelInfo
      };
      if(util.defined(data,"length")) {
  		  panelFieldsService[panelName].panelInfo.records = panelFieldsService.prepareInboudData(panelInfo, data);
      }
      $rootScope.$broadcast('fetchPanelRecords',panelName);
			callback(null,data);
		});
	};

  panelFieldsService.deletePanelRecord = function(objectType, recordId, callback) {
    remoteDataService.deletePanelRecord(objectType, recordId, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.updatePanelRecord = function(panelInfo, recordId, panelRecord, callback) {

    var outRecord = panelFieldsService.prepareOutboudData(panelInfo, panelRecord);

    remoteDataService.updatePanelRecord(panelInfo.model.objectType, recordId, outRecord, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.addPanelRecord = function(objectType, panelRecord, callback) {
    remoteDataService.addPanelRecord(objectType, panelRecord, function(err, data) {
      callback(err, data);
    });
  };

  return panelFieldsService;
}]);

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('remoteDataService', ['$http','$rootScope','util','modelService',
  function($http, $rootScope,util,modelService){

  var remoteDataService = {};

	remoteDataService.apiCall = function(method, route, cacheKey, params, callback) {
      if (!util.defined(remoteDataService.data)) remoteDataService.data = {};
      if (util.defined(cacheKey) && util.defined(remoteDataService.data[cacheKey])) {
      	callback(null, remoteDataService.data[cacheKey]);
      } else {
          if (!util.defined(params)) params = {};
          return $http({
              url: route,
              method: method,
              data: params
          }).then(function(resp) {
              remoteDataService.data[cacheKey] = resp.data;
              callback(null, resp.data);
          }).catch(function(resp) {
          		callback(resp.status, null);
          });
      }
  };

  remoteDataService.searchRecords = function(objectTypes, terms, callback) {
    var obj = {
      objectType: objectTypes,
      terms: terms
    };
    remoteDataService.apiCall('POST','/soi/searchRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.loadSchemas = function(q, callback) {

    if(util.propLength(modelService.schemas) == 0) {
      var schemas = [];
      for(var propertyName in modelService.models) {
        var obj = {
          objectType: modelService.models[propertyName].objectType
        }
        schemas.push(obj);
      }
      var obj = {
        schemas: schemas
      }
      remoteDataService.apiCall('POST','/soi/getSchemas',null,obj, function(err, data) {
          modelService.schemas = data;
          q.resolve();
          if(util.defined(callback)) {
            callback(null, null);
          }
      });      
    } else {
      q.resolve();
      if(util.defined(callback)) {
        callback(null, null);
      }
    }
  }

  remoteDataService.fetchGridRecords = function(gridInfo, callback) {
    var obj = {
      objectType: gridInfo.model.objectType,
      gridFields: gridInfo.gridFields
    };
    remoteDataService.apiCall('POST','/soi/fetchGridRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[gridInfo.model.objectType]}));
  }

  remoteDataService.getRelationshipDetails = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationshipDetails',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getRelationship = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationship',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }


  remoteDataService.getEdge = function(edgeObjectType, edgeRecordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      edgeRecordItemId: edgeRecordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdge',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getEdgeBySource = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdgeBySource',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.deleteEdge = function(objectType, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/deleteEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updateEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/updateEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/addEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }


  remoteDataService.getRecordDetails = function(objectType, recordId, depth, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      depth: depth
    };
    remoteDataService.apiCall('POST','/soi/getRecordDetails',null,obj, function(err, data) {
      var returnObj={};
      for(var propertyName in data) {
        returnObj[propertyName] =  remoteDataService.prepareInboundDataArray(this.schema, data[propertyName]);
      }
      callback(err, returnObj);
    }.bind({schema: modelService.schemas[objectType]}));
  }



  remoteDataService.fetchRecordByProp = function(objectType, prop, value, callback) {
    var obj = {
      objectType: objectType,
      prop: prop,
      value: value,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/fetchRecordByProp',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }

  remoteDataService.fetchRecords = function(objectType, callback) {
    var obj = {
      objectType: objectType
    };
    remoteDataService.apiCall('POST','/soi/fetchRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }


  remoteDataService.fetchPanelRecords = function(panelInfo, callback) {
  	var obj = {
  		objectType: panelInfo.model.objectType,
      schema: modelService.schemas[panelInfo.model.objectType]
  	};

  	remoteDataService.apiCall('POST','/soi/fetchPanelRecords',null,obj, function(err, data) {
      data = remoteDataService.prepareInboundDataArray(this.schema, data);
  		callback(err, data);
  	}.bind( {schema: modelService.schemas[panelInfo.model.objectType]}));
  }

  remoteDataService.deletePanelRecord = function(objectType, recordId, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId
    };
    remoteDataService.apiCall('POST','/soi/deletePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updatePanelRecord = function(objectType, recordId, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/updatePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addPanelRecord = function(objectType, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/addPanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }  
  
  remoteDataService.prepareInboundDataArray = function(schema, objArray) {
    var returnArray=[];
    for(var i=0; i<objArray.length; i++) {
      var valObj = remoteDataService.prepareInboundData(schema, objArray[i]);
      returnArray.push(valObj);
    }
    return returnArray;
  }

  remoteDataService.prepareInboundData = function(schema, obj) {
    for(var propertyName in obj) {
      if(util.defined(obj,propertyName)) {
        var val = obj[propertyName];
        var schemaInfo = schema[propertyName];
        if(util.defined(schemaInfo,"type") && schemaInfo.type == 'date') {
          var x = moment(val);
          val = new Date(x.year(), x.month(), x.date());
        }
      }
      obj[propertyName] = val;
    }
    return obj;    
  }

  remoteDataService.deleteLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/deleteLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getAllLogInfo = function(callback) {
    var obj = {
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.exportRecords = function(objectType, criteria, callback) {
    var obj = {
      objectType: objectType,
      criteria: criteria,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/exportRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  return remoteDataService;

}]);


var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vInvestmentFirmList',
  		model : modelService.models.investmentfirm,
      route: 'investmentfirm',
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
  modelService.piskLists.companytype = {
    options: [
      {id: 1, name: 'Spin-Off'},
      {id: 2, name: 'Other'}
    ]
  }

  modelService.piskLists.acquisitiontype = {
    options: [
      {id: 1, name: 'Acquisition'},
      {id: 2, name: 'Merger'}
    ]
  }

  modelService.piskLists.investmentfirmtype = {
    options: [
      {id: 1, name: 'VC'},
      {id: 2, name: 'Management Investment'},
      {id: 3, name: 'Unit Investment Trusts'}
    ]
  }

  modelService.piskLists.invesmenttype = {
    options: [
      {id: 1, name: 'Seed'},
      {id: 2, name: 'Series A'},
      {id: 2, name: 'Series B'},
      {id: 2, name: 'Series C'}      
    ]
  }

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

  modelService.piskLists.universitytype = {
  options: [
    {id: 1, name: 'University'},
    {id: 2, name: 'Research Institute'},
    {id: 3, name: 'University of Applied Science'},
    {id: 3, name: 'Technical University'}
  ]};

  modelService.piskLists.phase = {
    options: [
      {id: 1, name: 'Early'},
      {id: 2, name: 'Growth'},
      {id: 3, name: 'Maturity'},
      {id: 4, name: 'Possible Exit'}
    ]
  }

  modelService.piskLists.businessmodel = {
    options: [
      {id: 1, name: 'Direct Sales'},
      {id: 2, name: 'Franchise'},
      {id: 3, name: 'Freemium', description: 'For companies that offer personal or business services via the Internet, the freemium business model is common. Under a freemium model, business give away a service at no cost to the consumer as a way to establish the foundation for future transactions. Companies that offer a basic-level service for free build relationships with customers and eventually offer advanced services as add-ons or advertisement-free options at a cost. The freemium model tends to work well for Internet-based businesses with little customer acquisition costs but high lifetime value. Spotify and Skype both operate under a freemium business model.'},
      {id: 4, name: 'Subscription'}
    ]
  }

  modelService.piskLists.typeofspinoff = {
    options: [
      {id: 1, name: 'Direct'},
      {id: 2, name: 'Employee'},
      {id: 3, name: 'Joint Employee'},
      {id: 4, name: 'Joint R&D'},
      {id: 4, name: 'R&D'}
    ]
  }

  modelService.piskLists.programs = {
    options: [
      {id: 1, name: 'Computer Science'},
      {id: 2, name: 'Humanities'},
      {id: 3, name: 'Life Sciences'},
      {id: 4, name: 'Sociology'},
      {id: 5, name: 'Liberal Arts'},      
      {id: 6, name: 'Biochemistry'},      
      {id: 7, name: 'Hospitality Management'},      
      {id: 8, name: 'Social Work'},      
      {id: 9, name: 'Health care administration'},      
      {id: 10, name: 'Anthropology'},      
      {id: 11, name: 'Education'},      
      {id: 12, name: 'Sports management'},      
      {id: 13, name: 'Public relations'},      
      {id: 14, name: 'Film studies'},      
      {id: 15, name: 'Music'},      
      {id: 16, name: 'Chemistry'},      
      {id: 17, name: 'Interior design'},      
      {id: 18, name: 'Communications'},      
      {id: 19, name: 'Spanish'},      
      {id: 20, name: 'Social science'},      
      {id: 21, name: 'Psychology'},
      {id: 22, name: 'Biology'},      
      {id: 23, name: 'Pharmacy'},      
      {id: 24, name: 'Electrical Engineering'},      
      {id: 25, name: 'Veterinary Medicine'},      
      {id: 26, name: 'Geological Sciences'},
      {id: 27, name: 'Mathematics'},
      {id: 28, name: 'Physics'},
      {id: 29, name: 'Medicine'},
      {id: 30, name: 'Philosophy'},
      {id: 31, name: 'Spiritual Science'},
      {id: 32, name: 'Politics Sciences'},
      {id: 33, name: 'Social Sciences'},
      {id: 34, name: 'Environmental Sciences'},
      {id: 35, name: 'Economics'}
    ]
  };

	// Relations
  modelService.models.acquired = {
    displayName: 'Acquired',
    objectType: 'EAcquired',
    fields: [],
    isRelationship: true
  }

  
  modelService.models.acquirer = {
    displayName: 'Acquirer',
    objectType: 'EAcquirer',
    fields: [],
    isRelationship: true
  }

  modelService.models.board = {
    displayName: 'Board Member',
    objectType: 'EBoardMember',
    fields: [],
    isRelationship: true
  }

  modelService.models.advisor = {
    displayName: 'Advisor',
    objectType: 'EAdvisor',
    fields: [],
    isRelationship: true
  }

  modelService.models.funded = {
    displayName: 'Funded',
    objectType: 'EFunded',
    fields: [],
    isRelationship: true
  }

  modelService.models.investor = {
    displayName: 'Investor',
    objectType: 'EInvestor',
    fields: [],
    isRelationship: true
  }


  modelService.models.coapplicant = {
    displayName: 'Co Applicant',
    objectType: 'ECoApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.applicant = {
    displayName: 'Applicant',
    objectType: 'EApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.inventor = {
    displayName: 'Inventor',
    objectType: 'EInventor',
    fields: [],
    isRelationship: true
  }

  modelService.models.supplier = {
    displayName: 'Supplier',
    objectType: 'ESupplier',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.customer = {
    displayName: 'Customer',
    objectType: 'ECustomer',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.partner = {
    displayName: 'Partner',
    objectType: 'EPartner',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

	modelService.models.founded = {
		displayName: 'Founders',
    objectType: 'EFounded',
    fields: [],
    isRelationship: true
  }

  modelService.models.spinoff = {
    displayName: 'Spun Off',
    objectType: 'ESpinOff',
    fields: [
      {
        schemaName: 'department',
        displayName: 'Department',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text'
      },
      {
        schemaName: 'typeofspinoff',
        displayName: 'Type of Spinoff',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.typeofspinoff
      }      
    ],
    isRelationship: true
  }

  modelService.models.teaches = {
    displayName: 'Teachers',
    objectType: 'ETeaches',
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
        schemaName: 'post',
        displayName: 'Post',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'text'           
      }           
    ],
    isRelationship: true
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
		],
    isRelationship: true
	}

	// Entities
  modelService.models.acquisition = {
    displayName: 'Acquisition',
    objectType: 'VAcquisition',
    color: '#92a8d1',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.acquisitiontype
      },
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.acquirer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.acquired,
        destObjectType: 'VCompany'
      }
    ]
  }


  modelService.models.investment = {
    displayName: 'Investment',
    objectType: 'VInvestment',
    color: '#f7786b',    
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
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.invesmenttype
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'datepicker'
      },
      {
        schemaName: 'details',
        displayName: 'Details',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'textarea'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.investor,
        destObjectType: 'VInvestmentFirm'
      },
      {
        model: modelService.models.funded,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.advisor,
        destObjectType: 'VPerson'
      }
    ]
  }

  modelService.models.patent = {
    displayName: 'Patent',
    objectType: 'VPatent',
    color: '#034f84',
    fontColor: 'white',
    fields: [
      {
        schemaName: 'name',
        displayName: 'Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'number',
        displayName: 'Patent Number',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'text'
      },
      {
        schemaName: 'applicationdate',
        displayName: 'Application Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'datepicker'
      },
      {
        schemaName: 'dategranted',
        displayName: 'Date Granted',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'ipc2',
        displayName: 'IPC main class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'text'
      },
      {
        schemaName: 'ipcindex',
        displayName: 'IPC index class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'ipcreclasified',
        displayName: 'Reclasified IPC (MCD)',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'text'
      },
      {
        schemaName: 'ipcsearch',
        displayName: 'IPC-Search file',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'text'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL1',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'url'
      },
      {
        schemaName: 'source2',
        displayName: 'Source URL2',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 11,
        controlType: 'url'
      }],
      relationships: [
        {
          model: modelService.models.applicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.coapplicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.inventor,
          destObjectType: 'VPerson'
        }
      ]
    }

  modelService.models.investmentfirm = {
    displayName: 'Investment Firm',
    objectType: 'VInvestmentFirm',
    color: '#deeaee',        
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.investmentfirmtype
      },
      {
        schemaName: 'yearfounded',
        displayName: 'Year Founded',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 3,
        controlType: 'text'
      },      
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 4,
        controlType: 'textarea'
      },
      {
        schemaName: 'industry',
        displayName: 'Industry / Sector',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.industry
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 10,
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
        displayOrder: 11,
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
        displayOrder: 12,
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
        displayOrder: 13,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,          
        displayOrder: 14,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,            
        displayOrder: 15,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of employees',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 16,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 17,
        controlType: 'url'    
      },
      {
        schemaName: 'source2',
        displayName: 'Source Website 2',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 18,
        controlType: 'url'    
      },
      {
        schemaName: 'linkedin',
        displayName: 'LinkedIn Profile',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 19,
        controlType: 'url'    
      },
    ],
    relationships: [
      {
        model: modelService.models.founded,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      }
    ]
  }

	modelService.models.company = {
		displayName: 'Company',
    objectType: 'VCompany',
    color: '#b1cbbb',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.companytype
      },
    	{
      	schemaName: 'yearfounded',
      	displayName: 'Year Founded',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 3,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'description',
      	displayName: 'Description',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 4,
      	controlType: 'textarea'
    	},    	
      {
        schemaName: 'logo',
        displayName: 'Logo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'image'
      },      
    	{
      	schemaName: 'products',
      	displayName: 'Products/Technology',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 5,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'productcategory',
      	displayName: 'Products Category',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 6,
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
      	displayOrder: 7,
      	controlType: 'picklist',
      	picklistOptions: modelService.piskLists.industry
    	},
      {
        schemaName: 'phase',
        displayName: 'Phase of Development',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 8,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.phase
      },
      {
        schemaName: 'businessmodel',
        displayName: 'Business Model',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.businessmodel
      },
    	{
      	schemaName: 'website',
      	displayName: 'Website',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 10,
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
      	displayOrder: 11,
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
      	displayOrder: 12,
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
      	displayOrder: 13,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,       		
      	displayOrder: 14,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,        		
      	displayOrder: 15,
      	controlType: 'email'
    	},
    	{
      	schemaName: 'size',
      	displayName: 'Number of employees',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 16,
      	controlType: 'text'       		
    	},
    	{
      	schemaName: 'source1',
      	displayName: 'Source Website 1',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 17,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'source2',
      	displayName: 'Source Website 2',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 18,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'linkedin',
      	displayName: 'LinkedIn Profile',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 19,
      	controlType: 'url' 		
    	},
  	],
		relationships: [
			{
				model: modelService.models.founded,
				destObjectType: 'VPerson'
			},
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.supplier,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.customer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.partner,
        destObjectType: 'VCompany'
      }
  	]
	}

  modelService.models.university = {
    displayName: 'University',
    objectType: 'VUniversity',
    color: '#eea29a',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.universitytype      
      },

      {
        schemaName: 'programs',
        displayName: 'Programs',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'multiselect',
        picklistOptions: modelService.piskLists.programs
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 6,
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
        displayOrder: 7,
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
        displayOrder: 8,
        controlType: 'text'
      },      
      {
        schemaName: 'provence',
        displayName: 'State/Provence',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 9,
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
        displayOrder: 10,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 11,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 12,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of students',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 13,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 14,
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
        model: modelService.models.teaches,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.spinoff,
        destObjectType: 'VCompany'
      }
    ]
  }  

	modelService.models.people = {
		displayName: 'People',
    objectType: 'VPerson',
    color: '#c94c4c',
    fontColor: 'white',    
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
        schemaName: 'logo',
        displayName: 'photo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'image'
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
    	},     
      {
        schemaName: 'address',
        displayName: 'Address',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 4,
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
        displayOrder: 5,
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
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'country',
        displayName: 'Country',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 7,
        controlType: 'text'
      }      
    ],
		relationships: [
			{
				model: modelService.models.worksfor,
				destObjectType: 'VCompany'
			}
  	]
	}
	

	return modelService;
}]);	

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var panelFieldsService = {
    panelInfo: {}
  };

  panelFieldsService.panelInfo.vCompanyList = {
      name: 'vCompanyList',
      model : modelService.models.company,
      route: 'companies',
      userRoute: 'companyDetail',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vUniversityList = {
      name: 'vUniversityList',
      model : modelService.models.university,
      route: 'university',
      userRoute: 'universitiesDetail',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPeopleList = {
      name: 'vPeopleList',
      model: modelService.models.people,
      route: 'people',
      userRoute: 'peopleDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentFirmList = {
      name: 'vInvestmentFirmList',
      model : modelService.models.investmentfirm,
      route: 'investmentfirm',
      userRoute: 'investorsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentList = {
      name: 'vInvestmentList',
      model : modelService.models.investment,
      route: 'investment',
      userRoute: 'fundingDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vAcquisitionList = {
      name: 'vAcquisitionList',
      model : modelService.models.acquisition,
      route: 'acquisition',
      userRoute: 'aquisitionsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPatentList = {
      name: 'vPatentList',
      model : modelService.models.patent,
      route: 'patent',
      userRoute: 'patentDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.prepareInboudData = function(panelInfo, records) {
    var schema = modelService.schemas[panelInfo.model.objectType];

    var inRecords=[];
    for(j=0; j<records.length; j++) {
      var inData = {};
      var record = records[j];
      for(var propertyName in schema) {
        var schemaItem = schema[propertyName];
        var val = record[propertyName];
        if(util.defined(schemaItem)) {
          var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
          if(util.defined(modelItem,"controlType") && util.defined(record,propertyName)) {
            if(modelItem.controlType == 'multiselect') {

              var names = val.split(';');
              var inObj = [];
              for(var i=0; i<names.length; i++) {
                inObj.push({id: i, name: names[i]});
              }
              inData[propertyName] = inObj;
            } else {
              inData[propertyName] = val;
            }
          }
        }
      }
      if(util.defined(record,'id')) {
          inData['id'] = record['id'];
      }
      inRecords.push(inData);
    }
    return inRecords;
  }


  panelFieldsService.prepareOutboudData = function(panelInfo, panelRecord) {
    var schema = modelService.schemas[panelInfo.model.objectType];
    var outData = {};
    for(var propertyName in schema) {
      var schemaItem = schema[propertyName];
      if(util.defined(schemaItem)) {
        var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
        if(util.defined(modelItem,"controlType") && util.defined(panelRecord,propertyName)) {
          if(modelItem.controlType == 'multiselect') {

            var names = _.pluck(panelRecord[propertyName], 'name');
            var outText = '';
            if(util.defined(names,'length')) {
              for(var i=0; i<names.length; i++) {
                if(i == names.length-1)
                  outText += names[i];
                else outText += names[i] + ';';
              }
              outData[propertyName] = outText;
            }
          } else {
            outData[propertyName] = panelRecord[propertyName];
          }
        }
      }
    }
    if(util.defined(panelRecord,'id')) {
        outData['id'] = panelRecord['id'];
    }
    return outData;
  }

	panelFieldsService.fetchPanelRecords = function(panelInfo, callback) {
		remoteDataService.fetchPanelRecords(panelInfo, function(err, data) {
			var panelName = panelInfo.name;
			panelFieldsService[panelName] = {
        panelInfo: panelInfo
      };
      if(util.defined(data,"length")) {
  		  panelFieldsService[panelName].panelInfo.records = panelFieldsService.prepareInboudData(panelInfo, data);
      }
      $rootScope.$broadcast('fetchPanelRecords',panelName);
			callback(null,data);
		});
	};

  panelFieldsService.deletePanelRecord = function(objectType, recordId, callback) {
    remoteDataService.deletePanelRecord(objectType, recordId, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.updatePanelRecord = function(panelInfo, recordId, panelRecord, callback) {

    var outRecord = panelFieldsService.prepareOutboudData(panelInfo, panelRecord);

    remoteDataService.updatePanelRecord(panelInfo.model.objectType, recordId, outRecord, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.addPanelRecord = function(objectType, panelRecord, callback) {
    remoteDataService.addPanelRecord(objectType, panelRecord, function(err, data) {
      callback(err, data);
    });
  };

  return panelFieldsService;
}]);

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('remoteDataService', ['$http','$rootScope','util','modelService',
  function($http, $rootScope,util,modelService){

  var remoteDataService = {};

	remoteDataService.apiCall = function(method, route, cacheKey, params, callback) {
      if (!util.defined(remoteDataService.data)) remoteDataService.data = {};
      if (util.defined(cacheKey) && util.defined(remoteDataService.data[cacheKey])) {
      	callback(null, remoteDataService.data[cacheKey]);
      } else {
          if (!util.defined(params)) params = {};
          return $http({
              url: route,
              method: method,
              data: params
          }).then(function(resp) {
              remoteDataService.data[cacheKey] = resp.data;
              callback(null, resp.data);
          }).catch(function(resp) {
          		callback(resp.status, null);
          });
      }
  };

  remoteDataService.searchRecords = function(objectTypes, terms, callback) {
    var obj = {
      objectType: objectTypes,
      terms: terms
    };
    remoteDataService.apiCall('POST','/soi/searchRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.loadSchemas = function(q, callback) {

    if(util.propLength(modelService.schemas) == 0) {
      var schemas = [];
      for(var propertyName in modelService.models) {
        var obj = {
          objectType: modelService.models[propertyName].objectType
        }
        schemas.push(obj);
      }
      var obj = {
        schemas: schemas
      }
      remoteDataService.apiCall('POST','/soi/getSchemas',null,obj, function(err, data) {
          modelService.schemas = data;
          q.resolve();
          if(util.defined(callback)) {
            callback(null, null);
          }
      });      
    } else {
      q.resolve();
      if(util.defined(callback)) {
        callback(null, null);
      }
    }
  }

  remoteDataService.fetchGridRecords = function(gridInfo, callback) {
    var obj = {
      objectType: gridInfo.model.objectType,
      gridFields: gridInfo.gridFields
    };
    remoteDataService.apiCall('POST','/soi/fetchGridRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[gridInfo.model.objectType]}));
  }

  remoteDataService.getRelationshipDetails = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationshipDetails',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getRelationship = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationship',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }


  remoteDataService.getEdge = function(edgeObjectType, edgeRecordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      edgeRecordItemId: edgeRecordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdge',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getEdgeBySource = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdgeBySource',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.deleteEdge = function(objectType, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/deleteEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updateEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/updateEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/addEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }


  remoteDataService.getRecordDetails = function(objectType, recordId, depth, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      depth: depth
    };
    remoteDataService.apiCall('POST','/soi/getRecordDetails',null,obj, function(err, data) {
      var returnObj={};
      for(var propertyName in data) {
        returnObj[propertyName] =  remoteDataService.prepareInboundDataArray(this.schema, data[propertyName]);
      }
      callback(err, returnObj);
    }.bind({schema: modelService.schemas[objectType]}));
  }



  remoteDataService.fetchRecordByProp = function(objectType, prop, value, callback) {
    var obj = {
      objectType: objectType,
      prop: prop,
      value: value,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/fetchRecordByProp',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }

  remoteDataService.fetchRecords = function(objectType, callback) {
    var obj = {
      objectType: objectType
    };
    remoteDataService.apiCall('POST','/soi/fetchRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }


  remoteDataService.fetchPanelRecords = function(panelInfo, callback) {
  	var obj = {
  		objectType: panelInfo.model.objectType,
      schema: modelService.schemas[panelInfo.model.objectType]
  	};

  	remoteDataService.apiCall('POST','/soi/fetchPanelRecords',null,obj, function(err, data) {
      data = remoteDataService.prepareInboundDataArray(this.schema, data);
  		callback(err, data);
  	}.bind( {schema: modelService.schemas[panelInfo.model.objectType]}));
  }

  remoteDataService.deletePanelRecord = function(objectType, recordId, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId
    };
    remoteDataService.apiCall('POST','/soi/deletePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updatePanelRecord = function(objectType, recordId, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/updatePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addPanelRecord = function(objectType, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/addPanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }  
  
  remoteDataService.prepareInboundDataArray = function(schema, objArray) {
    var returnArray=[];
    for(var i=0; i<objArray.length; i++) {
      var valObj = remoteDataService.prepareInboundData(schema, objArray[i]);
      returnArray.push(valObj);
    }
    return returnArray;
  }

  remoteDataService.prepareInboundData = function(schema, obj) {
    for(var propertyName in obj) {
      if(util.defined(obj,propertyName)) {
        var val = obj[propertyName];
        var schemaInfo = schema[propertyName];
        if(util.defined(schemaInfo,"type") && schemaInfo.type == 'date') {
          var x = moment(val);
          val = new Date(x.year(), x.month(), x.date());
        }
      }
      obj[propertyName] = val;
    }
    return obj;    
  }

  remoteDataService.deleteLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/deleteLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getAllLogInfo = function(callback) {
    var obj = {
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.exportRecords = function(objectType, criteria, callback) {
    var obj = {
      objectType: objectType,
      criteria: criteria,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/exportRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  return remoteDataService;

}]);


var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vInvestmentFirmList',
  		model : modelService.models.investmentfirm,
      route: 'investmentfirm',
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
  modelService.piskLists.companytype = {
    options: [
      {id: 1, name: 'Spin-Off'},
      {id: 2, name: 'Other'}
    ]
  }

  modelService.piskLists.acquisitiontype = {
    options: [
      {id: 1, name: 'Acquisition'},
      {id: 2, name: 'Merger'}
    ]
  }

  modelService.piskLists.investmentfirmtype = {
    options: [
      {id: 1, name: 'VC'},
      {id: 2, name: 'Management Investment'},
      {id: 3, name: 'Unit Investment Trusts'}
    ]
  }

  modelService.piskLists.invesmenttype = {
    options: [
      {id: 1, name: 'Seed'},
      {id: 2, name: 'Series A'},
      {id: 2, name: 'Series B'},
      {id: 2, name: 'Series C'}      
    ]
  }

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

  modelService.piskLists.universitytype = {
  options: [
    {id: 1, name: 'University'},
    {id: 2, name: 'Research Institute'},
    {id: 3, name: 'University of Applied Science'},
    {id: 3, name: 'Technical University'}
  ]};

  modelService.piskLists.phase = {
    options: [
      {id: 1, name: 'Early'},
      {id: 2, name: 'Growth'},
      {id: 3, name: 'Maturity'},
      {id: 4, name: 'Possible Exit'}
    ]
  }

  modelService.piskLists.businessmodel = {
    options: [
      {id: 1, name: 'Direct Sales'},
      {id: 2, name: 'Franchise'},
      {id: 3, name: 'Freemium', description: 'For companies that offer personal or business services via the Internet, the freemium business model is common. Under a freemium model, business give away a service at no cost to the consumer as a way to establish the foundation for future transactions. Companies that offer a basic-level service for free build relationships with customers and eventually offer advanced services as add-ons or advertisement-free options at a cost. The freemium model tends to work well for Internet-based businesses with little customer acquisition costs but high lifetime value. Spotify and Skype both operate under a freemium business model.'},
      {id: 4, name: 'Subscription'}
    ]
  }

  modelService.piskLists.typeofspinoff = {
    options: [
      {id: 1, name: 'Direct'},
      {id: 2, name: 'Employee'},
      {id: 3, name: 'Joint Employee'},
      {id: 4, name: 'Joint R&D'},
      {id: 4, name: 'R&D'}
    ]
  }

  modelService.piskLists.programs = {
    options: [
      {id: 1, name: 'Computer Science'},
      {id: 2, name: 'Humanities'},
      {id: 3, name: 'Life Sciences'},
      {id: 4, name: 'Sociology'},
      {id: 5, name: 'Liberal Arts'},      
      {id: 6, name: 'Biochemistry'},      
      {id: 7, name: 'Hospitality Management'},      
      {id: 8, name: 'Social Work'},      
      {id: 9, name: 'Health care administration'},      
      {id: 10, name: 'Anthropology'},      
      {id: 11, name: 'Education'},      
      {id: 12, name: 'Sports management'},      
      {id: 13, name: 'Public relations'},      
      {id: 14, name: 'Film studies'},      
      {id: 15, name: 'Music'},      
      {id: 16, name: 'Chemistry'},      
      {id: 17, name: 'Interior design'},      
      {id: 18, name: 'Communications'},      
      {id: 19, name: 'Spanish'},      
      {id: 20, name: 'Social science'},      
      {id: 21, name: 'Psychology'},
      {id: 22, name: 'Biology'},      
      {id: 23, name: 'Pharmacy'},      
      {id: 24, name: 'Electrical Engineering'},      
      {id: 25, name: 'Veterinary Medicine'},      
      {id: 26, name: 'Geological Sciences'},
      {id: 27, name: 'Mathematics'},
      {id: 28, name: 'Physics'},
      {id: 29, name: 'Medicine'},
      {id: 30, name: 'Philosophy'},
      {id: 31, name: 'Spiritual Science'},
      {id: 32, name: 'Politics Sciences'},
      {id: 33, name: 'Social Sciences'},
      {id: 34, name: 'Environmental Sciences'},
      {id: 35, name: 'Economics'}
    ]
  };

	// Relations
  modelService.models.acquired = {
    displayName: 'Acquired',
    objectType: 'EAcquired',
    fields: [],
    isRelationship: true
  }

  
  modelService.models.acquirer = {
    displayName: 'Acquirer',
    objectType: 'EAcquirer',
    fields: [],
    isRelationship: true
  }

  modelService.models.board = {
    displayName: 'Board Member',
    objectType: 'EBoardMember',
    fields: [],
    isRelationship: true
  }

  modelService.models.advisor = {
    displayName: 'Advisor',
    objectType: 'EAdvisor',
    fields: [],
    isRelationship: true
  }

  modelService.models.funded = {
    displayName: 'Funded',
    objectType: 'EFunded',
    fields: [],
    isRelationship: true
  }

  modelService.models.investor = {
    displayName: 'Investor',
    objectType: 'EInvestor',
    fields: [],
    isRelationship: true
  }


  modelService.models.coapplicant = {
    displayName: 'Co Applicant',
    objectType: 'ECoApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.applicant = {
    displayName: 'Applicant',
    objectType: 'EApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.inventor = {
    displayName: 'Inventor',
    objectType: 'EInventor',
    fields: [],
    isRelationship: true
  }

  modelService.models.supplier = {
    displayName: 'Supplier',
    objectType: 'ESupplier',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.customer = {
    displayName: 'Customer',
    objectType: 'ECustomer',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.partner = {
    displayName: 'Partner',
    objectType: 'EPartner',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

	modelService.models.founded = {
		displayName: 'Founders',
    objectType: 'EFounded',
    fields: [],
    isRelationship: true
  }

  modelService.models.spinoff = {
    displayName: 'Spun Off',
    objectType: 'ESpinOff',
    fields: [
      {
        schemaName: 'department',
        displayName: 'Department',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text'
      },
      {
        schemaName: 'typeofspinoff',
        displayName: 'Type of Spinoff',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.typeofspinoff
      }      
    ],
    isRelationship: true
  }

  modelService.models.teaches = {
    displayName: 'Teachers',
    objectType: 'ETeaches',
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
        schemaName: 'post',
        displayName: 'Post',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'text'           
      }           
    ],
    isRelationship: true
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
		],
    isRelationship: true
	}

	// Entities
  modelService.models.acquisition = {
    displayName: 'Acquisition',
    objectType: 'VAcquisition',
    color: '#92a8d1',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.acquisitiontype
      },
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.acquirer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.acquired,
        destObjectType: 'VCompany'
      }
    ]
  }


  modelService.models.investment = {
    displayName: 'Investment',
    objectType: 'VInvestment',
    color: '#f7786b',    
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
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.invesmenttype
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'datepicker'
      },
      {
        schemaName: 'details',
        displayName: 'Details',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'textarea'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.investor,
        destObjectType: 'VInvestmentFirm'
      },
      {
        model: modelService.models.funded,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.advisor,
        destObjectType: 'VPerson'
      }
    ]
  }

  modelService.models.patent = {
    displayName: 'Patent',
    objectType: 'VPatent',
    color: '#034f84',
    fontColor: 'white',
    fields: [
      {
        schemaName: 'name',
        displayName: 'Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'number',
        displayName: 'Patent Number',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'text'
      },
      {
        schemaName: 'applicationdate',
        displayName: 'Application Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'datepicker'
      },
      {
        schemaName: 'dategranted',
        displayName: 'Date Granted',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'ipc2',
        displayName: 'IPC main class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'text'
      },
      {
        schemaName: 'ipcindex',
        displayName: 'IPC index class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'ipcreclasified',
        displayName: 'Reclasified IPC (MCD)',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'text'
      },
      {
        schemaName: 'ipcsearch',
        displayName: 'IPC-Search file',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'text'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL1',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'url'
      },
      {
        schemaName: 'source2',
        displayName: 'Source URL2',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 11,
        controlType: 'url'
      }],
      relationships: [
        {
          model: modelService.models.applicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.coapplicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.inventor,
          destObjectType: 'VPerson'
        }
      ]
    }

  modelService.models.investmentfirm = {
    displayName: 'Investment Firm',
    objectType: 'VInvestmentFirm',
    color: '#deeaee',        
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.investmentfirmtype
      },
      {
        schemaName: 'yearfounded',
        displayName: 'Year Founded',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 3,
        controlType: 'text'
      },      
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 4,
        controlType: 'textarea'
      },
      {
        schemaName: 'industry',
        displayName: 'Industry / Sector',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.industry
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 10,
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
        displayOrder: 11,
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
        displayOrder: 12,
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
        displayOrder: 13,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,          
        displayOrder: 14,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,            
        displayOrder: 15,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of employees',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 16,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 17,
        controlType: 'url'    
      },
      {
        schemaName: 'source2',
        displayName: 'Source Website 2',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 18,
        controlType: 'url'    
      },
      {
        schemaName: 'linkedin',
        displayName: 'LinkedIn Profile',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 19,
        controlType: 'url'    
      },
    ],
    relationships: [
      {
        model: modelService.models.founded,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      }
    ]
  }

	modelService.models.company = {
		displayName: 'Company',
    objectType: 'VCompany',
    color: '#b1cbbb',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.companytype
      },
    	{
      	schemaName: 'yearfounded',
      	displayName: 'Year Founded',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 3,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'description',
      	displayName: 'Description',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 4,
      	controlType: 'textarea'
    	},    	
      {
        schemaName: 'logo',
        displayName: 'Logo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'image'
      },      
    	{
      	schemaName: 'products',
      	displayName: 'Products/Technology',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 5,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'productcategory',
      	displayName: 'Products Category',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 6,
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
      	displayOrder: 7,
      	controlType: 'picklist',
      	picklistOptions: modelService.piskLists.industry
    	},
      {
        schemaName: 'phase',
        displayName: 'Phase of Development',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 8,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.phase
      },
      {
        schemaName: 'businessmodel',
        displayName: 'Business Model',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.businessmodel
      },
    	{
      	schemaName: 'website',
      	displayName: 'Website',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 10,
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
      	displayOrder: 11,
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
      	displayOrder: 12,
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
      	displayOrder: 13,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,       		
      	displayOrder: 14,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,        		
      	displayOrder: 15,
      	controlType: 'email'
    	},
    	{
      	schemaName: 'size',
      	displayName: 'Number of employees',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 16,
      	controlType: 'text'       		
    	},
    	{
      	schemaName: 'source1',
      	displayName: 'Source Website 1',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 17,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'source2',
      	displayName: 'Source Website 2',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 18,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'linkedin',
      	displayName: 'LinkedIn Profile',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 19,
      	controlType: 'url' 		
    	},
  	],
		relationships: [
			{
				model: modelService.models.founded,
				destObjectType: 'VPerson'
			},
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.supplier,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.customer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.partner,
        destObjectType: 'VCompany'
      }
  	]
	}

  modelService.models.university = {
    displayName: 'University',
    objectType: 'VUniversity',
    color: '#eea29a',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.universitytype      
      },

      {
        schemaName: 'programs',
        displayName: 'Programs',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'multiselect',
        picklistOptions: modelService.piskLists.programs
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 6,
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
        displayOrder: 7,
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
        displayOrder: 8,
        controlType: 'text'
      },      
      {
        schemaName: 'provence',
        displayName: 'State/Provence',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 9,
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
        displayOrder: 10,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 11,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 12,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of students',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 13,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 14,
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
        model: modelService.models.teaches,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.spinoff,
        destObjectType: 'VCompany'
      }
    ]
  }  

	modelService.models.people = {
		displayName: 'People',
    objectType: 'VPerson',
    color: '#c94c4c',
    fontColor: 'white',    
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
        schemaName: 'logo',
        displayName: 'photo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'image'
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
    	},     
      {
        schemaName: 'address',
        displayName: 'Address',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 4,
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
        displayOrder: 5,
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
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'country',
        displayName: 'Country',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 7,
        controlType: 'text'
      }      
    ],
		relationships: [
			{
				model: modelService.models.worksfor,
				destObjectType: 'VCompany'
			}
  	]
	}
	

	return modelService;
}]);	

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var panelFieldsService = {
    panelInfo: {}
  };

  panelFieldsService.panelInfo.vCompanyList = {
      name: 'vCompanyList',
      model : modelService.models.company,
      route: 'companies',
      userRoute: 'companyDetail',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vUniversityList = {
      name: 'vUniversityList',
      model : modelService.models.university,
      route: 'university',
      userRoute: 'universitiesDetail',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPeopleList = {
      name: 'vPeopleList',
      model: modelService.models.people,
      route: 'people',
      userRoute: 'peopleDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentFirmList = {
      name: 'vInvestmentFirmList',
      model : modelService.models.investmentfirm,
      route: 'investmentfirm',
      userRoute: 'investorsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentList = {
      name: 'vInvestmentList',
      model : modelService.models.investment,
      route: 'investment',
      userRoute: 'fundingDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vAcquisitionList = {
      name: 'vAcquisitionList',
      model : modelService.models.acquisition,
      route: 'acquisition',
      userRoute: 'aquisitionsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPatentList = {
      name: 'vPatentList',
      model : modelService.models.patent,
      route: 'patent',
      userRoute: 'patentDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.prepareInboudData = function(panelInfo, records) {
    var schema = modelService.schemas[panelInfo.model.objectType];

    var inRecords=[];
    for(j=0; j<records.length; j++) {
      var inData = {};
      var record = records[j];
      for(var propertyName in schema) {
        var schemaItem = schema[propertyName];
        var val = record[propertyName];
        if(util.defined(schemaItem)) {
          var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
          if(util.defined(modelItem,"controlType") && util.defined(record,propertyName)) {
            if(modelItem.controlType == 'multiselect') {

              var names = val.split(';');
              var inObj = [];
              for(var i=0; i<names.length; i++) {
                inObj.push({id: i, name: names[i]});
              }
              inData[propertyName] = inObj;
            } else {
              inData[propertyName] = val;
            }
          }
        }
      }
      if(util.defined(record,'id')) {
          inData['id'] = record['id'];
      }
      inRecords.push(inData);
    }
    return inRecords;
  }


  panelFieldsService.prepareOutboudData = function(panelInfo, panelRecord) {
    var schema = modelService.schemas[panelInfo.model.objectType];
    var outData = {};
    for(var propertyName in schema) {
      var schemaItem = schema[propertyName];
      if(util.defined(schemaItem)) {
        var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
        if(util.defined(modelItem,"controlType") && util.defined(panelRecord,propertyName)) {
          if(modelItem.controlType == 'multiselect') {

            var names = _.pluck(panelRecord[propertyName], 'name');
            var outText = '';
            if(util.defined(names,'length')) {
              for(var i=0; i<names.length; i++) {
                if(i == names.length-1)
                  outText += names[i];
                else outText += names[i] + ';';
              }
              outData[propertyName] = outText;
            }
          } else {
            outData[propertyName] = panelRecord[propertyName];
          }
        }
      }
    }
    if(util.defined(panelRecord,'id')) {
        outData['id'] = panelRecord['id'];
    }
    return outData;
  }

	panelFieldsService.fetchPanelRecords = function(panelInfo, callback) {
		remoteDataService.fetchPanelRecords(panelInfo, function(err, data) {
			var panelName = panelInfo.name;
			panelFieldsService[panelName] = {
        panelInfo: panelInfo
      };
      if(util.defined(data,"length")) {
  		  panelFieldsService[panelName].panelInfo.records = panelFieldsService.prepareInboudData(panelInfo, data);
      }
      $rootScope.$broadcast('fetchPanelRecords',panelName);
			callback(null,data);
		});
	};

  panelFieldsService.deletePanelRecord = function(objectType, recordId, callback) {
    remoteDataService.deletePanelRecord(objectType, recordId, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.updatePanelRecord = function(panelInfo, recordId, panelRecord, callback) {

    var outRecord = panelFieldsService.prepareOutboudData(panelInfo, panelRecord);

    remoteDataService.updatePanelRecord(panelInfo.model.objectType, recordId, outRecord, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.addPanelRecord = function(objectType, panelRecord, callback) {
    remoteDataService.addPanelRecord(objectType, panelRecord, function(err, data) {
      callback(err, data);
    });
  };

  return panelFieldsService;
}]);

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('remoteDataService', ['$http','$rootScope','util','modelService',
  function($http, $rootScope,util,modelService){

  var remoteDataService = {};

	remoteDataService.apiCall = function(method, route, cacheKey, params, callback) {
      if (!util.defined(remoteDataService.data)) remoteDataService.data = {};
      if (util.defined(cacheKey) && util.defined(remoteDataService.data[cacheKey])) {
      	callback(null, remoteDataService.data[cacheKey]);
      } else {
          if (!util.defined(params)) params = {};
          return $http({
              url: route,
              method: method,
              data: params
          }).then(function(resp) {
              remoteDataService.data[cacheKey] = resp.data;
              callback(null, resp.data);
          }).catch(function(resp) {
          		callback(resp.status, null);
          });
      }
  };

  remoteDataService.searchRecords = function(objectTypes, terms, callback) {
    var obj = {
      objectType: objectTypes,
      terms: terms
    };
    remoteDataService.apiCall('POST','/soi/searchRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.loadSchemas = function(q, callback) {

    if(util.propLength(modelService.schemas) == 0) {
      var schemas = [];
      for(var propertyName in modelService.models) {
        var obj = {
          objectType: modelService.models[propertyName].objectType
        }
        schemas.push(obj);
      }
      var obj = {
        schemas: schemas
      }
      remoteDataService.apiCall('POST','/soi/getSchemas',null,obj, function(err, data) {
          modelService.schemas = data;
          q.resolve();
          if(util.defined(callback)) {
            callback(null, null);
          }
      });      
    } else {
      q.resolve();
      if(util.defined(callback)) {
        callback(null, null);
      }
    }
  }

  remoteDataService.fetchGridRecords = function(gridInfo, callback) {
    var obj = {
      objectType: gridInfo.model.objectType,
      gridFields: gridInfo.gridFields
    };
    remoteDataService.apiCall('POST','/soi/fetchGridRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[gridInfo.model.objectType]}));
  }

  remoteDataService.getRelationshipDetails = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationshipDetails',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getRelationship = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationship',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }


  remoteDataService.getEdge = function(edgeObjectType, edgeRecordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      edgeRecordItemId: edgeRecordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdge',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getEdgeBySource = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdgeBySource',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.deleteEdge = function(objectType, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/deleteEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updateEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/updateEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/addEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }


  remoteDataService.getRecordDetails = function(objectType, recordId, depth, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      depth: depth
    };
    remoteDataService.apiCall('POST','/soi/getRecordDetails',null,obj, function(err, data) {
      var returnObj={};
      for(var propertyName in data) {
        returnObj[propertyName] =  remoteDataService.prepareInboundDataArray(this.schema, data[propertyName]);
      }
      callback(err, returnObj);
    }.bind({schema: modelService.schemas[objectType]}));
  }



  remoteDataService.fetchRecordByProp = function(objectType, prop, value, callback) {
    var obj = {
      objectType: objectType,
      prop: prop,
      value: value,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/fetchRecordByProp',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }

  remoteDataService.fetchRecords = function(objectType, callback) {
    var obj = {
      objectType: objectType
    };
    remoteDataService.apiCall('POST','/soi/fetchRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }


  remoteDataService.fetchPanelRecords = function(panelInfo, callback) {
  	var obj = {
  		objectType: panelInfo.model.objectType,
      schema: modelService.schemas[panelInfo.model.objectType]
  	};

  	remoteDataService.apiCall('POST','/soi/fetchPanelRecords',null,obj, function(err, data) {
      data = remoteDataService.prepareInboundDataArray(this.schema, data);
  		callback(err, data);
  	}.bind( {schema: modelService.schemas[panelInfo.model.objectType]}));
  }

  remoteDataService.deletePanelRecord = function(objectType, recordId, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId
    };
    remoteDataService.apiCall('POST','/soi/deletePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updatePanelRecord = function(objectType, recordId, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/updatePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addPanelRecord = function(objectType, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/addPanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }  
  
  remoteDataService.prepareInboundDataArray = function(schema, objArray) {
    var returnArray=[];
    for(var i=0; i<objArray.length; i++) {
      var valObj = remoteDataService.prepareInboundData(schema, objArray[i]);
      returnArray.push(valObj);
    }
    return returnArray;
  }

  remoteDataService.prepareInboundData = function(schema, obj) {
    for(var propertyName in obj) {
      if(util.defined(obj,propertyName)) {
        var val = obj[propertyName];
        var schemaInfo = schema[propertyName];
        if(util.defined(schemaInfo,"type") && schemaInfo.type == 'date') {
          var x = moment(val);
          val = new Date(x.year(), x.month(), x.date());
        }
      }
      obj[propertyName] = val;
    }
    return obj;    
  }

  remoteDataService.deleteLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/deleteLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getAllLogInfo = function(callback) {
    var obj = {
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.exportRecords = function(objectType, criteria, callback) {
    var obj = {
      objectType: objectType,
      criteria: criteria,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/exportRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  return remoteDataService;

}]);


var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vInvestmentFirmList',
  		model : modelService.models.investmentfirm,
      route: 'investmentfirm',
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
  modelService.piskLists.companytype = {
    options: [
      {id: 1, name: 'Spin-Off'},
      {id: 2, name: 'Other'}
    ]
  }

  modelService.piskLists.acquisitiontype = {
    options: [
      {id: 1, name: 'Acquisition'},
      {id: 2, name: 'Merger'}
    ]
  }

  modelService.piskLists.investmentfirmtype = {
    options: [
      {id: 1, name: 'VC'},
      {id: 2, name: 'Management Investment'},
      {id: 3, name: 'Unit Investment Trusts'}
    ]
  }

  modelService.piskLists.invesmenttype = {
    options: [
      {id: 1, name: 'Seed'},
      {id: 2, name: 'Series A'},
      {id: 2, name: 'Series B'},
      {id: 2, name: 'Series C'}      
    ]
  }

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

  modelService.piskLists.universitytype = {
  options: [
    {id: 1, name: 'University'},
    {id: 2, name: 'Research Institute'},
    {id: 3, name: 'University of Applied Science'},
    {id: 3, name: 'Technical University'}
  ]};

  modelService.piskLists.phase = {
    options: [
      {id: 1, name: 'Early'},
      {id: 2, name: 'Growth'},
      {id: 3, name: 'Maturity'},
      {id: 4, name: 'Possible Exit'}
    ]
  }

  modelService.piskLists.businessmodel = {
    options: [
      {id: 1, name: 'Direct Sales'},
      {id: 2, name: 'Franchise'},
      {id: 3, name: 'Freemium', description: 'For companies that offer personal or business services via the Internet, the freemium business model is common. Under a freemium model, business give away a service at no cost to the consumer as a way to establish the foundation for future transactions. Companies that offer a basic-level service for free build relationships with customers and eventually offer advanced services as add-ons or advertisement-free options at a cost. The freemium model tends to work well for Internet-based businesses with little customer acquisition costs but high lifetime value. Spotify and Skype both operate under a freemium business model.'},
      {id: 4, name: 'Subscription'}
    ]
  }

  modelService.piskLists.typeofspinoff = {
    options: [
      {id: 1, name: 'Direct'},
      {id: 2, name: 'Employee'},
      {id: 3, name: 'Joint Employee'},
      {id: 4, name: 'Joint R&D'},
      {id: 4, name: 'R&D'}
    ]
  }

  modelService.piskLists.programs = {
    options: [
      {id: 1, name: 'Computer Science'},
      {id: 2, name: 'Humanities'},
      {id: 3, name: 'Life Sciences'},
      {id: 4, name: 'Sociology'},
      {id: 5, name: 'Liberal Arts'},      
      {id: 6, name: 'Biochemistry'},      
      {id: 7, name: 'Hospitality Management'},      
      {id: 8, name: 'Social Work'},      
      {id: 9, name: 'Health care administration'},      
      {id: 10, name: 'Anthropology'},      
      {id: 11, name: 'Education'},      
      {id: 12, name: 'Sports management'},      
      {id: 13, name: 'Public relations'},      
      {id: 14, name: 'Film studies'},      
      {id: 15, name: 'Music'},      
      {id: 16, name: 'Chemistry'},      
      {id: 17, name: 'Interior design'},      
      {id: 18, name: 'Communications'},      
      {id: 19, name: 'Spanish'},      
      {id: 20, name: 'Social science'},      
      {id: 21, name: 'Psychology'},
      {id: 22, name: 'Biology'},      
      {id: 23, name: 'Pharmacy'},      
      {id: 24, name: 'Electrical Engineering'},      
      {id: 25, name: 'Veterinary Medicine'},      
      {id: 26, name: 'Geological Sciences'},
      {id: 27, name: 'Mathematics'},
      {id: 28, name: 'Physics'},
      {id: 29, name: 'Medicine'},
      {id: 30, name: 'Philosophy'},
      {id: 31, name: 'Spiritual Science'},
      {id: 32, name: 'Politics Sciences'},
      {id: 33, name: 'Social Sciences'},
      {id: 34, name: 'Environmental Sciences'},
      {id: 35, name: 'Economics'}
    ]
  };

	// Relations
  modelService.models.acquired = {
    displayName: 'Acquired',
    objectType: 'EAcquired',
    fields: [],
    isRelationship: true
  }

  
  modelService.models.acquirer = {
    displayName: 'Acquirer',
    objectType: 'EAcquirer',
    fields: [],
    isRelationship: true
  }

  modelService.models.board = {
    displayName: 'Board Member',
    objectType: 'EBoardMember',
    fields: [],
    isRelationship: true
  }

  modelService.models.advisor = {
    displayName: 'Advisor',
    objectType: 'EAdvisor',
    fields: [],
    isRelationship: true
  }

  modelService.models.funded = {
    displayName: 'Funded',
    objectType: 'EFunded',
    fields: [],
    isRelationship: true
  }

  modelService.models.investor = {
    displayName: 'Investor',
    objectType: 'EInvestor',
    fields: [],
    isRelationship: true
  }


  modelService.models.coapplicant = {
    displayName: 'Co Applicant',
    objectType: 'ECoApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.applicant = {
    displayName: 'Applicant',
    objectType: 'EApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.inventor = {
    displayName: 'Inventor',
    objectType: 'EInventor',
    fields: [],
    isRelationship: true
  }

  modelService.models.supplier = {
    displayName: 'Supplier',
    objectType: 'ESupplier',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.customer = {
    displayName: 'Customer',
    objectType: 'ECustomer',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.partner = {
    displayName: 'Partner',
    objectType: 'EPartner',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

	modelService.models.founded = {
		displayName: 'Founders',
    objectType: 'EFounded',
    fields: [],
    isRelationship: true
  }

  modelService.models.spinoff = {
    displayName: 'Spun Off',
    objectType: 'ESpinOff',
    fields: [
      {
        schemaName: 'department',
        displayName: 'Department',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text'
      },
      {
        schemaName: 'typeofspinoff',
        displayName: 'Type of Spinoff',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.typeofspinoff
      }      
    ],
    isRelationship: true
  }

  modelService.models.teaches = {
    displayName: 'Teachers',
    objectType: 'ETeaches',
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
        schemaName: 'post',
        displayName: 'Post',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'text'           
      }           
    ],
    isRelationship: true
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
		],
    isRelationship: true
	}

	// Entities
  modelService.models.acquisition = {
    displayName: 'Acquisition',
    objectType: 'VAcquisition',
    color: '#92a8d1',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.acquisitiontype
      },
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.acquirer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.acquired,
        destObjectType: 'VCompany'
      }
    ]
  }


  modelService.models.investment = {
    displayName: 'Investment',
    objectType: 'VInvestment',
    color: '#f7786b',    
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
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.invesmenttype
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'datepicker'
      },
      {
        schemaName: 'details',
        displayName: 'Details',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'textarea'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.investor,
        destObjectType: 'VInvestmentFirm'
      },
      {
        model: modelService.models.funded,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.advisor,
        destObjectType: 'VPerson'
      }
    ]
  }

  modelService.models.patent = {
    displayName: 'Patent',
    objectType: 'VPatent',
    color: '#034f84',
    fontColor: 'white',
    fields: [
      {
        schemaName: 'name',
        displayName: 'Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'number',
        displayName: 'Patent Number',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'text'
      },
      {
        schemaName: 'applicationdate',
        displayName: 'Application Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'datepicker'
      },
      {
        schemaName: 'dategranted',
        displayName: 'Date Granted',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'ipc2',
        displayName: 'IPC main class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'text'
      },
      {
        schemaName: 'ipcindex',
        displayName: 'IPC index class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'ipcreclasified',
        displayName: 'Reclasified IPC (MCD)',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'text'
      },
      {
        schemaName: 'ipcsearch',
        displayName: 'IPC-Search file',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'text'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL1',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'url'
      },
      {
        schemaName: 'source2',
        displayName: 'Source URL2',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 11,
        controlType: 'url'
      }],
      relationships: [
        {
          model: modelService.models.applicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.coapplicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.inventor,
          destObjectType: 'VPerson'
        }
      ]
    }

  modelService.models.investmentfirm = {
    displayName: 'Investment Firm',
    objectType: 'VInvestmentFirm',
    color: '#deeaee',        
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.investmentfirmtype
      },
      {
        schemaName: 'yearfounded',
        displayName: 'Year Founded',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 3,
        controlType: 'text'
      },      
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 4,
        controlType: 'textarea'
      },
      {
        schemaName: 'industry',
        displayName: 'Industry / Sector',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.industry
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 10,
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
        displayOrder: 11,
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
        displayOrder: 12,
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
        displayOrder: 13,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,          
        displayOrder: 14,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,            
        displayOrder: 15,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of employees',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 16,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 17,
        controlType: 'url'    
      },
      {
        schemaName: 'source2',
        displayName: 'Source Website 2',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 18,
        controlType: 'url'    
      },
      {
        schemaName: 'linkedin',
        displayName: 'LinkedIn Profile',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 19,
        controlType: 'url'    
      },
    ],
    relationships: [
      {
        model: modelService.models.founded,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      }
    ]
  }

	modelService.models.company = {
		displayName: 'Company',
    objectType: 'VCompany',
    color: '#b1cbbb',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.companytype
      },
    	{
      	schemaName: 'yearfounded',
      	displayName: 'Year Founded',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 3,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'description',
      	displayName: 'Description',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 4,
      	controlType: 'textarea'
    	},    	
      {
        schemaName: 'logo',
        displayName: 'Logo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'image'
      },      
    	{
      	schemaName: 'products',
      	displayName: 'Products/Technology',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 5,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'productcategory',
      	displayName: 'Products Category',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 6,
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
      	displayOrder: 7,
      	controlType: 'picklist',
      	picklistOptions: modelService.piskLists.industry
    	},
      {
        schemaName: 'phase',
        displayName: 'Phase of Development',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 8,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.phase
      },
      {
        schemaName: 'businessmodel',
        displayName: 'Business Model',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.businessmodel
      },
    	{
      	schemaName: 'website',
      	displayName: 'Website',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 10,
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
      	displayOrder: 11,
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
      	displayOrder: 12,
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
      	displayOrder: 13,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,       		
      	displayOrder: 14,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,        		
      	displayOrder: 15,
      	controlType: 'email'
    	},
    	{
      	schemaName: 'size',
      	displayName: 'Number of employees',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 16,
      	controlType: 'text'       		
    	},
    	{
      	schemaName: 'source1',
      	displayName: 'Source Website 1',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 17,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'source2',
      	displayName: 'Source Website 2',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 18,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'linkedin',
      	displayName: 'LinkedIn Profile',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 19,
      	controlType: 'url' 		
    	},
  	],
		relationships: [
			{
				model: modelService.models.founded,
				destObjectType: 'VPerson'
			},
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.supplier,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.customer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.partner,
        destObjectType: 'VCompany'
      }
  	]
	}

  modelService.models.university = {
    displayName: 'University',
    objectType: 'VUniversity',
    color: '#eea29a',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.universitytype      
      },

      {
        schemaName: 'programs',
        displayName: 'Programs',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'multiselect',
        picklistOptions: modelService.piskLists.programs
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 6,
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
        displayOrder: 7,
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
        displayOrder: 8,
        controlType: 'text'
      },      
      {
        schemaName: 'provence',
        displayName: 'State/Provence',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 9,
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
        displayOrder: 10,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 11,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 12,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of students',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 13,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 14,
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
        model: modelService.models.teaches,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.spinoff,
        destObjectType: 'VCompany'
      }
    ]
  }  

	modelService.models.people = {
		displayName: 'People',
    objectType: 'VPerson',
    color: '#c94c4c',
    fontColor: 'white',    
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
        schemaName: 'logo',
        displayName: 'photo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'image'
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
    	},     
      {
        schemaName: 'address',
        displayName: 'Address',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 4,
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
        displayOrder: 5,
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
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'country',
        displayName: 'Country',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 7,
        controlType: 'text'
      }      
    ],
		relationships: [
			{
				model: modelService.models.worksfor,
				destObjectType: 'VCompany'
			}
  	]
	}
	

	return modelService;
}]);	

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var panelFieldsService = {
    panelInfo: {}
  };

  panelFieldsService.panelInfo.vCompanyList = {
      name: 'vCompanyList',
      model : modelService.models.company,
      route: 'companies',
      userRoute: 'companyDetail',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vUniversityList = {
      name: 'vUniversityList',
      model : modelService.models.university,
      route: 'university',
      userRoute: 'universitiesDetail',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPeopleList = {
      name: 'vPeopleList',
      model: modelService.models.people,
      route: 'people',
      userRoute: 'peopleDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentFirmList = {
      name: 'vInvestmentFirmList',
      model : modelService.models.investmentfirm,
      route: 'investmentfirm',
      userRoute: 'investorsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentList = {
      name: 'vInvestmentList',
      model : modelService.models.investment,
      route: 'investment',
      userRoute: 'fundingDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vAcquisitionList = {
      name: 'vAcquisitionList',
      model : modelService.models.acquisition,
      route: 'acquisition',
      userRoute: 'aquisitionsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPatentList = {
      name: 'vPatentList',
      model : modelService.models.patent,
      route: 'patent',
      userRoute: 'patentDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.prepareInboudData = function(panelInfo, records) {
    var schema = modelService.schemas[panelInfo.model.objectType];

    var inRecords=[];
    for(j=0; j<records.length; j++) {
      var inData = {};
      var record = records[j];
      for(var propertyName in schema) {
        var schemaItem = schema[propertyName];
        var val = record[propertyName];
        if(util.defined(schemaItem)) {
          var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
          if(util.defined(modelItem,"controlType") && util.defined(record,propertyName)) {
            if(modelItem.controlType == 'multiselect') {

              var names = val.split(';');
              var inObj = [];
              for(var i=0; i<names.length; i++) {
                inObj.push({id: i, name: names[i]});
              }
              inData[propertyName] = inObj;
            } else {
              inData[propertyName] = val;
            }
          }
        }
      }
      if(util.defined(record,'id')) {
          inData['id'] = record['id'];
      }
      inRecords.push(inData);
    }
    return inRecords;
  }


  panelFieldsService.prepareOutboudData = function(panelInfo, panelRecord) {
    var schema = modelService.schemas[panelInfo.model.objectType];
    var outData = {};
    for(var propertyName in schema) {
      var schemaItem = schema[propertyName];
      if(util.defined(schemaItem)) {
        var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
        if(util.defined(modelItem,"controlType") && util.defined(panelRecord,propertyName)) {
          if(modelItem.controlType == 'multiselect') {

            var names = _.pluck(panelRecord[propertyName], 'name');
            var outText = '';
            if(util.defined(names,'length')) {
              for(var i=0; i<names.length; i++) {
                if(i == names.length-1)
                  outText += names[i];
                else outText += names[i] + ';';
              }
              outData[propertyName] = outText;
            }
          } else {
            outData[propertyName] = panelRecord[propertyName];
          }
        }
      }
    }
    if(util.defined(panelRecord,'id')) {
        outData['id'] = panelRecord['id'];
    }
    return outData;
  }

	panelFieldsService.fetchPanelRecords = function(panelInfo, callback) {
		remoteDataService.fetchPanelRecords(panelInfo, function(err, data) {
			var panelName = panelInfo.name;
			panelFieldsService[panelName] = {
        panelInfo: panelInfo
      };
      if(util.defined(data,"length")) {
  		  panelFieldsService[panelName].panelInfo.records = panelFieldsService.prepareInboudData(panelInfo, data);
      }
      $rootScope.$broadcast('fetchPanelRecords',panelName);
			callback(null,data);
		});
	};

  panelFieldsService.deletePanelRecord = function(objectType, recordId, callback) {
    remoteDataService.deletePanelRecord(objectType, recordId, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.updatePanelRecord = function(panelInfo, recordId, panelRecord, callback) {

    var outRecord = panelFieldsService.prepareOutboudData(panelInfo, panelRecord);

    remoteDataService.updatePanelRecord(panelInfo.model.objectType, recordId, outRecord, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.addPanelRecord = function(objectType, panelRecord, callback) {
    remoteDataService.addPanelRecord(objectType, panelRecord, function(err, data) {
      callback(err, data);
    });
  };

  return panelFieldsService;
}]);

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('remoteDataService', ['$http','$rootScope','util','modelService',
  function($http, $rootScope,util,modelService){

  var remoteDataService = {};

	remoteDataService.apiCall = function(method, route, cacheKey, params, callback) {
      if (!util.defined(remoteDataService.data)) remoteDataService.data = {};
      if (util.defined(cacheKey) && util.defined(remoteDataService.data[cacheKey])) {
      	callback(null, remoteDataService.data[cacheKey]);
      } else {
          if (!util.defined(params)) params = {};
          return $http({
              url: route,
              method: method,
              data: params
          }).then(function(resp) {
              remoteDataService.data[cacheKey] = resp.data;
              callback(null, resp.data);
          }).catch(function(resp) {
          		callback(resp.status, null);
          });
      }
  };

  remoteDataService.searchRecords = function(objectTypes, terms, callback) {
    var obj = {
      objectType: objectTypes,
      terms: terms
    };
    remoteDataService.apiCall('POST','/soi/searchRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.loadSchemas = function(q, callback) {

    if(util.propLength(modelService.schemas) == 0) {
      var schemas = [];
      for(var propertyName in modelService.models) {
        var obj = {
          objectType: modelService.models[propertyName].objectType
        }
        schemas.push(obj);
      }
      var obj = {
        schemas: schemas
      }
      remoteDataService.apiCall('POST','/soi/getSchemas',null,obj, function(err, data) {
          modelService.schemas = data;
          q.resolve();
          if(util.defined(callback)) {
            callback(null, null);
          }
      });      
    } else {
      q.resolve();
      if(util.defined(callback)) {
        callback(null, null);
      }
    }
  }

  remoteDataService.fetchGridRecords = function(gridInfo, callback) {
    var obj = {
      objectType: gridInfo.model.objectType,
      gridFields: gridInfo.gridFields
    };
    remoteDataService.apiCall('POST','/soi/fetchGridRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[gridInfo.model.objectType]}));
  }

  remoteDataService.getRelationshipDetails = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationshipDetails',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getRelationship = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationship',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }


  remoteDataService.getEdge = function(edgeObjectType, edgeRecordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      edgeRecordItemId: edgeRecordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdge',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getEdgeBySource = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdgeBySource',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.deleteEdge = function(objectType, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/deleteEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updateEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/updateEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/addEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }


  remoteDataService.getRecordDetails = function(objectType, recordId, depth, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      depth: depth
    };
    remoteDataService.apiCall('POST','/soi/getRecordDetails',null,obj, function(err, data) {
      var returnObj={};
      for(var propertyName in data) {
        returnObj[propertyName] =  remoteDataService.prepareInboundDataArray(this.schema, data[propertyName]);
      }
      callback(err, returnObj);
    }.bind({schema: modelService.schemas[objectType]}));
  }



  remoteDataService.fetchRecordByProp = function(objectType, prop, value, callback) {
    var obj = {
      objectType: objectType,
      prop: prop,
      value: value,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/fetchRecordByProp',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }

  remoteDataService.fetchRecords = function(objectType, callback) {
    var obj = {
      objectType: objectType
    };
    remoteDataService.apiCall('POST','/soi/fetchRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }


  remoteDataService.fetchPanelRecords = function(panelInfo, callback) {
  	var obj = {
  		objectType: panelInfo.model.objectType,
      schema: modelService.schemas[panelInfo.model.objectType]
  	};

  	remoteDataService.apiCall('POST','/soi/fetchPanelRecords',null,obj, function(err, data) {
      data = remoteDataService.prepareInboundDataArray(this.schema, data);
  		callback(err, data);
  	}.bind( {schema: modelService.schemas[panelInfo.model.objectType]}));
  }

  remoteDataService.deletePanelRecord = function(objectType, recordId, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId
    };
    remoteDataService.apiCall('POST','/soi/deletePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updatePanelRecord = function(objectType, recordId, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/updatePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addPanelRecord = function(objectType, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/addPanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }  
  
  remoteDataService.prepareInboundDataArray = function(schema, objArray) {
    var returnArray=[];
    for(var i=0; i<objArray.length; i++) {
      var valObj = remoteDataService.prepareInboundData(schema, objArray[i]);
      returnArray.push(valObj);
    }
    return returnArray;
  }

  remoteDataService.prepareInboundData = function(schema, obj) {
    for(var propertyName in obj) {
      if(util.defined(obj,propertyName)) {
        var val = obj[propertyName];
        var schemaInfo = schema[propertyName];
        if(util.defined(schemaInfo,"type") && schemaInfo.type == 'date') {
          var x = moment(val);
          val = new Date(x.year(), x.month(), x.date());
        }
      }
      obj[propertyName] = val;
    }
    return obj;    
  }

  remoteDataService.deleteLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/deleteLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getAllLogInfo = function(callback) {
    var obj = {
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.exportRecords = function(objectType, criteria, callback) {
    var obj = {
      objectType: objectType,
      criteria: criteria,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/exportRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  return remoteDataService;

}]);


var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('investmentFirmController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService) {

	$scope.companies = null;
  	var panelInfo = {
  		name: 'vInvestmentFirmList',
  		model : modelService.models.investmentfirm,
      route: 'investmentfirm',
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
  modelService.piskLists.companytype = {
    options: [
      {id: 1, name: 'Spin-Off'},
      {id: 2, name: 'Other'}
    ]
  }

  modelService.piskLists.acquisitiontype = {
    options: [
      {id: 1, name: 'Acquisition'},
      {id: 2, name: 'Merger'}
    ]
  }

  modelService.piskLists.investmentfirmtype = {
    options: [
      {id: 1, name: 'VC'},
      {id: 2, name: 'Management Investment'},
      {id: 3, name: 'Unit Investment Trusts'}
    ]
  }

  modelService.piskLists.invesmenttype = {
    options: [
      {id: 1, name: 'Seed'},
      {id: 2, name: 'Series A'},
      {id: 2, name: 'Series B'},
      {id: 2, name: 'Series C'}      
    ]
  }

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

  modelService.piskLists.universitytype = {
  options: [
    {id: 1, name: 'University'},
    {id: 2, name: 'Research Institute'},
    {id: 3, name: 'University of Applied Science'},
    {id: 3, name: 'Technical University'}
  ]};

  modelService.piskLists.phase = {
    options: [
      {id: 1, name: 'Early'},
      {id: 2, name: 'Growth'},
      {id: 3, name: 'Maturity'},
      {id: 4, name: 'Possible Exit'}
    ]
  }

  modelService.piskLists.businessmodel = {
    options: [
      {id: 1, name: 'Direct Sales'},
      {id: 2, name: 'Franchise'},
      {id: 3, name: 'Freemium', description: 'For companies that offer personal or business services via the Internet, the freemium business model is common. Under a freemium model, business give away a service at no cost to the consumer as a way to establish the foundation for future transactions. Companies that offer a basic-level service for free build relationships with customers and eventually offer advanced services as add-ons or advertisement-free options at a cost. The freemium model tends to work well for Internet-based businesses with little customer acquisition costs but high lifetime value. Spotify and Skype both operate under a freemium business model.'},
      {id: 4, name: 'Subscription'}
    ]
  }

  modelService.piskLists.typeofspinoff = {
    options: [
      {id: 1, name: 'Direct'},
      {id: 2, name: 'Employee'},
      {id: 3, name: 'Joint Employee'},
      {id: 4, name: 'Joint R&D'},
      {id: 4, name: 'R&D'}
    ]
  }

  modelService.piskLists.programs = {
    options: [
      {id: 1, name: 'Computer Science'},
      {id: 2, name: 'Humanities'},
      {id: 3, name: 'Life Sciences'},
      {id: 4, name: 'Sociology'},
      {id: 5, name: 'Liberal Arts'},      
      {id: 6, name: 'Biochemistry'},      
      {id: 7, name: 'Hospitality Management'},      
      {id: 8, name: 'Social Work'},      
      {id: 9, name: 'Health care administration'},      
      {id: 10, name: 'Anthropology'},      
      {id: 11, name: 'Education'},      
      {id: 12, name: 'Sports management'},      
      {id: 13, name: 'Public relations'},      
      {id: 14, name: 'Film studies'},      
      {id: 15, name: 'Music'},      
      {id: 16, name: 'Chemistry'},      
      {id: 17, name: 'Interior design'},      
      {id: 18, name: 'Communications'},      
      {id: 19, name: 'Spanish'},      
      {id: 20, name: 'Social science'},      
      {id: 21, name: 'Psychology'},
      {id: 22, name: 'Biology'},      
      {id: 23, name: 'Pharmacy'},      
      {id: 24, name: 'Electrical Engineering'},      
      {id: 25, name: 'Veterinary Medicine'},      
      {id: 26, name: 'Geological Sciences'},
      {id: 27, name: 'Mathematics'},
      {id: 28, name: 'Physics'},
      {id: 29, name: 'Medicine'},
      {id: 30, name: 'Philosophy'},
      {id: 31, name: 'Spiritual Science'},
      {id: 32, name: 'Politics Sciences'},
      {id: 33, name: 'Social Sciences'},
      {id: 34, name: 'Environmental Sciences'},
      {id: 35, name: 'Economics'}
    ]
  };

	// Relations
  modelService.models.acquired = {
    displayName: 'Acquired',
    objectType: 'EAcquired',
    fields: [],
    isRelationship: true
  }

  
  modelService.models.acquirer = {
    displayName: 'Acquirer',
    objectType: 'EAcquirer',
    fields: [],
    isRelationship: true
  }

  modelService.models.board = {
    displayName: 'Board Member',
    objectType: 'EBoardMember',
    fields: [],
    isRelationship: true
  }

  modelService.models.advisor = {
    displayName: 'Advisor',
    objectType: 'EAdvisor',
    fields: [],
    isRelationship: true
  }

  modelService.models.funded = {
    displayName: 'Funded',
    objectType: 'EFunded',
    fields: [],
    isRelationship: true
  }

  modelService.models.investor = {
    displayName: 'Investor',
    objectType: 'EInvestor',
    fields: [],
    isRelationship: true
  }


  modelService.models.coapplicant = {
    displayName: 'Co Applicant',
    objectType: 'ECoApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.applicant = {
    displayName: 'Applicant',
    objectType: 'EApplicant',
    fields: [],
    isRelationship: true
  }

  modelService.models.inventor = {
    displayName: 'Inventor',
    objectType: 'EInventor',
    fields: [],
    isRelationship: true
  }

  modelService.models.supplier = {
    displayName: 'Supplier',
    objectType: 'ESupplier',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.customer = {
    displayName: 'Customer',
    objectType: 'ECustomer',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

  modelService.models.partner = {
    displayName: 'Partner',
    objectType: 'EPartner',
    fields: [
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'source',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'url'
      }
    ],
    isRelationship: true
  }

	modelService.models.founded = {
		displayName: 'Founders',
    objectType: 'EFounded',
    fields: [],
    isRelationship: true
  }

  modelService.models.spinoff = {
    displayName: 'Spun Off',
    objectType: 'ESpinOff',
    fields: [
      {
        schemaName: 'department',
        displayName: 'Department',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text'
      },
      {
        schemaName: 'typeofspinoff',
        displayName: 'Type of Spinoff',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.typeofspinoff
      }      
    ],
    isRelationship: true
  }

  modelService.models.teaches = {
    displayName: 'Teachers',
    objectType: 'ETeaches',
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
        schemaName: 'post',
        displayName: 'Post',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'text'           
      }           
    ],
    isRelationship: true
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
		],
    isRelationship: true
	}

	// Entities
  modelService.models.acquisition = {
    displayName: 'Acquisition',
    objectType: 'VAcquisition',
    color: '#92a8d1',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.acquisitiontype
      },
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.acquirer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.acquired,
        destObjectType: 'VCompany'
      }
    ]
  }


  modelService.models.investment = {
    displayName: 'Investment',
    objectType: 'VInvestment',
    color: '#f7786b',    
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
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.invesmenttype
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'datepicker'
      },
      {
        schemaName: 'details',
        displayName: 'Details',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'textarea'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.investor,
        destObjectType: 'VInvestmentFirm'
      },
      {
        model: modelService.models.funded,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.advisor,
        destObjectType: 'VPerson'
      }
    ]
  }

  modelService.models.patent = {
    displayName: 'Patent',
    objectType: 'VPatent',
    color: '#034f84',
    fontColor: 'white',
    fields: [
      {
        schemaName: 'name',
        displayName: 'Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'textarea'
      },
      {
        schemaName: 'number',
        displayName: 'Patent Number',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'text'
      },
      {
        schemaName: 'applicationdate',
        displayName: 'Application Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'datepicker'
      },
      {
        schemaName: 'dategranted',
        displayName: 'Date Granted',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'ipc2',
        displayName: 'IPC main class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'text'
      },
      {
        schemaName: 'ipcindex',
        displayName: 'IPC index class',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'ipcreclasified',
        displayName: 'Reclasified IPC (MCD)',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'text'
      },
      {
        schemaName: 'ipcsearch',
        displayName: 'IPC-Search file',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'text'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL1',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'url'
      },
      {
        schemaName: 'source2',
        displayName: 'Source URL2',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 11,
        controlType: 'url'
      }],
      relationships: [
        {
          model: modelService.models.applicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.coapplicant,
          destObjectType: 'VCompany'
        },
        {
          model: modelService.models.inventor,
          destObjectType: 'VPerson'
        }
      ]
    }

  modelService.models.investmentfirm = {
    displayName: 'Investment Firm',
    objectType: 'VInvestmentFirm',
    color: '#deeaee',        
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.investmentfirmtype
      },
      {
        schemaName: 'yearfounded',
        displayName: 'Year Founded',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 3,
        controlType: 'text'
      },      
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 4,
        controlType: 'textarea'
      },
      {
        schemaName: 'industry',
        displayName: 'Industry / Sector',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.industry
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 10,
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
        displayOrder: 11,
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
        displayOrder: 12,
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
        displayOrder: 13,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,          
        displayOrder: 14,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,            
        displayOrder: 15,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of employees',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 16,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 17,
        controlType: 'url'    
      },
      {
        schemaName: 'source2',
        displayName: 'Source Website 2',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 18,
        controlType: 'url'    
      },
      {
        schemaName: 'linkedin',
        displayName: 'LinkedIn Profile',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 19,
        controlType: 'url'    
      },
    ],
    relationships: [
      {
        model: modelService.models.founded,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      }
    ]
  }

	modelService.models.company = {
		displayName: 'Company',
    objectType: 'VCompany',
    color: '#b1cbbb',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.companytype
      },
    	{
      	schemaName: 'yearfounded',
      	displayName: 'Year Founded',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 3,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'description',
      	displayName: 'Description',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 4,
      	controlType: 'textarea'
    	},    	
      {
        schemaName: 'logo',
        displayName: 'Logo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'image'
      },      
    	{
      	schemaName: 'products',
      	displayName: 'Products/Technology',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 5,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'productcategory',
      	displayName: 'Products Category',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 6,
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
      	displayOrder: 7,
      	controlType: 'picklist',
      	picklistOptions: modelService.piskLists.industry
    	},
      {
        schemaName: 'phase',
        displayName: 'Phase of Development',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 8,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.phase
      },
      {
        schemaName: 'businessmodel',
        displayName: 'Business Model',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 9,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.businessmodel
      },
    	{
      	schemaName: 'website',
      	displayName: 'Website',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 10,
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
      	displayOrder: 11,
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
      	displayOrder: 12,
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
      	displayOrder: 13,
      	controlType: 'text'
    	},    	
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,       		
      	displayOrder: 14,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,        		
      	displayOrder: 15,
      	controlType: 'email'
    	},
    	{
      	schemaName: 'size',
      	displayName: 'Number of employees',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 16,
      	controlType: 'text'       		
    	},
    	{
      	schemaName: 'source1',
      	displayName: 'Source Website 1',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 17,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'source2',
      	displayName: 'Source Website 2',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 18,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'linkedin',
      	displayName: 'LinkedIn Profile',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 19,
      	controlType: 'url' 		
    	},
  	],
		relationships: [
			{
				model: modelService.models.founded,
				destObjectType: 'VPerson'
			},
      {
        model: modelService.models.board,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.supplier,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.customer,
        destObjectType: 'VCompany'
      },
      {
        model: modelService.models.partner,
        destObjectType: 'VCompany'
      }
  	]
	}

  modelService.models.university = {
    displayName: 'University',
    objectType: 'VUniversity',
    color: '#eea29a',
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.universitytype      
      },

      {
        schemaName: 'programs',
        displayName: 'Programs',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'multiselect',
        picklistOptions: modelService.piskLists.programs
      },
      {
        schemaName: 'website',
        displayName: 'Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 6,
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
        displayOrder: 7,
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
        displayOrder: 8,
        controlType: 'text'
      },      
      {
        schemaName: 'provence',
        displayName: 'State/Provence',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 9,
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
        displayOrder: 10,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 11,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 12,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of students',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 13,
        controlType: 'text'           
      },
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 14,
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
        model: modelService.models.teaches,
        destObjectType: 'VPerson'
      },
      {
        model: modelService.models.spinoff,
        destObjectType: 'VCompany'
      }
    ]
  }  

	modelService.models.people = {
		displayName: 'People',
    objectType: 'VPerson',
    color: '#c94c4c',
    fontColor: 'white',    
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
        schemaName: 'logo',
        displayName: 'photo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'image'
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
    	},     
      {
        schemaName: 'address',
        displayName: 'Address',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 4,
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
        displayOrder: 5,
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
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'country',
        displayName: 'Country',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 7,
        controlType: 'text'
      }      
    ],
		relationships: [
			{
				model: modelService.models.worksfor,
				destObjectType: 'VCompany'
			}
  	]
	}
	

	return modelService;
}]);	

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('panelFieldsService', ['$rootScope','util','remoteDataService','modelService',
  function($rootScope,util,remoteDataService,modelService){

	var panelFieldsService = {
    panelInfo: {}
  };

  panelFieldsService.panelInfo.vCompanyList = {
      name: 'vCompanyList',
      model : modelService.models.company,
      route: 'companies',
      userRoute: 'companyDetail',
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vUniversityList = {
      name: 'vUniversityList',
      model : modelService.models.university,
      route: 'university',
      userRoute: 'universitiesDetail',      
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPeopleList = {
      name: 'vPeopleList',
      model: modelService.models.people,
      route: 'people',
      userRoute: 'peopleDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentFirmList = {
      name: 'vInvestmentFirmList',
      model : modelService.models.investmentfirm,
      route: 'investmentfirm',
      userRoute: 'investorsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vInvestmentList = {
      name: 'vInvestmentList',
      model : modelService.models.investment,
      route: 'investment',
      userRoute: 'fundingDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vAcquisitionList = {
      name: 'vAcquisitionList',
      model : modelService.models.acquisition,
      route: 'acquisition',
      userRoute: 'aquisitionsDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.panelInfo.vPatentList = {
      name: 'vPatentList',
      model : modelService.models.patent,
      route: 'patent',
      userRoute: 'patentDetail', 
      defaultSort: 'name',
      sortReverse: true,
      allowEdit: true,
      allowDelete: true,
      addButtonText: 'Add',
      editButtonText: 'Edit',
      deleteButtonText: 'Delete'
  };

  panelFieldsService.prepareInboudData = function(panelInfo, records) {
    var schema = modelService.schemas[panelInfo.model.objectType];

    var inRecords=[];
    for(j=0; j<records.length; j++) {
      var inData = {};
      var record = records[j];
      for(var propertyName in schema) {
        var schemaItem = schema[propertyName];
        var val = record[propertyName];
        if(util.defined(schemaItem)) {
          var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
          if(util.defined(modelItem,"controlType") && util.defined(record,propertyName)) {
            if(modelItem.controlType == 'multiselect') {

              var names = val.split(';');
              var inObj = [];
              for(var i=0; i<names.length; i++) {
                inObj.push({id: i, name: names[i]});
              }
              inData[propertyName] = inObj;
            } else {
              inData[propertyName] = val;
            }
          }
        }
      }
      if(util.defined(record,'id')) {
          inData['id'] = record['id'];
      }
      inRecords.push(inData);
    }
    return inRecords;
  }


  panelFieldsService.prepareOutboudData = function(panelInfo, panelRecord) {
    var schema = modelService.schemas[panelInfo.model.objectType];
    var outData = {};
    for(var propertyName in schema) {
      var schemaItem = schema[propertyName];
      if(util.defined(schemaItem)) {
        var modelItem = _.findWhere(panelInfo.model.fields, {schemaName: propertyName});
        if(util.defined(modelItem,"controlType") && util.defined(panelRecord,propertyName)) {
          if(modelItem.controlType == 'multiselect') {

            var names = _.pluck(panelRecord[propertyName], 'name');
            var outText = '';
            if(util.defined(names,'length')) {
              for(var i=0; i<names.length; i++) {
                if(i == names.length-1)
                  outText += names[i];
                else outText += names[i] + ';';
              }
              outData[propertyName] = outText;
            }
          } else {
            outData[propertyName] = panelRecord[propertyName];
          }
        }
      }
    }
    if(util.defined(panelRecord,'id')) {
        outData['id'] = panelRecord['id'];
    }
    return outData;
  }

	panelFieldsService.fetchPanelRecords = function(panelInfo, callback) {
		remoteDataService.fetchPanelRecords(panelInfo, function(err, data) {
			var panelName = panelInfo.name;
			panelFieldsService[panelName] = {
        panelInfo: panelInfo
      };
      if(util.defined(data,"length")) {
  		  panelFieldsService[panelName].panelInfo.records = panelFieldsService.prepareInboudData(panelInfo, data);
      }
      $rootScope.$broadcast('fetchPanelRecords',panelName);
			callback(null,data);
		});
	};

  panelFieldsService.deletePanelRecord = function(objectType, recordId, callback) {
    remoteDataService.deletePanelRecord(objectType, recordId, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.updatePanelRecord = function(panelInfo, recordId, panelRecord, callback) {

    var outRecord = panelFieldsService.prepareOutboudData(panelInfo, panelRecord);

    remoteDataService.updatePanelRecord(panelInfo.model.objectType, recordId, outRecord, function(err, data) {
      callback(err, data);
    });
  };

  panelFieldsService.addPanelRecord = function(objectType, panelRecord, callback) {
    remoteDataService.addPanelRecord(objectType, panelRecord, function(err, data) {
      callback(err, data);
    });
  };

  return panelFieldsService;
}]);

var soiControllers = angular.module('soiApp.controllers')  //gets
soiServices.factory('remoteDataService', ['$http','$rootScope','util','modelService',
  function($http, $rootScope,util,modelService){

  var remoteDataService = {};

	remoteDataService.apiCall = function(method, route, cacheKey, params, callback) {
      if (!util.defined(remoteDataService.data)) remoteDataService.data = {};
      if (util.defined(cacheKey) && util.defined(remoteDataService.data[cacheKey])) {
      	callback(null, remoteDataService.data[cacheKey]);
      } else {
          if (!util.defined(params)) params = {};
          return $http({
              url: route,
              method: method,
              data: params
          }).then(function(resp) {
              remoteDataService.data[cacheKey] = resp.data;
              callback(null, resp.data);
          }).catch(function(resp) {
          		callback(resp.status, null);
          });
      }
  };

  remoteDataService.searchRecords = function(objectTypes, terms, callback) {
    var obj = {
      objectType: objectTypes,
      terms: terms
    };
    remoteDataService.apiCall('POST','/soi/searchRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.loadSchemas = function(q, callback) {

    if(util.propLength(modelService.schemas) == 0) {
      var schemas = [];
      for(var propertyName in modelService.models) {
        var obj = {
          objectType: modelService.models[propertyName].objectType
        }
        schemas.push(obj);
      }
      var obj = {
        schemas: schemas
      }
      remoteDataService.apiCall('POST','/soi/getSchemas',null,obj, function(err, data) {
          modelService.schemas = data;
          q.resolve();
          if(util.defined(callback)) {
            callback(null, null);
          }
      });      
    } else {
      q.resolve();
      if(util.defined(callback)) {
        callback(null, null);
      }
    }
  }

  remoteDataService.fetchGridRecords = function(gridInfo, callback) {
    var obj = {
      objectType: gridInfo.model.objectType,
      gridFields: gridInfo.gridFields
    };
    remoteDataService.apiCall('POST','/soi/fetchGridRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[gridInfo.model.objectType]}));
  }

  remoteDataService.getRelationshipDetails = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationshipDetails',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getRelationship = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getRelationship',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }


  remoteDataService.getEdge = function(edgeObjectType, edgeRecordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      edgeRecordItemId: edgeRecordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdge',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.getEdgeBySource = function(edgeObjectType, recordItemId, callback) {
    var obj = {
      edgeObjectType: edgeObjectType,
      recordItemId: recordItemId
    };
    remoteDataService.apiCall('POST','/soi/getEdgeBySource',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundData(this.schema, data));
    }.bind({schema: modelService.schemas[edgeObjectType]}));
  }

  remoteDataService.deleteEdge = function(objectType, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/deleteEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updateEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/updateEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addEdge = function(objectType, recordData, sourceId, targetId, callback) {
    var obj = {
      objectType: objectType,
      recordData: recordData,
      sourceId: sourceId,
      targetId: targetId
    };
    remoteDataService.apiCall('POST','/soi/addEdge',null,obj, function(err, data) {
      callback(err, data);
    });
  }


  remoteDataService.getRecordDetails = function(objectType, recordId, depth, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      depth: depth
    };
    remoteDataService.apiCall('POST','/soi/getRecordDetails',null,obj, function(err, data) {
      var returnObj={};
      for(var propertyName in data) {
        returnObj[propertyName] =  remoteDataService.prepareInboundDataArray(this.schema, data[propertyName]);
      }
      callback(err, returnObj);
    }.bind({schema: modelService.schemas[objectType]}));
  }



  remoteDataService.fetchRecordByProp = function(objectType, prop, value, callback) {
    var obj = {
      objectType: objectType,
      prop: prop,
      value: value,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/fetchRecordByProp',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }

  remoteDataService.fetchRecords = function(objectType, callback) {
    var obj = {
      objectType: objectType
    };
    remoteDataService.apiCall('POST','/soi/fetchRecords',null,obj, function(err, data) {
      callback(err, remoteDataService.prepareInboundDataArray(this.schema, data));
    }.bind({schema: modelService.schemas[objectType]}));
  }


  remoteDataService.fetchPanelRecords = function(panelInfo, callback) {
  	var obj = {
  		objectType: panelInfo.model.objectType,
      schema: modelService.schemas[panelInfo.model.objectType]
  	};

  	remoteDataService.apiCall('POST','/soi/fetchPanelRecords',null,obj, function(err, data) {
      data = remoteDataService.prepareInboundDataArray(this.schema, data);
  		callback(err, data);
  	}.bind( {schema: modelService.schemas[panelInfo.model.objectType]}));
  }

  remoteDataService.deletePanelRecord = function(objectType, recordId, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId
    };
    remoteDataService.apiCall('POST','/soi/deletePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.updatePanelRecord = function(objectType, recordId, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      recordId: recordId,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/updatePanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.addPanelRecord = function(objectType, panelRecord, callback) {
    var obj = {
      objectType: objectType,
      panelRecord: panelRecord
    };
    remoteDataService.apiCall('POST','/soi/addPanelRecord',null,obj, function(err, data) {
      callback(err, data);
    });
  }  
  
  remoteDataService.prepareInboundDataArray = function(schema, objArray) {
    var returnArray=[];
    for(var i=0; i<objArray.length; i++) {
      var valObj = remoteDataService.prepareInboundData(schema, objArray[i]);
      returnArray.push(valObj);
    }
    return returnArray;
  }

  remoteDataService.prepareInboundData = function(schema, obj) {
    for(var propertyName in obj) {
      if(util.defined(obj,propertyName)) {
        var val = obj[propertyName];
        var schemaInfo = schema[propertyName];
        if(util.defined(schemaInfo,"type") && schemaInfo.type == 'date') {
          var x = moment(val);
          val = new Date(x.year(), x.month(), x.date());
        }
      }
      obj[propertyName] = val;
    }
    return obj;    
  }

  remoteDataService.deleteLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/deleteLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getAllLogInfo = function(callback) {
    var obj = {
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.getLogInfo = function(file, callback) {
    var obj = {
      file: file
    };
    remoteDataService.apiCall('POST','/soi/getLogInfo',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  remoteDataService.exportRecords = function(objectType, criteria, callback) {
    var obj = {
      objectType: objectType,
      criteria: criteria,
      schema: modelService.schemas[objectType]
    };
    remoteDataService.apiCall('POST','/soi/exportRecords',null,obj, function(err, data) {
      callback(err, data);
    });
  }

  return remoteDataService;

}]);


angular.module('soiApp.utilities', []); //instantiates
angular.module('soiApp.utilities') //gets
.factory('util', ['$http','$state','$stateParams','$rootScope','navService',
	function($http,$state,$stateParams,$rootScope,navService){

		var util = {};
		util.$state = $state;
    util.$stateParams = $stateParams;

		util.spinnerOptions = {
      lines: 13, // The number of lines to draw
      length: 20, // The length of each line
      width: 10, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 0.5, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#8b8989', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '10', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };

    util.findWhereDeep = function(dataArray, findProp1, findProp2, findValue) {
      var found=[];
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue) {
              found.push(dat);
            }
          }
        }
      }
      return found;
    }

    util.findDeep = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat[findProp1];       
          }
        }
      }
      return null;
    }

    util.findDeepParent = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat;          
          }
        }        
      }
      return null;
    }

  util.propLength = function(obj) {
    var cnt=0;
    for(var propertyNameItem in obj) {
      cnt++;
    }
    return cnt;
  }

  util.getObjProperty = function(obj, name, value, property) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem[property];
      }
    }
    return null;
  }

  util.findWhereProp = function(obj, name, value) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem;
      }
    }
    return null;
  }

  util.findWhereDeepProp = function(obj, findProp1, findProp2, findValue) {
    for(var propertyName in obj) {
      var dat = obj[propertyName];
      if(util.defined(dat,findProp1+'.'+findProp2)) {
        if(dat[findProp1][findProp2] == findValue)
          return dat;          
      }
    }
    return null;
  }

  util.findWhereArray = function(arrayObj, name, property, value) {
    for(var i=0; i<arrayObj.length; i++) {
      var arrayItem = arrayObj[i];
      if(util.defined(arrayItem,name+"."+property)) {
        if(arrayItem[name][property] == value)
          return arrayItem;
      }
    }
  }


		util.defined = function(ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return false;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return false;
          ref = ref[name];
        }
      }
      return true;
    }    


    util.definedElse = function(elseValue, ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return elseValue;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return elseValue;
          ref = ref[name];
        }
      }
      return ref;
    }

		util.routePage = function(route, params) {
      if(this.defined(params)) {
        var pStr="";
        for (var property in params) {
          if (params.hasOwnProperty(property)) {
                // do stuff
                if(pStr=="")
                  pStr = params[property];
                else pStr = pStr + "/" + params[property];
              }
            }

        //$location.path('/'+route+'/'+pStr);
        $state.go(route, params);
      } else {
        $state.go(route);
      }
      $rootScope.$broadcast('navToLocation', route, params);
    };

		util.navigate = function(route, params) {
      // $('.row').hide();
      // $('.panel').hide();
      // $('.panel-body').hide();
      // $('.hide-onload').hide();

      // util.startSpinner('#spin','#8b8989');

      var count = 0;
      for (k in $stateParams) if ($stateParams.hasOwnProperty(k)) count++;

      if($state.current.name == route && count == 0) {
        util.$state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: false,
          notify: true
        });
      } else {
        util.routePage(route, params);
      }
    }    

    util.formatMultiSelect = function(intValue) {
      if(util.defined(intValue)) {
        return intValue.replace(/;/g,", ");
      } else {
        return '';  
      }
    }

    util.formatMoney = function(intAmount) {
      if(util.defined(intAmount)) {
        if(intAmount > 1000000000) {
          var num = Math.round(intAmount/1000000000);
          return num + "B";
        } else if(intAmount > 1000000) {
          var num = Math.round(intAmount/1000000);
          return num + "M";
        } else if(intAmount > 1000) {
          var num = Math.round(intAmount/1000);
          return num + "K";
        }
      } else {
        return '';
      }
    };


    util.formatDate = function(strDate, pattern) {
      if(util.defined(strDate)) {
        return moment(strDate).format(pattern);
      } else {
        return '';
      }
    };

    util.formatData = function(controlType, schemaType, value) {
      if(util.defined(value)) {
        if(schemaType == 'date') {
          return moment(value).format('MM/DD/YYYY');
        } else if(controlType == 'multiselect') {
          var names = _.pluck(value, 'name');
          return names.join(", ");
        } else if(controlType == 'money') {
          return '€ ' + value.toLocaleString();
        } else {
          return value;
        }        
      } else {
        return '';
      }
    }

  util.getProperty = function(obj, property) {
    if(util.defined(obj, property)) {
      return obj[property];
    } else {
      return null;
    }
  }

  util.startSpinner = function(selector, color, top, radius) {
	  var obj = $(selector);
	  var spinOptions = jQuery.extend(true, {}, this.spinnerOptions);

	  if(this.defined(obj,"length") && obj.length > 0) {
	    if(this.defined(color))
	      spinOptions.color = color;
	    if(this.defined(top))
	      spinOptions.top = top;
	    if(this.defined(top))
	      spinOptions.radius = radius;
	    util.spinner = new Spinner(spinOptions).spin(obj[0]);
	    return util.spinner;
	  } else {
	    return null;
	  }
	}

  util.cleanExportData = function(recordData) {
    var cleanData = {};
    var sendObj = {};
    if(this.defined(recordData)) {
      for(var propertyName in recordData) {
        console.log('^^^^ propertyName:' + propertyName);
        if(recordData[propertyName] == null) {
          console.log('fail1');
        } else if(propertyName == 'in') {
          console.log('fail2');
        } else if(propertyName == 'out') {
          console.log('fail3');
        } else if(propertyName.indexOf('@') != -1) { 
          console.log('fail4');
        } else if(propertyName == 'id') {
          console.log('fail5');
        } else if(propertyName == 'backup') {
          console.log('fail6');
        } else if(typeof propertyName == 'object') {
          console.log('fail7');
        } else if(typeof propertyName == 'array') {
          console.log('fail8');
        } else if(!this.defined(recordData,propertyName)) {
          console.log('fail9');
        } else {
          cleanData[propertyName] = recordData[propertyName];
        }
      }
      //sendObj = this.prepareInboudDate(cleanData);
      return cleanData;
    } else {
      return null;
    } 
  }

  util.JSON2CSV = function(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    if ($("#labels").is(':checked')) {
        var head = array[0];
        if ($("#quote").is(':checked')) {
            for (var index in array[0]) {
                var value = index + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[0]) {
                line += index + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }

    for (var i = 0; i < array.length; i++) {
        var line = '';

        if ($("#quote").is(':checked')) {
            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[i]) {
                line += array[i][index] + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;        
  }

return util;
}]);	

angular.module('soiApp.utilities', []); //instantiates
angular.module('soiApp.utilities') //gets
.factory('util', ['$http','$state','$stateParams','$rootScope','navService',
	function($http,$state,$stateParams,$rootScope,navService){

		var util = {};
		util.$state = $state;
    util.$stateParams = $stateParams;

		util.spinnerOptions = {
      lines: 13, // The number of lines to draw
      length: 20, // The length of each line
      width: 10, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 0.5, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#8b8989', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '10', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };

    util.findWhereDeep = function(dataArray, findProp1, findProp2, findValue) {
      var found=[];
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue) {
              found.push(dat);
            }
          }
        }
      }
      return found;
    }

    util.findDeep = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat[findProp1];       
          }
        }
      }
      return null;
    }

    util.findDeepParent = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat;          
          }
        }        
      }
      return null;
    }

  util.propLength = function(obj) {
    var cnt=0;
    for(var propertyNameItem in obj) {
      cnt++;
    }
    return cnt;
  }

  util.getObjProperty = function(obj, name, value, property) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem[property];
      }
    }
    return null;
  }

  util.findWhereProp = function(obj, name, value) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem;
      }
    }
    return null;
  }

  util.findWhereDeepProp = function(obj, findProp1, findProp2, findValue) {
    for(var propertyName in obj) {
      var dat = obj[propertyName];
      if(util.defined(dat,findProp1+'.'+findProp2)) {
        if(dat[findProp1][findProp2] == findValue)
          return dat;          
      }
    }
    return null;
  }

  util.findWhereArray = function(arrayObj, name, property, value) {
    for(var i=0; i<arrayObj.length; i++) {
      var arrayItem = arrayObj[i];
      if(util.defined(arrayItem,name+"."+property)) {
        if(arrayItem[name][property] == value)
          return arrayItem;
      }
    }
  }


		util.defined = function(ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return false;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return false;
          ref = ref[name];
        }
      }
      return true;
    }    


    util.definedElse = function(elseValue, ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return elseValue;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return elseValue;
          ref = ref[name];
        }
      }
      return ref;
    }

		util.routePage = function(route, params) {
      if(this.defined(params)) {
        var pStr="";
        for (var property in params) {
          if (params.hasOwnProperty(property)) {
                // do stuff
                if(pStr=="")
                  pStr = params[property];
                else pStr = pStr + "/" + params[property];
              }
            }

        //$location.path('/'+route+'/'+pStr);
        $state.go(route, params);
      } else {
        $state.go(route);
      }
      $rootScope.$broadcast('navToLocation', route, params);
    };

		util.navigate = function(route, params) {
      // $('.row').hide();
      // $('.panel').hide();
      // $('.panel-body').hide();
      // $('.hide-onload').hide();

      // util.startSpinner('#spin','#8b8989');

      var count = 0;
      for (k in $stateParams) if ($stateParams.hasOwnProperty(k)) count++;

      if($state.current.name == route && count == 0) {
        util.$state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: false,
          notify: true
        });
      } else {
        util.routePage(route, params);
      }
    }    

    util.formatMultiSelect = function(intValue) {
      if(util.defined(intValue)) {
        return intValue.replace(/;/g,", ");
      } else {
        return '';  
      }
    }

    util.formatMoney = function(intAmount) {
      if(util.defined(intAmount)) {
        if(intAmount > 1000000000) {
          var num = Math.round(intAmount/1000000000);
          return num + "B";
        } else if(intAmount > 1000000) {
          var num = Math.round(intAmount/1000000);
          return num + "M";
        } else if(intAmount > 1000) {
          var num = Math.round(intAmount/1000);
          return num + "K";
        }
      } else {
        return '';
      }
    };


    util.formatDate = function(strDate, pattern) {
      if(util.defined(strDate)) {
        return moment(strDate).format(pattern);
      } else {
        return '';
      }
    };

    util.formatData = function(controlType, schemaType, value) {
      if(util.defined(value)) {
        if(schemaType == 'date') {
          return moment(value).format('MM/DD/YYYY');
        } else if(controlType == 'multiselect') {
          var names = _.pluck(value, 'name');
          return names.join(", ");
        } else if(controlType == 'money') {
          return '€ ' + value.toLocaleString();
        } else {
          return value;
        }        
      } else {
        return '';
      }
    }

  util.getProperty = function(obj, property) {
    if(util.defined(obj, property)) {
      return obj[property];
    } else {
      return null;
    }
  }

  util.startSpinner = function(selector, color, top, radius) {
	  var obj = $(selector);
	  var spinOptions = jQuery.extend(true, {}, this.spinnerOptions);

	  if(this.defined(obj,"length") && obj.length > 0) {
	    if(this.defined(color))
	      spinOptions.color = color;
	    if(this.defined(top))
	      spinOptions.top = top;
	    if(this.defined(top))
	      spinOptions.radius = radius;
	    util.spinner = new Spinner(spinOptions).spin(obj[0]);
	    return util.spinner;
	  } else {
	    return null;
	  }
	}

  util.cleanExportData = function(recordData) {
    var cleanData = {};
    var sendObj = {};
    if(this.defined(recordData)) {
      for(var propertyName in recordData) {
        console.log('^^^^ propertyName:' + propertyName);
        if(recordData[propertyName] == null) {
          console.log('fail1');
        } else if(propertyName == 'in') {
          console.log('fail2');
        } else if(propertyName == 'out') {
          console.log('fail3');
        } else if(propertyName.indexOf('@') != -1) { 
          console.log('fail4');
        } else if(propertyName == 'id') {
          console.log('fail5');
        } else if(propertyName == 'backup') {
          console.log('fail6');
        } else if(typeof propertyName == 'object') {
          console.log('fail7');
        } else if(typeof propertyName == 'array') {
          console.log('fail8');
        } else if(!this.defined(recordData,propertyName)) {
          console.log('fail9');
        } else {
          cleanData[propertyName] = recordData[propertyName];
        }
      }
      //sendObj = this.prepareInboudDate(cleanData);
      return cleanData;
    } else {
      return null;
    } 
  }

  util.JSON2CSV = function(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    if ($("#labels").is(':checked')) {
        var head = array[0];
        if ($("#quote").is(':checked')) {
            for (var index in array[0]) {
                var value = index + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[0]) {
                line += index + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }

    for (var i = 0; i < array.length; i++) {
        var line = '';

        if ($("#quote").is(':checked')) {
            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[i]) {
                line += array[i][index] + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;        
  }

return util;
}]);	

angular.module('soiApp.utilities', []); //instantiates
angular.module('soiApp.utilities') //gets
.factory('util', ['$http','$state','$stateParams','$rootScope','navService',
	function($http,$state,$stateParams,$rootScope,navService){

		var util = {};
		util.$state = $state;
    util.$stateParams = $stateParams;

		util.spinnerOptions = {
      lines: 13, // The number of lines to draw
      length: 20, // The length of each line
      width: 10, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 0.5, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#8b8989', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '10', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };

    util.findWhereDeep = function(dataArray, findProp1, findProp2, findValue) {
      var found=[];
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue) {
              found.push(dat);
            }
          }
        }
      }
      return found;
    }

    util.findDeep = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat[findProp1];       
          }
        }
      }
      return null;
    }

    util.findDeepParent = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat;          
          }
        }        
      }
      return null;
    }

  util.propLength = function(obj) {
    var cnt=0;
    for(var propertyNameItem in obj) {
      cnt++;
    }
    return cnt;
  }

  util.getObjProperty = function(obj, name, value, property) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem[property];
      }
    }
    return null;
  }

  util.findWhereProp = function(obj, name, value) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem;
      }
    }
    return null;
  }

  util.findWhereDeepProp = function(obj, findProp1, findProp2, findValue) {
    for(var propertyName in obj) {
      var dat = obj[propertyName];
      if(util.defined(dat,findProp1+'.'+findProp2)) {
        if(dat[findProp1][findProp2] == findValue)
          return dat;          
      }
    }
    return null;
  }

  util.findWhereArray = function(arrayObj, name, property, value) {
    for(var i=0; i<arrayObj.length; i++) {
      var arrayItem = arrayObj[i];
      if(util.defined(arrayItem,name+"."+property)) {
        if(arrayItem[name][property] == value)
          return arrayItem;
      }
    }
  }


		util.defined = function(ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return false;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return false;
          ref = ref[name];
        }
      }
      return true;
    }    


    util.definedElse = function(elseValue, ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return elseValue;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return elseValue;
          ref = ref[name];
        }
      }
      return ref;
    }

		util.routePage = function(route, params) {
      if(this.defined(params)) {
        var pStr="";
        for (var property in params) {
          if (params.hasOwnProperty(property)) {
                // do stuff
                if(pStr=="")
                  pStr = params[property];
                else pStr = pStr + "/" + params[property];
              }
            }

        //$location.path('/'+route+'/'+pStr);
        $state.go(route, params);
      } else {
        $state.go(route);
      }
      $rootScope.$broadcast('navToLocation', route, params);
    };

		util.navigate = function(route, params) {
      // $('.row').hide();
      // $('.panel').hide();
      // $('.panel-body').hide();
      // $('.hide-onload').hide();

      // util.startSpinner('#spin','#8b8989');

      var count = 0;
      for (k in $stateParams) if ($stateParams.hasOwnProperty(k)) count++;

      if($state.current.name == route && count == 0) {
        util.$state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: false,
          notify: true
        });
      } else {
        util.routePage(route, params);
      }
    }    

    util.formatMultiSelect = function(intValue) {
      if(util.defined(intValue)) {
        return intValue.replace(/;/g,", ");
      } else {
        return '';  
      }
    }

    util.formatMoney = function(intAmount) {
      if(util.defined(intAmount)) {
        if(intAmount > 1000000000) {
          var num = Math.round(intAmount/1000000000);
          return num + "B";
        } else if(intAmount > 1000000) {
          var num = Math.round(intAmount/1000000);
          return num + "M";
        } else if(intAmount > 1000) {
          var num = Math.round(intAmount/1000);
          return num + "K";
        }
      } else {
        return '';
      }
    };


    util.formatDate = function(strDate, pattern) {
      if(util.defined(strDate)) {
        return moment(strDate).format(pattern);
      } else {
        return '';
      }
    };

    util.formatData = function(controlType, schemaType, value) {
      if(util.defined(value)) {
        if(schemaType == 'date') {
          return moment(value).format('MM/DD/YYYY');
        } else if(controlType == 'multiselect') {
          var names = _.pluck(value, 'name');
          return names.join(", ");
        } else if(controlType == 'money') {
          return '€ ' + value.toLocaleString();
        } else {
          return value;
        }        
      } else {
        return '';
      }
    }

  util.getProperty = function(obj, property) {
    if(util.defined(obj, property)) {
      return obj[property];
    } else {
      return null;
    }
  }

  util.startSpinner = function(selector, color, top, radius) {
	  var obj = $(selector);
	  var spinOptions = jQuery.extend(true, {}, this.spinnerOptions);

	  if(this.defined(obj,"length") && obj.length > 0) {
	    if(this.defined(color))
	      spinOptions.color = color;
	    if(this.defined(top))
	      spinOptions.top = top;
	    if(this.defined(top))
	      spinOptions.radius = radius;
	    util.spinner = new Spinner(spinOptions).spin(obj[0]);
	    return util.spinner;
	  } else {
	    return null;
	  }
	}

  util.cleanExportData = function(recordData) {
    var cleanData = {};
    var sendObj = {};
    if(this.defined(recordData)) {
      for(var propertyName in recordData) {
        console.log('^^^^ propertyName:' + propertyName);
        if(recordData[propertyName] == null) {
          console.log('fail1');
        } else if(propertyName == 'in') {
          console.log('fail2');
        } else if(propertyName == 'out') {
          console.log('fail3');
        } else if(propertyName.indexOf('@') != -1) { 
          console.log('fail4');
        } else if(propertyName == 'id') {
          console.log('fail5');
        } else if(propertyName == 'backup') {
          console.log('fail6');
        } else if(typeof propertyName == 'object') {
          console.log('fail7');
        } else if(typeof propertyName == 'array') {
          console.log('fail8');
        } else if(!this.defined(recordData,propertyName)) {
          console.log('fail9');
        } else {
          cleanData[propertyName] = recordData[propertyName];
        }
      }
      //sendObj = this.prepareInboudDate(cleanData);
      return cleanData;
    } else {
      return null;
    } 
  }

  util.JSON2CSV = function(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    if ($("#labels").is(':checked')) {
        var head = array[0];
        if ($("#quote").is(':checked')) {
            for (var index in array[0]) {
                var value = index + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[0]) {
                line += index + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }

    for (var i = 0; i < array.length; i++) {
        var line = '';

        if ($("#quote").is(':checked')) {
            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[i]) {
                line += array[i][index] + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;        
  }

return util;
}]);	

angular.module('soiApp.utilities', []); //instantiates
angular.module('soiApp.utilities') //gets
.factory('util', ['$http','$state','$stateParams','$rootScope','navService',
	function($http,$state,$stateParams,$rootScope,navService){

		var util = {};
		util.$state = $state;
    util.$stateParams = $stateParams;

		util.spinnerOptions = {
      lines: 13, // The number of lines to draw
      length: 20, // The length of each line
      width: 10, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 0.5, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#8b8989', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '10', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };

    util.findWhereDeep = function(dataArray, findProp1, findProp2, findValue) {
      var found=[];
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue) {
              found.push(dat);
            }
          }
        }
      }
      return found;
    }

    util.findDeep = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat[findProp1];       
          }
        }
      }
      return null;
    }

    util.findDeepParent = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat;          
          }
        }        
      }
      return null;
    }

  util.propLength = function(obj) {
    var cnt=0;
    for(var propertyNameItem in obj) {
      cnt++;
    }
    return cnt;
  }

  util.getObjProperty = function(obj, name, value, property) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem[property];
      }
    }
    return null;
  }

  util.findWhereProp = function(obj, name, value) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem;
      }
    }
    return null;
  }

  util.findWhereDeepProp = function(obj, findProp1, findProp2, findValue) {
    for(var propertyName in obj) {
      var dat = obj[propertyName];
      if(util.defined(dat,findProp1+'.'+findProp2)) {
        if(dat[findProp1][findProp2] == findValue)
          return dat;          
      }
    }
    return null;
  }

  util.findWhereArray = function(arrayObj, name, property, value) {
    for(var i=0; i<arrayObj.length; i++) {
      var arrayItem = arrayObj[i];
      if(util.defined(arrayItem,name+"."+property)) {
        if(arrayItem[name][property] == value)
          return arrayItem;
      }
    }
  }


		util.defined = function(ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return false;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return false;
          ref = ref[name];
        }
      }
      return true;
    }    


    util.definedElse = function(elseValue, ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return elseValue;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return elseValue;
          ref = ref[name];
        }
      }
      return ref;
    }

		util.routePage = function(route, params) {
      if(this.defined(params)) {
        var pStr="";
        for (var property in params) {
          if (params.hasOwnProperty(property)) {
                // do stuff
                if(pStr=="")
                  pStr = params[property];
                else pStr = pStr + "/" + params[property];
              }
            }

        //$location.path('/'+route+'/'+pStr);
        $state.go(route, params);
      } else {
        $state.go(route);
      }
      $rootScope.$broadcast('navToLocation', route, params);
    };

		util.navigate = function(route, params) {
      // $('.row').hide();
      // $('.panel').hide();
      // $('.panel-body').hide();
      // $('.hide-onload').hide();

      // util.startSpinner('#spin','#8b8989');

      var count = 0;
      for (k in $stateParams) if ($stateParams.hasOwnProperty(k)) count++;

      if($state.current.name == route && count == 0) {
        util.$state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: false,
          notify: true
        });
      } else {
        util.routePage(route, params);
      }
    }    

    util.formatMultiSelect = function(intValue) {
      if(util.defined(intValue)) {
        return intValue.replace(/;/g,", ");
      } else {
        return '';  
      }
    }

    util.formatMoney = function(intAmount) {
      if(util.defined(intAmount)) {
        if(intAmount > 1000000000) {
          var num = Math.round(intAmount/1000000000);
          return num + "B";
        } else if(intAmount > 1000000) {
          var num = Math.round(intAmount/1000000);
          return num + "M";
        } else if(intAmount > 1000) {
          var num = Math.round(intAmount/1000);
          return num + "K";
        }
      } else {
        return '';
      }
    };


    util.formatDate = function(strDate, pattern) {
      if(util.defined(strDate)) {
        return moment(strDate).format(pattern);
      } else {
        return '';
      }
    };

    util.formatData = function(controlType, schemaType, value) {
      if(util.defined(value)) {
        if(schemaType == 'date') {
          return moment(value).format('MM/DD/YYYY');
        } else if(controlType == 'multiselect') {
          var names = _.pluck(value, 'name');
          return names.join(", ");
        } else if(controlType == 'money') {
          return '€ ' + value.toLocaleString();
        } else {
          return value;
        }        
      } else {
        return '';
      }
    }

  util.getProperty = function(obj, property) {
    if(util.defined(obj, property)) {
      return obj[property];
    } else {
      return null;
    }
  }

  util.startSpinner = function(selector, color, top, radius) {
	  var obj = $(selector);
	  var spinOptions = jQuery.extend(true, {}, this.spinnerOptions);

	  if(this.defined(obj,"length") && obj.length > 0) {
	    if(this.defined(color))
	      spinOptions.color = color;
	    if(this.defined(top))
	      spinOptions.top = top;
	    if(this.defined(top))
	      spinOptions.radius = radius;
	    util.spinner = new Spinner(spinOptions).spin(obj[0]);
	    return util.spinner;
	  } else {
	    return null;
	  }
	}

  util.cleanExportData = function(recordData) {
    var cleanData = {};
    var sendObj = {};
    if(this.defined(recordData)) {
      for(var propertyName in recordData) {
        console.log('^^^^ propertyName:' + propertyName);
        if(recordData[propertyName] == null) {
          console.log('fail1');
        } else if(propertyName == 'in') {
          console.log('fail2');
        } else if(propertyName == 'out') {
          console.log('fail3');
        } else if(propertyName.indexOf('@') != -1) { 
          console.log('fail4');
        } else if(propertyName == 'id') {
          console.log('fail5');
        } else if(propertyName == 'backup') {
          console.log('fail6');
        } else if(typeof propertyName == 'object') {
          console.log('fail7');
        } else if(typeof propertyName == 'array') {
          console.log('fail8');
        } else if(!this.defined(recordData,propertyName)) {
          console.log('fail9');
        } else {
          cleanData[propertyName] = recordData[propertyName];
        }
      }
      //sendObj = this.prepareInboudDate(cleanData);
      return cleanData;
    } else {
      return null;
    } 
  }

  util.JSON2CSV = function(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    if ($("#labels").is(':checked')) {
        var head = array[0];
        if ($("#quote").is(':checked')) {
            for (var index in array[0]) {
                var value = index + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[0]) {
                line += index + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }

    for (var i = 0; i < array.length; i++) {
        var line = '';

        if ($("#quote").is(':checked')) {
            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[i]) {
                line += array[i][index] + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;        
  }

return util;
}]);	

angular.module('soiApp.utilities', []); //instantiates
angular.module('soiApp.utilities') //gets
.factory('util', ['$http','$state','$stateParams','$rootScope','navService',
	function($http,$state,$stateParams,$rootScope,navService){

		var util = {};
		util.$state = $state;
    util.$stateParams = $stateParams;

		util.spinnerOptions = {
      lines: 13, // The number of lines to draw
      length: 20, // The length of each line
      width: 10, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 0.5, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#8b8989', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '10', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };

    util.findWhereDeep = function(dataArray, findProp1, findProp2, findValue) {
      var found=[];
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue) {
              found.push(dat);
            }
          }
        }
      }
      return found;
    }

    util.findDeep = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat[findProp1];       
          }
        }
      }
      return null;
    }

    util.findDeepParent = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat;          
          }
        }        
      }
      return null;
    }

  util.propLength = function(obj) {
    var cnt=0;
    for(var propertyNameItem in obj) {
      cnt++;
    }
    return cnt;
  }

  util.getObjProperty = function(obj, name, value, property) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem[property];
      }
    }
    return null;
  }

  util.findWhereProp = function(obj, name, value) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem;
      }
    }
    return null;
  }

  util.findWhereDeepProp = function(obj, findProp1, findProp2, findValue) {
    for(var propertyName in obj) {
      var dat = obj[propertyName];
      if(util.defined(dat,findProp1+'.'+findProp2)) {
        if(dat[findProp1][findProp2] == findValue)
          return dat;          
      }
    }
    return null;
  }

  util.findWhereArray = function(arrayObj, name, property, value) {
    for(var i=0; i<arrayObj.length; i++) {
      var arrayItem = arrayObj[i];
      if(util.defined(arrayItem,name+"."+property)) {
        if(arrayItem[name][property] == value)
          return arrayItem;
      }
    }
  }


		util.defined = function(ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return false;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return false;
          ref = ref[name];
        }
      }
      return true;
    }    


    util.definedElse = function(elseValue, ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return elseValue;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return elseValue;
          ref = ref[name];
        }
      }
      return ref;
    }

		util.routePage = function(route, params) {
      if(this.defined(params)) {
        var pStr="";
        for (var property in params) {
          if (params.hasOwnProperty(property)) {
                // do stuff
                if(pStr=="")
                  pStr = params[property];
                else pStr = pStr + "/" + params[property];
              }
            }

        //$location.path('/'+route+'/'+pStr);
        $state.go(route, params);
      } else {
        $state.go(route);
      }
      $rootScope.$broadcast('navToLocation', route, params);
    };

		util.navigate = function(route, params) {
      // $('.row').hide();
      // $('.panel').hide();
      // $('.panel-body').hide();
      // $('.hide-onload').hide();

      // util.startSpinner('#spin','#8b8989');

      var count = 0;
      for (k in $stateParams) if ($stateParams.hasOwnProperty(k)) count++;

      if($state.current.name == route && count == 0) {
        util.$state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: false,
          notify: true
        });
      } else {
        util.routePage(route, params);
      }
    }    

    util.formatMultiSelect = function(intValue) {
      if(util.defined(intValue)) {
        return intValue.replace(/;/g,", ");
      } else {
        return '';  
      }
    }

    util.formatMoney = function(intAmount) {
      if(util.defined(intAmount)) {
        if(intAmount > 1000000000) {
          var num = Math.round(intAmount/1000000000);
          return num + "B";
        } else if(intAmount > 1000000) {
          var num = Math.round(intAmount/1000000);
          return num + "M";
        } else if(intAmount > 1000) {
          var num = Math.round(intAmount/1000);
          return num + "K";
        }
      } else {
        return '';
      }
    };


    util.formatDate = function(strDate, pattern) {
      if(util.defined(strDate)) {
        return moment(strDate).format(pattern);
      } else {
        return '';
      }
    };

    util.formatData = function(controlType, schemaType, value) {
      if(util.defined(value)) {
        if(schemaType == 'date') {
          return moment(value).format('MM/DD/YYYY');
        } else if(controlType == 'multiselect') {
          var names = _.pluck(value, 'name');
          return names.join(", ");
        } else if(controlType == 'money') {
          return '€ ' + value.toLocaleString();
        } else {
          return value;
        }        
      } else {
        return '';
      }
    }

  util.getProperty = function(obj, property) {
    if(util.defined(obj, property)) {
      return obj[property];
    } else {
      return null;
    }
  }

  util.startSpinner = function(selector, color, top, radius) {
	  var obj = $(selector);
	  var spinOptions = jQuery.extend(true, {}, this.spinnerOptions);

	  if(this.defined(obj,"length") && obj.length > 0) {
	    if(this.defined(color))
	      spinOptions.color = color;
	    if(this.defined(top))
	      spinOptions.top = top;
	    if(this.defined(top))
	      spinOptions.radius = radius;
	    util.spinner = new Spinner(spinOptions).spin(obj[0]);
	    return util.spinner;
	  } else {
	    return null;
	  }
	}

  util.cleanExportData = function(recordData) {
    var cleanData = {};
    var sendObj = {};
    if(this.defined(recordData)) {
      for(var propertyName in recordData) {
        console.log('^^^^ propertyName:' + propertyName);
        if(recordData[propertyName] == null) {
          console.log('fail1');
        } else if(propertyName == 'in') {
          console.log('fail2');
        } else if(propertyName == 'out') {
          console.log('fail3');
        } else if(propertyName.indexOf('@') != -1) { 
          console.log('fail4');
        } else if(propertyName == 'id') {
          console.log('fail5');
        } else if(propertyName == 'backup') {
          console.log('fail6');
        } else if(typeof propertyName == 'object') {
          console.log('fail7');
        } else if(typeof propertyName == 'array') {
          console.log('fail8');
        } else if(!this.defined(recordData,propertyName)) {
          console.log('fail9');
        } else {
          cleanData[propertyName] = recordData[propertyName];
        }
      }
      //sendObj = this.prepareInboudDate(cleanData);
      return cleanData;
    } else {
      return null;
    } 
  }

  util.JSON2CSV = function(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    if ($("#labels").is(':checked')) {
        var head = array[0];
        if ($("#quote").is(':checked')) {
            for (var index in array[0]) {
                var value = index + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[0]) {
                line += index + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }

    for (var i = 0; i < array.length; i++) {
        var line = '';

        if ($("#quote").is(':checked')) {
            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[i]) {
                line += array[i][index] + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;        
  }

return util;
}]);	

angular.module('soiApp.utilities', []); //instantiates
angular.module('soiApp.utilities') //gets
.factory('util', ['$http','$state','$stateParams','$rootScope','navService',
	function($http,$state,$stateParams,$rootScope,navService){

		var util = {};
		util.$state = $state;
    util.$stateParams = $stateParams;

		util.spinnerOptions = {
      lines: 13, // The number of lines to draw
      length: 20, // The length of each line
      width: 10, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 0.5, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#8b8989', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '10', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };

    util.findWhereDeep = function(dataArray, findProp1, findProp2, findValue) {
      var found=[];
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue) {
              found.push(dat);
            }
          }
        }
      }
      return found;
    }

    util.findDeep = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat[findProp1];       
          }
        }
      }
      return null;
    }

    util.findDeepParent = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat;          
          }
        }        
      }
      return null;
    }

  util.propLength = function(obj) {
    var cnt=0;
    for(var propertyNameItem in obj) {
      cnt++;
    }
    return cnt;
  }

  util.getObjProperty = function(obj, name, value, property) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem[property];
      }
    }
    return null;
  }

  util.findWhereProp = function(obj, name, value) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem;
      }
    }
    return null;
  }

  util.findWhereDeepProp = function(obj, findProp1, findProp2, findValue) {
    for(var propertyName in obj) {
      var dat = obj[propertyName];
      if(util.defined(dat,findProp1+'.'+findProp2)) {
        if(dat[findProp1][findProp2] == findValue)
          return dat;          
      }
    }
    return null;
  }

  util.findWhereArray = function(arrayObj, name, property, value) {
    for(var i=0; i<arrayObj.length; i++) {
      var arrayItem = arrayObj[i];
      if(util.defined(arrayItem,name+"."+property)) {
        if(arrayItem[name][property] == value)
          return arrayItem;
      }
    }
  }


		util.defined = function(ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return false;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return false;
          ref = ref[name];
        }
      }
      return true;
    }    


    util.definedElse = function(elseValue, ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return elseValue;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return elseValue;
          ref = ref[name];
        }
      }
      return ref;
    }

		util.routePage = function(route, params) {
      if(this.defined(params)) {
        var pStr="";
        for (var property in params) {
          if (params.hasOwnProperty(property)) {
                // do stuff
                if(pStr=="")
                  pStr = params[property];
                else pStr = pStr + "/" + params[property];
              }
            }

        //$location.path('/'+route+'/'+pStr);
        $state.go(route, params);
      } else {
        $state.go(route);
      }
      $rootScope.$broadcast('navToLocation', route, params);
    };

		util.navigate = function(route, params) {
      // $('.row').hide();
      // $('.panel').hide();
      // $('.panel-body').hide();
      // $('.hide-onload').hide();

      // util.startSpinner('#spin','#8b8989');

      var count = 0;
      for (k in $stateParams) if ($stateParams.hasOwnProperty(k)) count++;

      if($state.current.name == route && count == 0) {
        util.$state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: false,
          notify: true
        });
      } else {
        util.routePage(route, params);
      }
    }    

    util.formatMultiSelect = function(intValue) {
      if(util.defined(intValue)) {
        return intValue.replace(/;/g,", ");
      } else {
        return '';  
      }
    }

    util.formatMoney = function(intAmount) {
      if(util.defined(intAmount)) {
        if(intAmount > 1000000000) {
          var num = Math.round(intAmount/1000000000);
          return num + "B";
        } else if(intAmount > 1000000) {
          var num = Math.round(intAmount/1000000);
          return num + "M";
        } else if(intAmount > 1000) {
          var num = Math.round(intAmount/1000);
          return num + "K";
        }
      } else {
        return '';
      }
    };


    util.formatDate = function(strDate, pattern) {
      if(util.defined(strDate)) {
        return moment(strDate).format(pattern);
      } else {
        return '';
      }
    };

    util.formatData = function(controlType, schemaType, value) {
      if(util.defined(value)) {
        if(schemaType == 'date') {
          return moment(value).format('MM/DD/YYYY');
        } else if(controlType == 'multiselect') {
          var names = _.pluck(value, 'name');
          return names.join(", ");
        } else if(controlType == 'money') {
          return '€ ' + value.toLocaleString();
        } else {
          return value;
        }        
      } else {
        return '';
      }
    }

  util.getProperty = function(obj, property) {
    if(util.defined(obj, property)) {
      return obj[property];
    } else {
      return null;
    }
  }

  util.startSpinner = function(selector, color, top, radius) {
	  var obj = $(selector);
	  var spinOptions = jQuery.extend(true, {}, this.spinnerOptions);

	  if(this.defined(obj,"length") && obj.length > 0) {
	    if(this.defined(color))
	      spinOptions.color = color;
	    if(this.defined(top))
	      spinOptions.top = top;
	    if(this.defined(top))
	      spinOptions.radius = radius;
	    util.spinner = new Spinner(spinOptions).spin(obj[0]);
	    return util.spinner;
	  } else {
	    return null;
	  }
	}

  util.cleanExportData = function(recordData) {
    var cleanData = {};
    var sendObj = {};
    if(this.defined(recordData)) {
      for(var propertyName in recordData) {
        console.log('^^^^ propertyName:' + propertyName);
        if(recordData[propertyName] == null) {
          console.log('fail1');
        } else if(propertyName == 'in') {
          console.log('fail2');
        } else if(propertyName == 'out') {
          console.log('fail3');
        } else if(propertyName.indexOf('@') != -1) { 
          console.log('fail4');
        } else if(propertyName == 'id') {
          console.log('fail5');
        } else if(propertyName == 'backup') {
          console.log('fail6');
        } else if(typeof propertyName == 'object') {
          console.log('fail7');
        } else if(typeof propertyName == 'array') {
          console.log('fail8');
        } else if(!this.defined(recordData,propertyName)) {
          console.log('fail9');
        } else {
          cleanData[propertyName] = recordData[propertyName];
        }
      }
      //sendObj = this.prepareInboudDate(cleanData);
      return cleanData;
    } else {
      return null;
    } 
  }

  util.JSON2CSV = function(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    if ($("#labels").is(':checked')) {
        var head = array[0];
        if ($("#quote").is(':checked')) {
            for (var index in array[0]) {
                var value = index + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[0]) {
                line += index + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }

    for (var i = 0; i < array.length; i++) {
        var line = '';

        if ($("#quote").is(':checked')) {
            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[i]) {
                line += array[i][index] + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;        
  }

return util;
}]);	
