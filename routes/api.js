var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const eventController = require('./../controllers/events.controllers');
const participantsController = require('./../controllers/participants.controller');

urlencoded = bodyParser.urlencoded({ extended: false })

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});
router.get('/events', eventController.index);
router.post('/events', eventController.store);
router.get('/events/:from/:to', eventController.dateRange);


router.get('/participants', participantsController.index);

module.exports = router;
