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
  // modelService.piskLists.companytype = {
  //   options: [
  //     {id: 1, name: 'Spin-Off'},
  //     {id: 2, name: 'Corporate Company'},
  //     {id: 3, name: 'Government Agency'},
  //     {id: 4, name: 'Non-University Research Institution'},
  //     {id: 5, name: 'University Hospitals/Clinics'},
  //     {id: 6, name: 'Public Hospital'},
  //     {id: 7, name: 'Association'}
  //   ]
  // }

modelService.initModels = function() {

  modelService.piskLists.partnerType = {
    options: [
      {id: 1, name: 'Consulting Partner'},
      {id: 2, name: 'Technology Partner'},
      {id: 3, name: 'Cooperation Partner'},
      {id: 4, name: 'Integration Partner'},
      {id: 5, name: 'Strategic Partner'},
      {id: 6, name: 'Research Partner'},
      {id: 7, name: 'Networking Partner'}
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


  modelService.piskLists.invesmentstage = {
    options: [
      {id: 1, name: 'Growth'},
      {id: 2, name: 'Expansion'},
      {id: 3, name: 'Seed '}
    ]
  }

  modelService.piskLists.invesmentround = {
    options: [
      {id: 2, name: 'Series A'},
      {id: 3, name: 'Series B'},
      {id: 4, name: 'Series C'},
      {id: 5, name: 'Transferfond'},
      {id: 5, name: 'Other'}
    ]
  }

  modelService.piskLists.invesmenttype = {
    options: [
      {id: 1, name: 'Venture'},
      {id: 2, name: 'Grant'},
      {id: 3, name: 'Loan'},
      {id: 4, name: 'Angel'}      
    ]
  }

  modelService.piskLists.expertise = {
    options: [
      {id: 1, name: 'Valorisation and capacity building'},
      {id: 2, name: 'Technology'},
      {id: 3, name: 'Small Medium enterprise studies'},
      {id: 4, name: 'Recycling technology'},
      {id: 5, name: 'Programme'},
      {id: 6, name: 'Polymer technology'},
      {id: 7, name: 'Plastics technology'},
      {id: 8, name: 'Non-metallic mineral technology'},
      {id: 9, name: 'Natural sciences'},
      {id: 10, name: 'IT skills'},
      {id: 11, name: 'Innovation systems'},
      {id: 12, name: 'Innovation support services'},
      {id: 13, name: 'Impact evaluation'},
      {id: 14, name: 'Higher Education'},
      {id: 15, name: 'Event moderation'},
      {id: 16, name: 'Dissemination of results'}
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

  modelService.piskLists.status = {
    options: [
      {id: 1, name: 'Active'},
      {id: 2, name: 'Not Known'},
      {id: 3, name: 'Dead'},
      {id: 4, name: 'Merged'},
      {id: 5, name: 'Acquired'},
    ]
  }

  modelService.piskLists.businessmodel = {
    options: [
      {id: 1, name: 'Consulting companies', description: 'Involved in consulting or research services; this is the most accessible opportunity in relation to the scientist’s knowledge and experience and to resources needed.'},
      {id: 2, name: 'Development companies', description: 'Refer to high-tech companies, which commercialise their patented technologies through a licensing model'},
      {id: 3, name: 'Product companies', description: 'Engage in prototype production or high quality low volume production. They tend to aim at a niche market and remain small'},
      {id: 4, name: 'Software companies', description: ''},
      {id: 5, name: 'Service-based', description: ''},
      {id: 6, name: 'Technology-based', description: ''},
      {id: 7, name: 'Product-based', description: ''}
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
      {id: 35, name: 'Economics'},

      {id: 35, name: 'Robotics'},
      {id: 35, name: 'Mechatronics'},

      
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
        schemaName: 'relationdate',
        displayName: 'Date became Supplier',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'datepicker'
      },    
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
        schemaName: 'relationdate',
        displayName: 'Date became Customer',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'datepicker'
      },
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
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.partnerType
      },
      {
        schemaName: 'relationdate',
        displayName: 'Date Partnered',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'datepicker'
      },
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
        destObjectType: ['VCompany']
      },
      {
        model: modelService.models.acquired,
        destObjectType: ['VCompany']
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
        schemaName: 'stage',
        displayName: 'Stage',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.invesmentstage
      },
      {
        schemaName: 'round',
        displayName: 'Round',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.invesmentround
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
        destObjectType: ['VCompany','VPerson']
      },
      {
        model: modelService.models.funded,
        destObjectType: ['VCompany']
      },
      {
        model: modelService.models.advisor,
        destObjectType: ['VPerson']
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
          destObjectType: ['VCompany']
        },
        {
          model: modelService.models.coapplicant,
          destObjectType: ['VCompany']
        },
        {
          model: modelService.models.inventor,
          destObjectType: ['VPerson']
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
        destObjectType: ['VPerson']
      },
      {
        model: modelService.models.board,
        destObjectType: ['VPerson']
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
        schemaName: 'status',
        displayName: 'Status',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.status
      },
    	{
      	schemaName: 'yearfounded',
      	displayName: 'Year Founded',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 4,
      	controlType: 'text'
    	},    	
      {
        schemaName: 'businessactivitydetails',
        displayName: 'Business Activity Details',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'textarea'
      },      
    	{
      	schemaName: 'description',
      	displayName: 'Description',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 5,
      	controlType: 'textarea'
    	},    	
      {
        schemaName: 'logo',
        displayName: 'Logo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 6,
        controlType: 'image'
      },      
    	{
      	schemaName: 'products',
      	displayName: 'Products/Technology',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: false,
      	displayOrder: 7,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'productcategory',
      	displayName: 'Products Category',
      	readOnly: false,
      	required: true,
      	hidden: false,
      	showinList: true,
      	displayOrder: 8,
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
      	displayOrder: 9,
      	controlType: 'picklist',
      	picklistOptions: modelService.piskLists.industry
    	},
      {
        schemaName: 'technologyapplication',
        displayName: 'Areas of Technology Application',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 9,
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
        displayOrder: 10,
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
        displayOrder: 11,
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
      	displayOrder: 12,
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
      	displayOrder: 13,
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
      	displayOrder: 14,
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
      	displayOrder: 15,
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
        displayOrder: 15,
        controlType: 'text'
      },
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,       		
      	displayOrder: 16,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,        		
      	displayOrder: 17,
      	controlType: 'email'
    	},
    	{
      	schemaName: 'size',
      	displayName: 'Number of employees',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 18,
      	controlType: 'text'       		
    	},
    	{
      	schemaName: 'source1',
      	displayName: 'Source Website 1',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 19,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'source2',
      	displayName: 'Source Website 2',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 20,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'linkedin',
      	displayName: 'LinkedIn Profile',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 21,
      	controlType: 'url' 		
    	},
  	],
		relationships: [
			{
				model: modelService.models.founded,
				destObjectType: ['VPerson']
			},
      {
        model: modelService.models.board,
        destObjectType: ['VPerson']
      },
      {
        model: modelService.models.supplier,
        destObjectType: ['VCompany']
      },
      {
        model: modelService.models.customer,
        destObjectType: ['VCompany']
      },
      {
        model: modelService.models.partner,
        destObjectType: ['VCompany','VUniversity']
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
        destObjectType: ['VPerson']
      },
      {
        model: modelService.models.spinoff,
        destObjectType: ['VCompany']
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
        schemaName: 'title',
        displayName: 'Academic Title',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'text'
      },
      {
        schemaName: 'logo',
        displayName: 'photo',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'image'
      },
      {
        schemaName: 'bio',
        displayName: 'Short Bio',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 0,
        displayOrder: 4,
        controlType: 'textarea'
      },      
      {
        schemaName: 'education',
        displayName: 'Education',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 0,
        displayOrder: 5,
        controlType: 'textarea'
      },      
      {
        schemaName: 'expertise',
        displayName: 'Areas of Expertise',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'multiselect',
        picklistOptions: modelService.piskLists.expertise
      },
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
				displayOrder: 6,
      	controlType: 'text'       		
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
				displayOrder: 6,
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
        schemaName: 'zip',
        displayName: 'Zip Code',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 9,
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
        displayOrder: 10,
        controlType: 'text'
      },
      {
        schemaName: 'publications',
        displayName: 'Publications',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 0,
        displayOrder: 11,
        controlType: 'textarea'
      }
    ],
		relationships: [
			{
				model: modelService.models.worksfor,
				destObjectType: ['VCompany']
			}
  	]
	}
	
}
	return modelService;
}]);	
