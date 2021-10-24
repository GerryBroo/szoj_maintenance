/*
*  Get all Issue from the database
*/

const requireOption = require('../requireOption');

module.exports = function getIssuesMW(objectrepository) {
    return function(req, res, next) {
        setTimeout(function () {
            res.locals.issues = [
                {
                    name: 'Hegesztő fej törés',
                    date: '2021.09.29. 12:38',
                    condition: 'Done'
                }
            ];
            next();
        }, 3);
    }
}