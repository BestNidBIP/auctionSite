'use strict';

angular.module('mean.profile').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('homeProfile', {
                url: '/perfil',
                templateUrl: 'profile/views/index.html'
            })

            .state('homeProfile.myProfile', {
                url: '/me',
                templateUrl: 'profile/views/myProfile.html'
            })

            .state('homeProfile.myOffers', {
                url: '/mis-ofertas',
                templateUrl: 'profile/views/myOffers.html'
            })

            .state('homeProfile.myPublications', {
                url: '/mis-publicaciones',
                templateUrl: 'profile/views/myPublications.html'
            });

    }
]);
