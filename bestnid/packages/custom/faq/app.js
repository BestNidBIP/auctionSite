'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Faq = new Module('faq');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Faq.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Faq.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Faq.menus.add({
    title: 'faq example page',
    link: 'faq example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Faq.aggregateAsset('css', 'faq.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Faq.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Faq.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Faq.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Faq;
});
