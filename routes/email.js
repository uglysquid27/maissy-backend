var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const apiResponse = require('./../traits/api-response');

router.post('/send', async (req, res, next) => {

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		// service: 'gmail',
		host: 'mail.aio.co.id',
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: 'appskjy@aio.co.id',
			pass: 'Plicakjy1234',
		},
		from: 'appskjy@aio.co.id',
	});

	var mail = {
		// sender address
		from: req.body.organizer + '<appskjy@aio.co.id>',
		to: req.body.participants, // list of receivers
		subject: 'AIO Meeting Invitation ', // Subject line
		// html: '<b>' + req.body.message + '</b>', // html body
		text: req.body.message, // plain text body
		
	};

	// send mail with defined transport object
	let infos = await transporter.sendMail(mail, function (error, info) {
		if (error) {
			res.send(error);
		} else {
			// console.log(info);
			res.send(info);
		}
	});

	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(infos));
	console.log(req.body);
});



module.exports = router;
