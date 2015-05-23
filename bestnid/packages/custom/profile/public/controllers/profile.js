'use strict';

/* jshint -W098 */
angular.module('mean.profile').controller('ProfileController', ['$scope', 'Global', 'Profile',
  function($scope, Global, Profile) {
    $scope.global = Global;
    $scope.package = {
      name: 'profile'
    };
  }
]);
