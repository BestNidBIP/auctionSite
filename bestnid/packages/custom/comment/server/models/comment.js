'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;


/**
 * Comment Schema
 */

var CommentSchema;
CommentSchema = new Schema({
    user:{
      type: Schema.ObjectId,
      ref: 'User',
      required: true,

    },
    publication:{
      type: Schema.ObjectId,
      ref: 'Publication',
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

});


/**
 * Methods
 */
CommentSchema.methods = {

};

mongoose.model('Comment', CommentSchema);
