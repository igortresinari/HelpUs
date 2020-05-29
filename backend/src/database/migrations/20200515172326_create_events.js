
exports.up = function(knex) {
    return knex.schema.createTable('events', function (table) {
        table.increments('id');
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('address').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

        table.integer('ong_id').notNullable();
        
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  return knex.schemas.dropTable('events');
};
