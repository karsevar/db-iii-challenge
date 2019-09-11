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

module.exports = {find, findById, findSteps}