'use strict';

angular.module('mean.mean-admin').controller('AdminController', ['$scope', 'Global', 'Menus', '$rootScope',
    function($scope, Global, Menus, $rootScope) {
        $scope.global = Global;
        $scope.menus = {};
        $scope.overIcon = false;

        var icons = 'mean-admin/assets/img/icons/';
        
        // Default hard coded menu items for main menu
        var defaultAdminMenu = [
         {
            'roles': ['admin'],
            'title': 'Usuarios',
            'link': 'users',
            'icon': icons + 'users.png'
        },
        {
            'roles': ['admin'],
            'title': 'Reportes',
            'link': 'reports',
            'icon': icons + 'modules.png'
        },
        {
            'roles': ['admin'],
            'title': 'Ofertas',
            'link': 'offers',
            'icon': icons + 'marketplace.png'
        },
        {
            'roles': ['admin'],
            'title': 'Publicaciones',
            'link': 'publications',
            'icon': icons + 'themes.png'
        },
        {
            'roles': ['admin'],
            'title': 'Categorias',
            'link': 'categories',
            'icon': icons + 'settings.png'
        }];

        // Query menus added by modules. Only returns menus that user is allowed to see.
        function queryMenu(name, defaultMenu) {

            Menus.query({
                name: name,
                defaultMenu: defaultMenu
            }, function(menu) {
                $scope.menus[name] = menu;
            });
        }

        // Query server for menus and check permissions
        queryMenu('admin', defaultAdminMenu);

        $scope.isCollapsed = false;

        $rootScope.$on('loggedin', function() {

            queryMenu('admin', defaultAdminMenu);

            $scope.global = {
                authenticated: !! $rootScope.user,
                user: $rootScope.user
            };
        });
    }
]);
