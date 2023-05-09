const Validator = require('fastest-validator');
const v = new Validator();
const { events } = require('./../models');
// let { startOfDay, endOfDay, parseISO } = require('date-fns');
const apiResponse = require('./../traits/api-response');
const { Op } = require('sequelize');

exports.index = async (req, res) => {
	try {
		const response = await events.findAll();

		apiResponse.sucess(res, response, 200);

		// });
	} catch (e) {
		apiResponse.error(res, e.message, 500);
	}
};
exports.store = async (req, res) => {
	try {
		// const schema = {
		// 	userId: { type: 'number', integer: true },
		// 	title: { type: 'string' },
		// 	organizer: { type: 'string' },
		// 	description: { type: 'string' },
		// 	url_online: { type: 'string' },
		// 	message: { type: 'string' },
		// 	date: { type: 'date', nullable: false },
		// };

		// const validate = v.validate(req.body, schema);

		// if (validate.length) {
		// 	apiResponse.error(res, validate, 400);
		// }

		const response = await events.create(req.body);

		apiResponse.sucess(res, response, 201);
	} catch (e) {
		apiResponse.error(res, e.message, 500);
	}
};
exports.dateRange = async (req, res) => {
	try {
		// const { page, size } = req.query;
		// const { limit, offset } = getPagination(page, size);

		const response = await events.findAll({
			where: {
				date: {
					[Op.between]: [req.params.from, req.params.to],
				},
			},
		});

		apiResponse.sucess(res, response, 200);
		// events.findAll({ limit, offset }).then((data) => {
		// 	const response = getPagingData(page, limit, data);

		// });
	} catch (e) {
		apiResponse.error(res, e.message, 500);
	}
};
exports.destroy = async (req, res) => {
	try{
	  const id = req.params.id;
	  let data = await events.findByPk(id);
	
	  if (!data) {
		apiResponse.sucess(res, 'Data is not found!', 203);
	  }
	
	  await data.destroy(id);
	
	  res.status(200).json({ message: "Data was deleted!" });
	}catch(e){
	  apiResponse.error(res, e.message, 500);
	}
  };
