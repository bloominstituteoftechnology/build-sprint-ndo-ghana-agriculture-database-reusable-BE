
exports.up = function (knex, Promise) {
    return knex.schema.createTable("clients", table => {
        table.increments('id');
        table.string('name').notNullable().unique();
        table.string('village').notNullable();
        table.float('loanAmount');
        table.float('paidAmount');
        table.float('dueAmount');
        table.string('loanInitailDate');
        table.string('loanDueDate');

    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("clients")
};
