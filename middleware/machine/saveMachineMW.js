/*
*  Save Machine to the database with a POST params
*  The method create a new Machine
*  this mw create an entity
*   redirect to '/' after success
*/

const requireOption = require('../requireOption');

module.exports = function saveMachineMW(objectrepository) {
    return function(req, res, next) {
        next();
    }
}