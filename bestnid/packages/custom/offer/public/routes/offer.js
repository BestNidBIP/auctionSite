'use strict';

angular.module('mean.offer').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('Ver y/o actualizar oferta', {
      url: '/oferta',
      templateUrl: 'offer/views/index.html'
    });
  }
]);
