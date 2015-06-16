'use strict';


var comment = require('../controllers/comment'),
    config = require('meanio').loadConfig();

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Comment, app, auth, database) {

 
  app.route('/comment')
    .post(comment.create);


  app.route('/comment/respond')
    .post(comment.respond);

  app.route('/comment/:publicationId')
    .get(comment.all);


  app.get('/comment/example/render', function(req, res, next) {
    Comment.render('index', {
      package: 'comment'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
