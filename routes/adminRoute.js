const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/profiles', adminController.getAllProfiles);

module.exports = router;
