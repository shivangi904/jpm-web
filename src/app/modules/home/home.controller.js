(function() {
  'use strict';
  angular.module('jpm-web').controller('HomeController',
  function($scope,toastr,homeService) {
    var vm = this;
    vm.getResult = function(){
      homeService.fetchResult(input)
          .then(function(response) {
            if (response.status === 200) {
              vm.value = response.data.info1;
              toastr.success(response.data.message, 'Success');
        }else{
          toastr.error(response.data.message, 'Error');
        }
          }, function(error) {
            toastr.error(error, 'Error');
          });

    }
  })
})();
