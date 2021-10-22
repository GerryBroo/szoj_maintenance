/*
*  Delete Issue from the database
*  Redirect to '/issue.html' after delete
*/

const requireOption = require('../requireOption');

module.exports = function delIssueMW(objectrepository) {
    return function(req, res, next) {
        next();
    }
}