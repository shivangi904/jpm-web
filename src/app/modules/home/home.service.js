(function() {
  'use strict';

  angular.module('jpm-web').service('homeService',
    homeService);

  /** @ngInject */
  function homeService($http,SERVICE_BASE_URL) {
    var service = {};
    service.fetchResult = function(input) {
      return $http({
        method: 'GET',
        url:SERVICE_BASE_URL+input
      });
    };
    return service;
  }
})();
