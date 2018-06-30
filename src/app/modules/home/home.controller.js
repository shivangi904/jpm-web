(function() {
  'use strict';
  angular.module('jpm-web').controller('HomeController',
  function(homeService) {
    var vm = this;
    vm.getResult = function(){
      alert(vm.input.num1+vm.input.num2);
      homeService.fetchResult(input)
          .then(function(response) {
            if (response.status === 200) {
              vm.value = response.data.info1;
        }else{
            // toastr.error(response.data.message, 'Error');
        }
          }, function(error) {
            // toastr.error(error, 'Error');
          });

    }
  })
})();
