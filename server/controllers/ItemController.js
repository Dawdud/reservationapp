const ReservationService = require("../services/ReservationService");
const itemController = {
  Create(req, res) {
    let service = new ReservationService();
    const reservationDto = req.body;
    const plannerId = req.params.id;
    service
      .CreateReservationItem(reservationDto, plannerId)
      .then((item) => res.status(201).send(item))
      .catch((err) => res.status(400).send(err));
  },
  list(req, res) {
    let service = new ReservationService();

    if (req.isAuthenticated()) {
      if (typeof req.query.id === "string") {
        const plannerId = req.query.id;
        service
          .GetReservationItem(plannerId)
          .then((items) => res.status(200).send(items))
          .catch((error) => res.status(400).send(error));
      } else {
        res.send("can not find item");
      }
    } else {
      res.send("not logged in");
    }
  },
  update(req, res) {
    let service = new ReservationService();
    const reservationDto = req.body;
    const reservationId = req.query.id;
    service
      .UpdateReservationItem(reservationDto, reservationId)
      .then((item) => res.status(201).send(item))
      .catch((err) => res.status(400).send(err));
  },

  delete(req, res) {
    let service = new ReservationService();
    const reservationId = req.query.id;
    service
      .DeleteReservationItem(reservationId)
      .then((item) => res.status(201).send(item))
      .catch((err) => res.status(400).send(err));
  },
};
module.exports = {
  itemController,
};
