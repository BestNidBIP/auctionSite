'use strict';

angular.module('mean.mean-admin').controller('UsersController', ['$scope', 'Global', 'Menus', '$rootScope', '$http', 'Users',
    function($scope, Global, Menus, $rootScope, $http, Users) {
        $scope.global = Global;
        $scope.userSchema = [{
            title: 'Correo electrónico',
            schemaKey: 'email',
            type: 'text',
            inTable: true
        }, {
            title: 'Nombre',
            schemaKey: 'name',
            type: 'text',
            inTable: true
        }, {
            title: 'Nombre de usuario',
            schemaKey: 'username',
            type: 'text',
            inTable: true
        }, {
            title: 'Rol',
            schemaKey: 'roles',
            type: 'select',
            options: ['authenticated', 'admin'],
            inTable: true
        }, {
            title: 'Contraseña',
            schemaKey: 'password',
            type: 'password',
            inTable: false
        }, {
            title: 'Repetir contraseña',
            schemaKey: 'confirmPassword',
            type: 'password',
            inTable: false
        }];
        $scope.user = {};

        $scope.init = function() {
            Users.query({}, function(users) {
                $scope.users = users;
            });
        };

        $scope.add = function() {
            if (!$scope.users) $scope.users = [];

            var user = new Users({
                email: $scope.user.email,
                name: $scope.user.name,
                username: $scope.user.username,
                password: $scope.user.password,
                confirmPassword: $scope.user.confirmPassword,
                roles: $scope.user.roles
            });

            user.$save(function(response) {
                $scope.users.push(response);
            });

            this.firstName = this.lastName = this.email = this.password = this.role = '';
        };

        $scope.remove = function(user) {
            for (var i in $scope.users) {
                if ($scope.users[i] === user) {
                    $scope.users.splice(i, 1);
                }
            }

            user.$remove();
        };

        $scope.update = function(user, userField) {
            if (userField && userField === 'roles' && user.roles.indexOf('admin') === -1) {
                if (confirm('Are you sure you want to remove "admin" role?')) {
                    user.$update();
                } else {
                    user.roles = user.tmpRoles;
                }
            } else
                user.$update();
        };

        $scope.beforeSelect = function(userField, user) {
            if (userField === 'roles') {
                user.tmpRoles = user.roles;
            }
        };
    }
]);