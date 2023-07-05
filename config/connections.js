const Sequelize = require('sequelize');
const config = require('./config');

const connectDevelopment = new Sequelize(config.development.database, config.development.username, config.development.password, config.development);
const connectEmployee = new Sequelize(config.aioEmployee.database, config.aioEmployee.username, config.aioEmployee.password, config.aioEmployee);

module.exports = {
	connectDevelopment,
	connectEmployee,
};