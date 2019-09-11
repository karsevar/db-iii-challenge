const db = require('../data/db-config.js');

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id})
}

function findSteps(id) {
    return db('steps as st')
            .join('schemes as sc', 'st.scheme_id', '=', 'sc.id')
            .where({scheme_id: id})
            .select('st.id','sc.scheme_name', 'st.step_number', 'st.instructions')
}

function add(schemeData) {
    return db('schemes').insert(schemeData)
}

function update(changes, id) {
    return db('schemes').where({id}).update(changes)
}


module.exports = {find, findById, findSteps, add, update}