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
  Comments.find({publication: req.params.publicationId}).sort('-created').populate('user', 'name username').populate('comment', 'description created user').exec(function(err, comments) {
    var response = {};
    response.data = comments;
    response.status = {
      error : 'false',
      code : 200,
      msg : 'OK'
    };
    res.send(response);  
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
      return res.status(200).json({
          error: false,
          msg: 'Response saved'
        });
    });
};


/**
 * Respond comment
 */
exports.respond = function(req, res) {
  Comments.findOne({_id: req.body.comment}).exec(function(err, comment) {
    comment.response = req.body.response;
    comment.save(function(err) {
      if (err) {
        return res.status(500).json({
          error: 'Cannot save the Comments'
        });
      }
      return res.status(200).json({
          error: false,
          msg: 'Response saved'
        });

    });
  });
};