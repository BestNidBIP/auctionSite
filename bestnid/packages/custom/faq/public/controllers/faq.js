'use strict';

/* jshint -W098 */
angular.module('mean.faq').controller('FaqController', ['$scope', 'Global', 'Faq',
  function($scope, Global, Faq) {
    $scope.global = Global;
    $scope.package = {
      name: 'faq'
    };
  }
]);
