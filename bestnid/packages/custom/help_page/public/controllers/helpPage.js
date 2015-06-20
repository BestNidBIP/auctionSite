'use strict';

/* jshint -W098 */
angular.module('mean.help_page').controller('HelpPageController', ['$scope', 'Global', 'HelpPage',
  function($scope, Global, HelpPage) {
    $scope.global = Global;
    $scope.package = {
      name: 'help_page'
    };
  }
]);
