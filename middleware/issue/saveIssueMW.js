/*
*  Save Issue to the database with a POST params
*  The method update or create a new Issue
*  this mw create an entity
*  redirect to /issues.html after success
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const IssueModel = requireOption(objectrepository, 'IssueModel');

    return function(req, res, next) {
        if(typeof req.body.name === 'undefined' ||
            typeof req.body.status === 'undefined' ||
            typeof req.body.message === 'undefined' ||
            typeof req.body.comment === 'undefined' ||
            typeof req.body.machine === 'undefined'
        ) {
            return next();
        }

        if(typeof res.locals.issue === 'undefined') {
            res.locals.issue = new IssueModel();
        }

        res.locals.issue.name = req.body.name;
        res.locals.issue.date = Date.now();
        res.locals.issue.status = req.body.status;
        res.locals.issue.message = req.body.message;
        res.locals.issue.comment = req.body.comment;
        res.locals.issue._machine = req.body.machine;

        res.locals.issue.save((err) => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/machine/machinecon/${res.locals.issue._machine._id}`);
        });
    }
}