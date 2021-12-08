/*
*  Delete Issue from the database
*  Redirect to '/issue.html' after delete
*/

const requireOption = require('../requireOption');

module.exports = function delIssueMW(objectrepository) {
    return function(req, res, next) {
        if(typeof res.locals.issue === 'undefined') {
            return next();
        }

        res.locals.issue.remove(err => {
            if(err) {
                return next(err);
            }

            return res.redirect('/issue')
        });
    }
}