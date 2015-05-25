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
            //TODO
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
        };
    }
]);
