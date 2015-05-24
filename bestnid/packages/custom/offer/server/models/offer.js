'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;


/**
 * Offer Schema
 */

var OfferSchema;
OfferSchema = new Schema({
    publication:{
      type: Schema.ObjectId,
      ref: 'Publication',
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user:{
      type: Schema.ObjectId,
      ref: 'User',
      required: true,
    },

});


/**
 * Methods
 */
OfferSchema.methods = {

};

mongoose.model('Offer', OfferSchema);
