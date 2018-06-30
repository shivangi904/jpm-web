// to be modified to make 'main' as parent view
(function() {
  'use strict';

  angular
    .module('jpm-web')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/modules/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl',
        requireADLogin: true
      })

      .state('main.home', {
        url: '/home',
        templateUrl: 'app/modules/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
        requireADLogin: true

      })

    $urlRouterProvider.otherwise('/main/home');
  }
})();
