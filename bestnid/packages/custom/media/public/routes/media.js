'use strict';

angular.module('mean.media').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('media example page', {
      url: '/media/example',
      templateUrl: 'media/views/index.html'
    });
  }
]);
