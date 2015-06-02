'use strict';

var _   = require('lodash');

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


/**
 * Get Offers by publication ID
 */
exports.get_offer_by_id = function(req, res) {
  
  Offers.find({publication : req.params.publicationID}).sort('-created').populate('user', 'name username').exec(function(err, offers) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list offers'
      });
    }
    res.json(offers);

  });
};



/**
 * Delete an offer
 */

exports.delete = function(req, res) {

  Offers.findById( req.body.offer_id, function ( err, offer ){
    console.log(offer);
    offer.remove( function ( err, offer ){
      if(err){
        res.json({
          status: '500',
          msg: 'Cant delete offer'
        });
      }
      res.json({
        status: '200',
        msg: 'Offer deleted'
      });
    });
  });
  
};

/**
 * Update an offer
 */

exports.update = function(req, res) {

  Offers.findById( req.body.offer_id, function ( err, offer ){
    
    _.forIn(req.body, function(value, key){
        offer[key] = value;
      });
    offer.save(function(err, offer){
      if(err){
        res.json({
          status: '500',
          msg: 'Error'
        });
      }
      res.json({
        status: '200',
        msg: 'Offer updated'
      });
      
    });
    

  });
  
};

