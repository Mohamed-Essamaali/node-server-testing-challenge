const { schema } = require("../config");

exports.up = async function(knex) {
  await knex.schema.createTable('products',tb =>{
      tb.increments('id')
      tb.text('name').notNull().unique()
      tb.text('department').notNull()
      tb.text('description')
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('products')
};
