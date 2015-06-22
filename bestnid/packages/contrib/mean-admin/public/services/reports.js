//Users service used for users REST endpoint
angular.module('mean.mean-admin').factory("reports", ['$http',
    function($http) {

    function _getRegisterUsersByDate(date){
      return $http.post('/users/report', date);
    }

    function  _getSalesByDate(date){
      return $http.post('/sales', date);
    }

    return {
      name: 'reports',
      getRegisterUsersByDate : _getRegisterUsersByDate,
      getSalesByDate : _getSalesByDate
    };
  }
]);
