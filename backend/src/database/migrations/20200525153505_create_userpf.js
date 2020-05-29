exports.up = function(knex) {
    return knex.schema.createTable('userpf', function (table) {
        table.string('id').primary();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
    });
  };
  
  exports.down = function(knex) {
    knex.schema.dropTable('userpf');
  };
  