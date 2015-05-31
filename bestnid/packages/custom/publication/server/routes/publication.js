'use strict';


var publication = require('../controllers/publication'),
    config = require('meanio').loadConfig();


/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function (Publication, app, auth, database) {

    app.route('/publication')
        .get(publication.all)
        .post(publication.create);


    app.route('/publication/:publicationId')
        .get(publication.get_publication_by_id)
        .delete(publication.delete);

    app.route('/publication/page/:pageNumber')
        .get(publication.get_publications);
    

    app.route('/user/publications')
        .get(publication.get_user_publications);

};
