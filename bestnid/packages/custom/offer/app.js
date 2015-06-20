'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Offer = new Module('offer');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Offer.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Offer.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Offer.menus.add({
    title: 'offer example page',
    link: 'offer example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Offer.aggregateAsset('css', 'offer.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Offer.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Offer.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Offer.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Offer;
});
