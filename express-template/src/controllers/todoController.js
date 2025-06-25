// src/controllers/todoController.js
const Todo = require('../models/Todo');

// GET /api/todos
const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.getTodos();
    res.json(todos);
  } catch (error) {
    next(error); // Passes error to error handling middleware
  }
};

// POST /api/todos
const createTodoItem = async (req, res, next) => {
  try {
    const { userId, text } = req.body;

    if (!userId || !text) {
      return res.status(400).json({ message: 'userId and text are required' });
    }

    const todo = await Todo.createTodo({ userId, text });
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTodos,
  createTodoItem
};
