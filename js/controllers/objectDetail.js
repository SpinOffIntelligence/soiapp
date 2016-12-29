var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('objectDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'remoteDataService','$timeout',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService, $timeout) {

    $scope.util = util;
    $scope.recordItemId = $stateParams.id
    $scope.mode = 'data';
    $scope.depth = 0; 
    $scope.fndDetail = null;

    $scope.schemas = [];
    for(var propertyName in modelService.models) {
      var obj = {
        objectType: modelService.models[propertyName].objectType,
        model: modelService.models[propertyName],
        selected: false
      }
      $scope.schemas.push(obj);
    }

    function loadNetwork(refresh, callback) {
      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, function(err, data) {
        $scope.recordDetailsOrig = data;
        $scope.recDetails={};
        $scope.visNodes=[];
        $scope.visEdges=[];
        for (var property in data) {
          var prop = data[property];
          if(property.indexOf('V') == 0) {
            $scope.recDetails[property] =prop;
            for(var i=0; i<prop.length; i++) {
              
              var name = prop[i]['name'];
              if(property == 'VPatent')
                var name = prop[i]['number'];

              var visObj = {
                id: prop[i]['id'],
                label: name,
                font: {size:12, color:'black', face:'arial'},
                shape: 'dot',
                size: 10
              }
              var fndModel = util.findWhereProp(modelService.models, 'objectType', property);
              var fndSchema = _.findWhere($scope.schemas, {objectType: property});
              if(util.defined(fndSchema)) {
                if(refresh == false) {                  
                    fndSchema.selected = true;                
                } else {
                  if(fndSchema.selected == false)
                    continue;
                }
              }
              if(util.defined(fndModel,"color")) {
                visObj.color = fndModel.color;
              }
              // if(util.defined(fndModel,"fontColor")) {
              //   visObj.font.color = fndModel.fontColor;
              // }
              visObj.font.color = 'black';
              $scope.visNodes.push(visObj);
            }
          } else {
            var fnd1 = util.findWhereDeep(prop, 'in', 'inId', $stateParams.id);
            var fnd2 = util.findWhereDeep(prop, 'out', 'outId', $stateParams.id);
            $scope.recDetails[property] = _.union(fnd1, fnd2);                

            for(var i=0; i<prop.length; i++) {
              var visObj = {
                from: prop[i]['out']['outId'],
                to: prop[i]['in']['inId']
              }
              $scope.visEdges.push(visObj);
            }
          }
        }
        callback(err, data);
      });      
    }    

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
                  var outData = _.where(returnData.data, {'@class': relationship.destObjectType});
                  if(!util.defined($scope,"recordDetailItem.relationships"))
                    $scope.recordDetails[returnData.edgeObjectType]={};
                  $scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) { return obj['@rid'] == $scope.recordItemId });
                  remoteDataService.getRelationshipDetails(relationship.model.objectType, $scope.recordItemId, function(err, detailsData) {
                    $scope.recordDetails[returnData.edgeObjectType].details = detailsData;
                  });
                }
              });
            }
          });
        }
      }
    });

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
      var options = {};
      var network = new vis.Network(container, data, options);   

      network.on("click", function (params) {
        params.event = "[original event]";
        console.log('Click event:' + params.nodes);

        var fndObjectType = util.findPropArrayReturnProp($scope.recordDetailsOrig,'id',params.nodes[0]);
        $scope.selectedId = params.nodes[0];
        if(util.defined(fndObjectType)) {
          var fnd = util.findPropArray($scope.recordDetailsOrig,'id',params.nodes[0]);
          if(util.defined(fnd)) {
            fnd.objectType = fndObjectType;
            $rootScope.$apply(function () {
              $scope.fndDetail = fnd;
              $scope.fndDetailArray = util.propToArray(fnd);
            });
          }
        }
      });   
    }

    $scope.viewDetails = function(objectType, detail) {
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',objectType );
      if(util.defined(fnd)) {
        util.navigate(fnd.userRoute, {id: $scope.selectedId});  
      }
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

    $scope.toggelSchema = function(obj) {
      obj.selected=!obj.selected;
      loadNetwork(true, function(err, data) {
        drawNetwork();
      });      
    }

    $scope.getColor = function(obj) {
      if(obj.selected)
        return obj.model.color;
      else return '#cccccc';
    }

    $scope.zoomOut = function() {
      $scope.depth++;
      loadNetwork(false, function(err, data) {
        drawNetwork();
      });
    }

    $scope.zoomIn = function() {
      if($scope.depth > 0) {
        $scope.depth--;
        loadNetwork(false, function(err, data) {
          drawNetwork();
        });        
      } 
    }

    $scope.toggleMode = function() {
      if($scope.mode=='data') {
        $scope.mode='graph';

        $timeout( function(){ 
          drawNetwork();
        });
      } else {
        $scope.mode='data';
      }
    }

    $scope.getCompany = function(companyId, prop) {
      var fnd = util.findDeepParent($scope.recordDetailsOrig.EFunded, 'out', 'outId', companyId);
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


}]);