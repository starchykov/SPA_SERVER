const express = require('express')
const UserController = require('../controllers/user_controller')
const checkAuthMiddleware = require('../middleware/check_auth')

const router = express.Router();

// Post method route
router.post('/sign-up', UserController.signUp);
router.post('/login', UserController.logIn);

// Get method roure
router.get('/refresh', UserController.refresh);
router.get('/logout', UserController.logout);
router.get('/activation/:link', UserController.activation)

module.exports = router;