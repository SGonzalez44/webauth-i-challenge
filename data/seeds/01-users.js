const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Sal', password: bcrypt.hashSync('password', 8) },
        { username: 'Papas', password: bcrypt.hashSync('password', 8) },
        { username: 'George', password: bcrypt.hashSync('password', 8) },
        { username: 'Peque', password: bcrypt.hashSync('password', 8) },
      ]);
    });
};
