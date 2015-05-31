'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;


/**
 * Publication Schema
 */

var PublicationSchema;
PublicationSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    user:{
      type: Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pictures: {
      type: [Schema.ObjectId],
    },
    created: {
      type: Date,
      default: Date.now
    },
});


/**
 * Methods
 */
PublicationSchema.methods = {

};

mongoose.model('Publication', PublicationSchema);
