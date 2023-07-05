const Validator = require("fastest-validator");
const v = new Validator();
const { attachments } = require("./../models");
// let { startOfDay, endOfDay, parseISO } = require('date-fns');
const apiResponse = require("./../traits/api-response");
const { Op } = require("sequelize");

exports.index = async (req, res) => {
  try {
    const response = await attachments.findAll({
      attributes: ["eventId", "fileName", "path"],
    });

    apiResponse.sucess(res, response, 200);

    // });
  } catch (e) {
    apiResponse.error(res, e.message, 500);
  }
};
