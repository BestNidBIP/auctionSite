'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var TermsAndConditions = new Module('terms_and_conditions');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
TermsAndConditions.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  TermsAndConditions.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  TermsAndConditions.menus.add({
    title: 'termsAndConditions example page',
    link: 'termsAndConditions example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  TermsAndConditions.aggregateAsset('css', 'termsAndConditions.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    TermsAndConditions.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    TermsAndConditions.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    TermsAndConditions.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return TermsAndConditions;
});
