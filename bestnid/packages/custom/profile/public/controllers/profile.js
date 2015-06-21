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

        // Get user information
        $scope.user_data = null;
        $scope.user_data_promise = Profile.getProfile();
        $scope.user_data_promise.then(function (response) {
            $scope.user_data = response.data;
        });

        // Update user data
        $scope.update_user_information = function (userInfo) {
            $scope.update_info = {};
            $scope.update_info.promise = Profile.updateUserProfile(userInfo);
            $scope.update_info.promise.then(function(response){
            });
        };

        // Publications
        // Get user publications
        $scope.user_publications = null;
        $scope.user_publications_promise = Profile.getUserPublications();
        $scope.user_publications_promise.then(function(response) {
            $scope.user_publications = response.data.data;
        });

        // Cancel a publication
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
        // Get user offers
        $scope.user_offers = null;
        $scope.user_offers_promise = Profile.getUserOffers();
        $scope.user_offers_promise.then( function(response){
            $scope.user_offers = response.data;
        });

        // Remove an offer
        $scope.user_remove_offer = function (offer_id) {
            $scope.user_remove_offer_promise = Profile.deleteUserOffer(offer_id);
            $scope.user_remove_offer_promise.then(function(response) {
             $scope.user_offers_promise = Profile.getUserOffers();
             $scope.user_offers_promise.then( function(response){
                $scope.user_offers = response.data;
            });
         });
        };

        // Modify an offer
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

        // Media
        $scope.image_uploaded = [];
        $scope.upload_media = function(file){
            $scope.upload_media_promise = Profile.uploadProfilePicture(file);
            $scope.upload_media_promise.then( function(response){
                $scope.upload_media = response.data;
                $scope.image_uploaded.push(file);
                $scope.profile_picture_promise = Profile.addUserProfilePicture($scope.upload_media._id);
                $scope.profile_picture_promise.then(function(response){
                    $scope.profile_picture = response.data;
                    $scope.user_data_promise = Profile.getProfile();
                    $scope.user_data_promise.then(function (response) {
                        $scope.user_data = response.data;
                    });
                });

            });

        };


    }
    ]);

