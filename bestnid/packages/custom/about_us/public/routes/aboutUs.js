'use strict';

angular.module('mean.about_us').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('aboutUs example page', {
      url: '/aboutUs/example',
      templateUrl: 'about_us/views/index.html'
    });
  }
]);
