//Users service used for users REST endpoint
angular.module('mean.mean-admin').factory("CategoryAdmin", ['$http',
    function($http) {

    function _getCategories(){
      return $http.get('/category');
    }

    function _createCategory(categoryName){
      return $http({ url: '/category', 
        method: 'POST', 
        data: {
          name: categoryName
        }, 
        headers: {'Content-Type': 'application/json;charset=utf-8'}
      });
    }

    return {
      name: 'categoryAdmin',
      getCategories : _getCategories,
      createCategory: _createCategory
    };
    
  }
]);
