"use strict";
const reservationItemModel = {
  up: (sequelize, DataTypes) => {
    queryInterface.createTable("reservationItems", {
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: { type: DataTypes.STRING, allowNull: true },
      startdate: { type: DataTypes.DATE, allowNull: false },
      enddate: { type: DataTypes.DATE, allowNull: false },

      user: {
        type: DataTypes.STRING,
        allowNull: true
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable("reservationItems")
};
export default reservationItemModel;
