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
                url: '.myProfile',
                active: true
            },
            {
                name: 'Mis Publicaciones',
                url: '.myPublications',
                active: false
            },
            {
                name: 'Mis Ofertas',
                url: '.myOffers',
                active: false
            }
        ];

        $scope.user_data = null;

        $scope.user_data_promise = Profile.getProfile();

        $scope.user_data_promise.then(function (response) {
            $scope.user_data = response.data;
        });

        $scope.master = {};

        $scope.updateUser = function (user) {
            $scope.master = angular.copy(user);
        };

        // Lo que debería de traer el servicio de publicaciones
        $scope.publication_data = [
            {
                title: 'Bicicleta plegable',
                imgPath: 'http://labicikleta.com/wp-content/uploads/2013/07/Viajes.jpg',
                daysRemained: 5,
                linkPublication: ''
            },
            {
                title: 'Remera nirvana',
                imgPath: 'http://mlu-s2-p.mlstatic.com/remeras-de-nirvana-estampadas-en-serigrafia-1668-MLU3418072179_112012-O.jpg',
                daysRemained: 10,
                linkPublication: ''
            },
            {
                title: 'Lego Batman',
                imgPath: 'http://ecx.images-amazon.com/images/I/41mH%2BlM7cmL.jpg',
                daysRemained: 1,
                linkPublication: ''
            },
            {
                title: 'Mochila Samsonite',
                imgPath: 'http://mlm-s1-p.mlstatic.com/mochilas-marcas-bolsas-carteras-10400-MLM20027752729_012014-Y.jpg',
                daysRemained: 2,
                linkPublication: ''
            },
            {
                title: 'Zapatillas Nike',
                imgPath: '',
                daysRemained: 0,
                linkPublication: ''
            }
        ];

        //Lo que debería traer el servicio que trae las ofertas
        $scope.offers_data = [];
    }
]);

