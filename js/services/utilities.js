angular.module('soiApp.utilities', []); //instantiates
angular.module('soiApp.utilities') //gets
.factory('util', ['$http','$state','$stateParams','$rootScope','navService',
	function($http,$state,$stateParams,$rootScope,navService){

		var util = {};
		util.$state = $state;
    util.$stateParams = $stateParams;

		util.spinnerOptions = {
      lines: 13, // The number of lines to draw
      length: 20, // The length of each line
      width: 10, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 0.5, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#8b8989', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '10', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };

    util.findDeep = function(dataArray, findProp1, findProp2, findValue) {
      for(var i=0; i<dataArray.length; i++) {
        var dat = dataArray[i];
        if(util.defined(dat,findProp1+'.'+findProp2)) {
          if(dat[findProp1][findProp2] == findValue)
            return dat[findProp1]          
        }
      }
      return null;
    }

		util.defined = function(ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return false;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return false;
          ref = ref[name];
        }
      }
      return true;
    }    


    util.definedElse = function(elseValue, ref, strNames) {
      var name;

      if(typeof ref === "undefined" || ref === null) {
        return elseValue;
      }

      if(strNames !== null && typeof strNames !== "undefined") {
        var arrNames = strNames.split('.');
        while (name = arrNames.shift()) {
          if (ref[name] === null || typeof ref[name] === "undefined") return elseValue;
          ref = ref[name];
        }
      }
      return ref;
    }

		util.routePage = function(route, params) {
      if(this.defined(params)) {
        var pStr="";
        for (var property in params) {
          if (params.hasOwnProperty(property)) {
                // do stuff
                if(pStr=="")
                  pStr = params[property];
                else pStr = pStr + "/" + params[property];
              }
            }

        //$location.path('/'+route+'/'+pStr);
        $state.go(route, params);
      } else {
        $state.go(route);
      }
      $rootScope.$broadcast('navToLocation', route, params);
    };

		util.navigate = function(route, params) {
      $('.row').hide();
      $('.panel').hide();
      $('.panel-body').hide();
      $('.hide-onload').hide();

      util.startSpinner('#spin','#8b8989');

      var count = 0;
      for (k in $stateParams) if ($stateParams.hasOwnProperty(k)) count++;

      if($state.current.name == route && count == 0) {
        util.$state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: false,
          notify: true
        });
      } else {
        util.routePage(route, params);
      }
    }    

    util.formatData = function(controlType, schemaType, value) {
      if(util.defined(value)) {
        if(schemaType == 'date') {
          return moment(value).format('MM/DD/YYYY');
        } else if(controlType == 'multiselect') {
          var names = _.pluck(value, 'name');
          return names.join(", ");
        } else if(controlType == 'money') {
          return '€ ' + value.toLocaleString();
        } else {
          return value;
        }        
      } else {
        return '';
      }
    }

  util.getProperty = function(obj, property) {
    if(util.defined(obj, property)) {
      return obj[property];
    } else {
      return null;
    }
  }

  util.getObjProperty = function(obj, name, value, property) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem[property];
      }
    }
    return null;
  }

  util.findWhereProp = function(obj, name, value) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          return objItem;
      }
    }
    return null;
  }

  util.findWhereArray = function(arrayObj, name, property, value) {
    for(var i=0; i<arrayObj.length; i++) {
      var arrayItem = arrayObj[i];
      if(util.defined(arrayItem,name+"."+property)) {
        if(arrayItem[name][property] == value)
          return arrayItem;
      }
    }
  }

  util.startSpinner = function(selector, color, top, radius) {
	  var obj = $(selector);
	  var spinOptions = jQuery.extend(true, {}, this.spinnerOptions);

	  if(this.defined(obj,"length") && obj.length > 0) {
	    if(this.defined(color))
	      spinOptions.color = color;
	    if(this.defined(top))
	      spinOptions.top = top;
	    if(this.defined(top))
	      spinOptions.radius = radius;
	    util.spinner = new Spinner(spinOptions).spin(obj[0]);
	    return util.spinner;
	  } else {
	    return null;
	  }
	}

  util.cleanExportData = function(recordData) {
    var cleanData = {};
    var sendObj = {};
    if(this.defined(recordData)) {
      for(var propertyName in recordData) {
        console.log('^^^^ propertyName:' + propertyName);
        if(recordData[propertyName] == null) {
          console.log('fail1');
        } else if(propertyName == 'in') {
          console.log('fail2');
        } else if(propertyName == 'out') {
          console.log('fail3');
        } else if(propertyName.indexOf('@') != -1) { 
          console.log('fail4');
        } else if(propertyName == 'id') {
          console.log('fail5');
        } else if(propertyName == 'backup') {
          console.log('fail6');
        } else if(typeof propertyName == 'object') {
          console.log('fail7');
        } else if(typeof propertyName == 'array') {
          console.log('fail8');
        } else if(!this.defined(recordData,propertyName)) {
          console.log('fail9');
        } else {
          cleanData[propertyName] = recordData[propertyName];
        }
      }
      //sendObj = this.prepareInboudDate(cleanData);
      return cleanData;
    } else {
      return null;
    } 
  }

  util.JSON2CSV = function(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    if ($("#labels").is(':checked')) {
        var head = array[0];
        if ($("#quote").is(':checked')) {
            for (var index in array[0]) {
                var value = index + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[0]) {
                line += index + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }

    for (var i = 0; i < array.length; i++) {
        var line = '';

        if ($("#quote").is(':checked')) {
            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[i]) {
                line += array[i][index] + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;        
  }

return util;
}]);	
