"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kategori.init(
    {
      kategori_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nama_kategori: DataTypes.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: "kategori",
      modelName: "kategori",
      timestamps: false,
    }
  );
  return kategori;
};
