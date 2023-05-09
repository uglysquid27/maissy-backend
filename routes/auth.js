var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const authController = require('./../controllers/auth.controllers');

router.post('/signin', authController.login);

module.exports = router;
