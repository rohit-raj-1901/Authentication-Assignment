const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authValidator = require('../validators/authValidator');

router.post('/register', authValidator.validateRegister, authController.register);
router.post('/login', authController.login);
router.post('/login/google', authController.loginWithExternalProvider);
router.get('/logout', authController.logout);

module.exports = router;
