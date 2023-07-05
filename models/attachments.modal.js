"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define("events", { timestamps: false });
  const Attachments = sequelize.define(
    "attachments",
    {
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "events",
          },
          key: "id",
        },
      },
      fileName: {
        type: DataTypes.STRING,
      },
      realName: {
        type: DataTypes.STRING,
      },
      path: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      sizeBytes: {
        type: DataTypes.INTEGER,
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
    { tableName: "attachments" }
  );

  Attachments.belongsTo(Events);
  
  return Attachments;
};
