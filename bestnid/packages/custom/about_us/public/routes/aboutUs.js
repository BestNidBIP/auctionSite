'use strict';

angular.module('mean.about_us').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('aboutUs example page', {
      url: '/aboutUs',
      templateUrl: 'about_us/views/index.html'
    });
  }
]);
