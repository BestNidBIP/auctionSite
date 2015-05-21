'use strict';

/* jshint -W098 */
angular.module('mean.comentario').controller('ComentarioController', ['$scope', 'Global', 'Comentario',
  function($scope, Global, Comentario) {
    $scope.global = Global;
    $scope.package = {
      name: 'comentario'
    };
  }
]);
