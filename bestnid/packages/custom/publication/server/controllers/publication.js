'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Publications = mongoose.model('Publication');


/**
 * Get all user publications
 */
exports.all = function(req, res) {
  Publications.find({}, function(err, publications) {
    var publicationMap = {};

    publications.forEach(function(publication) {
      publicationMap[publication._id] = publication;
    });

    res.send(publicationMap);  
  });
};

/**
 * Create publication
 */
exports.create = function(req, res) {
  var publication = new Publications(req.body);
  publication.user = req.user;

  publication.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the Comment'
      });
    }
    res.json(publication);

  });
};