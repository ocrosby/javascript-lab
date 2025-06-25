// src/models/Todo.js
const db = require('./index');

const createTodo = async ({ userId, text }) => {
  const result = await db.query(
    'INSERT INTO todos (user_id, text) VALUES ($1, $2) RETURNING *',
    [userId, text]
  );
  return result.rows[0];
};

const getTodos = async () => {
  const result = await db.query('SELECT * FROM todos');
  return result.rows;
};

module.exports = { createTodo, getTodos };
