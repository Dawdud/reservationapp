"use strict";
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: { type: DataTypes.STRING, allowNull: false },
    name: DataTypes.STRING,
  });
  User.associate = function(models) {
    /*  User.hasMany(models.Planner, {
      as: "Planner",
    });*/
  };
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.beforeCreate((user) => {
    return (user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    ));
  });
  return User;
};
