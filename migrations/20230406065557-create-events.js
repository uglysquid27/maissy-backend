'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize, DataTypes) {
		await queryInterface.createTable('events', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				
			},
			title: {
				type: Sequelize.STRING,
			},
			organizer: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.STRING,
			},
			online_offline: {
				type: Sequelize.ENUM(['Offline', 'Online']),
				defaultValue: 'Online',
			},
			url_online: {
				type: Sequelize.STRING,
			},
			roomId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'rooms',
					},
					key: 'id',
				},
			},
			message: {
				type: Sequelize.TEXT,
			},
			date: {
				type: Sequelize.DATE,
			},
			time_start: {
				type: Sequelize.TIME,
			},
			time_end: {
				type: Sequelize.TIME,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('events');
	},
};
