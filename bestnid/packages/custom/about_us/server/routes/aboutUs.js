'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(AboutUs, app, auth, database) {

  app.get('/aboutUs/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/aboutUs/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/aboutUs/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/aboutUs/example/render', function(req, res, next) {
    AboutUs.render('index', {
      package: 'about_us'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
