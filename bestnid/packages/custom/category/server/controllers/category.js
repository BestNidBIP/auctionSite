'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Category = mongoose.model('Category');


/**
 * Get all Categories
 */
exports.all = function(req, res) {
  Category.find({}, function(err, category) {
    
    res.send(category);  
  });
};

/**
 * Create publication
 */
exports.create = function(req, res) {
  var category = new Category(req.body);
  

  category.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the Category'
      });
    }
    res.json(category);

  });
};

