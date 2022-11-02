"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  produk.init(
    {
      produk_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      kategori_id: DataTypes.INTEGER,
      nama_produk: DataTypes.STRING,
      stok: DataTypes.INTEGER,
      harga: DataTypes.INTEGER,
      deskripsi: DataTypes.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: "produk",
      modelName: "produk",
      timestamps: false,
    }
  );
  return produk;
};
