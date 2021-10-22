/*
*  Delete Machine from the database
*  Redirect to '/' after delete
*/

const requireOption = require('../requireOption');

module.exports = function delMachineMW(objectrepository) {
    return function(req, res, next) {
        next();
    }
}