'use strict';

angular.module('mean.publication').factory('Publication', [ '$http',
  function($http) {

    function _getCategories(){
      return $http.get('/category');
    }

      function _addNewPublication(publication_data){
        return $http.post('/publication', publication_data);
      }

    function _getPublication(publication_id){
      return $http.get('/publication/' + publication_id);
    }

    function _getOffers(publication_id){
      return $http.get('/offer/' + publication_id);
    }

    function _addOffer(offer_data){
      return $http.post('/offer', offer_data);
    }


    return {
      name: 'publication',
      getCategories: _getCategories,
      addNewPublication: _addNewPublication,
      getPublication: _getPublication,
      getOffers: _getOffers,
      addOffer: _addOffer
    };
  }
]);
