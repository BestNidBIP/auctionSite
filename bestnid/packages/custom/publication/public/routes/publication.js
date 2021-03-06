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
        })

        .state('ver publicacion', {
            url: '/publicacion?id=:publicationId',
            templateUrl: 'publication/views/viewPublication.html'
        })

        .state('modificar publicacion', {
            url: '/publicacion/modificar-publicacion?id=:publicationId',
            templateUrl: 'publication/views/editPublication.html'
        })

        .state('terminar publicacion', {
            url: '/publicacion/terminar-publicacion?id=:publicationId',
            templateUrl: 'publication/views/finishPublication.html'
        });
  }
]);
