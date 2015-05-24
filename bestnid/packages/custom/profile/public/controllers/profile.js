'use strict';

/* jshint -W098 */
angular.module('mean.profile').controller('ProfileController', ['$scope', 'Global', 'Profile',
  function($scope, Global, Profile) {
    $scope.global = Global;
    $scope.package = {
      name: 'profile'
    };

    $scope.user_data_promise = Profile.getProfile();

    $scope.user_data_promise.then(function(response){
    	$scope.user_data = response.data;
    });

  }
]);
