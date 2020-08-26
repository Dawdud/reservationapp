"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Planners", "userId", {
        type: Sequelize.UUID,

        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      })
      .then(() => {
        return queryInterface.addColumn("Reservations", "plannerId", {
          type: Sequelize.UUID,
          references: {
            model: "Planners",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Planners", "userId").then(() => {
      return queryInterface.removeColumn("Reservations", "reservationId");
    });
  },
};
