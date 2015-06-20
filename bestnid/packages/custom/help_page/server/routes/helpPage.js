'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(HelpPage, app, auth, database) {

  app.get('/helpPage/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/helpPage/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/helpPage/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/helpPage/example/render', function(req, res, next) {
    HelpPage.render('index', {
      package: 'help_page'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
