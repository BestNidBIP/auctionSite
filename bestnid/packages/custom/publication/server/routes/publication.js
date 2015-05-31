'use strict';


var publication = require('../controllers/publication'),
    config = require('meanio').loadConfig();


/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function (Publication, app, auth, database) {

    app.route('/publication')
        .get(publication.all)
        .post(publication.create);

    app.route('/publication/:pageNumber')
        .get(publication.get_publications);


    app.get('/publication/example/render', function (req, res, next) {
        Publication.render('index', {
            package: 'publication'
        }, function (err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
