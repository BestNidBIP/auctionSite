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
                publication_id: '',
                title: 'Bicicleta plegable',
                imgPath: 'http://labicikleta.com/wp-content/uploads/2013/07/Viajes.jpg',
                daysRemained: 5,
                linkPublication: ''
            },
            {
                publication_id: '',
                title: 'Remera nirvana',
                imgPath: 'http://mlu-s2-p.mlstatic.com/remeras-de-nirvana-estampadas-en-serigrafia-1668-MLU3418072179_112012-O.jpg',
                daysRemained: 10,
                linkPublication: ''
            },
            {
                publication_id: '',
                title: 'Lego Batman',
                imgPath: 'http://ecx.images-amazon.com/images/I/41mH%2BlM7cmL.jpg',
                daysRemained: 1,
                linkPublication: ''
            },
            {
                publication_id: '',
                title: 'Mochila Samsonite',
                imgPath: 'http://mlm-s1-p.mlstatic.com/mochilas-marcas-bolsas-carteras-10400-MLM20027752729_012014-Y.jpg',
                daysRemained: 2,
                linkPublication: ''
            },
            {
                publication_id: '',
                title: 'Zapatillas Nike',
                imgPath: '',
                daysRemained: 0,
                linkPublication: ''
            }
        ];

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

