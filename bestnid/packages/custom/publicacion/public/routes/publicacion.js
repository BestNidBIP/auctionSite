'use strict';

angular.module('mean.publicacion').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('publicacion example page', {
      url: '/publicacion/example',
      templateUrl: 'publicacion/views/index.html'
    });
  }
]);
