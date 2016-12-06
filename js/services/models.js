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
        destObjectType: 'VRelatedCompany'
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
          destObjectType: 'VRelatedCompany'
        },
        {
          model: modelService.models.inventor,
          destObjectType: 'VPerson'
        }
      ]
    }


  modelService.models.relatedcompany = {
    displayName: 'Related Company',
    objectType: 'VRelatedCompany',
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

  modelService.models.investmentfirm = {
    displayName: 'Investment Firm',
    objectType: 'VInvestmentFirm',
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
        destObjectType: 'VRelatedCompany'
      },
      {
        model: modelService.models.customer,
        destObjectType: 'VRelatedCompany'
      },
      {
        model: modelService.models.partner,
        destObjectType: 'VRelatedCompany'
      }
  	]
	}

  modelService.models.university = {
    displayName: 'University',
    objectType: 'VUniversity',
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
