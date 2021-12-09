/*
*  Save machine new condition
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {

        res.locals.issues.every(function (issue) {
            if(res.locals.machine._id.equals(issue._machine)) {
                if(issue.status === "Transferred") {
                    res.locals.machine.condition = "Good";
                }
                else {
                    res.locals.machine.condition = "Bad";
                    return false
                }
            }
        })

        res.locals.machine.save((err) => {
            if (err) {
                return next(err);
            }
            return res.redirect('/issue');
        });
    };
};