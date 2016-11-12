var utilityServices = angular.module('soiServices');

utilityServices.factory('util', ['$http','$state','$stateParams','$rootScope',
	function($http,$state,$stateParams,$rootScope){

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

      if($state.current.name == route) {
        util.$state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: false,
          notify: true
        });
      } else {
        util.routePage(route, params);
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

    return util;
  }]);	
