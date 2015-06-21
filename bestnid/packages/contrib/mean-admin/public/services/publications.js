//Users service used for users REST endpoint
angular.module('mean.mean-admin').factory("PublicationsAdmin", ['$http',
    function($http) {

    function _getPublication(){
      return $http.get('/publication');
    }

    function _deletePublication(publication_id){
    	return $http.delete('publication/'+publication_id);
    }

    return {
      name: 'publication',
      getPublication : _getPublication,
      deletePublication: _deletePublication
    };
  }
]);
