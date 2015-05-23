'use strict';

angular.module('mean.profile').factory('Profile', ['$http', '$q', 

  function($http, $q) {


  	function _getUserProfile(){
  		//TODO.
  		return $http.get('http://localhost:3000/users/me');
  	}

    return {
      name: 'profile',
      getProfile: _getUserProfile
    };
  }
]);
