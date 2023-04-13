'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	const Events = sequelize.define('events', { timestamps: false });
	const Rooms = sequelize.define(
		'rooms',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			room_name: {
				type: DataTypes.STRING,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		},
		{ tableName: 'rooms' }
	);
	Rooms.hasMany(Events);
	// class rooms extends Model {
	// 	/**
	// 	 * Helper method for defining associations.
	// 	 * This method is not a part of Sequelize lifecycle.
	// 	 * The `models/index` file will call this method automatically.
	// 	 */
	// 	static associate(models) {
	// 		// define association here
	// 	}
	// }
	// rooms.init(
	// 	{
	// 		room_name: DataTypes.STRING,
	// 	},
	// 	{
	// 		sequelize,
	// 		modelName: 'rooms',
	// 	}
	// );
	return Rooms;
};
