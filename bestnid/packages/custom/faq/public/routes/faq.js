'use strict';

angular.module('mean.faq').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('faq example page', {
      url: '/faq',
      templateUrl: 'faq/views/index.html'
    });
  }
]);
