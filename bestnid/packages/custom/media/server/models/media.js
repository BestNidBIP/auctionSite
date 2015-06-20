'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;


/**
 * Media Schema
 */

var MediaSchema;
MediaSchema = new Schema({
    image:{
    	type: String,
    	required: true,
    }
});


/**
 * Methods
 */
MediaSchema.methods = {

};

mongoose.model('Media', MediaSchema);
