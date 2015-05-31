'use strict';

angular.module('mean.publication').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
        .state('publication example page', {
            url: '/publication/example',
            templateUrl: 'publication/views/index.html'
        })

        .state('nueva publicacion', {
            url: '/publicacion/nueva-publicacion',
            templateUrl: 'publication/views/publicationNew.html'
        });
  }
]);
