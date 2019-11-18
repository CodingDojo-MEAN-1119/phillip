const AuthController = require('../controllers/auth.controller');
const router = require('express').Router();


module.exports = router
  .post('/login', AuthController.login)
  .post('/register', AuthController.register)
  .delete('/logout', AuthController.logout);
