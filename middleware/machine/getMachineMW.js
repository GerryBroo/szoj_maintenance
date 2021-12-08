/*
*  Get Machine from the database by id
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const MachineModel = requireOption(objectrepository, 'MachineModel');

    return function(req, res, next) {
        MachineModel.findOne({ _id: req.params.machineid }, (err, machine) => {
            if (err || !machine) {
                return next(err);
            }

            res.locals.machine = machine;
            return next();
        });
    };
};