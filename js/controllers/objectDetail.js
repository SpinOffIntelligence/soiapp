var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('objectDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'remoteDataService','$timeout','statsService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService, $timeout, statsService) {

    $scope.util = util;
    $scope.models = modelService.models;

    
    $scope.recordItemId = $stateParams.id
    $scope.depth = 0; 
    $scope.fndDetail = null;
    $scope.piskLists = modelService.piskLists;

    $scope.mode = {
      view: 'data',
      showAdv:false
    };

    $scope.statsMode = statsService.currentMode;

    $scope.excludeObject = [
    ];

    $scope.filters = {

      organizationtype: {
        objectType: 'VCompany',
        fieldName: 'type',
        filters: []
      },
      industry: {
        objectType: 'VSpinOff',
        fieldName: 'industry',
        filters: []
      },
      businessmodel: {
        objectType: 'VSpinOff',
        fieldName: 'businessmodel',
        filters: []
      },
      productcategory: {
        objectType: 'VSpinOff',
        fieldName: 'productcategory',
        filters: []
      },
      status: {
        objectType: 'VSpinOff',
        fieldName: 'status',
        filters: []
      },
      typeofspinoff: {
        objectType: 'VSpinOff',
        fieldName: 'typeofspinoff',
        filters: [],
        removeDirection: 'in'
      },
      researchinstitutiontype: {
        objectType: 'VResearchInstitution',
        fieldName: 'type',
        filters: []
      },
      investmentfirmstype: {
        objectType: 'VInvestmentFirm',
        fieldName: 'type',
        filters: []
      },
      investmenttype: {
        objectType: 'VInvestment',
        fieldName: 'type',
        filters: []
      },
      investmentstage: {
        objectType: 'VInvestment',
        fieldName: 'stage',
        filters: []
      },
      investmentround: {
        objectType: 'VInvestment',
        fieldName: 'round',
        filters: []
      },
      expertise: {
        objectType: 'VPerson',
        fieldName: 'expertise',
        filters: []
      },
      role: {
        objectType: 'EWorksfor',
        fieldName: 'role',
        filters: [],
        removeDirection: 'in'
      },
      founded: {
        objectType: 'EFounded',
        fieldName: 'role',
        filters: [],
        removeDirection: 'in'
      },
      investor: {
        objectType: 'EInvestor',
        fieldName: 'role',
        filters: [],
        removeDirection: 'in'
      },
      department: {
        objectType: 'ESpinOff',
        fieldName: 'department',
        filters: [],
        removeDirection: 'in'
      },
      mediatype: {
        objectType: 'EMediaTarget',
        fieldName: 'type',
        filters: [],
        removeDirection: 'in'
      },
      fundedType: {
        objectType: 'EFunded',
        fieldName: 'type',
        filters: [],
        removeDirection: 'in'
      },
      acquireType: {
        objectType: 'EAcquire',
        fieldName: 'type',
        filters: [],
        removeDirection: 'in'
      },
      partnerType: {
        objectType: 'EPartner',
        fieldName: 'type',
        filters: [],
        removeDirection: 'in'
      },


    };
    $scope.showAdv = false;


    $scope.schemas = [];
    $scope.showMore = {};
    for(var propertyName in modelService.models) {
      var obj = {
        displayName: modelService.models[propertyName].displayName,
        objectType: modelService.models[propertyName].objectType,
        model: modelService.models[propertyName],
        selected: false
      }
      $scope.schemas.push(obj);
    }

    function processNetworkData(refresh, data) {
        $scope.recordDetailsOrig = data;
        $scope.recDetails={};
        $scope.visNodes=[];
        $scope.visEdges=[];
        $scope.removeList=[];
        for (var property in data) {

          // Excule Object?        
          var fnd = _.findWhere($scope.excludeObject, {name: property});
          if(util.defined(fnd))
            continue;

          // Load Schema and Model Info
          var prop = data[property];
          var fndModel = util.findWhereProp(modelService.models, 'objectType', property);
          var fndSchema = _.findWhere($scope.schemas, {objectType: property});     

          // If it is a vertex
          if(property.indexOf('V') == 0) {
            $scope.recDetails[property] =prop;

            // For Each instance
            for(var i=0; i<prop.length; i++) {
              var pr = prop[i];

              var name = prop[i]['name'];
              if(property == 'VPatent')
                var name = prop[i]['number'];

              // Load vertex data
              var visObj = {
                id: prop[i]['id'],
                label: name,
                font: {size:12, color:'black', face:'arial'},
                shape: 'dot',
                size: 5,
                color: '#00cccc',
                font: {
                  color: 'black'
                }
              }

              if(util.defined(pr,$scope.statsMode)) {
                var prVal = pr[$scope.statsMode];
                if(prVal > 1 && prVal < 20)
                  visObj.size = 5+prVal;
                else if(prVal > 20)
                  visObj.size = 20;
              }
                

              // Apply filters
              if(util.defined(fndSchema)) {

                // First Time Load
                if(refresh == false) {                  
                    fndSchema.selected = true;                
                } else {

                  // Reload
                  if(fndSchema.selected == false)
                    continue;

                  // Compute Filters
                  var skip=false;
                  // for(var propertyName in $scope.filters) {
                  //   if($scope.filters[propertyName].filters.length > 0) {
                  //     var fnd = util.findWhereLike($scope.filters[propertyName].filters, 'name', pr[$scope.filters[propertyName].fieldName])
                  //     if(!util.defined(fnd) && fndSchema.objectType == $scope.filters[propertyName].objectType) {
                  //       skip=true;
                  //     }
                  //   }
                  // }
                  if(skip)
                    continue;
                }
              }

              // Calc Colors
              if(util.defined(fndModel,"color")) {
                visObj.color = fndModel.color;
              }
              if(util.defined(fndModel,"fontColor")) {
                visObj.font.color = fndModel.fontColor;
              } else {
                visObj.font.color = 'black';  
              }

              // Add to network
              $scope.visNodes.push(visObj);
            }

          } else {

            // Is Edge
            $scope.recDetails[property]=prop;
            if(util.defined(fndSchema)) {

              // First Time Load
              if(refresh == false) {                  
                  fndSchema.selected = true;   

                  // For each instance  
                  for(var i=0; i<prop.length; i++) {

                    // Load Edge data
                    var visObj = {
                      id: prop[i]['id'],
                      from: prop[i]['out']['outId'],
                      to: prop[i]['in']['inId'],
                      color: '#00cccc',
                      font: {
                        color: 'black'
                      }
                    }

                    // Set Color
                    if(util.defined(fndModel,"color")) {
                      visObj.color = fndModel.color;
                    }

                    // Set Picklist Colors
                    var fndFields = _.where(fndSchema.model.fields, {controlType: "picklist"});
                    if(util.defined(fndFields,"length") && fndFields.length > 0) {
                      for(var j=0; j<fndFields.length; j++){
                        if(util.defined(fndFields[j].picklistOptions, "options")) {
                          var propVal = prop[i][fndFields[j].schemaName];
                          var fndPick = _.findWhere(fndFields[j].picklistOptions.options, {name: propVal});
                          if(util.defined(fndPick,"color")) { 
                            visObj.color = fndPick.color;
                            j=fndFields.length;
                          }
                        }
                      }
                    }

                    // Add to Network
                    $scope.visEdges.push(visObj);
                  }           
              } else {
                if(fndSchema.selected == false)
                  continue;

                // Apply Filters
                var filters = _.where($scope.filters, {objectType: property});

                for(var i=0; i<prop.length; i++) {
                  var pr = prop[i]
                  var skip=false;
                  // for(var j=0; j<filters.length; j++) {
                  //   var filter = filters[j];

                  //   if(filter.filters.length > 0) {
                  //     var fnd = _.findWhere(filter.filters, {name: pr[filter.fieldName]});
                  //     if(!util.defined(fnd)) {
                  //       skip=true;

                  //       // Prune related nodes
                  //       if(util.defined(pr,"in.inId") && pr['in']['inId'] != $scope.recordItemId)
                  //         $scope.removeList.push(pr['in']['inId']);
                  //       else if(util.defined(pr,"out.outId") && pr['out']['outId'] != $scope.recordItemId)
                  //         $scope.removeList.push(pr['out']['outId']);

                  //       break;
                  //     }
                  //   }
                  // }

                  // If not skipping add to Network
                  if(!skip) {
                    var visObj = {
                      id: pr['id'],
                      from: pr['out']['outId'],
                      to: pr['in']['inId'],
                      color: '#00cccc',
                      font: {
                        color: 'black'
                      }
                    }

                    // Set Color
                    if(util.defined(fndModel,"color")) {
                      visObj.color = fndModel.color;
                    }

                    // Set Picklist Colors
                    var fndFields = _.where(fndSchema.model.fields, {controlType: "picklist"});
                    if(util.defined(fndFields,"length") && fndFields.length > 0) {
                      for(var j=0; j<fndFields.length; j++){
                        if(util.defined(fndFields[j].picklistOptions, "options")) {
                          var propVal = pr[fndFields[j].schemaName];
                          var fndPick = _.findWhere(fndFields[j].picklistOptions.options, {name: propVal});
                          if(util.defined(fndPick,"color")) { 
                            visObj.color = fndPick.color;
                            j=fndFields.length;
                          }
                        }
                      }
                    }              
                    // Add to network
                    $scope.visEdges.push(visObj);
                  }
                }
              }
            }
          }
        }
        
        // Remove Vertex
        // $scope.visNodes = _.reject($scope.visNodes, function(node) {
        //   var fnd = _.indexOf($scope.removeList,node.id);
        //   if(fnd > -1)
        //     return 1;
        //   else return 0;
        // })
        //callback(err, data);
        return data;
    }

    function loadNetwork(refresh, callback) {
      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, $scope.filters, function(err, data) {
        var data = processNetworkData(refresh, data);
        callback(null, data);
      });      
    }    

    function init(callback) {
      remoteDataService.fetchRecordByProp(remoteDataService.detailObjectType, '@rid', $scope.recordItemId, function(err, data) {
        if(util.defined(data,"length") && data.length > 0) {
          $scope.objData = data[0];
          var fnd = util.findWhereProp(modelService.models, 'objectType', remoteDataService.detailObjectType);
          if(util.defined(fnd)) {
            $scope.model = fnd;

            loadNetwork(false, function(err, data) {
              $scope.recordDetails = {};
              for(var i=0; i <$scope.model.relationships.length; i++) {
                var relationship = $scope.model.relationships[i];
                remoteDataService.getRelationship(relationship.model.objectType, $scope.recordItemId, function(err, returnData) {
                  if(util.defined(returnData,"edgeObjectType")) {
                    // Get Relation ship again
                    relationship = util.findWhereArray($scope.model.relationships, 'model', 'objectType', returnData.edgeObjectType);
                    var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];
                    
                    for(var x=0; x<relationship.destObjectType.length; x++) {
                      var destObjectType = relationship.destObjectType[x];
                      var outData = _.where(returnData.data, {'@class': destObjectType});
                      if(!util.defined($scope,"recordDetailItem.relationships"))
                        $scope.recordDetails[returnData.edgeObjectType]={};
                      $scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
                      remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
                        $scope.recordDetails[returnData.edgeObjectType].details = detailsData;

                        $rootScope.$broadcast('userDetailsDataLoaded');
                        
                      });                  
                    }
                  }
                });
              }
              callback(null, data);
            });
          }
        }
      });
    }
    

    if(!util.defined($scope,"recordItemId") || $scope.recordItemId == "") {
      remoteDataService.fetchRecords('VCompany', function(err, data) {
        if(data.length > 0) {
          $scope.recordItemId = data[0].id;
          init(function(err, data) {
            loadNetwork(true, function(err, data) {
              drawNetwork();
            });            
          });  
        }
      });
    } else {
      init(function(err, data) {});  
    }


    function drawNetwork() {
      var nodes = new vis.DataSet($scope.visNodes);

      // create an array with edges
      var edges = new vis.DataSet($scope.visEdges);

      // create a network
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {
        height: '100%',
        width: '100%',
        layout: {
          randomSeed: undefined,
          improvedLayout: false
        }
      };
      var network = new vis.Network(container, data, options);   

      network.on("stabilizationIterationsDon", function (params) {      
        console.dir(params);
      });

      network.on("stabilized", function (params) {      
        console.dir(params);
        if(util.defined(util,"spinner")) {
          util.spinner.stop();
        }
      });

      network.on("animationFinished", function (params) {      
        console.dir(params);
      });



      network.on("click", function (params) {
        $scope.hideFilters();

        params.event = "[original event]";
        console.log('Click event:' + params.nodes);

        $scope.fieldType;
        if(util.defined(params,"nodes.length") && params.nodes.length > 0) {
          $scope.fieldType = 'nodes';
        } else {
          $scope.fieldType = 'edges';
        }
        var fndObjectType = util.findPropArrayReturnProp($scope.recordDetailsOrig,'id',params[$scope.fieldType][0]);
        $scope.selectedId = params[$scope.fieldType][0];
        if(util.defined(fndObjectType)) {
          var fndModel = util.findWhereProp($scope.models, 'objectType', fndObjectType);
          var fnd = util.findPropArray($scope.recordDetailsOrig,'id',params[$scope.fieldType][0]);
          if(util.defined(fnd)) {
            fnd.objectType = fndObjectType;
            $rootScope.$apply(function () {
              $scope.fndDetail = fnd;
              $scope.fndDetailArray = util.propToArray(fnd);
              if(util.defined(fndModel)) {
                $scope.fndDetailName = fndModel.displayName;
              }
            });
          }
        }
      });   
    }

    $scope.getEntityName = function(record, direction) {
      var idName = 'inId';
      if(direction == 'out')
        idName = 'outId';
      var id = record[direction][idName];
      var fnd = util.findPropArrayReturnProp($scope.recDetails, 'id',id);
      if(util.defined(fnd)) {
        var fndObj = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',fnd);
        return fndObj.model.displayName;
      }
      return null;
    }

    $scope.goRoute = function(record, direction) {
      var idName = 'inId';
      if(direction == 'out')
        idName = 'outId';
      var id = record[direction][idName];
      var fnd = util.findPropArrayReturnProp($scope.recDetails, 'id',id);
      if(util.defined(fnd)) {
        var fndObj = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',fnd);
        if(util.defined(fndObj)) {
          util.navigate(fndObj.userRoute,{id:id})
        }
      }
    }

    $scope.viewDetails = function(objectType, detail) {
      $scope.mode.showAdv=null;
      $scope.fndDetail = null;      
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',objectType );
      if(util.defined(fnd)) {
        util.navigate(fnd.userRoute, {id: $scope.selectedId});  
      }
    }

    $scope.hideDetails = function() {
      $scope.fndDetail=null;
    }


    $scope.findSchemaName = function(objectType, detail) {
      var fnd = util.findWhereProp(modelService.models,'objectType',objectType);
      if(util.defined(fnd)) {
        var fndField = _.findWhere(fnd.fields, {schemaName: detail.name});
        if(util.defined(fndField)) {
          return fndField.displayName;
        }
      }
      return null;
    }

    $scope.formatSchemaValue = function(objectType, detail) {
      var fnd = util.findWhereProp(modelService.models,'objectType',objectType);
      if(util.defined(fnd)) {
        var fndField = _.findWhere(fnd.fields, {schemaName: detail.name});
        if(util.defined(fndField)) {
          var schemaType = modelService.schemas[objectType][detail.name].type;
          var val = util.formatData(fndField.controlType, schemaType, detail.value);
          if(schemaType = "string" && val.length > 100)
            val = val.substring(0,100)
          return val;
        }
      }
      return null;
    }

    $scope.calcGrowthCall = function(array,col) {
      var size = array.length-1;
      if(size > 0) {
        var val = util.calcAnnualPercentGrowth(util.euroStringToInt(array[0].values[col].value), util.euroStringToInt(array[size].values[col].value), size);
        return val.toString() + '%';        
      } else {
        return null;
      }
    }

    $scope.hideFilters = function(obj) {
      $scope.mode.showAdv=null;
      $scope.fndDetail = null;
    }

    $scope.toggelFilters = function(obj) {
      $scope.mode.showAdv=obj.model.objectType;
      $scope.fndDetail = null;
    }

    $scope.applyFilters = function() {
      $scope.mode.showAdv = false;
      util.startSpinner('#spin', '#8b8989');
      loadNetwork(true, function(err, data) {
        drawNetwork();
      });      
    }

    $scope.toggelSchema = function(obj) {
      obj.selected=!obj.selected;
      loadNetwork(true, function(err, data) {
        drawNetwork();
      });      
    }

    $scope.zoomOut = function() {
      $scope.depth++;
      util.startSpinner('#spin', '#8b8989');
      loadNetwork(false, function(err, data) {
        var data = processNetworkData(true, data);
        drawNetwork();
      });
    }

    $scope.zoomIn = function() {
      if($scope.depth > 0) {
        util.startSpinner('#spin', '#8b8989');
        $scope.depth--;
        loadNetwork(false, function(err, data) {
          var data = processNetworkData(true, data);
          drawNetwork();
        });
      } 
    }

    $scope.setStatsMode = function(statsMode) {
        util.startSpinner('#spin', '#8b8989');
        $scope.statsMode=statsMode;
        loadNetwork(false, function(err, data) {
          var data = processNetworkData(true, data);
          drawNetwork();
        });      
    }

    $scope.toggleMode = function() {
      if($scope.mode.view=='data') {
        $scope.mode.view='graph';

        $timeout( function(){ 
          drawNetwork();
        }, 300);
      } else {
        $scope.mode.view='data';
      }
    }

    $scope.getOrganization = function(orgId, prop) {
      var fnd = util.findDeepParent($scope.recordDetailsOrig.EFunded, 'out', 'outId', orgId);
      if(util.defined(fnd,"in")) {
        return fnd.in[prop];
      }
    }

    $scope.update = function() {
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',remoteDataService.detailObjectType);
      if(util.defined(fnd)) {      
        util.navigate('panelItem', {panelName : fnd.name, recordItemId: $scope.recordItemId, mode: 'viewDetails' })
      }
    }

    $scope.criteriaMatchIn = function() {
      return function( item ) {
        if(item.in.inId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }

    $scope.criteriaMatchOut = function() {
      return function( item ) {
        if(item.out.outId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }

    $scope.getRelation = function(obj, objectType, direction, schemaName) {
      var idName = 'inId';
      if(direction == 'out')
        var idName = 'outId';
      var fnd = util.findWhereDeepProp($scope.recDetails[objectType], direction, idName, obj.id);
      if(util.defined(fnd)) {
        return fnd[schemaName];
      }
    }

}]);