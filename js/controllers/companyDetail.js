var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('companyDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams','panelFieldsService','modelService', 'remoteDataService',
  function (util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService) {

    $scope.util = util;
    $scope.recordItemId = $stateParams.id
    remoteDataService.fetchRecordByProp('VCompany', '@rid', $scope.recordItemId, function(err, data) {
      if(util.defined(data,"length") && data.length > 0) {
        $scope.objData = data[0];
        var fnd = util.findWhereProp(modelService.models, 'objectType', 'VCompany');
        if(util.defined(fnd)) {
          $scope.model = fnd;

          remoteDataService.getRecordDetails('VCompany', $scope.recordItemId, function(err, data) {

            $scope.recDetails = data;
            $scope.worksfor = null;

            var fnd = util.findWhereProp(modelService.models, 'objectType', 'VCompany');
            if(util.defined(data,'EWorksfor')) {
              $scope.worksfor = util.findWhereDeep(data.EWorksfor, 'in', 'inId', $stateParams.id);
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

    $scope.criteriaMatch = function() {
      return function( item ) {
        if(item.out.outId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }
}]);