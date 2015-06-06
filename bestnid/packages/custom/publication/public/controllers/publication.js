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
              name = name.replace(/[\[]/,'\\\[').replace(/[\]]/,'\\\]');
              var regexS = '[\\?&]'+name+'=([^&#]*)';
              var regex = new RegExp( regexS );
              var results = regex.exec( window.location.href );
              if( results === null )
                  return '';
              else
                  return results[1];

      };

      // Get specific publication
      $scope.publication_data_by_id = null;
      $scope.publication_data_by_id_promise = Publication.getPublication($scope.publication_id('id'));
      $scope.publication_data_by_id_promise.then(function (response){
         $scope.publication_data_by_id = response.data.data;
      });


      // Get Offers
      $scope.offers = null;
      $scope.offer_promise = Publication.getOffers($scope.publication_id('id'));
      $scope.offer_promise.then(function(response){
        $scope.offers = response.data;
      });


      $scope.offer_button_disabled = function(){
        if ($scope.global.authenticated === false){
            return false;
        }  else {
            return true;
        }
      };

      $scope.myInterval = 5000;
      var slides = $scope.slides = [];
      $scope.addSlide = function() {
          var newWidth = 600 + slides.length + 1;
          slides.push({
              image: 'http://placekitten.com/' + newWidth + '/300',
              text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
              ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
          });
      };
      for (var i=0; i<4; i = i+1) {
          $scope.addSlide();
      }
  }
]);
