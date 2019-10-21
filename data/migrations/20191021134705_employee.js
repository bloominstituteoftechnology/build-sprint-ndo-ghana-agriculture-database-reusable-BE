
exports.up = function (knex, Promise) {
    return knex.schema.createTable("employee", table => {
        table.increments('id');
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.string('email').notNullable().unique();
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("employee")
};
