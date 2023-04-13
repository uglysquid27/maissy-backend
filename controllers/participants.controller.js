const Validator = require('fastest-validator');
const v = new Validator();
const { participants } = require('./../models');
// let { startOfDay, endOfDay, parseISO } = require('date-fns');
const apiResponse = require('./../traits/api-response');
const { Op } = require('sequelize');

exports.index = async (req, res) => {
	try {
		const response = await participants.findAll({ attributes: ['eventId', 'email'] });

		apiResponse.sucess(res, response, 200);

		// });
	} catch (e) {
		apiResponse.error(res, e.message, 500);
	}
};
