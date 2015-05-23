'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Comment = new Module('comment');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Comment.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Comment.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Comment.menus.add({
    title: 'comment example page',
    link: 'comment example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Comment.aggregateAsset('css', 'comment.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Comment.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Comment.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Comment.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Comment;
});
