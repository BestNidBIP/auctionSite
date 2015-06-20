'use strict';

angular.module('mean.privacy_policy').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('privacyPolicy example page', {
      url: '/privacyPolicy',
      templateUrl: 'privacy_policy/views/index.html'
    });
  }
]);
