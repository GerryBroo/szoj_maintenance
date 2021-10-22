/*
*  Get all Machine from the database
*/

const requireOption = require('../requireOption');

module.exports = function geMachinesMW(objectrepository) {
    return function(req, res, next) {
        next();
    }
}