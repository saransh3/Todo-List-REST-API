const express = require('express');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todoController');
const authenticate = require('../middlewares/auth');
const router = express.Router();

// Create Todo (protected)
router.post('/', authenticate, createTodo);

// Get Todos (protected)
router.get('/', authenticate, getTodos);

// Update Todo (protected)
router.put('/:id', authenticate, updateTodo);

// Delete Todo (protected)
router.delete('/:id', authenticate, deleteTodo);

module.exports = router;
