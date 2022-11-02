"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ detail_transaksi }) {
      // define association here
      this.hasMany(detail_transaksi, {
        as: "item",
        foreignKey: "transaksi_id",
      });
    }
  }
  transaksi.init(
    {
      transaksi_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING(30),
      },
      meja_id: DataTypes.INTEGER,
      user_id: DataTypes.UUID,
      nama_pelanggan: DataTypes.STRING(50),
      nomor_telepon: DataTypes.STRING(20),
      total: DataTypes.INTEGER,
      tax_charge: DataTypes.INTEGER,
      service_charge: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: "transaksi",
      modelName: "transaksi",
    }
  );
  return transaksi;
};
