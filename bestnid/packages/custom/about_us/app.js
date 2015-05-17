'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var AboutUs = new Module('about_us');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
AboutUs.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  AboutUs.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  AboutUs.menus.add({
    title: 'aboutUs example page',
    link: 'aboutUs example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  AboutUs.aggregateAsset('css', 'aboutUs.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    AboutUs.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    AboutUs.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    AboutUs.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return AboutUs;
});
