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


      $scope.sales_report = function(date) {
        $scope.sales_report_promise = reports.getSalesByDate(date);
        $scope.sales_report_promise.then(function(response){
          $scope.sales_report_data = response.data; 
       }
     });

        $scope.groups = [
        {
          title: 'Dynamic Group Header - 1',
          content: 'Dynamic Group Body - 1'
        },
        {
          title: 'Dynamic Group Header - 2',
          content: 'Dynamic Group Body - 2'
        }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
          var newItemNo = $scope.items.length + 1;
          $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
          isFirstOpen: true,
          isFirstDisabled: false
        };


      }
      ]);