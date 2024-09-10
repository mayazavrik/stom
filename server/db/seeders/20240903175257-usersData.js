"use strict";
const { User } = require("../models");
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usersData = [
      {
        name: "SashaIsTheBest",
        email: "Leontieval-r@yandex.ru",
        password: await bcrypt.hash("G7t!v8k3$hXq@2Nz", 10),
        isAdmin: true,
      },
      

    ];
    await User.bulkCreate(usersData);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
  },
};
