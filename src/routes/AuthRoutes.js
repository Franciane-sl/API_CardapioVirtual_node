const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const authMiddleware = require('../middleware/AuthMiddleware');

router.post('/login', authController.login);

router.get('/me', authMiddleware(), authController.me);

module.exports = router;
