const cron = require('node-cron');
const Todo = require('../models/todo');

// CRON job runs every day at midnight
cron.schedule('0 0 * * *', async () => {
  try {
    const result = await Todo.updateMany(
      { dueDate: { $lt: new Date() }, completed: false },
      { $set: { completed: true } }
    );
    console.log(`${result.nModified} todos marked as completed.`);
  } catch (err) {
    console.error('Error in CRON job:', err.message);
  }
});
