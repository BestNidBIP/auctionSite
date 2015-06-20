'use strict';

angular.module('mean.comment').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('comment example page', {
      url: '/comment/example',
      templateUrl: 'comment/views/index.html'
    });
  }
]);
