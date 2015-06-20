'use strict';

angular.module('mean.profile').factory('Profile', ['$http', '$q',

    function ($http, $q) {


        function _getUserProfile() {
            return $http.get('/users/me');
        }

        function _updateUserProfile(user_profile_data) {
            //return $http.post('users/me',{username: user_profile_data.name });
        }

        function _addUserProfilePicture(media_id){
            return $http.post('/users/me', {image:media_id});
        }

        function _uploadProfilePicture(picture_data){
            return $http.post('/media', {picture:picture_data});
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

        function _deleteUserOffer(offerid) {
            return $http({ url: '/offer', 
                method: 'DELETE', 
                data: {offer_id: offerid}, 
                headers: {'Content-Type': 'application/json;charset=utf-8'}
            });
        }

        function _updateUserOffer(currentOffer) {
            return $http ({ 
                url: 'offer',
                method: 'PUT',
                data: {
                    offer_id: currentOffer._id,
                    description: currentOffer.description,
                    offer: currentOffer.offer
                },
                headers: {'Content-Type': 'application/json;charset=utf-8'} 
            });
        }

        return {
            name: 'profile',
            getProfile: _getUserProfile,
            updateUserProfile: _updateUserProfile,
            getUserPublications: _getUserPublications,
            deleteUserPublication: _deleteUserPublication,
            getUserOffers: _getUserOffers,
            deleteUserOffer: _deleteUserOffer,
            updateUserOffer: _updateUserOffer,
            uploadProfilePicture: _uploadProfilePicture,
            addUserProfilePicture: _addUserProfilePicture
        };
    }
    ]);
