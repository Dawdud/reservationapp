"use strict";
module.exports = (sequelize, DataTypes) => {
  const Planner = sequelize.define(
    "Planner",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      schedule: DataTypes.DATE,
    },
    {}
  );
  Planner.associate = function(models) {
    Planner.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
    Planner.hasMany(models.Reservation);
  };
  return Planner;
};
