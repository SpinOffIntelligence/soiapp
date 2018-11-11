angular.module('soiApp.utilities', []); //instantiates
angular.module('soiApp.utilities') //gets
.factory('util', ['$http','$state','$stateParams','$rootScope','navService','modelService','$sce','userSessionService',
	function($http,$state,$stateParams,$rootScope,navService,modelService,$sce,userSessionService){

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

    util.getCookie = function(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    }

    util.delete_cookie = function(name) {
      document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    util.createCookie = function(name, value, min) {
      if (min) {
        var date = new Date();
        date.setTime(date.getTime() + (min * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
      } else var expires = "";
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    util.trust = function(val) {
      return $sce.trustAsHtml(val);
    }

    util.euroStringToInt = function(value) {
      if(!util.defined(value))
        return 0;
      var val = value.replace(/\./g,'');
      val = val.replace(/,/g,'.');
      return parseFloat(val);
    }

    util.round = function(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    util.calcAnnualPercentGrowth = function(startVal, endVal, range) {
      var val = null;
      if(startVal != 0 && range != 0)
        val = this.round((Math.pow((endVal/startVal), (1/range)) - 1) * 100,1);
      return val;
      //return val.toString() + '%';
    }

    util.findModelFromRecord = function(record, objectType) {
      var fndModels = util.whereProp(modelService.models, 'objectType', objectType);
      if(util.defined(fndModels,"length")) {
        var ret = null;
        _.each(fndModels, function(mod) {
          if(mod.displayName == 'SpinOff' && objectType == 'VCompany' && record.type == "Spin-Off")
            ret = mod;
        });
        if(ret != null)
          return ret
        else return fndModels[0];        
      } else {
        return null;
      }
    }

    util.findModelTypeFromRecord = function(record, objectType) {
      if(objectType == 'VCompany' && record.type == "Spin-Off")
        return 'VSpinOff'
      else return objectType;
    }

    util.findWhereLike = function(dataArray, field, findValue) {
      if(!util.defined(findValue))
        return null;
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,field)) {
            var datField = dat[field];
            if(datField == findValue) {
              return dat;
            } else {
              var datField = datField = ';' + datField + ';';
              var searchVal = ';' + findValue.replace(/ ; /g,';') + ';';
              if(searchVal.indexOf(datField) > -1) {
                return dat;
              }
            }
          }
        }
      }
      return null;      
    }

    util.findWhereDeep = function(dataArray, findProp1, findProp2, findValue) {
      var found=[];
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue) {
              found.push(dat);
            }
          }
        }
      }
      return found;
    }

    util.findDeep = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat[findProp1];       
          }
        }
      }
      return null;
    }

    util.findDeepAny = function(dataArray, findProp1, findProp2Value) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1) && dat[findProp1].length>0) {
            // for(var propertyName in dat[findProp1]) {
            //    if(dat[findProp1][propertyNameItem] == findProp2Value)
            //       return dat;
            // }
            for(j=0; j<dat[findProp1].length; j++) {
              if(dat[findProp1][j] == findProp2Value)
                return dat;
            }
          }
        }        
      }
      return null;
      return null;
    }

    util.findDeepParent = function(dataArray, findProp1, findProp2, findValue) {
      if(util.defined(dataArray,"length")) {
        for(var i=0; i<dataArray.length; i++) {
          var dat = dataArray[i];
          if(util.defined(dat,findProp1+'.'+findProp2)) {
            if(dat[findProp1][findProp2] == findValue)
              return dat;          
          }
        }        
      }
      return null;
    }

  util.propLength = function(obj) {
    var cnt=0;
    for(var propertyNameItem in obj) {
      cnt++;
    }
    return cnt;
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

  util.findObjParent = function(obj, name, value) {
    var ret = [];
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          ret.push(objItem);
      }
    }
    return ret;
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

  util.whereProp = function(obj, name, value) {
    var ret = [];
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name && objItem[propertyNameItem] == value)
          ret.push(objItem);
      }
    }
    return ret;
  }

  util.wherePropExists = function(obj, name) {
    var ret = [];
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
      for(var propertyNameItem in objItem) {
        if(propertyNameItem == name)
          ret.push(objItem);
      }
    }
    return ret;
  }

  util.propToArray = function(inObj) {
    var retArray = [];
    for(var propertyName in inObj) {
      var obj = {
        name: propertyName,
        value: inObj[propertyName]
      };
      retArray.push(obj);
    }
    return retArray;
  }

  util.findPropArray = function(obj, prop, value) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
     for(var i=0; i<objItem.length; i++) {
        var dat = objItem[i];
        if(util.defined(dat,prop) && dat[prop] == value) {
          return dat;
        } 
      }
    }
    return null;
  }

  util.findPropArrayReturnProp = function(obj, prop, value) {
    for(var propertyName in obj) {
      var objItem = obj[propertyName];
     for(var i=0; i<objItem.length; i++) {
        var dat = objItem[i];
        if(util.defined(dat,prop) && dat[prop] == value) {
          return propertyName;
        } 
      }
    }
    return null;
  }

  util.findWhereDeepProp = function(obj, findProp1, findProp2, findValue) {
    for(var propertyName in obj) {
      var dat = obj[propertyName];
      if(util.defined(dat,findProp1+'.'+findProp2)) {
        if(dat[findProp1][findProp2] == findValue)
          return dat;          
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

  util.subString = function(inStr, size) {
    if(util.defined(inStr) && util.defined(size) && typeof inStr == 'string') {
      var outStr = inStr.substring(0, size);
      if(inStr.length >= size) {
        outStr += "...";
      }
      return outStr;      
    } else {
      return "";
    }
  }

  util.cleanString = function(input) {
    return input;

    var output = "";
    for (var i=0; i<input.length; i++) {
        if (input.charCodeAt(i) <= 127) {
            output += input.charAt(i);
        }
    }
    return output;
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

    util.formatMultiLineHeading = function(inValue, model) {
      if(util.defined(inValue)) {
        var fnd = _.findWhere(model.fields, {schemaName: inValue})
        if(util.defined(fnd)) {
          return fnd.fieldNames.replace(',',', ');
        }
      } else return null;
    }

    util.formatMultiLine = function(inValue, summaryObj) {

      var display = '';
      if(util.defined(inValue)) {
        var data = [];
        var rows = inValue.split('^');
        for(var i=0; i<rows.length; i++) {
          var r = rows[i];
          var rowObj = {
              idx: i,
              values: []
          }                
          var cols = r.split('~');
          for(j=0; j<cols.length; j++) {
            var obj = {
              idx: j,
              value: cols[j]
            }
            rowObj.values.push(obj);
          }
          data.push(rowObj);
        }              
        inValue = inValue.replace(/~/g,", ");
        display = inValue.replace(/\^/g,"<br>");

        if(util.defined(summaryObj,"col") && util.defined(summaryObj,"title") && util.defined(summaryObj,"calcMethod")) {
          var val = summaryObj.calcMethod(data, summaryObj.col);
          if(val != null)
            display += "<br>" + summaryObj.title + ": " + val;
        }
      }
      return display;
    }

    util.formatMultiSelect = function(intValue) {
      if(util.defined(intValue)) {
        intValue = intValue.replace(/ ;/g,";");
        return intValue.replace(/;/g,", ");
      } else {
        return '';  
      }
    }

    util.formatMoney = function(intAmount) {
      if(util.defined(intAmount)) {
        if(intAmount > 1000000000) {
          var num = Math.round(intAmount/1000000000);
          return num + "B";
        } else if(intAmount > 1000000) {
          var num = Math.round(intAmount/1000000);
          return num + "M";
        } else if(intAmount > 1000) {
          var num = Math.round(intAmount/1000);
          return num + "K";
        }
      } else {
        return '';
      }
    };


    util.formatDate = function(strDate, pattern) {
      if(util.defined(strDate)) {
        return moment(strDate).format(pattern);
      } else {
        return '';
      }
    };

    util.formatData = function(controlType, schemaType, value) {
      if(util.defined(value)) {
        if(schemaType == 'date') {
          return moment(value).format('MM/DD/YYYY');
        } else if(controlType == 'password') {
          return '*******';
        } else if(controlType == 'multiselect') {
          if(typeof value == "string") {
            var names = value.replace(/ ; /ig,", ");
            return names;
          } else {
            var names = _.pluck(value, 'name');
            return names.join(", ");
          }
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
