const mongoose = require('mongoose'); // Use `require` instead of `import`

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema); // Export model using `module.exports`
