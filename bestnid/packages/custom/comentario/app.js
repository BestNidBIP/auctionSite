'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Comentario = new Module('comentario');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Comentario.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Comentario.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Comentario.menus.add({
    title: 'comentario example page',
    link: 'comentario example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Comentario.aggregateAsset('css', 'comentario.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Comentario.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Comentario.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Comentario.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Comentario;
});
