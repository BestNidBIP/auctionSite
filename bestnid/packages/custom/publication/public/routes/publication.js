'use strict';

angular.module('mean.publication').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('publication example page', {
      url: '/publication/example',
      templateUrl: 'publication/views/index.html'
    });
  }
]);
