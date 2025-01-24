const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todo');
require('./jobs/cron'); // Import and start the cron job

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Register Routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/todos', todoRoutes); // Todo routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
