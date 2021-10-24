/*
*  Get all Machine from the database
*/

const requireOption = require('../requireOption');

module.exports = function geMachinesMW(objectrepository) {
    return function(req, res, next) {

        setTimeout(function () {
            res.locals.machines = [
                {
                    name: 'Hegesztő állomás',
                    factory: 'B1',
                    condition: 'Good'
                },
                {
                    name: 'Forrasztó állomás',
                    factory: 'B2',
                    condition: 'Error'
                }
            ];
            next();
        }, 3);
    }
}