angular.module('mean.mean-admin').controller('reportsController', 
	['$scope', 'Global', '$rootScope', '$http', 'reports',
	function($scope, Global, $rootScope, $http, reports) {
		
    	// Get Offers
    	$scope.date_report = {};
        $scope.date_report.from = {};
       

        $scope.date_report.to = {};
       

        $scope.user_report = function(date){
            $scope.users_report_promise = reports.getRegisterUsersByDate(date);
            $scope.users_report_promise.then(function(response){
               $scope.users_report = response.data; 
            });
        }



        $scope.sales_report_promise = reports.getSalesByDate($scope.date_report);
        $scope.sales_report_promise.then(function(response){
           $scope.sales_report = response.data; 
        });





    }
    ]);