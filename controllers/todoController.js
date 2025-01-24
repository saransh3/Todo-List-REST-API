const Todo = require('../models/todo');

// Create a new Todo
exports.createTodo = async (req, res) => {
  const { title, description, dueDate } = req.body;

  try {
    const newTodo = new Todo({
      title,
      description,
      dueDate,
      user: req.user.id, // Attach the user ID from JWT token
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all Todos for the logged-in user
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a Todo
exports.updateTodo = async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    // Find the todo by ID and update it
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a Todo
exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
