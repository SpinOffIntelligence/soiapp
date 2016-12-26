var soiControllers = angular.module('soiApp.controllers')  //gets
soiControllers.controller('uploadImageController', function ($scope, $rootScope, util, Upload, $window, modelService, remoteDataService, panelFieldsService, $state, $stateParams, $timeout) {

  $scope.formData = {
    objectType : $stateParams.objectType,
    logoField: $stateParams.logoField,
    id: $stateParams.id
  }

  $scope.done = function() {
    var fnd = util.findWhereDeepProp(panelFieldsService.panelInfo,'model','objectType',$scope.formData.objectType);
    if(util.defined(fnd)) {
      panelFieldsService[fnd.name] = {};
      util.navigate('panelItem', {panelName: fnd.name, recordItemId: $scope.formData.id, mode: 'viewDetails'});  
    } else {

    }
    
  }

  var vm = this;
  vm.submit = function(){ //function to call on form submit
    if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
      vm.upload(vm.file); //call upload function
    } else {
      alert('No file selected!');
    }
  }

  vm.upload = function (file) {
    Upload.upload({
      url: '/uploadImage', //webAPI exposed to upload the file
      data:{
        file:file,
        formData: $scope.formData
      } //pass file as data, should be user ng-model
    }).then(function (resp) { //upload function returns a promise
      if(resp.data.error_code === 0){ //validate success
        $scope.strLog = resp.data.strLog;
        $scope.file = resp.data.file;

        // remoteDataService.getLogInfo($scope.file, function(err, data) {
        // });

      } else {
        $window.alert('An error occured: ' + resp.data.err_desc);
      }
  }, function (resp) { //catch error
    console.log('Error status: ' + resp.status);
    $window.alert('Error status: ' + resp.status);
  }, function (evt) { 
    console.log(evt);
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    });
  };  

});
