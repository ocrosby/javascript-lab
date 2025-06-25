// src/controllers/userController.js
const User = require('../models/User');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const user = await User.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllUsers, registerUser };
