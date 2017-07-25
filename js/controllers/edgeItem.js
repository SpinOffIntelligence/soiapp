controllers.controller('edgeItemCtrl', function ($scope, $rootScope, util, panelFieldsService, $stateParams, remoteDataService, modelService) {
  
  $scope.util = util;
  $scope.mode='view';
  $scope.controller = 'edgeItemCtrl';
  $scope.findTarget="";
  if(util.defined($stateParams,"panelName")) {
    $scope.panelName = $stateParams.panelName;
  }
  if(util.defined($stateParams,"recordItemId")) {
    $scope.recordItemId = $stateParams.recordItemId;
  }
  if(util.defined($stateParams,"mode")) {
    $scope.mode = $stateParams.mode;
  }
  if(util.defined($stateParams,"edgeObjectType")) {
    $scope.edgeObjectType = $stateParams.edgeObjectType;
  }
  if(util.defined($stateParams,"edgeRecordItemId")) {
    $scope.edgeRecordItemId = $stateParams.edgeRecordItemId;
  }
  if(util.defined($stateParams,"sourceObjectType")) {
    $scope.sourceObjectType = $stateParams.sourceObjectType;
  }

  if(util.defined($stateParams,"relationItemObjectType")) {
    $scope.relationItemObjectType = $stateParams.relationItemObjectType;

    var fnd = util.findWhereProp(modelService.models, 'objectType', $scope.sourceObjectType);
    if(util.defined(fnd)) {
      var fndRelation = util.findDeepParent(fnd.relationships, 'model', 'objectType', $scope.relationItemObjectType);
      if(util.defined(fndRelation)) {
        $scope.destObjectType = fndRelation.destObjectType[0];
        $scope.destObjectTypes = [];
        for(var i=0; i<fndRelation.destObjectType.length; i++) {
          var obj = {
            id: i,
            name: fndRelation.destObjectType[i]
          }
          $scope.destObjectTypes.push(obj);
        }
      }
    }
    
  }

  function initTargets() {
    $scope.targets = [];
    remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
      var targets = data;
      for(var i=0; i<targets.length; i++) {
        var target = targets[i];
        var fnd = _.findWhere($scope.recordDetails, {inId: target.id});
        if(targets[i].id == $scope.targetId || !util.defined(fnd)) {
          if(targets[i].id == $scope.targetId)
            targets[i].selected=true;
          else targets[i].selected=false;                   
          $scope.targets.push(target);
        }
      }
    });    
  }

  function init() {
    if(util.defined(panelFieldsService,$scope.panelName)) {
      $scope.panelInfo = panelFieldsService[$scope.panelName].panelInfo;

      if(util.defined($scope,"edgeRecordItemId") && $scope.edgeRecordItemId != "") {


        remoteDataService.getRecordDetails($scope.panelInfo.model.objectType, $scope.recordItemId, 0, null, null, null, function(err, data) {
          $scope.allRelated = data;
          if(util.defined(data,$scope.edgeObjectType)) {
            $scope.recordDetails =  data[$scope.edgeObjectType];
          }

          remoteDataService.getEdge($scope.edgeObjectType, $scope.edgeRecordItemId, function(err, data) {


            var targetId = data['in'];
            var fndObjectType;
            for(var propertyName in $scope.allRelated) {
              for(var i=0; i<$scope.allRelated[propertyName].length; i++) {
                if($scope.allRelated[propertyName][i]['id'] == targetId) {
                  $scope.destObjectType = propertyName;
                }
              }
            }
            
            $scope.paneRecord = remoteDataService.prepareInboundData(data);
            $scope.paneRecordBackup = remoteDataService.prepareInboundData(data);

            var obj = {};
            for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
              if(util.defined(data,propertyName))
                obj[propertyName]=data[propertyName];
              else obj[propertyName]=null;
            }
            if(util.defined(data,"id"))
                obj.id = data.id;
            $scope.paneRecord = obj;

            if(util.defined(data,"in")) {
              $scope.targetId = data['in'];

              initTargets();
            }
          });
        });
      } else {
        // Add mode no ID
        $scope.mode = 'add';
        var obj = {};
        for(var propertyName in modelService.schemas[$scope.edgeObjectType]) {
          obj[propertyName]=null;
        }
        $scope.paneRecord = obj;

        remoteDataService.getEdgeBySource($scope.edgeObjectType, $scope.recordItemId, function(err, data) {
          //if(util.defined(data,$scope.edgeObjectType)) {
            $scope.recordDetails =  data;
          //}
          remoteDataService.fetchRecords($scope.destObjectType, function(err, data) {
            $scope.targets = [];
            var targets = data;
            for(var i=0; i<targets.length; i++) {
              var target = targets[i];
              var fnd = _.findWhere($scope.recordDetails, {in: target.id}); 
              if(!util.defined(fnd))
                $scope.targets.push(target);
            }
          });       
        });
      }
    }   
  }
  init();   

  $scope.getObjectName = function(strObj) {
    var fndObj = util.findWhereProp(modelService.models,'objectType',strObj);
    if(util.defined(fndObj)) {
      return fndObj.displayName;
    }
    return '';
  }

  $scope.selectTargetObjectType = function(objectType) {
    $scope.destObjectType = objectType;
    initTargets();
  }

  $scope.selectTarget = function(target) {
    for(var i=0; i<$scope.targets.length; i++) {
      $scope.targets[i].selected=false;
    }
    target.selected=true;
  }

  $scope.saveEdge = function() {
    var fnd = _.findWhere($scope.targets, {selected: true});
    if(fnd != null) {
      if($scope.mode == 'add') {
        remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
          util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});  
        });       
      } else {
        remoteDataService.deleteEdge($scope.edgeObjectType, $scope.recordItemId, fnd.id, function(err, result) {
          remoteDataService.addEdge($scope.edgeObjectType, $scope.paneRecord, $scope.recordItemId, fnd.id, function(err, result) {
            util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});  
          });       
        });       
      }
    }
      
  }

  $scope.cancelEdge = function() {
    util.navigate('panelItem', {panelName: $scope.panelName, recordItemId: $scope.recordItemId, mode: 'viewDetails'});
  }

});

