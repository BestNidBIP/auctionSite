'use strict';

angular.module('mean.publication').factory('Publication', [ '$http',
  function($http) {

    function _getCategories(){
      return $http.get('/category');
    }

    function _addNewPublication(publication_data){
      return $http.post('/publication', publication_data);
    }

    function _uploadMediaPicture(picture_data){
      return $http.post('/media', {picture:picture_data});
    }

    function _getPublication(publication_id){
      return $http.get('/publication/' + publication_id);
    }

    function _updatePublication(publication_data){
      return $http ({ 
                url: '/publication/'+publication_data._id,
                method: 'PUT',
                data: publication_data,
                headers: {'Content-Type': 'application/json;charset=utf-8'} 
            });
    }

    function _getOffers(publication_id){
      return $http.get('/offer/' + publication_id);
    }

    function _addOffer(offer_data){
      return $http.post('/offer', offer_data);
    }

    function _updateOfferToActivated(offerid){
      return $http ({ 
                url: '/offer',
                method: 'PUT',
                data: {
                  offer_id : offerid,
                  accepted : true,
                },
                headers: {'Content-Type': 'application/json;charset=utf-8'} 
            });
    }

    function _getComments(publication_id){
      return $http.get('/comment/' + publication_id);
    }

    function _postComment(commentData){
      return $http.post('/comment/', commentData);
    }

    return {
      name: 'publication',
      getCategories: _getCategories,
      addNewPublication: _addNewPublication,
      getPublication: _getPublication,
      updatePublication: _updatePublication,
      getOffers: _getOffers,
      addOffer: _addOffer,
      updateOfferToActivated : _updateOfferToActivated,
      getComments: _getComments,
      postComment: _postComment,
      uploadMediaPicture: _uploadMediaPicture
    };
  }
]);
