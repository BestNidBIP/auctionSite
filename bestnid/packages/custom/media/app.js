'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Media = new Module('media');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Media.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Media.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Media.menus.add({
    title: 'media example page',
    link: 'media example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Media.aggregateAsset('css', 'media.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Media.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Media.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Media.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Media;
});
