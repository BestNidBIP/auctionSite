'use strict';

/* jshint -W098 */
angular.module('mean.publication').controller('PublicationController', ['$scope', 'Global', 'Publication',
	function($scope, Global, Publication) {
		$scope.global = Global;
		$scope.package = {
			name: 'publication'
		};

		// Get categories available
		$scope.categories = null;
		$scope.categories_promise = Publication.getCategories();
		$scope.categories_promise.then(function (response) {
			$scope.categories = response.data;
		});


			// Send new publications
			$scope.show_success_messsage = false;
			$scope.submit_form = function(publication, isValid){
				if (isValid){
					$scope.submit_form_promise = Publication.addNewPublication(publication);
					$scope.submit_form_promise.then( function (response) {
						$scope.response_form = response.data;
						$scope.show_success_messsage = true;
					});
				}
			};

			$scope.publication_id = function(name){
				name = name.replace(/[\[]/,'\\\[').replace(/[\]]/,'\\\]');
				var regexS = '[\\?&]'+name+'=([^&#]*)';
				var regex = new RegExp( regexS );
				var results = regex.exec( window.location.href );
				if( results === null )
					return '';
				else
					return results[1];

			};

			// Get specific publication
			$scope.publication_data_by_id = null;
			$scope.publication_data_by_id_promise = Publication.getPublication($scope.publication_id('id'));
			$scope.publication_data_by_id_promise.then(function (response){
				$scope.publication_data_by_id = response.data.data;
			});

			// Get Offers
			$scope.offers = null;
			$scope.offer_promise = Publication.getOffers($scope.publication_id('id'));
			$scope.offer_promise.then(function(response){
				$scope.offers = response.data;
			});


			// post_comment
			$scope.post_comment = function(comment){
				var commentData = {};
				commentData.description = comment;
				commentData.publication = $scope.publication_id('id');
				$scope.post_comment_promise = Publication.postComment(commentData);
				$scope.post_comment_promise.then(function(response){
					$scope.post_comment = response.data.data;
				});
			};

			
			$scope.get_comments_promise = Publication.getComments($scope.publication_id('id'));
			$scope.get_comments_promise.then(function(response){
				$scope.comments = response.data.data;
			});
			

			// Submit offer
			$scope.success_message_offer = false;

			$scope.submit_offer = function (offer_data, isValid){
				if (isValid) {
					offer_data.publication = $scope.publication_data_by_id._id;
					$scope.submit_offer_promise = Publication.addOffer(offer_data);
					$scope.submit_offer_promise.then( function (response) {
						$scope.response_form = response.data;
						$scope.success_message_offer = true;
						$scope.publication_data_by_id_promise = Publication.
						getPublication($scope.publication_data_by_id._id);
						$scope.publication_data_by_id_promise.then(function (response){
							$scope.publication_data_by_id = response.data.data;
						});
						$scope.offer_promise = Publication.getOffers($scope.publication_id('id'));
						$scope.offer_promise.then(function(response){
							$scope.offers = response.data;
						});
						$scope.display_offer_form = false;	
						$scope.offer = {};
					});
				}
			};

		}
		]);
