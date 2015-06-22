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
    activated: {
      type: Boolean,
      default: true
    },
    pictures: [{type: Schema.ObjectId, ref: 'Media'}],
    created: {
      type: Date,
      default: Date.now
    },
    category: {
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
