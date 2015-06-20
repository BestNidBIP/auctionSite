'use strict';
angular.module('mean.mean-admin').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('offers', {
                url: '/admin/offers',
                templateUrl: 'mean-admin/views/offers.html'
            })
            .state('reports', {
                url: '/admin/reports',
                templateUrl: 'mean-admin/views/reports.html'
            })
            .state('publications', {
                url: '/admin/publications',
                templateUrl: 'mean-admin/views/publications.html'
            }).state('users', {
                url: '/admin/users',
                templateUrl: 'mean-admin/views/users.html'
            }).state('themes', {
                url: '/admin/themes',
                templateUrl: 'mean-admin/views/themes.html'
            }).state('settings', {
                url: '/admin/settings',
                templateUrl: 'mean-admin/views/settings.html'
            }).state('modules', {
                url: '/admin/modules',
                templateUrl: 'mean-admin/views/modules.html'
            });
    }
]).config(['ngClipProvider',
    function(ngClipProvider) {
        ngClipProvider.setPath('../mean-admin/assets/lib/zeroclipboard/dist/ZeroClipboard.swf');
    }
]);