// src/routes/todos.js
const express = require('express');
const { getAllTodos, createTodoItem } = require('../controllers/todoController');

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', createTodoItem);

module.exports = router;
