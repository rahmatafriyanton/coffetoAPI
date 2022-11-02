"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class detail_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ transaksi }) {
      // define association here
      this.belongsTo(transaksi, { foreignKey: "transaksi_id" });
    }
  }
  detail_transaksi.init(
    {
      detail_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      transaksi_id: DataTypes.STRING(30),
      produk_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: "detail_transaksi",
      modelName: "detail_transaksi",
    }
  );
  return detail_transaksi;
};
