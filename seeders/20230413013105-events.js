'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.bulkInsert('events', [
			{
				userId: 18180,
				title: 'Meeting Besar',
				organizer: 'areza@aio.co.id',
				description: 'Meeting membahas laporan bulanan',
				online_offline: 'Online',
				url_online: 'google.com',
				roomId: 1,
				message: 'kuy',
				date: '2023-07-28',
				time_start: '13:30:23',
				time_end: '15:00:23',
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
