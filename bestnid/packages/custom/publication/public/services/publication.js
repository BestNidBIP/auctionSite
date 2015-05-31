'use strict';

angular.module('mean.publication').factory('Publication', [ '$http',
  function($http) {

    function _getCategories(){
      return $http.get('/category')
    }

      function _addNewPublication(publication_data){
        return $http.post('/publication', publication_data)
      }


    return {
      name: 'publication',
      getCategories: _getCategories,
        addNewPublication: _addNewPublication
    };
  }
]);
