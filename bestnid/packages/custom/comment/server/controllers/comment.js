'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Comments = mongoose.model('Comment');


/**
 * Get all user comments
 */
exports.all = function(req, res) {
  Comments.find({}, function(err, comments) {
    var publicationMap = {};

    comments.forEach(function(comment) {
      publicationMap[comment._id] = comment;
    });

    res.send(publicationMap);  
  });
};

/**
 * Create comment
 */
exports.create = function(req, res) {
  var comment = new Comments(req.body);
  comment.user = req.user;

  comment.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the Comments'
      });
    }
    res.json(comment);

  });
};