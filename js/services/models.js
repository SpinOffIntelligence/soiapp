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
    hideNetork: true,
    fields: [
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      } 
    ],
    color: '#AA9900',
    isRelationship: true,
    hideNetork: true
  }


  modelService.models.projectcontributor = {
    displayName: 'Project Participants',
    objectType: 'EProjectContributor',
    fields: [
      {
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.projectcontributortype
      },
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'number'
      } 
    ],
    color: '#F3E5AB',
    isRelationship: true
  }

  modelService.models.entrepreneurialresourcesprovider = {
    displayName: 'Facilities and Resources Provider',
    objectType: 'EEntrepreneurialResourcesProvider',
    fields: [
      {
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.entrepreneurialresourcesprovidertype
      },
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'number'
      } 
    ],
    color: '#3AA48A',
    isRelationship: true
  }

  modelService.models.acquirer = {
    displayName: 'Acquirer',
    objectType: 'EAcquirer',
    color: '#3A7EA4',
    fontColor: 'white',
    fields: [
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      }       
    ],
    isRelationship: true
  }

  modelService.models.acquired = {
    displayName: 'Acquired',
    objectType: 'EAcquired',
    color: '#2c4060',
    fontColor: 'white',
    fields: [
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      }       
    ],
    isRelationship: true
  }  

  modelService.models.advisor = {
    displayName: 'Deal Maker',
    objectType: 'EAdvisor',
    fields: [
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      } 
    ],
    color: '#423AA4',    
    fontColor: 'white',  
    isRelationship: true
  }

  modelService.models.result = {
    displayName: 'R&D Result',
    objectType: 'EResult',
    fields: [
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      } 
    ],
    color: '#DD9900',    
    fontColor: 'white',  
    isRelationship: true
  }

  modelService.models.funded = {
    displayName: 'Funded',
    objectType: 'EFunded',
    fields: [
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      } 
    ],
    color: '#655464',    
    fontColor: 'white',
    isRelationship: true
  }

  modelService.models.investor = {
    displayName: 'Investor',
    objectType: 'EInvestor',
    fields: [
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      } 
    ],
    color: '#DD468D',    
    isRelationship: true
  }


  modelService.models.applicant = {
    displayName: 'Applicant',
    objectType: 'EApplicant',
    fields: [
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      } 
    ],
    color: '#DD6B46',    
    isRelationship: true
  }

  modelService.models.inventor = {
    displayName: 'Inventor',
    objectType: 'EInventor',
    fields: [
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      } 
    ],
    color: '#DDC946',    
    isRelationship: true
  }

  modelService.models.partner = {
    displayName: 'Partner',
    objectType: 'EPartner',
    color: '#AFDD46',
    fontColor: 'black',            
    fields: [
      {
        schemaName: 'type',
        displayName: 'Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
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
        displayName: 'Summary',
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
        showinList: false,
        displayOrder: 2,
        controlType: 'url'
      },
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      }       
    ],
    isRelationship: true
  }

  modelService.models.spunoff = {
    displayName: 'Spun Off',
    objectType: 'ESpinOff',
    color: '#a45e5e',
    fontColor: 'black',                    
    fields: [
      {
        schemaName: 'department',
        displayName: 'Department',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.department
      },

      {
        schemaName: 'chair',
        displayName: 'Research Group',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text'
      },      
      {
        schemaName: 'involvement',
        displayName: 'Involvement',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: false,
        displayOrder: 1,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.involvementype
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
      },
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      }       
    ],
    isRelationship: true
  }

	modelService.models.worksfor = {
		displayName: 'Worked For',
    objectType: 'EWorksfor',
    color: '#358eb2',
    fontColor: 'black',                
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
        minLength: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.roletype
      },
      {
        schemaName: 'title',
        displayName: 'Title',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'text'           
      },
      {
        schemaName: 'weight',
        displayName: 'Weight',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'number'
      }       
		],
    isRelationship: true
	}

   
  modelService.models.personConnectRequest = {
    displayName: 'Person Connect Request',
    objectType: 'PersonConnectRequest',
    fields: [
      {
        schemaName: 'userid',
        displayName: 'userid',
        readOnly: false,
        required: true,
        hidden: true,
        showinList: false,
        displayOrder: 1,
        controlType: 'text'
      },
      {
        schemaName: 'firstname',
        displayName: 'First Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'text'
      },
      {
        schemaName: 'lastname',
        displayName: 'Last Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'text'
      },
      {
        schemaName: 'address',
        displayName: 'Address',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'textarea'
      },
      {
        schemaName: 'primaryjob',
        displayName: 'Primary Job',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 6,
        controlType: 'textarea'
      },
      {
        schemaName: 'otherjobs',
        displayName: 'Other Jobs',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 7,
        controlType: 'textarea'
      },
      {
        schemaName: 'areasofexpertise',
        displayName: 'Areas of Expertise',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 8,
        controlType: 'textarea'
      },
      {
        schemaName: 'education',
        displayName: 'Education',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 9,
        controlType: 'textarea'
      },
      {
        schemaName: 'boardssittingonBoards Sitting On',
        displayName: 'Boards Sitting On',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'textarea'
      },
      {
        schemaName: 'companiesfounded',
        displayName: 'Companies Founded',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 11,
        controlType: 'textarea'
      },
      {
        schemaName: 'investmentsadvisedon',
        displayName: 'Investments Advised On',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 12,
        controlType: 'textarea'
      },
      {
        schemaName: 'patentsinvented',
        displayName: 'Patents Invented',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 13,
        controlType: 'textarea'
      },
      {
        schemaName: 'publications',
        displayName: 'Publications',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 14,
        controlType: 'textarea'
      },
    ],
    color: '#3AA48A',
    isRelationship: false
  }  

  modelService.models.user = {
    displayName: 'User',
    objectType: 'SOIUsers',
    fields: [
      {
        schemaName: 'firstname',
        displayName: 'First Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text'
      },
      {
        schemaName: 'lastname',
        displayName: 'Last Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'text'
      },
      {
        schemaName: 'password',
        displayName: 'Password',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        minLength: 3,
        controlType: 'password'
      },
      {
        schemaName: 'rights',
        displayName: 'Access Rights',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        minLength: 3,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.accessrights
      }
    ],
    color: '#3AA48A',
    isRelationship: false
  }


  modelService.models.investment = {
    displayName: 'Investment',
    objectType: 'VInvestment',
    fontColor: 'black',    
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
        displayName: 'Summary',
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
        picklistOptions: modelService.piskLists.investmenttype
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
        picklistOptions: modelService.piskLists.investmentstage
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
        picklistOptions: modelService.piskLists.investmentround
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
        required: false,
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
      },
      {
        schemaName: 'statsdegreecentrality',
        displayName: 'Degree Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 8,
        controlType: 'number'
      },
      {
        schemaName: 'statsbetweencentrality',
        displayName: 'Betweeness Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 9,
        controlType: 'number'
      },
      {
        schemaName: 'dataQualityscore',
        displayName: 'Data Quality Score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 10,
        controlType: 'number'
      }
    ],
    color: '#f7786b',
    relationships: [
      {
        model: modelService.models.investor,
        destObjectType: ['VCompany','VSpinOff','VResearchInstitution','VPerson']
      },
      {
        model: modelService.models.funded,
        destObjectType: ['VCompany','VSpinOff','VResearchInstitution','VPerson','VProject']
      },
      {
        model: modelService.models.advisor,
        destObjectType: ['VPerson']
      }
    ]
  }

  modelService.models.acquisition = {
    displayName: 'Merger and Acquisition',
    objectType: 'VAcquisition',
    color: '#f442e5',
    fontColor: 'black',
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
        displayName: 'Summary',
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
        picklistOptions: modelService.piskLists.acquisitiontype
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
        required: false,
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
      },
      {
        schemaName: 'statsdegreecentrality',
        displayName: 'Degree Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 8,
        controlType: 'number'
      },
      {
        schemaName: 'statsbetweencentrality',
        displayName: 'Betweeness Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 9,
        controlType: 'number'
      },
      {
        schemaName: 'dataQualityscore',
        displayName: 'Data Quality Score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 10,
        controlType: 'number'
      }      
    ],
    relationships: [
      {
        model: modelService.models.acquirer,
        destObjectType: ['VCompany','VSpinOff','VResearchInstitution']
      },
      {
        model: modelService.models.acquired,
        destObjectType: ['VCompany','VSpinOff','VResearchInstitution']
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
    fontColor: 'black',
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
        displayName: 'Summary',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'textarea'
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
        picklistOptions: modelService.piskLists.patenttype
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
        schemaName: 'technology',
        displayName: 'Technology Field',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 8,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.patenttechnology
      },      
      {
        schemaName: 'inventiontype',
        displayName: 'Invention Type',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 2,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.inventiontype
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
      },
      {
        schemaName: 'statsdegreecentrality',
        displayName: 'Degree Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 12,
        controlType: 'number'
      },
      {
        schemaName: 'statsbetweencentrality',
        displayName: 'Betweeness Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 13,
        controlType: 'number'
      },
      {
        schemaName: 'dataQualityscore',
        displayName: 'Data Quality Score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 14,
        controlType: 'number'
      }
    ],
    relationships: [
        {
          model: modelService.models.applicant,
          destObjectType: ['VSpinOff','VCompany','VResearchInstitution']
        },
        {
          model: modelService.models.inventor,
          destObjectType: ['VPerson']
        }
      ]
    }

  modelService.models.spinoff = {
    displayName: 'SpinOff',
    objectType: 'VSpinOff',
    color: '#4db8ff',
    fontColor: 'black',    
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
        displayName: 'Summary',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        controlType: 'textarea'
      },      
      {
        schemaName: 'certsawards',
        displayName: 'Certifications and Awards',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 11,
        controlType: 'multiline-text',
        fieldNames: 'Year,Award',        
        multilineCols: 2
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
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.productcategory
      },      
      {
        schemaName: 'businesstype',
        displayName: 'Business Type',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 9,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.businesstype
      },      
      {
        schemaName: 'corecompetency',
        displayName: 'Core Competency',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.corecompetency
      },      
      {
        schemaName: 'industry',
        displayName: 'Industry / Sector',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 11,
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
        displayOrder: 13,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.technologyapplicationtype
      },
      {
        schemaName: 'phase',
        displayName: 'Phase of Development',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 14,
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
        displayOrder: 15,
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
        displayOrder: 16,
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
        displayOrder: 17,
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
        displayOrder: 18,
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
        displayOrder: 19,
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
        displayOrder: 20,
        controlType: 'text'
      },
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,          
        displayOrder: 21,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,            
        displayOrder: 22,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of employees',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 23,
        controlType: 'text'           
      },
      {
        schemaName: 'turnover',
        displayName: 'Annual TurnOver',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 24,
        controlType: 'multiline-text',
        fieldNames: 'Year,Revenue',
        multilineCols: 2
      },      
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 25,
        controlType: 'url'    
      },
      {
        schemaName: 'source2',
        displayName: 'Source Website 2',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 26,
        controlType: 'url'    
      },
      {
        schemaName: 'statsdegreecentrality',
        displayName: 'Degree Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 28,
        controlType: 'number'
      },
      {
        schemaName: 'statsbetweencentrality',
        displayName: 'Betweeness Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 29,
        controlType: 'number'
      },
      {
        schemaName: 'dataQualityscore',
        displayName: 'Data Quality Score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 30,
        controlType: 'number'
      },
      {
        schemaName: 'prestigescore',
        displayName: 'Prestige score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 31,
        controlType: 'number'
      }      
    ],
    relationships: [
      {
        model: modelService.models.partner,
        destObjectType: ['VCompany','VResearchInstitution','VSpinOff']
      },
      {
        model: modelService.models.spunoff,
        destObjectType: ['VSpinOff']
      }
    ]
  }

	modelService.models.organization = {
		displayName: 'Organization',
    objectType: 'VCompany',
    color: '#b1cbbb',
    fontColor: 'black',    
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
        picklistOptions: modelService.piskLists.organizationtype
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
        schemaName: 'certsawards',
        displayName: 'Certifications and Awards',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'multiline-text',
        fieldNames: 'Year,Award',
        multilineCols: 2
      },      
    	{
      	schemaName: 'description',
      	displayName: 'Summary',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 7,
      	controlType: 'textarea'
    	},    	
      {
        schemaName: 'logo',
        displayName: 'Logo',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 8,
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
      	displayOrder: 9,
      	controlType: 'picklist',
      	picklistOptions: modelService.piskLists.productcategory
    	},    	
      {
        schemaName: 'businesstype',
        displayName: 'Business Type',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.businesstype
      },
      {
        schemaName: 'corecompetency',
        displayName: 'Core Competency',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 11,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.corecompetency
      },      
    	{
      	schemaName: 'industry',
      	displayName: 'Industry / Sector',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: true,
      	displayOrder: 12,
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
        displayOrder: 13,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.technologyapplicationtype
      },
      {
        schemaName: 'phase',
        displayName: 'Phase of Development',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 14,
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
        displayOrder: 15,
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
      	displayOrder: 16,
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
      	displayOrder: 17,
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
      	displayOrder: 18,
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
      	displayOrder: 19,
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
        displayOrder: 20,
        controlType: 'text'
      },
    	{
      	schemaName: 'phone',
      	displayName: 'Phone',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,       		
      	displayOrder: 21,
      	controlType: 'text'
    	},
    	{
      	schemaName: 'email',
      	displayName: 'Email',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,        		
      	displayOrder: 22,
      	controlType: 'email'
    	},
    	{
      	schemaName: 'size',
      	displayName: 'Number of employees',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 23,
      	controlType: 'text'       		
    	},
      {
        schemaName: 'turnover',
        displayName: 'Annual TurnOver',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 24,
        controlType: 'multiline-text',
        fieldNames: 'Year,Revenue',
        multilineCols: 2
      },      
    	{
      	schemaName: 'source1',
      	displayName: 'Source Website 1',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 25,
      	controlType: 'url' 		
    	},
    	{
      	schemaName: 'source2',
      	displayName: 'Source Website 2',
      	readOnly: false,
      	required: false,
      	hidden: false,
      	showinList: false,
      	displayOrder: 26,
      	controlType: 'url' 		
    	},
      {
        schemaName: 'statsdegreecentrality',
        displayName: 'Degree Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 28,
        controlType: 'number'
      },
      {
        schemaName: 'statsbetweencentrality',
        displayName: 'Betweeness Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 29,
        controlType: 'number'
      },
      {
        schemaName: 'dataQualityscore',
        displayName: 'Data Quality Score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 30,
        controlType: 'number'
      },
      {
        schemaName: 'prestigescore',
        displayName: 'Prestige score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 31,
        controlType: 'number'
      }
  	],
		relationships: [
      {
        model: modelService.models.partner,
        destObjectType: ['VCompany','VResearchInstitution','VSpinOff']
      },
      {
        model: modelService.models.spunoff,
        destObjectType: ['VSpinOff']
      }
  	]
	}

  modelService.models.researchInstitution = {
    displayName: 'Research Institution',
    objectType: 'VResearchInstitution',
    color: '#ffbb19',
    fontColor: 'black',    
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
        displayName: 'Summary',
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
        picklistOptions: modelService.piskLists.researchinstitutiontype      
      },
      {
        schemaName: 'certsawards',
        displayName: 'Certifications and Awards',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 11,
        controlType: 'multiline-text',
        fieldNames: 'Year,Award',        
        multilineCols: 2
      },      
      {
        schemaName: 'productcategory',
        displayName: 'Products Category',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 8,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.productcategory
      },      
      {
        schemaName: 'businesstype',
        displayName: 'Business Type',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 9,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.businesstype
      },      
      {
        schemaName: 'corecompetency',
        displayName: 'Core Competency',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.corecompetency
      },            
      {
        schemaName: 'industry',
        displayName: 'Industry / Sector',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 11,
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
        displayOrder: 16,
        controlType: 'text'
      },      
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 17,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,           
        displayOrder: 18,
        controlType: 'email'
      },
      {
        schemaName: 'size',
        displayName: 'Number of employees',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 19,
        controlType: 'text'           
      },
      {
        schemaName: 'turnover',
        displayName: 'Annual TurnOver',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 20,
        controlType: 'multiline-text',
        fieldNames: 'Year,Revenue',
        multilineCols: 2
      },      
      {
        schemaName: 'source1',
        displayName: 'Source Website 1',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 21,
        controlType: 'url'    
      },
      {
        schemaName: 'source2',
        displayName: 'Source Website 2',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 22,
        controlType: 'url'    
      },
      {
        schemaName: 'statsdegreecentrality',
        displayName: 'Degree Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 24,
        controlType: 'number'
      },
      {
        schemaName: 'statsbetweencentrality',
        displayName: 'Betweeness Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 25,
        controlType: 'number'
      },
      {
        schemaName: 'dataQualityscore',
        displayName: 'Data Quality Score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 26,
        controlType: 'number'
      },
      {
        schemaName: 'prestigescore',
        displayName: 'Prestige score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 27,
        controlType: 'number'
      }      
    ],
    relationships: [
      {
        model: modelService.models.partner,
        destObjectType: ['VCompany','VResearchInstitution','VSpinOff']
      },
      {
        model: modelService.models.spunoff,
        destObjectType: ['VSpinOff']
      }
    ]
  }  

	modelService.models.people = {
		displayName: 'People',
    objectType: 'VPerson',
    color: '#c94c4c',
    fontColor: 'black',
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
        schemaName: 'certsawards',
        displayName: 'Certifications and Awards',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 11,
        controlType: 'multiline-text',
        fieldNames: 'Year,Award',
        multilineCols: 2
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
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.expertise
      },
      {
        schemaName: 'type',
        displayName: 'Person Type',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 10,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.persontype
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
      },
      {
        schemaName: 'statsdegreecentrality',
        displayName: 'Degree Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 12,
        controlType: 'number'
      },
      {
        schemaName: 'statsbetweencentrality',
        displayName: 'Betweeness Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 13,
        controlType: 'number'
      },
      {
        schemaName: 'dataQualityscore',
        displayName: 'Data Quality Score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 14,
        controlType: 'number'
      },
      {
        schemaName: 'prestigescore',
        displayName: 'Prestige score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 15,
        controlType: 'number'
      }
    ],
		relationships: [
			{
				model: modelService.models.worksfor,
				destObjectType: ['VSpinOff','VCompany','VResearchInstitution']
			}
  	]
	}

 
  modelService.models.entrepreneurialresources = {
    displayName: 'Facilities and Resources',
    objectType: 'VEntrepreneurialResource',
    color: '#A77ff4',
    fields: [
      {
        schemaName: 'name',
        displayName: 'Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        showinDetail: true,
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
        showinDetail: true,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.entrepreneurialresourcestype
      },
      {
        schemaName: 'area',
        displayName: 'Area of Assistance',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        showinDetail: true,
        controlType: 'textarea',
      },
      {
        schemaName: 'targetgroup',
        displayName: 'Target Group',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        showinDetail: true,
        controlType: 'textarea'
      },
      {
        schemaName: 'targetgeo',
        displayName: 'Target Geography',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 5,
        showinDetail: true,
        controlType: 'textarea'
      },
      {
        schemaName: 'phase',
        displayName: 'Target Business Phase',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        showinDetail: true,
        controlType: 'picklist',
        picklistOptions: modelService.piskLists.phase
      },      
      {
        schemaName: 'industry',
        displayName: 'Industry / Sector',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: true,
        displayOrder: 7,
        showinDetail: true,
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
        displayOrder: 8,
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
        displayOrder: 9,
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
        schemaName: 'country',
        displayName: 'Country',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        addressBlock: 1,
        displayOrder: 12,
        controlType: 'text'
      },
      {
        schemaName: 'phone',
        displayName: 'Phone',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,          
        displayOrder: 13,
        controlType: 'text'
      },
      {
        schemaName: 'email',
        displayName: 'Email',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,            
        displayOrder: 14,
        controlType: 'email'
      },
      {
        schemaName: 'source',
        displayName: 'Source Website',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 15,
        controlType: 'url'    
      },
      {
        schemaName: 'description',
        displayName: 'Summary',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 16,
        controlType: 'textarea'
      },
      {
        schemaName: 'statsdegreecentrality',
        displayName: 'Degree Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 17,
        controlType: 'number'
      },
      {
        schemaName: 'statsbetweencentrality',
        displayName: 'Betweeness Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 18,
        controlType: 'number'
      },
      {
        schemaName: 'dataQualityscore',
        displayName: 'Data Quality Score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 19,
        controlType: 'number'
      }      
    ],
    relationships: [
      {
        model: modelService.models.entrepreneurialresourcesprovider,
        destObjectType: ['VSpinOff','VCompany','VResearchInstitution']
      }
    ]
  }

  modelService.models.media = {
    displayName: 'Media Mention',
    objectType: 'VMedia',
    hideNetork: true,
    color: '#f77ff4',
    fields: [
      {
        schemaName: 'title',
        displayName: 'Title',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text',
        showInSearchResults: true
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
        schemaName: 'author',
        displayName: 'Author',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 5,
        controlType: 'text',
      },
      {
        schemaName: 'categories',
        displayName: 'Categories',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'text',
      },
      {
        schemaName: 'source',
        displayName: 'Source',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'url',
      },
      {
        schemaName: 'statsdegreecentrality',
        displayName: 'Degree Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 8,
        controlType: 'number'
      },
      {
        schemaName: 'statsbetweencentrality',
        displayName: 'Betweeness Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 9,
        controlType: 'number'
      },
      {
        schemaName: 'dataQualityscore',
        displayName: 'Data Quality Score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 10,
        controlType: 'number'
      }
    ],
    relationships: [
      {
        model: modelService.models.mediatarget,
        destObjectType: ['VSpinOff','VCompany','VResearchInstitution','VPerson','VPatent','VInvestment','VAcquisition','VProject']
      } 
    ]
  }  

  modelService.models.projects = {
    displayName: 'R&D Project',
    objectType: 'VProject',
    color: '#F3E5AB',
    fields: [
      {
        schemaName: 'name',
        displayName: 'Name',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 1,
        controlType: 'text',
        showInSearchResults: true
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
        picklistOptions: modelService.piskLists.projecttype
      },
      {
        schemaName: 'startdate',
        displayName: 'Start Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 3,
        controlType: 'datepicker'
      },
      {
        schemaName: 'enddate',
        displayName: 'End Date',
        readOnly: false,
        required: true,
        hidden: false,
        showinList: true,
        displayOrder: 4,
        controlType: 'datepicker'
      },
      {
        schemaName: 'details',
        displayName: 'Summary',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 5,
        controlType: 'textarea'
      },
      {
        schemaName: 'theme',
        displayName: 'Theme',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 6,
        controlType: 'text'
      },
      {
        schemaName: 'topics',
        displayName: 'Topics',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 7,
        controlType: 'textarea'
      },
      {
        schemaName: 'status',
        displayName: 'Status',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 8,
        controlType: 'text'
      },
      {
        schemaName: 'city',
        displayName: 'City',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
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
        displayOrder: 10,
        controlType: 'text'
      },
      {
        schemaName: 'source',
        displayName: 'Project Url',
        readOnly: false,
        required: false,
        hidden: false,
        showinList: false,
        displayOrder: 11,
        controlType: 'url',
      },
      {
        schemaName: 'statsdegreecentrality',
        displayName: 'Degree Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 12,
        controlType: 'number'
      },
      {
        schemaName: 'statsbetweencentrality',
        displayName: 'Betweeness Centrality',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 13,
        controlType: 'number'
      },
      {
        schemaName: 'dataQualityscore',
        displayName: 'Data Quality Score',
        readOnly: true,
        required: false,
        hidden: true,
        showinList: false,
        displayOrder: 14,
        controlType: 'number'
      }      
    ],
    relationships: [
      {
        model: modelService.models.projectcontributor,
        destObjectType: ['VSpinOff','VCompany','VResearchInstitution','VPerson']
      },
      {
        model: modelService.models.result,
        destObjectType: ['VSpinOff','VPatent']
      }
    ]
  }  
	
}
	return modelService;
}]);	
