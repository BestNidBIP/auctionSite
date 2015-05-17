'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var PrivacyPolicy = new Module('privacy_policy');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
PrivacyPolicy.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  PrivacyPolicy.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  PrivacyPolicy.menus.add({
    title: 'privacyPolicy example page',
    link: 'privacyPolicy example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  PrivacyPolicy.aggregateAsset('css', 'privacyPolicy.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    PrivacyPolicy.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    PrivacyPolicy.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    PrivacyPolicy.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return PrivacyPolicy;
});
