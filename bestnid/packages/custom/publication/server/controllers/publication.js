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




/**
 * Get Publications
 */
exports.get_publications = function(req, res) {

  // Publication per page to show
  var PUBLICATIONS_PER_PAGE = 10;

  // Page number

  var page = req.params.pageNumber - 1;
  var skip_publications = page * PUBLICATIONS_PER_PAGE;
  console.log(skip_publications);
  Publications.find().sort('-created').skip(skip_publications).limit(PUBLICATIONS_PER_PAGE).populate('user', 'name username').exec(function(err, publications) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the articles'
      });
    }
    res.json(publications);

  });

};
