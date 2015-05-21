'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Publicacion, app, auth, database) {

  app.get('/publicacion/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/publicacion/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/publicacion/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/publicacion/example/render', function(req, res, next) {
    Publicacion.render('index', {
      package: 'publicacion'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
