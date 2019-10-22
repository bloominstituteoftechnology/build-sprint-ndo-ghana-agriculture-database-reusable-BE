
exports.up = function (knex, Promise) {
    return knex.schema.createTable("lastSigned", table => {
        table.increments('id');
        table.integer('subject');
        table.string('username').notNullable().unique();
        table.integer('iat');
        table.integer('exp');
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("lastSigned")
};
