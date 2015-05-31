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
        $scope.user_publications_promise = Profile.getUserPublications;
        $scope.user_publications_promise.then(function(response) {
            $scope.user_publications = response.data.data;
        });

        //Lo que debería traer el servicio que trae las ofertas
        $scope.offers_data = [
            {
                publicationTitle: 'Zapatos',
                daysRemained: 1,
                linkPublication: 12,
                publication_id: '',
                need_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut deserunt doloremque eaque eligendi error, expedita illum iste nam natus nisi odit repellat, reprehenderit unde vero. Deleniti ducimus esse maiores.',
                price: '50'
            }
        ];




    }
]);

