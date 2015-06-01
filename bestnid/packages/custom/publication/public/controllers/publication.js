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
      $scope.show_success_messsage = false;
      $scope.submit_form = function(publication, isValid){
          if (isValid){
              $scope.submit_form_promise = Publication.addNewPublication(publication);
              $scope.submit_form_promise.then( function (response) {
                  $scope.response_form = response.data;
                  $scope.show_success_messsage = true;
              });
          } else {
              alert('Formulario invalido');
          }
      };

      $scope.publication_id = function(name){
              name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
              var regexS = "[\\?&]"+name+"=([^&#]*)";
              var regex = new RegExp( regexS );
              var results = regex.exec( window.location.href );
              if( results == null )
                  return "";
              else
                  return results[1];

      };

      // Get specific publication
      $scope.publication_data_by_id = null;
      $scope.publication_data_by_id_promise = Publication.getPublication($scope.publication_id("id"));
      $scope.publication_data_by_id_promise.then(function (response){
         $scope.publication_data_by_id = response.data;
      });
  }
]);
