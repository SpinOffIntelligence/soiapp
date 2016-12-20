var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('companyDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'remoteDataService','$timeout',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService, $timeout) {

    $scope.util = util;
    $scope.recordItemId = $stateParams.id
    $scope.mode = 'data';
    remoteDataService.fetchRecordByProp('VCompany', '@rid', $scope.recordItemId, function(err, data) {
      if(util.defined(data,"length") && data.length > 0) {
        $scope.objData = data[0];
        var fnd = util.findWhereProp(modelService.models, 'objectType', 'VCompany');
        if(util.defined(fnd)) {
          $scope.model = fnd;

          remoteDataService.getRecordDetails('VCompany', $scope.recordItemId, function(err, data) {

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
                    label: name
                  }
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

    $scope.toggleMode = function() {
      if($scope.mode=='data') {
        $scope.mode='graph';

        $timeout( function(){ 
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
        });
      } else {
        $scope.mode='data';
      }
    }

    $scope.update = function() {
      util.navigate('panelItem', {panelName : 'vCompanyList', recordItemId: $scope.recordItemId, mode: 'viewDetails' })
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