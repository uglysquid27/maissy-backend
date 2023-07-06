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
exports.store = async (req, res) => {
  try {
    const response = await attachments.create(req.body, {
      fields: ["eventId", "fileName", "realName", "path", "type", "sizeBytes"],
    });

    apiResponse.sucess(res, response, 201);
  } catch (e) {
    apiResponse.error(res, e.message, 500);
  }
};
exports.destroy = async (req, res) => {
  try {
    const id = req.params.eventId;
    let data = await attachments.findAll({
      where: {
        eventId: id,
      },
      attributes: [
        "eventId",
        "fileName",
        "realName",
        "path",
        "type",
        "sizeBytes",
      ],
    });

    if (!data) {
      apiResponse.sucess(res, "Data is not found!", 203);
    }

    await attachments.destroy({
      where: {
        eventId: id,
      },
    });

    res.status(200).json({ message: "Data was deleted!" });
  } catch (e) {
    apiResponse.error(res, e.message, 500);
  }
};
