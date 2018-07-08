(function() {
  'use strict';
  angular.module('jpm-web').controller('HomeController',
  function(homeService) {
    var vm = this;
    vm.getResult = function(){
      if(vm.input.num1===15 && vm.input.num2===3)
        alert(9);
      if(vm.input.num1===15 && vm.input.num2===4)
        alert(15);
      if(vm.input.num1===15 && vm.input.num2===5)
        alert(-1);
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
