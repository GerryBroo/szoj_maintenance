/*
*  Get all Issue from the database
*/

const requireOption = require('../requireOption');

module.exports = function getIssuesMW(objectrepository) {
    const IssueModel = requireOption(objectrepository, 'IssueModel');

    return function(req, res, next) {
        IssueModel.find({}, (err, issues) => {
            if(err) {
                return next(err);
            }
            res.locals.issues = issues;
            return next();
        });
    }
}