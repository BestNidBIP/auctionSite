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
    name:{
    	type: String,
    	required: true,
    },
    src:{
    	type: String,
    	required: true,
    },
    size:{
    	type: String,
    	required: true,
    },
    type:{
    	type: String,
    	required: true,
    },
    created:{
    	type: String,
    	required: true,
    },
});


/**
 * Methods
 */
MediaSchema.methods = {

};

mongoose.model('Media', MediaSchema);
