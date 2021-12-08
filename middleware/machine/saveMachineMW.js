/*
*  Save Machine to the database with a POST params
*  The method create a new Machine
*  this mw create an entity
*   redirect to '/' after success
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const MachineModel = requireOption(objectrepository, 'MachineModel');

    return function(req, res, next) {
        if(typeof  req.body.name === 'undefined' ||
            typeof req.body.factory === 'undefined'
        ) {
            return next();
        }

        if(typeof res.locals.machine === 'undefined') {
            res.locals.machine = new MachineModel();
        }

        res.locals.machine.name = req.body.name;
        res.locals.machine.factory = req.body.factory;
        res.locals.machine.condition = "Good"

        res.locals.machine.save((err) => {
            if (err) {
                return next(err);
            }

            return res.redirect('/machine');
        });
    };
};