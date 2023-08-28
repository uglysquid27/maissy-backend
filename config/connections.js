const Sequelize = require('sequelize');
const config = require('./config');

const connectDevelopment = new Sequelize(config.development.database, config.development.username, config.development.password, config.development);
const connectEmployee = new Sequelize(config.aioEmployee.database, config.aioEmployee.username, config.aioEmployee.password, config.aioEmployee);
const connectSms = new Sequelize(config.sms.database, config.sms.username, config.sms.password, config.sms);
const connectPdm = new Sequelize(config.pdm.database, config.pdm.username, config.pdm.password, config.pdm);
const connectKluber = new Sequelize(config.kluber.database, config.kluber.username, config.kluber.password, config.kluber);

module.exports = {
	connectDevelopment,
	connectEmployee,
	connectSms,
	connectPdm,
	connectKluber,
};