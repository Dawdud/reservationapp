'use strict';
module.exports = (sequelize, DataTypes) => {
  const reservation = sequelize.define('reservation', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    user: DataTypes.STRING
  }, {});
  reservation.associate = function(models) {
    // associations can be defined here
  };
  return reservation;
};