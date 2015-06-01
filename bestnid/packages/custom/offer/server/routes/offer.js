'use strict';

var offer = require('../controllers/offer'),
    config = require('meanio').loadConfig();

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Offer, app, auth, database) {

  app.route('/offer')
    .get(offer.all)
    .delete(offer.delete)
    .post(offer.create)
    .put(offer.update);

  app.route('/offer/:publicationID')
    .get(offer.get_offer_by_id);

    


  app.get('/offer/example/render', function(req, res, next) {
    Offer.render('index', {
      package: 'offer'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
