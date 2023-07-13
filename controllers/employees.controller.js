const { Sequelize, QueryTypes } = require("sequelize");
const { connectEmployee } = require("../config/connections");

exports.employeesEmail = async (req, res) => {
  try {
    let response = [];
    const empMail = await connectEmployee.query(
      "SELECT mail_id FROM `aio_employee`.`mst_employment`WHERE is_active = 1 ",
      { type: QueryTypes.SELECT }
    );
    empMail.forEach((element) => {
      response.push(element.mail_id);
    });
    // const emp = await connectEmploye.query('SELECT * FROM `aio_employee`.`mst_employment` LIMIT 20) ', { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.employeesNameEmail = async (req, res) => {
  try {
    let response = [];
    const emp = await connectEmployee.query(
      "SELECT mail_id,employee_name FROM `aio_employee`.`mst_employment`WHERE is_active = 1 ",
      { type: QueryTypes.SELECT }
    );
    emp.forEach((element) => {
      response.push([element.mail_id, element.employee_name]);
    });
    // const emp = await connectEmploye.query('SELECT * FROM `aio_employee`.`mst_employment` LIMIT 20) ', { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
