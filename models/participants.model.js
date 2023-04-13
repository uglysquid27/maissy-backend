'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	const Events = sequelize.define('events', { timestamps: false });
	const Participants = sequelize.define(
		'participants',
		{
			eventId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'events',
					},
					key: 'id',
				},
			},
			email: {
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
		{ tableName: 'participants' }
	);

	Participants.belongsTo(Events);
	// class participants extends Model {
	// 	/**
	// 	 * Helper method for defining associations.
	// 	 * This method is not a part of Sequelize lifecycle.
	// 	 * The `models/index` file will call this method automatically.
	// 	 */
	// 	static associate(models) {
	// 		// define association here
	// 	}
	// }
	// participants.init(
	// 	{
	// 		event_id: DataTypes.INTEGER,
	// 		email: DataTypes.STRING,
	// 	},
	// 	{
	// 		sequelize,
	// 		modelName: 'participants',
	// 	}
	// );
	return Participants;
};
