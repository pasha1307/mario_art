(function() {
  'use strict';

  angular
    .module('artmt')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
