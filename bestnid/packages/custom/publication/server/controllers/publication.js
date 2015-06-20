'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Publications = mongoose.model('Publication'),
  _   = require('lodash'),
  moment = require('moment');


/**
 * Get all user publications
 */
exports.all = function(req, res) {
  Publications.find({}).lean().sort('-created').populate('user', 'name username').populate('category', 'name').exec(function(err, publications) {

    
    var response = {};
    publications.forEach(function(publication) { 
      var date = moment(publication.created);
      var diff = moment.duration(moment(date).add(30,'d').diff(Date.now()));
      publication.addedProperty = 'remaining_hours';
      publication.remaining_hours = diff.asHours();
      
    });
    response.data = publications;
    response.status = {
      error : 'false',
      code : 200,
      msg : 'OK'
    };
    res.send(response);
  });
};

/**
 * Create publication
 */
exports.create = function(req, res) {
  var publication = new Publications(req.body);
  publication.user = req.user;

  publication.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the Comment'
      });
    }
    res.json(publication);

  });
};




/**
 * Get Publications
 */
exports.get_publications = function(req, res) {

  // Publication per page to show
  var PUBLICATIONS_PER_PAGE = 10;

  // Page number

  var page = req.params.pageNumber - 1;
  var skip_publications = page * PUBLICATIONS_PER_PAGE;
  console.log(skip_publications);
  Publications.find().lean().sort('-created').skip(skip_publications).limit(PUBLICATIONS_PER_PAGE).populate('user', 'name username').populate('category', 'name').exec(function(err, publications) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the publications'
      });
    }
    
    var response = {};
    publications.forEach(function(publication) { 
      var date = moment(publication.created);
      var diff = moment.duration(moment(date).add(30,'d').diff(Date.now()));
      publication.addedProperty = 'remaining_hours';
      publication.remaining_hours = diff.asHours();
    });
    
    response.data = publications;
    response.status = {
      error : 'false',
      code : 200,
      msg : 'OK'
    };
    res.send(response);
  });

};


/**
 * Get User Publications
 */
exports.get_user_publications = function(req, res) {

  Publications.find({ user : req.user._id}).lean().sort('-created').populate('user', 'name username').populate('category', 'name').exec(function(err, publications) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the publications'
      });
    }
    var response = {};
    publications.forEach(function(publication) { 
      var date = moment(publication.created);
      var diff = moment.duration(moment(date).add(30,'d').diff(Date.now()));
      publication.addedProperty = 'remaining_hours';
      publication.remaining_hours = diff.asHours();
    });
    
    response.data = publications;
    response.status = {
      error : 'false',
      code : 200,
      msg : 'OK'
    };
    res.send(response);

  });

};


/**
 * Update User Publication
 */
exports.update_user_publication = function(req, res) {

  Publications.findOne({ _id : req.params.publicationId}).exec(function(err, publication) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot find the publication to update'
      });
    }
    
    // Update publication with every key in the body
    _.forIn(req.body, function(value, key){
      publication[key] = value;
    });
    publication.save(function(err, publication){
      if(err){
        return res.status(500).json({
          error: 'Cannot update publication'
        });
      }
      var response = {};
      response.data = publication;
      response.status = {
        error : 'false',
        code : 200,
        msg : 'OK'
      };
      res.send(response);
    });

  });

};


/**
 * Get Publication by ID
 */
exports.get_publication_by_id = function(req, res) {

  Publications.findOne({ _id : req.params.publicationId}).lean().sort('-created').populate('user', 'name username').populate('category','name').exec(function(err, publications) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the publications'
      });
    }
    var response = {};

    var date = moment(publications.created);
    var diff = moment.duration(moment(date).add(30,'d').diff(Date.now()));
    publications.addedProperty = 'remaining_hours';
    publications.remaining_hours = diff.asHours();
    
    response.data = publications;
    response.status = {
      error : 'false',
      code : 200,
      msg : 'OK'
    };
    res.send(response);

  });

};


/**
 * Delete specific Publication
 */
exports.delete = function(req, res) {

  Publications.findOne({ _id : req.params.publicationId}).exec(function(err, publication) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot find the publication'
      });
    }
    publication.remove(function ( err, publication ){
      if(err){
        return res.status(500).json({
        error: 'Cannot delete the publication'
      });

      }
      var response = {};
      response.status = {
        error : 'false',
        code : 200,
        msg : 'OK'
      };
      res.send(response);

    });

  });

};
