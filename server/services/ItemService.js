const itemModel = require("../models").reservations;

class ItemService {
  CreateReservationItem(reservation, reservationId) {
    return itemModel.create({
      name: reservation.name,
      description: reservation.description,
      startdate: reservation.startdate,
      enddate: reservation.enddate,
      guests: reservation.guests,
      userId: reservation.userId,
      id: reservationId,
    });
  }
  GetReservationItem(userId) {
    return itemModel.findAll({
      where: {
        userId: userId,
      },
    });
  }
  UpdateReservationItem(reservation, reservationId) {
    return itemModel.update(
      {
        name: reservation.name,
        description: reservation.description,
        startdate: reservation.startdate,
        enddate: reservation.enddate,
        guests: reservation.guests,
        userId: reservation.userId,
        id: reservationId,
      },
      {
        where: {
          id: reservationId,
        },
      }
    );
  }
}
module.exports = ItemService;
