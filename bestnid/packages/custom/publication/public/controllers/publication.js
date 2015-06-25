'use strict';

/* jshint -W098 */
angular.module('mean.publication').controller('PublicationController', ['$scope', 'Global', 'Publication',
	function($scope, Global, Publication) {
		$scope.global = Global;
		$scope.package = {
			name: 'publication'
		};

		$scope.publication_pictures = [];

		$scope.display_offer_form = false;

		//Toogle helper
		$scope.toogle = function(boolean){
			$scope.display_offer_form = !$scope.display_offer_form;
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
					publication.pictures = $scope.publication_pictures;
					$scope.submit_form_promise = Publication.addNewPublication(publication);
					$scope.submit_form_promise.then( function (response) {
						$scope.response_form = response.data;
						$scope.show_success_messsage = true;
					});
				}
			};

			// Get Publication id from URL
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

			// Update publication
			$scope.update_user_publication = function(publication_data){
				$scope.update_usr_pub = {};
				$scope.update_usr_pub.promise = Publication.updatePublication(publication_data);
				$scope.update_usr_pub.promise.then(function(response){
					console.log('Updated');
				});
			};

			// Get specific publication
			$scope.publication_data_by_id = null;
			$scope.publication_data_by_id_promise = Publication.getPublication($scope.publication_id('id'));
			$scope.publication_data_by_id_promise.then(function (response){
				$scope.publication_data_by_id = response.data.data;
			});

			// End publication
			$scope.selectedOffer = false;
			$scope.disableButtons = false;
			$scope.change_offer_actived_status  = function(offer){
				$scope.change_offer_status = {};
				$scope.change_offer_status.promise = Publication.updateOfferToActivated(offer._id);
				$scope.change_offer_status.promise.then(function(){
					$scope.selectedOffer = true;
					$scope.disableButtons = true;
					var publication_object = {
						'_id': offer.publication,
						'activated': false
					};
					$scope.update_user_publication(publication_object);
				});
			};

			$scope.show_sccess_message_offer = function(){
				$scope.selectedOffer = true;
			};

			// Get Offers
			$scope.offers = null;
			$scope.offer_promise = Publication.getOffers($scope.publication_id('id'));
			$scope.offer_promise.then(function(response){
				$scope.offers = response.data;
			});


			// Comments
			// Get comments
			$scope.comments = null;
			$scope.get_comments_promise = Publication.getComments($scope.publication_id('id'));
			$scope.get_comments_promise.then(function(response){
				$scope.comments = response.data.data;
			});

			// post_comment
			$scope.post_comment = function(comment){
				var commentData = {};
				commentData.description = comment;
				commentData.publication = $scope.publication_id('id');
				$scope.post_comment_promise = Publication.postComment(commentData);
				$scope.post_comment_promise.then(function (response) {
					$scope.get_comments_promise = Publication.getComments($scope.publication_id('id'));
					$scope.get_comments_promise.then(function(response){
						$scope.comments = response.data.data;
					});
				});
			};

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

			// Media
			$scope.count = 0;
			$scope.publication_pictures_preview = [];
			$scope.upload_media = function(file){
				$scope.upload_media_promise = Publication.uploadMediaPicture(file);
				$scope.upload_media_promise.then(function (response) {
					$scope.publication_pictures.push(response.data._id);
					$scope.publication_pictures_preview.push(response.data);
				});

			};

            // Carousel 
            $scope.myInterval = 3000;
            var slides = $scope.slides = [];
            $scope.slides = [];

        }]);
