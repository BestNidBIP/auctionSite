'use strict';

/* jshint -W098 */
angular.module('mean.profile').controller('ProfileController', ['$scope', 'Global', 'Profile',
    function ($scope, Global, Profile, $state) {
        $scope.global = Global;
        $scope.package = {
            name: 'profile'
        };

        $scope.tabsContent = [
            {
                name: 'Mi Perfil',
                url: '.myProfile'
            },
            {
                name: 'Mis Publicaciones',
                url: '.myPublications'
            },
            {
                name: 'Mis Ofertas',
                url: '.myOffers'
            }
        ];

        $scope.setPage = function () {
            $state.transitionTo(page);
        };

        $scope.user_data = null;

        $scope.user_data_promise = Profile.getProfile();

        $scope.user_data_promise.then(function (response) {
            $scope.user_data = response.data;
        });

    }
]);

