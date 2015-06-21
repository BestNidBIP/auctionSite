angular.module('mean.mean-admin').controller('PublicationAdminController', 
	['$scope', 'Global', '$rootScope', '$http', 'PublicationsAdmin',
    function($scope, Global, $rootScope, $http, PublicationsAdmin) {

    	// Publication data
    	$scope.get_publications = {};
    	$scope.get_publications.promise = PublicationsAdmin.getPublication();
    	$scope.get_publications.promise.then(function(response){
    		console.log('resuelve promise');
    		$scope.get_publications = response.data.data;
    	});

    	}
    ]);