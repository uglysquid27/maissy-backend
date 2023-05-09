'use strict';
var bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10, 'a');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.bulkInsert('users', [
			{
				email: 'test@gmail.com',
				password: bcrypt.hashSync('password', salt),
				name: 'Test',
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
