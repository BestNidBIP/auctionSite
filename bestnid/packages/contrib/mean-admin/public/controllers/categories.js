angular.module('mean.mean-admin').controller('CategoryAdminController', 
	['$scope', 'Global', '$rootScope', '$http', 'CategoryAdmin',
	function($scope, Global, $rootScope, $http, CategoryAdmin) {
		
        // Get all categories
        $scope.get_categories = {};
        $scope.get_categories.promise = CategoryAdmin.getCategories();
        $scope.get_categories.promise.then(function(response){
            $scope.get_categories = response.data;
        });

        // Add new category
        $scope.add_new_category = function(categoryName){
            $scope.new_category = {};
            $scope.new_category.promise = CategoryAdmin.createCategory(categoryName);
            $scope.new_category.promise.then(function (response){
                $scope.get_categories.promise = CategoryAdmin.getCategories();
                $scope.get_categories.promise.then(function(response){
                    $scope.get_categories = response.data;
                });
            });
        };

    }
    ]);