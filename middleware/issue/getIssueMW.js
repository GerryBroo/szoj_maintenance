/*
*  Get Issue from the database by id
*/

const requireOption = require('../requireOption');

module.exports = function getIssueMW(objectrepository) {
    const IssueModel = requireOption(objectrepository, 'IssueModel');

    return function(req, res, next) {
        IssueModel.findOne({ _id: req.params.issueid }, (err, issue) => {
            if (err || !issue) {
                return next(err);
            }

            res.locals.issue = issue;
            return next();
        });
    };
}