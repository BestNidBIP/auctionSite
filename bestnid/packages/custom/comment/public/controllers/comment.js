'use strict';

/* jshint -W098 */
angular.module('mean.comment').controller('CommentController', ['$scope', 'Global', 'Comment',
  function($scope, Global, Comment) {
    $scope.global = Global;
    $scope.package = {
      name: 'comment'
    };
  }
]);
