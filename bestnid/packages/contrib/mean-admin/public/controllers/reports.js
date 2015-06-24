angular.module('mean.mean-admin').controller('reportsController', 
	['$scope', 'Global', '$rootScope', '$http', 'reports',
	function($scope, Global, $rootScope, $http, reports) {
		
    	// Get Offers
    	$scope.date_report = {};
      $scope.date_report.from = {};
      $scope.date_report.to = {};

      // Users registered
      $scope.user_report = function(date){
        $scope.users_report_promise = reports.getRegisterUsersByDate(date);
        $scope.users_report_promise.then(function(response){
         $scope.users_report = response.data; 
       });
      };

      // Count the number of users registered
      $scope.total_usuarios_registrados = 0;
      $scope.count_number_of_users = function (){
        $scope.total_usuarios_registrados = $scope.total_usuarios_registrados + 1;
      };

      // Sales between two dates
      $scope.sales_report = function(date) {
        $scope.sales_report_promise = reports.getSalesByDate(date);
        $scope.sales_report_promise.then(function(response){
          $scope.sales_report_data = response.data; 
        });
      };

      // Total sales between two dates
      $scope.total_sales_between_dates = 0;
      $scope.count_number_of_sales_between_dates = function () {
        $scope.total_sales_between_dates =  $scope.total_sales_between_dates + 1;
      };

      $scope.total = 0;
      $scope.calculateTotal = function(value){
        $scope.total = $scope.total + value;
      };

      $scope.sales = function(date_from_month) {
        $scope.total = 0;
        var date_complete = {
          'from': {
            'day': 1,
            'month': date_from_month.from.month,
            'year' : date_from_month.from.year
          },
          "to": {
            'day' : 31,
            'month' : date_from_month.from.month,
            'year' : date_from_month.from.year
          }
        };
        $scope.sales_report_promise = reports.getSalesByDate(date_complete);
        $scope.sales_report_promise.then(function(response){
          $scope.sales_per_month_report = response.data;
        });
      };

      $scope.total_commission = 0;
      $scope.commision_per_month = function(date_from_month) {
        $scope.total = 0;
        var date_complete = {
          'from': {
            'day': 1,
            'month': date_from_month.from.month,
            'year' : date_from_month.from.year
          },
          "to": {
            'day' : 31,
            'month' : date_from_month.from.month,
            'year' : date_from_month.from.year
          }
        };
        $scope.sales_report_promise = reports.getSalesByDate(date_complete);
        $scope.sales_report_promise.then(function(response){
          $scope.commision_per_month_report = response.data;
        });

        $scope.calculateCommisionTotal = function(value){
          $scope.total_commission = $scope.total_commission + value;
        };
      };
      
    } ]);