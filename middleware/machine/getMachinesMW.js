/*
*  Get all Machine from the database
*/

const requireOption = require('../requireOption');

module.exports = function getMachinesMW(objectrepository) {
    const MachineModel = requireOption(objectrepository, 'MachineModel');

    return function(req, res, next) {
        MachineModel.find({}, (err, machines) => {
            if(err) {
                return next(err);
            }
            res.locals.machines = machines;
            return next();
        });
    };
};