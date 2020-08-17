const itemModel = require("../models").reservations;
const ItemService = require("../services/ItemService");
const itemController = {
  Create(req, res) {
    let service = new ItemService();
    const userDto = req.body;
    const userId = req.params.id;
    service
      .CreateReservationItem(userDto, userId)
      .then((item) => res.status(201).send(item))
      .catch((err) => res.status(400).send(err));
  },
  list(req, res) {
    let service = new ItemService();

    if (req.isAuthenticated()) {
      if (typeof req.query.id === "string") {
        const userId = req.query.id;
        service
          .GetReservationItem(userId)
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
    let service = new ItemService();
    const reservationDto = req.body;
    const reservationId = req.query.id;
    service
      .UpdateReservationItem(reservationDto, reservationId)
      .then((item) => res.status(201).send(item))
      .catch((err) => res.status(400).send(err));
  },
};
module.exports = {
  itemController,
};
