const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Machine = db.model('Machine', {
    name: String,
    factory: String,
    condition: String,
});

module.exports = Machine;