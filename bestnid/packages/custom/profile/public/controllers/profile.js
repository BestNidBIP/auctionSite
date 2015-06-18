'use strict';

/* jshint -W098 */
angular.module('mean.profile').controller('ProfileController', ['$scope', 'Global', 'Profile',
    function ($scope, Global, Profile, $state, $location) {
        $scope.global = Global;
        $scope.package = {
            name: 'profile'
        };

        $scope.tabsContent = [
        {
            name: 'Mi Perfil',
            url: '.myProfile',
            active: true
        },
        {
            name: 'Mis Publicaciones',
            url: '.myPublications',
            active: true
        },
        {
            name: 'Mis Ofertas',
            url: '.myOffers',
            active: true
        }
        ];

        $scope.user_data = null;

        $scope.user_data_promise = Profile.getProfile();

        $scope.user_data_promise.then(function (response) {
            $scope.user_data = response.data;
        });


        // Publications
        $scope.user_publications = null;
        $scope.user_publications_promise = Profile.getUserPublications();
        $scope.user_publications_promise.then(function(response) {
            $scope.user_publications = response.data.data;
        });

        $scope.cancel_publication = function (publication_id) {
            $scope.delete_pub_promise = Profile.deleteUserPublication(publication_id);
            $scope.delete_pub_promise.then(function(response){
                $scope.user_publications_promise = Profile.getUserPublications();
                $scope.user_publications_promise.then(function(response) {
                    $scope.user_publications = response.data.data;
                });
            });
        };


        // Offers
        $scope.user_offers = null;
        $scope.user_offers_promise = Profile.getUserOffers();
        $scope.user_offers_promise.then( function(response){
            $scope.user_offers = response.data;
        });

        $scope.user_remove_offer = function (offer_id) {
            $scope.user_remove_offer_promise = Profile.deleteUserOffer(offer_id);
            $scope.user_remove_offer_promise.then(function(response) {
               $scope.user_offers_promise = Profile.getUserOffers();
               $scope.user_offers_promise.then( function(response){
                $scope.user_offers = response.data;
            });
           });
        };

        $scope.offer_successful_modification = false;
        $scope.user_update_offer = function (offer) {
            $scope.user_update_offer_promise = Profile.updateUserOffer(offer);
            $scope.user_update_offer_promise.then(function(response) {
                $scope.user_offers_promise = Profile.getUserOffers();
                $scope.user_offers_promise.then( function(response){
                    $scope.user_offers = response.data;
                });
                $scope.offer_successful_modification = true;
            });

            
        };


    }
    ]);

