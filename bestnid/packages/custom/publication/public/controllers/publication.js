'use strict';

/* jshint -W098 */
angular.module('mean.publication').controller('PublicationController', ['$scope', 'Global', 'Publication',
  function($scope, Global, Publication) {
    $scope.global = Global;
    $scope.package = {
      name: 'publication'
    };

    // Get categories available
    $scope.categories = null;
    $scope.categories_promise = Publication.getCategories();
    $scope.categories_promise.then(function (response) {
      $scope.categories = response.data;
    });


      // Send new publications
      $scope.submit_form = function(publication){
          $scope.submit_form_promise = Publication.addNewPublication(publication);
          $scope.submit_form_promise.then( function (response) {
              $scope.response_form = response.data;
          });
      };
  }
]);
