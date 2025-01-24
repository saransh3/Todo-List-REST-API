const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Add verified user to request object
    next(); // Call the next middleware or route handler
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};
