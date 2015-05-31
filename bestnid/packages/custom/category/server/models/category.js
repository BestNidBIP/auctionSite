'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;


/**
 * Category Schema
 */

var CategorySchema;
CategorySchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
});


/**
 * Methods
 */
CategorySchema.methods = {

};

mongoose.model('Category', CategorySchema);
