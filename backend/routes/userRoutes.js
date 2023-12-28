const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { auth } = require('../middleware/auth.middleware');


// Route for user registration
router.post('/register', userController.registerUser);

// Route for user login
router.post('/login',auth, userController.loginUser);
router.get("/logout",userController.logoutuser)

module.exports = router;
