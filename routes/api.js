var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const eventController = require('./../controllers/events.controllers');
const participantsController = require('./../controllers/participants.controller');
const roomsController = require('./../controllers/rooms.controller');
const authController = require('./../controllers/auth.controllers');

urlencoded = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});
// router.post('/signin', authController.login);

router.get('/events', eventController.index);
router.post('/events', eventController.store);
router.get('/events/:from/:to', eventController.dateRange);
router.delete('/events/:id', eventController.destroy);

router.get('/participants', participantsController.index);
router.post('/participants', participantsController.store);
router.delete('/participants/:eventId', participantsController.destroy);

router.get('/rooms', roomsController.index);

module.exports = router;
