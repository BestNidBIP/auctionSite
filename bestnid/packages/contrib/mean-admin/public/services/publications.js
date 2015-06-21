//Users service used for users REST endpoint
angular.module('mean.mean-admin').factory("PublicationsAdmin", ['$http',
    function($http) {

    function _getPublication(){
      return $http.get('/publication');
    }


    return {
      name: 'publication',
      getPublication : _getPublication
    };
  }
]);
