'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Media = mongoose.model('Media');


/**
 * Get all Medias
 */
exports.all = function(req, res) {
  Media.find({}, function(err, category) {
    
    res.send(category);  
  });
};

/**
 * Create Media
 */
exports.create = function(req, res) {
  var media = new Media(req.body.picture);
  console.log(req.body);
  
  media.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the Offers'
      });
    }
    res.json(media);

  });
  
};

