'use strict';

angular.module('mean.help_page').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('helpPage example page', {
      url: '/helpPage/example',
      templateUrl: 'help_page/views/index.html'
    });
  }
]);
