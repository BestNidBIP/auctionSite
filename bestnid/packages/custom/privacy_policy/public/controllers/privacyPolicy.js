'use strict';

/* jshint -W098 */
angular.module('mean.privacy_policy').controller('PrivacyPolicyController', ['$scope', 'Global', 'PrivacyPolicy',
  function($scope, Global, PrivacyPolicy) {
    $scope.global = Global;
    $scope.package = {
      name: 'privacy_policy'
    };
  }
]);
