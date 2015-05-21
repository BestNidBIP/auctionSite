'use strict';

angular.module('mean.oferta').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('oferta example page', {
      url: '/oferta/example',
      templateUrl: 'oferta/views/index.html'
    });
  }
]);
