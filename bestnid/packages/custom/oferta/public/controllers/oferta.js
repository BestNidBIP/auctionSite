'use strict';

/* jshint -W098 */
angular.module('mean.oferta').controller('OfertaController', ['$scope', 'Global', 'Oferta',
  function($scope, Global, Oferta) {
    $scope.global = Global;
    $scope.package = {
      name: 'oferta'
    };
  }
]);
