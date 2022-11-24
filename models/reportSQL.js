"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReportSQL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "reporterId",
        //as: "reporterIdData",
        targetKey: "userKey",
      });
      this.belongsTo(models.User, {
        foreignKey: "suspectId",
        //as: "suspectIdData",
        targetKey: "userKey",
      });

      this.belongsTo(models.ReportSQLComment, {
        foreignKey: "RSId",
        targetKey: "RSId",
      });
    }
  }
  ReportSQL.init(
    {
      reportId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      RSId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      why: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      guilty: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      processing: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
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
    {
      sequelize,
      modelName: "ReportSQL",
    }
  );
  return ReportSQL;
};
