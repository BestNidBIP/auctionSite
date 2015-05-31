'use strict';

/* jshint -W098 */
angular.module('mean.media').controller('MediaController', ['$scope', 'Global', 'Media',
  function($scope, Global, Media) {
    $scope.global = Global;
    $scope.package = {
      name: 'media'
    };
  }
]);
