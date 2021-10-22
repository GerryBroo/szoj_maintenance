/*
*  Get all Issue from the database
*/

const requireOption = require('../requireOption');

module.exports = function getIssuesMW(objectrepository) {
    return function(req, res, next) {
        next();
    }
}