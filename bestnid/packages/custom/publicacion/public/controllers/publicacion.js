'use strict';

/* jshint -W098 */
angular.module('mean.publicacion').controller('PublicacionController', ['$scope', 'Global', 'Publicacion',
  function($scope, Global, Publicacion) {
    $scope.global = Global;
    $scope.package = {
      name: 'publicacion'
    };
  }
]);
