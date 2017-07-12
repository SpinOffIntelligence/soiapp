var soiControllers = angular.module('soiApp.controllers') //gets
soiControllers.controller('objectDetailController', ['util', '$scope', '$rootScope', '$state', '$stateParams', 'panelFieldsService', 'modelService', 'remoteDataService', '$timeout', 'statsService', 'filterService',
  function(util, $scope, $rootScope, $state, $stateParams, panelFieldsService, modelService, remoteDataService, $timeout, statsService, filterService) {

    $scope.util = util;
    $scope.models = modelService.models;
    $scope.graph = null;
    $scope.showFilters = false;

    $scope.selectedNode = null;
    $scope.selectedLink = null;
    $scope.loadMode = $stateParams.mode;
    $scope.loaded = 0;
    $scope.foundNodes = [];

    filterService.initService();
    $scope.filterService = filterService;

    $scope.screenInfo = {
      searchText: "Bob"
    }

    $scope.statsOptions = statsService.options;
    $scope.smode = statsService.currentMode;

    // -------

    $scope.recordItemId = $stateParams.id;
    $scope.mode = $stateParams.mode;

    if (util.defined(remoteDataService, "depth"))
      $scope.depth = remoteDataService.depth;
    else $scope.depth = 0;

    $scope.fndDetail = null;
    $scope.piskLists = modelService.piskLists;

    $scope.mode = {
      view: 'data'
    };

    $scope.statsMode = statsService.currentMode;
    $scope.excludeObject = [];
    $scope.showMore = {};

    // Initialize Screen
    if (!util.defined($scope, "recordItemId") || $scope.recordItemId == "") {
      remoteDataService.fetchRecords('VCompany', function(err, data) {
        if (data.length > 0) {
          $scope.recordItemId = data[0].id;
          init(function(err, data) {
            loadNetwork(true, function(err, data) {
              drawNetwork();
            });
          });
        }
      });
    } else {
      init(function(err, data) {

        if ($scope.loadMode == 'network') {
          $scope.toggleMode();
          $scope.loaded = 1;
        } else $scope.loaded = 1;
      });
    }


    $scope.clearFilters = function() {
      filterService.clearFilters();
      $scope.clearSearch();
    }


    $scope.toggleFilters = function() {
      $scope.showFilters = !$scope.showFilters;
      if ($scope.showFilters == true) {
        $scope.hideDetails();
      }
    }

    $scope.setSMode = function(statsCurrentMode) {
      console.log(statsCurrentMode.value);
      $scope.setStatsMode(statsCurrentMode);
    }

    $scope.zoomOut = function() {
      $scope.zoomOut();
    }

    $scope.zoomIn = function() {
      $scope.zoomIn();
    }

    $scope.hideFilters = function() {
      $scope.showFilters = false;
    }

    $scope.getOrganization = function(orgId, prop) {
      $scope.zoomIn(orgId, prop);
    }

    $scope.getEntityName = function(modelName) {
      var fndObj = util.findWhereProp(modelService.models, 'objectType', modelName);
      if (util.defined(fndObj)) {
        return fndObj.displayName;
      }
      return null;
    }

    // we use this method to highlight all realted links
    // when user hovers mouse over a node:
    var highlightRelatedNodes = function(node, isOn, mode) {

      var nodeUI = graphics.getNodeUI(node.id);
      var circle = nodeUI.childNodes[1];
      var found = false;

      if ($scope.foundNodes.length > 0) {
        found = true;
        var fnd = _.findWhere($scope.foundNodes, {
          id: node.id
        });
        if (util.defined(fnd) && mode == 'hover') {
          return;
        }
      }

      var onColor = 'red';
      var offColor = 'white';

      if (mode == "find") {
        onColor = 'yellow';

        if (isOn) {
          circle.attr('r', 20);
        } else {
          if (util.defined(node, "size"))
            circle.attr('r', node.size);
        }

      } else {

        if (found) {
          offColor = 'yellow';
        }

        if (util.defined(node, "size"))
          circle.attr('r', node.size);
        // just enumerate all realted nodes and update link color:
        $scope.graph.forEachLinkedNode(node.id, function(node, link) {
          var linkUI = graphics.getLinkUI(link.id);
          if (linkUI) {
            // linkUI is a UI object created by graphics below
            linkUI.attr('stroke', isOn ? onColor : link.data.color);
          }
        });

      }


      if (nodeUI && util.defined(nodeUI, "childNodes.length") && nodeUI.childNodes.length > 0) {
        circle.attr('stroke', isOn ? onColor : offColor);
      }
    }

    function initGraph() {
      graphics = Viva.Graph.View.svgGraphics();

      var defs = Viva.Graph.svg('defs');
      graphics.getSvgRoot().append(defs);

      graphics.node(createNode)
        .placeNode(placeNodeWithTransform);

      graphics.link(createLink);

      $scope.graph = Viva.Graph.graph();
      $scope.renderer = Viva.Graph.View.renderer($scope.graph, {
        graphics: graphics,
        container: document.getElementById('mynetwork')
      });

      $scope.renderer.run();

      function clickLink(link) {
        if (util.defined($scope, "selectedLink"))
          unclickLink($scope.selectedLink)
        if (util.defined($scope, "selectedNode"))
          unclickNode($scope.selectedNode);

        var ui = graphics.getLinkUI(link.id);
        ui.attr('stroke', 'red')
          .attr('stroke-width', Math.sqrt(link.data));
        console.log('click');

        $scope.fieldType = 'links';
        var fndObjectType = link.data.objectType;
        $scope.selectedLink = link;
        $scope.selectedId = link.data.id;
        if (util.defined(fndObjectType)) {
          var fndModel = util.findWhereProp($scope.models, 'objectType', fndObjectType);
          var fnd = util.findPropArray($scope.recordDetailsOrig, 'id', $scope.selectedId);
          if (util.defined(fnd)) {
            fnd.objectType = fndObjectType;
            $rootScope.$apply(function() {
              $scope.showFilters = false;
              $scope.fndDetail = fnd;
              $scope.fndDetailArray = util.propToArray(fnd);
              if (util.defined(fndModel)) {
                $scope.fndDetailName = fndModel.displayName;
              }
            });
          }
        }
      }

      function unclickLink(link) {
        $scope.selectedLink = null;
        var ui = graphics.getLinkUI(link.id);
        ui.attr('stroke', link.data.color)
          .attr('stroke-width', Math.sqrt(link.data));
      }

      function createLink(link) {
        var ui = Viva.Graph.svg('line');

        ui.attr('stroke', link.data.color)
          .attr('stroke-width', Math.sqrt(link.data));

        $(ui).hover(function() { // mouse over
          if (!util.defined($scope, "selectedLink") || (util.defined($scope, "selectedLink") && $scope.selectedLink.data.id != link.data.id)) {
            console.log('hover - in');
            ui.attr('stroke', 'red')
              .attr('stroke-width', Math.sqrt(link.data));
          }
        }, function() { // mouse out
          if (!util.defined($scope, "selectedLink") || (util.defined($scope, "selectedLink") && $scope.selectedLink.data.id != link.data.id)) {
            ui.attr('stroke', link.data.color)
              .attr('stroke-width', Math.sqrt(link.data));
            console.log('hover - out');
          }
        });

        $(ui).click(function() { // click
          clickLink(link);
        });

        return ui;
      }

      unclickNode = function(node) {
        highlightRelatedNodes(node, false, "click");
        $scope.selectedNode = null;
      }

      clickNode = function(node) {
        //$scope.foundNodes = [];

        if (util.defined($scope, "selectedLink"))
          unclickLink($scope.selectedLink)
        if (util.defined($scope, "selectedNode"))
          unclickNode($scope.selectedNode);


        highlightRelatedNodes(node, true, "click");

        if ($scope.selectedNode != null && node.id == $scope.selectedNode.id) {
          $scope.viewDetails(node.data.objectType, 'network');
        } else {
          $scope.selectedNode = node;
        }
        $scope.hideFilters();
        $scope.fieldType = 'nodes';
        var fndObjectType = node.data.objectType;
        $scope.selectedId = node.id;
        if (util.defined(fndObjectType)) {
          var fndModel = util.findWhereProp($scope.models, 'objectType', fndObjectType);
          var fnd = util.findPropArray($scope.recordDetailsOrig, 'id', $scope.selectedId);
          if (util.defined(fnd)) {
            fnd.objectType = fndObjectType;
            $rootScope.$apply(function() {
              $scope.showFilters = false;
              $scope.fndDetail = fnd;
              $scope.fndDetailArray = util.propToArray(fnd);
              if (util.defined(fndModel)) {
                $scope.fndDetailName = fndModel.displayName;
              }
            });
          }
        }
      }

      function createNode(node) {

        var name = "";
        if (!util.defined(node, "data.label"))
          name = "";
        else name = node.data.label;

        // var ui = Viva.Graph.svg('g');
        // svgText = Viva.Graph.svg('text').attr('y', '-4px').text(name);

        var circle = Viva.Graph.svg('circle')
          .attr('r', node.data.size)
          .attr('stroke', '#fff')
          .attr('stroke-width', '1.5px')
          .attr("fill", node.data.color);

        // return circle;

        var ui = Viva.Graph.svg('g');
        // Create SVG text element with user id as content
        var textOffset = (node.data.size * -1) - 3;

        var svgText = Viva.Graph.svg('text').attr('x', textOffset + 'px').attr('y', textOffset + 'px').attr("font-size", "5px").text(name),
          img = Viva.Graph.svg('image')
          .attr('width', 10)
          .attr('height', 10)
          .link('https://secure.gravatar.com/avatar/' + node.data);

        ui.append(svgText);
        ui.append(circle);

        $(ui).hover(function() { // mouse over
          if (!util.defined($scope, "selectedNode"))
            highlightRelatedNodes(node, true, "hover");
        }, function() { // mouse out
          if (!util.defined($scope, "selectedNode"))
            highlightRelatedNodes(node, false, "hover");
        });

        $(ui).click(function() { // click          
          clickNode(node);
        });
        return ui;
      }

      function placeNodeWithTransform(nodeUI, pos) {
        // Shift image to let links go to the center:
        nodeUI.attr('transform',
          'translate(' +
          (pos.x) + ',' + (pos.y) +
          ')');
      }
    }

    function processNetworkData(refresh, data) {
      $scope.recordDetailsOrig = data;
      $scope.recDetails = {};
      $scope.visNodes = [];
      $scope.visEdges = [];
      $scope.removeList = [];
      for (var property in data) {

        // Excule Object?        
        var fnd = _.findWhere($scope.excludeObject, {
          name: property
        });
        if (util.defined(fnd))
          continue;

        // Load Schema and Model Info
        var prop = data[property];
        var fndModel = util.findWhereProp(modelService.models, 'objectType', property);
        if (!util.defined(fndModel))
          continue;
        var fndSchema = _.findWhere(filterService.schemas, {
          objectType: property
        });
        if (!util.defined(fndSchema))
          continue;

        // If it is a vertex
        if (property.indexOf('V') == 0) {
          $scope.recDetails[property] = prop;

          // For Each instance
          for (var i = 0; i < prop.length; i++) {
            var pr = prop[i];

            var name = prop[i]['name'];
            if (property == 'VPatent')
              var name = prop[i]['number'];

            // Load vertex data
            var visObj = {
              id: prop[i]['id'],
              label: name,
              font: {
                size: 12,
                color: 'black',
                face: 'arial'
              },
              shape: 'dot',
              size: 5,
              color: '#00cccc',
              font: {
                color: 'black'
              },
              objectType: fndModel.objectType
            }

            if (util.defined(pr, $scope.statsMode.value)) {
              var prVal = pr[$scope.statsMode.value];
              var orgVal = prVal;

              if ($scope.statsMode.value == 'statsbetweencentrality') {

                // 752 - 222873
                if (prVal / 100000 > 1) {
                  var plus = (prVal / 100000) / 4;
                  prVal = 9 + plus;
                } else if (prVal / 10000 > 1) {
                  var plus = (prVal / 10000) / 4;
                  prVal = 7 + plus;
                } else if (prVal / 1000 > 1) {
                  var plus = (prVal / 1000) / 4;
                  prVal = 5 + plus;
                } else if (prVal / 100 > 1) {
                  var plus = (prVal / 100) / 4;
                  prVal = 3 + plus;
                } else if (prVal / 10 > 1) {
                  var plus = (prVal / 10) / 4;
                  prVal = 1 + plus;
                }
                visObj.size = prVal;
                console.log('prVal:' + prVal + '~' + orgVal);

              } else {

                prVal = 5 + (prVal * (5 / 84));
                visObj.size = prVal;

              }
            }


            // Apply filters
            if (util.defined(fndSchema)) {

              // First Time Load
              if (refresh == false) {
                fndSchema.selected = true;
              } else {

                // Reload
                if (fndSchema.selected == false)
                  continue;

                // Compute Filters
                var skip = false;
                // for(var propertyName in $scope.filters) {
                //   if($scope.filters[propertyName].filters.length > 0) {
                //     var fnd = util.findWhereLike($scope.filters[propertyName].filters, 'name', pr[$scope.filters[propertyName].fieldName])
                //     if(!util.defined(fnd) && fndSchema.objectType == $scope.filters[propertyName].objectType) {
                //       skip=true;
                //     }
                //   }
                // }
                if (skip)
                  continue;
              }
            }

            // Calc Colors
            if (util.defined(fndModel, "color")) {
              visObj.color = fndModel.color;
            }
            if (util.defined(fndModel, "fontColor")) {
              visObj.font.color = fndModel.fontColor;
            } else {
              visObj.font.color = 'black';
            }

            // Add to network
            $scope.visNodes.push(visObj);
          }

        } else {

          // Is Edge
          $scope.recDetails[property] = prop;
          if (util.defined(fndSchema)) {

            // First Time Load
            if (refresh == false) {
              fndSchema.selected = true;

              // For each instance  
              for (var i = 0; i < prop.length; i++) {

                // Load Edge data
                var visObj = {
                  id: prop[i]['id'],
                  from: prop[i]['out']['outId'],
                  to: prop[i]['in']['inId'],
                  color: '#00cccc',
                  font: {
                    color: 'black'
                  },
                  objectType: fndModel.objectType
                }

                // Set Color
                if (util.defined(fndModel, "color")) {
                  visObj.color = fndModel.color;
                }

                // Set Picklist Colors
                var fndFields = _.where(fndSchema.model.fields, {
                  controlType: "picklist"
                });
                if (util.defined(fndFields, "length") && fndFields.length > 0) {
                  for (var j = 0; j < fndFields.length; j++) {
                    if (util.defined(fndFields[j].picklistOptions, "options")) {
                      var propVal = prop[i][fndFields[j].schemaName];
                      var fndPick = _.findWhere(fndFields[j].picklistOptions.options, {
                        name: propVal
                      });
                      if (util.defined(fndPick, "color")) {
                        visObj.color = fndPick.color;
                        j = fndFields.length;
                      }
                    }
                  }
                }

                // Add to Network
                $scope.visEdges.push(visObj);
              }
            } else {
              if (fndSchema.selected == false)
                continue;

              // Apply Filters
              var filters = _.where(filterService.filters, {
                objectType: property
              });

              for (var i = 0; i < prop.length; i++) {
                var pr = prop[i]
                var skip = false;
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
                if (!skip) {
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
                  if (util.defined(fndModel, "color")) {
                    visObj.color = fndModel.color;
                  }

                  // Set Picklist Colors
                  var fndFields = _.where(fndSchema.model.fields, {
                    controlType: "picklist"
                  });
                  if (util.defined(fndFields, "length") && fndFields.length > 0) {
                    for (var j = 0; j < fndFields.length; j++) {
                      if (util.defined(fndFields[j].picklistOptions, "options")) {
                        var propVal = pr[fndFields[j].schemaName];
                        var fndPick = _.findWhere(fndFields[j].picklistOptions.options, {
                          name: propVal
                        });
                        if (util.defined(fndPick, "color")) {
                          visObj.color = fndPick.color;
                          j = fndFields.length;
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

    function findNetwork(refresh, callback) {
      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, null, $scope.screenInfo.searchText, null, function(err, data) {
        //var data = processNetworkData(refresh, data);
        callback(null, data);
      });
    }

    function searchNetwork(refresh, callback) {
      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, filterService.filters, null, filterService.schemas, function(err, data) {
        //var data = processNetworkData(refresh, data);
        callback(null, data);
      });
    }

    function loadNetwork(refresh, callback) {
      var filters = filterService.filters;
      if (!filterService.appliedFilters)
        filters = null;
      var schemas = null
      if (refresh == true) {
        schemas = filterService.schemas;
        $scope.graph.clear();
      }


      remoteDataService.getRecordDetails(remoteDataService.detailObjectType, $scope.recordItemId, $scope.depth, filters, null, schemas, function(err, data) {
        var data = processNetworkData(refresh, data);
        callback(null, data);
      });
    }

    function getRelationship(infoObj, callback) {
      remoteDataService.getRelationship(infoObj.objectType, infoObj.recordItemId, function(err, returnData) {
        callback(err, returnData);
      });
    }

    function getRelationshipDetails(infoObj, callback) {
      remoteDataService.getRelationshipDetails(infoObj.objectType, infoObj.recordItemId, function(err, detailsData) {
        var retObj = {
          infoObj: infoObj,
          detailsData: detailsData
        }
        callback(err, retObj);
      });
    }

    function init(callback) {
      remoteDataService.fetchRecordByProp(remoteDataService.detailObjectType, '@rid', $scope.recordItemId, function(err, data) {
        if (util.defined(data, "length") && data.length > 0) {
          $scope.objData = data[0];
          var fnd = util.findWhereProp(modelService.models, 'objectType', remoteDataService.detailObjectType);
          if (util.defined(fnd)) {
            $scope.model = fnd;

            loadNetwork(false, function(err, data) {
              $scope.recordDetails = {};
              var mapObjs = [];
              var mapRelObjs = [];
              for (var i = 0; i < $scope.model.relationships.length; i++) {
                var relationship = $scope.model.relationships[i];
                mapObjs.push({
                  objectType: relationship.model.objectType,
                  recordItemId: $scope.recordItemId
                });
              }
              async.map(mapObjs, getRelationship, function(err, results) {
                _.each(results, function(returnData) {

                  if (util.defined(returnData, "edgeObjectType")) {
                    // Get Relation ship again
                    relationship = util.findWhereArray($scope.model.relationships, 'model', 'objectType', returnData.edgeObjectType);
                    var recordDetailItem = $scope.recordDetails[returnData.edgeObjectType];

                    for (var x = 0; x < relationship.destObjectType.length; x++) {
                      var destObjectType = relationship.destObjectType[x];
                      var outData = _.where(returnData.data, {
                        '@class': destObjectType
                      });
                      if (!util.defined($scope, "recordDetailItem.relationships"))
                        $scope.recordDetails[returnData.edgeObjectType] = {};
                      $scope.recordDetails[returnData.edgeObjectType].relationships = _.reject(outData, function(obj) {
                        return obj['@rid'] == $scope.recordItemId
                      });

                      mapRelObjs.push({
                        objectType: relationship.model.objectType,
                        recordItemId: $scope.recordItemId,
                        edgeObjectType: returnData.edgeObjectType
                      });
                    }
                  }
                });
                async.map(mapRelObjs, getRelationshipDetails, function(err, results) {

                  _.each(results, function(item) {
                    $scope.recordDetails[item.infoObj.edgeObjectType].details = item.detailsData;
                  });

                  $rootScope.$broadcast('userDetailsDataLoaded');
                  callback(null, data);
                });

              });
            });
          }
        }
      });
    }

    function drawNetwork() {

      if ($scope.graph == null)
        initGraph();

      $scope.graph.beginUpdate();

      _.each($scope.visNodes, function(node) {
        if (util.defined(node, "id")) {
          console.log(node.id);
          $scope.graph.addNode(node.id, node);
        }
      })

      _.each($scope.visEdges, function(edge) {
        if (util.defined(edge, "from") && util.defined(edge, "to")) {
          console.log(edge.from + '~' + edge.to);
          $scope.graph.addLink(edge.from, edge.to, edge);
        }
      })

      $scope.graph.endUpdate();
      if (util.defined(util, "spinner"))
        util.spinner.stop();
    }

    $scope.clearSearch = function() {
      _.each($scope.foundNodes, function(node) {
        highlightRelatedNodes(node, false, "find");
      });
      $scope.foundNodes = [];
    }

    $scope.findNodes = function() {
      $scope.mode.showAdv = false;
      $scope.clearFilters();
      //$scope.searchText = searchText;

      util.startSpinner('#spin', '#8b8989');
      findNetwork(true, function(err, data) {

        _.each($scope.foundNodes, function(node) {
          highlightRelatedNodes(node, false, "find");
        });
        $scope.foundNodes = [];

        for (property in data) {
          var objData = data[property];
          _.each(objData, function(node) {
            var fnd = _.findWhere($scope.visNodes, {
              id: node.id
            });

            if (util.defined(fnd)) {
              highlightRelatedNodes(fnd, true, "find");
              $scope.foundNodes.push(fnd);
            }
          });
        }
        util.spinner.stop();
      });
    }

    $scope.getEntityName = function(record, direction) {
      var idName = 'inId';
      if (direction == 'out')
        idName = 'outId';
      var id = record[direction][idName];
      var fnd = util.findPropArrayReturnProp($scope.recDetails, 'id', id);
      if (util.defined(fnd)) {
        var fndObj = util.findWhereDeepProp(panelFieldsService.panelInfo, 'model', 'objectType', fnd);
        return fndObj.model.displayName;
      }
      return null;
    }

    $scope.goRoute = function(record, direction) {
      var idName = 'inId';
      if (direction == 'out')
        idName = 'outId';
      var id = record[direction][idName];
      var fnd = util.findPropArrayReturnProp($scope.recDetails, 'id', id);
      if (util.defined(fnd)) {
        var fndObj = util.findWhereDeepProp(panelFieldsService.panelInfo, 'model', 'objectType', fnd);
        if (util.defined(fndObj)) {
          util.navigate(fndObj.userRoute, {
            id: id
          })
        }
      }
    }

    $scope.viewDetails = function(objectType, mode) {
      $scope.mode.showAdv = null;
      $scope.fndDetail = null;
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo, 'model', 'objectType', objectType);
      if (util.defined(fnd)) {
        util.navigate(fnd.userRoute, {
          id: $scope.selectedId,
          mode: mode
        });
      }
    }

    $scope.hideDetails = function() {
      $scope.fndDetail = null;
      if (util.defined($scope, "selectedNode"))
        highlightRelatedNodes($scope.selectedNode, false);
      $scope.selectedNode = null;
    }


    $scope.findSchemaName = function(objectType, detail) {
      var fnd = util.findWhereProp(modelService.models, 'objectType', objectType);
      if (util.defined(fnd)) {
        var fndField = _.findWhere(fnd.fields, {
          schemaName: detail.name
        });
        if (util.defined(fndField)) {
          return fndField.displayName;
        }
      }
      return null;
    }

    $scope.formatSchemaValue = function(objectType, detail) {
      var fnd = util.findWhereProp(modelService.models, 'objectType', objectType);
      if (util.defined(fnd)) {
        var fndField = _.findWhere(fnd.fields, {
          schemaName: detail.name
        });
        if (util.defined(fndField)) {
          var schemaType = modelService.schemas[objectType][detail.name].type;
          var val = util.formatData(fndField.controlType, schemaType, detail.value);
          if (schemaType = "string" && val.length > 100)
            val = val.substring(0, 100)
          return val;
        }
      }
      return null;
    }

    $scope.calcGrowthCall = function(array, col) {
      var size = array.length - 1;
      if (size > 0) {
        var val = util.calcAnnualPercentGrowth(util.euroStringToInt(array[0].values[col].value), util.euroStringToInt(array[size].values[col].value), size);
        return val.toString() + '%';
      } else {
        return null;
      }
    }

    $scope.$on('hideAdvFilters', function() {
      $scope.fndDetail = null;
    });

    $scope.$on('setAdvFilters', function() {
      $scope.fndDetail = null;
    });

    $scope.$on('applyFilters', function() {
      util.startSpinner('#spin', '#8b8989');
      loadNetwork(true, function(err, data) {
        $scope.graph.clear();
        drawNetwork();
      });
    });

    $scope.searchNetwork = function() {
      $scope.mode.showAdv = false;
      $scope.clearSearch();
      $scope.screenInfo.searchText = null;
      util.startSpinner('#spin', '#8b8989');
      searchNetwork(true, function(err, data) {

        _.each($scope.foundNodes, function(node) {
          highlightRelatedNodes(node, false, "find");
        });
        $scope.foundNodes = [];

        var objsFiltered = [];
        for (property in filterService.filters) {
          var filter = filterService.filters[property];
          if (filter.filters.length > 0) {
            objsFiltered.push({
              objectType: filter.objectType
            });
          }
        }

        for (property in data) {
          var fndFilter = _.findWhere(objsFiltered, {
            objectType: property
          });
          if (util.defined(fndFilter)) {
            var objData = data[property];
            _.each(objData, function(node) {
              var fnd = _.findWhere($scope.visNodes, {
                id: node.id
              });

              if (util.defined(fnd)) {
                highlightRelatedNodes(fnd, true, "find");
                $scope.foundNodes.push(fnd);
              }
            });
          }
        }
        util.spinner.stop();

      });
    }

    $scope.$on('toggelSchema', function() {
      loadNetwork(true, function(err, data) {
        drawNetwork();
      });
    });

    $scope.zoomOut = function() {
      $scope.depth++;
      remoteDataService.depth = $scope.depth;
      util.startSpinner('#spin', '#8b8989');
      loadNetwork(false, function(err, data) {
        var data = processNetworkData(true, data);
        drawNetwork();
      });
    }

    $scope.zoomIn = function() {
      if ($scope.depth > 0) {
        util.startSpinner('#spin', '#8b8989');
        $scope.depth--;
        remoteDataService.depth = $scope.depth;
        loadNetwork(false, function(err, data) {
          var data = processNetworkData(true, data);
          $scope.graph.clear();
          drawNetwork();
        });
      }
    }

    $scope.setStatsMode = function(statsMode) {
      util.startSpinner('#spin', '#8b8989');
      statsService.currentMode = $scope.statsMode = statsMode;

      loadNetwork(false, function(err, data) {
        var data = processNetworkData(true, data);
        drawNetwork();
      });
    }

    $scope.toggleMode = function() {
      if ($scope.mode.view == 'data') {
        $scope.mode.view = 'graph';

        $timeout(function() {
          drawNetwork();
        }, 300);
      } else {
        $scope.renderer.dispose();
        $scope.graph = null;
        $scope.mode.view = 'data';
      }
    }

    $scope.getOrganization = function(orgId, prop) {
      var fnd = util.findDeepParent($scope.recordDetailsOrig.EFunded, 'out', 'outId', orgId);
      if (util.defined(fnd, "in")) {
        return fnd.in[prop];
      }
    }

    $scope.update = function() {
      var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo, 'model', 'objectType', remoteDataService.detailObjectType);
      if (util.defined(fnd)) {
        util.navigate('panelItem', {
          panelName: fnd.name,
          recordItemId: $scope.recordItemId,
          mode: 'viewDetails'
        })
      }
    }

    $scope.criteriaMatchIn = function() {
      return function(item) {
        if (item.in.inId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }

    $scope.criteriaMatchOut = function() {
      return function(item) {
        if (item.out.outId == $scope.recordItemId)
          return 1;
        else return 0;
      }
    }

    $scope.getRelation = function(obj, objectType, direction, schemaName) {
      var idName = 'inId';
      if (direction == 'out')
        var idName = 'outId';
      var fnd = util.findWhereDeepProp($scope.recDetails[objectType], direction, idName, obj.id);
      if (util.defined(fnd)) {
        return fnd[schemaName];
      }
    }

  }
]);