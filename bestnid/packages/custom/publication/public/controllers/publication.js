'use strict';

/* jshint -W098 */
angular.module('mean.publication').controller('PublicationController', ['$scope', 'Global', 'Publication',
  function($scope, Global, Publication) {
    $scope.global = Global;
    $scope.package = {
      name: 'publication'
    };
  }
]);
