// src/models/User.js
const db = require('./index');

const createUser = async ({ name, email }) => {
  const result = await db.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  return result.rows[0];
};

const getUsers = async () => {
  const result = await db.query('SELECT * FROM users');
  return result.rows;
};

module.exports = { createUser, getUsers };
