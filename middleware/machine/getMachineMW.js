/*
*  Get Machine from the database by id
*/

const requireOption = require('../requireOption');

module.exports = function getMachineMW(objectrepository) {
    return function(req, res, next) {
        next();
    }
}