angular.module('soiApp.modelService', []); //instantiates
angular.module('soiApp.modelService') //gets
.factory('modelService', ['$http','$state','$stateParams','$rootScope','navService',
	function($http,$state,$stateParams,$rootScope,navService){

	var modelService = {
		piskLists : {},
		models : {},
		schemas : {}
	};

modelService.initModels = function() {


	// Relations
  modelService.models.mediatarget = {
    displayName: 'Media Target',
    objectType: 'EMediaTarget',
    fields: [],
    isRelationship: true
  }

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
    color: '#85e085',
    fontColor: 'black',    
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
    color: '#ffad33',
    fontColor: 'black',        
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
    color: '#e699ff',
    fontColor: 'black',            
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
    color: '#80ffff',
    fontColor: 'black',                        
    fields: [],
    isRelationship: true
  }

  modelService.models.spinoff = {
    displayName: 'Spun Off',
    objectType: 'ESpinOff',
    color: '#c2c2a3',
    fontColor: 'white',                    
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
      },
      {
        schemaName: 'details',
        displayName: 'Details of Institutional Involvement',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 3,
        controlType: 'textarea'
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
    color: '#94b8b8',
    fontColor: 'white',                
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
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'textarea'
      },
      {
        schemaName: 'amount',
        displayName: 'Amount',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'money'
      },
      {
        schemaName: 'closedate',
        displayName: 'Date',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'source1',
        displayName: 'Source URL',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'url'
      }
    ],
    relationships: [
      {
        model: modelService.models.acquirer,
        destObjectType: ['VCompany','VSpinOff']
      },
      {
        model: modelService.models.acquired,
        destObjectType: ['VCompany','VSpinOff']
      }
    ]
  }


  modelService.models.investment = {
    displayName: 'Investment',
    objectType: 'VInvestment',
    color: '#f7786b',    
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
        destObjectType: ['VCompany','VSpinOff']
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
        controlType: 'text'
      },
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: false,
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
          destObjectType: ['VSpinOff','VCompany']
        },
        {
          model: modelService.models.coapplicant,
          destObjectType: ['VSpinOff','VCompany']
        },
        {
          model: modelService.models.inventor,
          destObjectType: ['VPerson']
        }
      ]
    }

  // modelService.models.investmentfirm = {
  //   displayName: 'Investment Firm',
  //   objectType: 'VInvestmentFirm',
  //   color: '#deeaee',        
  //   fields: [
  //     {
  //       schemaName: 'name',
  //       displayName: 'Name',
  //       readOnly: false,
  //       required: true,
  //       hidden: false,
  //       showinList: true,
  //       displayOrder: 1,
  //       controlType: 'text'
  //     },
  //     {
  //       schemaName: 'type',
  //       displayName: 'Type',
  //       readOnly: false,
  //       required: true,
  //       hidden: false,
  //       showinList: true,
  //       displayOrder: 2,
  //       controlType: 'picklist',
  //       picklistOptions: modelService.piskLists.investmentfirmtype
  //     },
  //     {
  //       schemaName: 'yearfounded',
  //       displayName: 'Year Founded',
  //       readOnly: false,
  //       required: true,
  //       hidden: false,
  //       showinList: false,
  //       displayOrder: 3,
  //       controlType: 'text'
  //     },      
  //     {
  //       schemaName: 'description',
  //       displayName: 'Description',
  //       readOnly: false,
  //       required: true,
  //       hidden: false,
  //       showinList: false,
  //       displayOrder: 4,
  //       controlType: 'textarea'
  //     },
  //     {
  //       schemaName: 'industry',
  //       displayName: 'Industry / Sector',
  //       readOnly: false,
  //       required: true,
  //       hidden: false,
  //       showinList: false,
  //       displayOrder: 7,
  //       controlType: 'picklist',
  //       picklistOptions: modelService.piskLists.industry
  //     },
  //     {
  //       schemaName: 'website',
  //       displayName: 'Website',
  //       readOnly: false,
  //       required: false,
  //       hidden: false,
  //       showinList: false,
  //       displayOrder: 10,
  //       controlType: 'url',
  //     },      
  //     {
  //       schemaName: 'address',
  //       displayName: 'Address',
  //       readOnly: false,
  //       required: false,
  //       hidden: false,
  //       showinList: false,
  //       addressBlock: 1,
  //       displayOrder: 11,
  //       controlType: 'textarea'
  //     },      
  //     {
  //       schemaName: 'city',
  //       displayName: 'City',
  //       readOnly: false,
  //       required: false,
  //       hidden: false,
  //       showinList: true,
  //       addressBlock: 1,
  //       displayOrder: 12,
  //       controlType: 'text'
  //     },
  //     {
  //       schemaName: 'zip',
  //       displayName: 'Zip Code',
  //       readOnly: false,
  //       required: false,
  //       hidden: false,
  //       showinList: false,
  //       addressBlock: 1,
  //       displayOrder: 13,
  //       controlType: 'text'
  //     },      
  //     {
  //       schemaName: 'phone',
  //       displayName: 'Phone',
  //       readOnly: false,
  //       required: false,
  //       hidden: false,
  //       showinList: false,          
  //       displayOrder: 14,
  //       controlType: 'text'
  //     },
  //     {
  //       schemaName: 'email',
  //       displayName: 'Email',
  //       readOnly: false,
  //       required: false,
  //       hidden: false,
  //       showinList: false,            
  //       displayOrder: 15,
  //       controlType: 'email'
  //     },
  //     {
  //       schemaName: 'size',
  //       displayName: 'Number of employees',
  //       readOnly: false,
  //       required: false,
  //       hidden: false,
  //       showinList: false,
  //       displayOrder: 16,
  //       controlType: 'text'           
  //     },
  //     {
  //       schemaName: 'source1',
  //       displayName: 'Source Website 1',
  //       readOnly: false,
  //       required: false,
  //       hidden: false,
  //       showinList: false,
  //       displayOrder: 17,
  //       controlType: 'url'    
  //     },
  //     {
  //       schemaName: 'source2',
  //       displayName: 'Source Website 2',
  //       readOnly: false,
  //       required: false,
  //       hidden: false,
  //       showinList: false,
  //       displayOrder: 18,
  //       controlType: 'url'    
  //     },
  //     {
  //       schemaName: 'linkedin',
  //       displayName: 'LinkedIn Profile',
  //       readOnly: false,
  //       required: false,
  //       hidden: false,
  //       showinList: false,
  //       displayOrder: 19,
  //       controlType: 'url'    
  //     },
  //   ],
  //   relationships: [
  //     {
  //       model: modelService.models.founded,
  //       destObjectType: ['VPerson']
  //     },
  //     {
  //       model: modelService.models.board,
  //       destObjectType: ['VPerson']
  //     }
  //   ]
  // }

  modelService.models.spinoff = {
    displayName: 'SpinOff',
    objectType: 'VSpinOff',
    color: '#4db8ff',
    fontColor: 'white',    
    showAsNetworkFilter: true,
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
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.typeofspinoff
      },
      {
        schemaName: 'status',
        displayName: 'Status',
        readOnly: false,
        required: false,
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
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 4,
        controlType: 'text'
      },      
      {
        schemaName: 'businessactivitydetails',
        displayName: 'Business Activity Details',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'textarea'
      },      
      {
        schemaName: 'description',
        displayName: 'Description',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'textarea'
      },      
      {
        schemaName: 'logo',
        displayName: 'Logo',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 6,
        controlType: 'image'
      },      
      {
        schemaName: 'products',
        displayName: 'Products/Technology',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'textarea'
      },      
      {
        schemaName: 'productcategory',
        displayName: 'Products Category',
        readOnly: false,
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 11,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.businessmodel
      },
      {
        schemaName: 'turnover',
        displayName: 'Annual TurnOver',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 11,
        controlType: 'multiline-text',
        multilineCols: 2
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
        maxLength: 255,
        minLength: 3,        
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
        destObjectType: ['VCompany','VUniversity']
      },
      {
        model: modelService.models.partner,
        destObjectType: ['VCompany','VUniversity']
      }
    ]
  }

	modelService.models.company = {
		displayName: 'Company',
    objectType: 'VCompany',
    color: '#b1cbbb',
    fontColor: 'white',    
    showAsNetworkFilter: true,
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
        required: false,
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
        required: false,
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
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 4,
      	controlType: 'text'
    	},    	
      {
        schemaName: 'businessactivitydetails',
        displayName: 'Business Activity Details',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'textarea'
      },      
    	{
      	schemaName: 'description',
      	displayName: 'Description',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 5,
      	controlType: 'textarea'
    	},    	
      {
        schemaName: 'logo',
        displayName: 'Logo',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 6,
        controlType: 'image'
      },      
    	{
      	schemaName: 'products',
      	displayName: 'Products/Technology',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 7,
      	controlType: 'textarea'
    	},    	
    	{
      	schemaName: 'productcategory',
      	displayName: 'Products Category',
      	readOnly: false,
      	required: false,
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
      	required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        maxLength: 255,
        minLength: 3,        
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
        destObjectType: ['VCompany','VUniversity']
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
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'text'
      },
      {
        schemaName: 'logo',
        displayName: 'photo',
        readOnly: false,
        required: false,
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
        required: false,
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
        schemaName: 'fax',
        displayName: 'Fax',
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
				destObjectType: ['VSpinOff','VCompany','VUniversity']
			}
  	]
	}

  modelService.models.media = {
    displayName: 'Media Mention',
    objectType: 'VMedia',
    color: '#66ffb3',
    fontColor: 'black',    
    showAsNetworkFilter: true,
    fields: [
      {
        schemaName: 'title',
        displayName: 'Title',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text'
      },
      {
        schemaName: 'eventtype',
        displayName: 'Event Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.eventtype
      },
      {
        schemaName: 'date',
        displayName: 'Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'datepicker'
      },
      {
        schemaName: 'details',
        displayName: 'Details',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 4,
        controlType: 'textarea'
      },
      {
        schemaName: 'categories',
        displayName: 'Categories',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 5,
        controlType: 'text',
      },
      {
        schemaName: 'source',
        displayName: 'Source',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'url',
      }
    ],
    relationships: [
      {
        model: modelService.models.mediatarget,
        destObjectType: ['VSpinOff','VCompany','VUniversity','VPerson']
      }
    ]
  }  
	
}
	return modelService;
}]);	
