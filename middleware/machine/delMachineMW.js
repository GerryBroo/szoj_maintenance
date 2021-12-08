/*
*  Delete Machine from the database
*  Redirect to '/' after delete
*/

const requireOption = require('../requireOption');

module.exports = function delMachineMW(objectrepository) {
    return function(req, res, next) {
        if(typeof res.locals.machine === 'undefined') {
            return next();
        }

        res.locals.machine.remove(err => {
            if(err) {
                return next(err);
            }

            return res.redirect('/machine')
        });
    };
};