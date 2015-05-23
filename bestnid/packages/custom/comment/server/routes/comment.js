'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Comment, app, auth, database) {

  app.get('/comment/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/comment/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/comment/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/comment/example/render', function(req, res, next) {
    Comment.render('index', {
      package: 'comment'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
