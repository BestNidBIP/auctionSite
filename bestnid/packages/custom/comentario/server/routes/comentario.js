'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Comentario, app, auth, database) {

  app.get('/comentario/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/comentario/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/comentario/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/comentario/example/render', function(req, res, next) {
    Comentario.render('index', {
      package: 'comentario'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
