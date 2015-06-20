'use strict';

/* jshint -W098 */
angular.module('mean.terms_and_conditions').controller('TermsAndConditionsController', ['$scope', 'Global', 'TermsAndConditions',
  function($scope, Global, TermsAndConditions) {
    $scope.global = Global;
    $scope.package = {
      name: 'terms_and_conditions'
    };
  }
]);
