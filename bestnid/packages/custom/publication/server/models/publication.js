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
      ref: 'Media',
    },
    created: {
      type: Date,
      default: Date.now
    },
    cotegory: {
      type: Schema.ObjectId,
      ref: 'Category'
    },
});


/**
 * Methods
 */
PublicationSchema.methods = {

};

mongoose.model('Publication', PublicationSchema);
