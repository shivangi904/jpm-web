(function() {
  'use strict';

  angular
    .module('jpm-web')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
