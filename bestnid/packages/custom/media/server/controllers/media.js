'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Media = mongoose.model('Media');


var uuid = require('node-uuid'),
multiparty = require('multiparty'),
fs = require('fs');

/**
 * Get all Categories
 */
exports.all = function(req, res) {
  Media.find({}, function(err, category) {
    
    res.send(category);  
  });
};

/**
 * Create publication
 */
exports.create = function(req, res) {
  var form = new multiparty.Form();

  form.parse(req, function(err, fields, files) {
    console.log(fields);
    console.log(files);
    var file = files.file[0];
    var contentType = file.headers['content-type'];
    var tmpPath = file.path;
    var extIndex = tmpPath.lastIndexOf('.');
    var extension = (extIndex < 0) ? '' : tmpPath.substr(extIndex);
    // uuid is for generating unique filenames.
    var fileName = uuid.v4() + extension;
    var destPath = 'packages/custom/media/public/assets/img/' + fileName;
    console.log(contentType);
    // Server side file type checker.
    /*if (contentType !== 'image/png' && contentType !== 'image/jpeg') {
        fs.unlink(tmpPath);
        return res.status(400).send('Unsupported file type.');
    }*/

    var is = fs.createReadStream(tmpPath);
    var os = fs.createWriteStream(destPath);

    if(is.pipe(os)) {
        fs.unlink(tmpPath, function (err) { //To unlink the file from temp path after copy
            if (err) {
                console.log(err);
            }
        });
        var media = new Media({image:fileName});
        console.log(media);
        media.save(function(err){
          if(err){
            console.log(err);
            return res.status(500).json({
              error: 'Cannot save the image'
            });
          }
          return res.json(destPath);
        });
    }else
        return res.json('File not uploaded');
  });

};

