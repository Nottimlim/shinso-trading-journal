const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController.js');

router.get('/', indexController.getHomePage);

module.exports = router;
