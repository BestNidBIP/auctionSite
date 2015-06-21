angular.module('mean.mean-admin').controller('OfferAdminController', 
	['$scope', 'Global', '$rootScope', '$http', 'OffersAdmin',
	function($scope, Global, $rootScope, $http, OffersAdmin) {
		
    	// Get Offers
    	$scope.get_offers = {};
    	$scope.get_all_offers = {};
    	$scope.get_all_offers.promise = OffersAdmin.getOffers();
    	$scope.get_all_offers.promise.then(function(response){
    		$scope.get_offers = response.data;
    	});

    	// Delete Offers 
    	$scope.delete_offer = function(offerid){
    		$scope.delete_user_offer = {};
    		$scope.delete_user_offer.promise = OffersAdmin.deleteOffer(offerid);
    		$scope.delete_user_offer.promise.then(function(response){
    			$scope.get_all_offers.promise = OffersAdmin.getOffers();
    			$scope.get_all_offers.promise.then(function(response){
    				$scope.get_offers = response.data;
    			});
    		});
    	}
    }
    ]);