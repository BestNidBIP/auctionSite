'use strict';

/* jshint -W098 */
angular.module('mean.profile').controller('ProfileController', ['$scope', 'Global', 'Profile',
  function($scope, Global, Profile) {
    $scope.global = Global;
    $scope.package = {
      name: 'profile'
    };

    $scope.user_profile = Profile.getProfile();

    $scope.user_profile.then(function(response){
    	console.log(response);
    });

  }
]);
