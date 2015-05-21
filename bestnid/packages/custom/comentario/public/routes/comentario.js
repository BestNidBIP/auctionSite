'use strict';

angular.module('mean.comentario').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('comentario example page', {
      url: '/comentario/example',
      templateUrl: 'comentario/views/index.html'
    });
  }
]);
