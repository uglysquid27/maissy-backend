"use strict";
const roomName = [
  "Creative (Meeting Production)",
  "For The Future (Floor 1st VIP)",
  "Respect (Meeting Snackbar)",
  "VIP Canteen (Meeting Canteen)",
  "Passion (2nd Floor Small)",
  "One For All (2nd Floor Big)",
  "Rumah Belajar",
  "Credible (Logistik)",
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("rooms", [
      {
        room_name: "None",
      },
      {
        room_name: roomName[0],
      },
      {
        room_name: roomName[1],
      },
      {
        room_name: roomName[2],
      },
      {
        room_name: roomName[3],
      },
      {
        room_name: roomName[4],
      },
      {
        room_name: roomName[5],
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
