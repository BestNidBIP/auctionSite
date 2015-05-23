'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Offer, app, auth, database) {

  app.get('/offer/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/offer/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/offer/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/offer/example/render', function(req, res, next) {
    Offer.render('index', {
      package: 'offer'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
