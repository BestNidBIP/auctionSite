'use strict';

/* jshint -W098 */
angular.module('mean.offer').controller('OfferController', ['$scope', 'Global', 'Offer',
  function($scope, Global, Offer) {
    $scope.global = Global;
    $scope.package = {
      name: 'offer'
    };
  }
]);
