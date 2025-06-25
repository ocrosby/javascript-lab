// src/routes/users.js
const express = require('express');
const { getAllUsers, registerUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', registerUser);

module.exports = router;
