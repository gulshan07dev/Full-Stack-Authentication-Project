const express = require('express');
const { signup, login, logout } = require('../controllers/authController.js');
const authRouter = express.Router();
const jwtAuth = require('../middleware/jwtAuth.js');

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get('/logout', jwtAuth, logout);

// Add the check-auth route with the user's name
authRouter.get('/check-auth', jwtAuth, (req, res) => {
  res.status(200).json({ message: 'Authenticated', name: req.user.name});
});

module.exports = authRouter;
