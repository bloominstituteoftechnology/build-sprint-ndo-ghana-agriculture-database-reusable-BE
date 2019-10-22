const db = require('./dbConfig.js');

module.exports = {
    find,
    addClient,
    findById,
    findByNameVillage,
    deleteClientById,
    updateClient,
};


function find() {
    return db('clients').select("id", 'name', 'village', 'loanAmount', 'paidAmount', 'dueAmount', 'loanInitialDate', 'loanDueDate', 'achievedBag', 'goalBag');
}

function findById(id) {
    return db('clients').select('id', 'name', 'village', 'loanAmount', 'paidAmount', 'dueAmount', 'loanInitialDate', 'loanDueDate', 'achievedBag', 'goalBag')
        .where({ id })
        .first();
}

function findByNameVillage(name, village) {
    return db('clients').select('name', 'village', 'loanAmount', 'paidAmount', 'dueAmount', 'loanInitialDate', 'loanDueDate', 'achievedBag', 'goalBag')
        .where({ name, village })
        .first();
}

async function addClient(clientInfo) {
    const { name, village, loanAmount, paidAmount, dueAmount, loanInitialDate, loanDueDate, achievedBag, goalBag } = clientInfo;
    const [id] = await db('clients').insert({ name, village, loanAmount, paidAmount, dueAmount, loanInitialDate, loanDueDate, achievedBag, goalBag })
        .returning("id");
    return findById(id);
}


function deleteClientById(id) {
    return db('clients')
        .where({ id })
        .delete();
}

function updateClient(id, client) {
    return db('clients')
        .where('id', Number(id))
        .update(client);
}

