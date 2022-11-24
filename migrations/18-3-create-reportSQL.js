"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ReportSQLs", {
      reportId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      RSId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "ReportSQLComments",
          key: "RSId",
        },
      },

      why: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      guilty: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      processing: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("ReportSQLs");
  },
};
