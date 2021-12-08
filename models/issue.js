const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Issue = db.model('Issue', {
    name: String,
    date: Date,
    status: String,
    message: String,
    comment: String,
    _machine: {
        type: Schema.Types.ObjectId,
        ref: 'Machine'
    },
});

module.exports = Issue;