"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transaksi", {
      transaksi_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      meja_id: {
        type: Sequelize.INTEGER(11),
      },
      user_id: {
        type: Sequelize.UUID,
      },
      nama_pelanggan: {
        type: Sequelize.STRING(50),
      },
      nomor_telepon: {
        type: Sequelize.STRING(20),
      },
      total: {
        type: Sequelize.INTEGER,
      },
      tax_charge: {
        type: Sequelize.INTEGER,
      },
      service_charge: {
        type: Sequelize.INTEGER,
      },
      status: {
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
    await queryInterface.dropTable("transaksis");
  },
};
