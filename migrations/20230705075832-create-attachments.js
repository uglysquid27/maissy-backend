"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("attachments", {
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "events",
          },
          key: "id",
        },
      },
      fileName: {
        type: Sequelize.STRING,
      },
      realName: {
        type: Sequelize.STRING,
      },
      path: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      sizeBytes: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("attachments");
  },
};
