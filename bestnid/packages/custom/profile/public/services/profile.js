'use strict';

angular.module('mean.profile').factory('Profile', ['$http', '$q',

    function ($http, $q) {


        function _getUserProfile() {
            return $http.get('/users/me');
        }

        function _updateUserProfile() {
            //TODO
        }

        function _getUserPublications() {
            return $http.get('/user/publications');
        }

        function _deleteUserPublication() {
            //TODO
        }

        function _getUserOffers() {
            //TODO
        }

        function _deleteUserOffer() {
            //TODO
        }

        return {
            name: 'profile',
            getProfile: _getUserProfile,
            updateUserProfile: _updateUserProfile(),
            getUserPublications: _getUserPublications(),
            deleteUserPublication: _deleteUserPublication(),
            getUserOffers: _getUserOffers(),
            deleteUserOffer: _deleteUserOffer()
        };
    }
]);
