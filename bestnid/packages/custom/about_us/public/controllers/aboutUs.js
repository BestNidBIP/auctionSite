'use strict';

/* jshint -W098 */
angular.module('mean.about_us').controller('AboutUsController', ['$scope', 'Global', 'AboutUs',
  function($scope, Global, AboutUs) {
    $scope.global = Global;
    $scope.package = {
      name: 'about_us'
    };
  }
]);
