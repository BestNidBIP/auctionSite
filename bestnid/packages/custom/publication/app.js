'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Publication = new Module('publication');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Publication.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Publication.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Publication.menus.add({
    title: 'publication example page',
    link: 'publication example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Publication.aggregateAsset('css', 'publication.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Publication.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Publication.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Publication.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Publication;
});
