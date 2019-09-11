const db = require('../data/db-config.js');

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id})
}

module.exports = {find, findById}