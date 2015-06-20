'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var HelpPage = new Module('help_page');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
HelpPage.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  HelpPage.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  HelpPage.menus.add({
    title: 'helpPage example page',
    link: 'helpPage example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  HelpPage.aggregateAsset('css', 'helpPage.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    HelpPage.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    HelpPage.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    HelpPage.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return HelpPage;
});
