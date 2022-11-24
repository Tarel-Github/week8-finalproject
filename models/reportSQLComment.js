"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReportSQLComment extends Model {
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

      this.belongsTo(models.Comment, {
        foreignKey: "commentId",
        targetKey: "commentId",
      });

      this.hasMany(models.ReportSQL, {
        foreignKey: "RSId",
        sourceKey: "RSId",
      });
    }
  }
  ReportSQLComment.init(
    {
      RSId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      reporterId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "userKey",
        },
      },
      suspectId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "userKey",
        },
      },
      commentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Comment",
          key: "commentId",
        },
      },
    },
    {
      sequelize,
      modelName: "ReportSQLComment",
      timestamps: false,
    }
  );
  return ReportSQLComment;
};
