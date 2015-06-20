'use strict';


var category = require('../controllers/category'),
    config = require('meanio').loadConfig();


/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function (Category, app, auth, database) {

    app.route('/category')
        .get(category.all)
        .post(category.create);


};
