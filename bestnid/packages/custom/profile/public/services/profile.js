'use strict';

angular.module('mean.profile').factory('Profile', ['$http', '$q',

    function ($http, $q) {


        function _getUserProfile() {
            return $http.get('/users/me');
        }

        function _updateUserProfile(user_profile_data) {
            //return $http.post('users/me',{username: user_profile_data.name });
        }

        function _getUserPublications() {
            return $http.get('/user/publications');
        }

        function _deleteUserPublication(publication_id) {
            return $http.delete('publication/'+publication_id);
        }

        function _getUserOffers() {
            return $http.get('/offer');
        }

        function _deleteUserOffer() {
            //TODO
        }

        return {
            name: 'profile',
            getProfile: _getUserProfile,
            updateUserProfile: _updateUserProfile(),
            getUserPublications: _getUserPublications,
            deleteUserPublication: _deleteUserPublication,
            getUserOffers: _getUserOffers(),
            deleteUserOffer: _deleteUserOffer()
        };
    }
    ]);
