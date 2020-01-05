"use strict";
module.exports = (sequelize, DataTypes) => {
  const reservations = sequelize.define(
    "reservations",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      startdate: DataTypes.DATE,
      enddate: DataTypes.DATE,
      guests: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {}
  );
  reservations.associate = function(models) {
    reservations.belongsTo(models.User, {
      foreignKey: "userId",
      as: "users"
    });
  };
  return reservations;
};
