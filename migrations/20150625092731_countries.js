'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('months', function(table) {
    table.increments('date').primary();
    table.string('title');
    table.string('events');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('months');
};
