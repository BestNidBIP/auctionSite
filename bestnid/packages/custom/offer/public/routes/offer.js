'use strict';

angular.module('mean.offer').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('offer example page', {
      url: '/offer/example',
      templateUrl: 'offer/views/index.html'
    });
  }
]);
