'use strict';

angular.module('mean.profile').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('homeProfile', {
                url: '/profile',
                templateUrl: 'profile/views/index.html'
            })

            .state('homeProfile.myProfile', {
                url: '/profile/myProfile',
                templateUrl: 'profile/views/myProfile.html'
            })

            .state('homeProfile.myOffers', {
                url: '/profile/myOffers',
                templateUrl: 'profile/views/myOffers.html'
            })

            .state('homeProfile.myPublications', {
                url: 'profile/myPublications',
                templateUrl: 'profile/views/myPublications.html'
            });

    }
]);
