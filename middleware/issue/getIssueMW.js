/*
*  Get Issue from the database by id
*/

const requireOption = require('../requireOption');

module.exports = function getIssueMW(objectrepository) {
    return function(req, res, next) {
        next();
    }
}