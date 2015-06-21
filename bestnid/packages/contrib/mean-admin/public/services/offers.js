//Users service used for users REST endpoint
angular.module('mean.mean-admin').factory("OffersAdmin", ['$http',
    function($http) {

    function _getOffers(){
      return $http.get('offer/all');
    }

    function  _deleteOffer(offerid){
    	return $http({ url: '/offer', 
    		method: 'DELETE', 
    		data: {offer_id: offerid}, 
    		headers: {'Content-Type': 'application/json;charset=utf-8'}
    	});
    }

    return {
      name: 'offersAdmin',
      getOffers : _getOffers,
      deleteOffer : _deleteOffer
    };
  }
]);
