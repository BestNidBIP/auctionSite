angular.module('mean.mean-admin').controller('PublicationAdminController', 
	['$scope', 'Global', '$rootScope', '$http', 'PublicationsAdmin',
    function($scope, Global, $rootScope, $http, PublicationsAdmin) {

    	// Get publication data
    	$scope.get_publications = {};
    	$scope.get_publications.promise = PublicationsAdmin.getPublication();
    	$scope.get_publications.promise.then(function(response){
    		$scope.get_publications = response.data.data;
    	});

        // Delete publication
        $scope.delete_publication = function (publication_id) {
            $scope.delete_user_publication = {};
            $scope.delete_user_publication.promise = PublicationsAdmin.deletePublication(publication_id);
            $scope.delete_user_publication.promise.then(function(response){
                $scope.get_publications.promise = PublicationsAdmin.getPublication();
                $scope.get_publications.promise.then(function(response){
                    $scope.get_publications = response.data.data;
                });
            });
        }

    }
    ]);