/*
*  Save Issue to the database with a POST params
*  The method update or create a new Issue
*  this mw create an entity
*  redirect to /issues.html after success
*/

const requireOption = require('../requireOption');

module.exports = function saveIssueMW(objectrepository) {
    return function(req, res, next) {
        next();
    }
}