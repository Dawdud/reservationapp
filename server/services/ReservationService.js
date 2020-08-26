const itemModel = require("../models").Reservation;

class ItemService {
  CreateReservationItem(reservation, reservationId) {
    return itemModel.create({
      name: reservation.name,
      description: reservation.description,
      startdate: reservation.startdate,
      enddate: reservation.enddate,
      guests: reservation.guests,
      PlannerId: reservation.plannerId,
      id: reservationId,
    });
  }
  GetReservationItem(PlannerId) {
    return itemModel.findAll({
      where: {
        PlannerId: PlannerId,
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
        plannerId: reservation.userId,
        id: reservationId,
      },
      {
        where: {
          id: reservationId,
        },
      }
    );
  }
  DeleteReservationItem(reservationId) {
    return itemModel.destroy({
      where: {
        id: reservationId,
      },
    });
  }
}
module.exports = ItemService;
