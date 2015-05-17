'use strict';

angular.module('mean.terms_and_conditions').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('termsAndConditions example page', {
      url: '/termsAndConditions/example',
      templateUrl: 'terms_and_conditions/views/index.html'
    });
  }
]);
