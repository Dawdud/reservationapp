"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      startdate: DataTypes.DATE,
      enddate: DataTypes.DATE,
      guests: DataTypes.INTEGER,
    },
    {}
  );
  Reservation.associate = function(models) {
    /*Reservation.belongsTo(models.Planner, {
      foreignKey: "plannerId",
      as: "planner",
    });*/
  };
  return Reservation;
};
