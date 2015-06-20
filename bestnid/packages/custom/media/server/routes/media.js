'use strict';


var media = require('../controllers/media'),
    config = require('meanio').loadConfig();


/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Media, app, auth, database) {


    app.route('/media')
        .get(media.all)
        .post(media.create);

};
