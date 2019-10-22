const db = require('./dbConfig.js');

module.exports = {
    add,
    addUser,
    find,
    findBy,
    findById,
    update,
    deleteUser,
    addLastEmployee,
};

async function addLastEmployee(lastEmployee) {
    const [id] = await db('lastSigned').insert(user)
    return findById(id);
}

function update(id, user) {
    return db('employee')
        .where('id', Number(id))
        .update(user);
}


function deleteUser(id) {
    return db('employee')
        .where({ id })
        .delete()

}

function find() {
    return db('employee').select('id', 'username');
}

function findBy(filter) {
    return db('employee').where(filter);
}

async function add(user) {
    const [id] = await db('employee').insert(user)
        .returning("id");
    return findById(id);
}
async function addUser(user) {
    const [id] = await db('employee').insert(user)
    //.returning("id");
    return findById(id);
}

function findById(id) {
    return db('employee')
        .where({ id })
        .first();
}
