'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Offers = mongoose.model('Offer');


/**
 * Get all offers
 */
exports.all = function(req, res) {
  Offers.find({}, function(err, offers) {
    var offerMap = {};

    offers.forEach(function(offer) {
      offerMap[offer._id] = offer;
    });

    res.send(offerMap);  
  });
};

/**
 * Create Offer
 */
exports.create = function(req, res) {
  var offer = new Offers(req.body);
  offer.user = req.user;

  offer.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the Offers'
      });
    }
    res.json(offer);

  });
};