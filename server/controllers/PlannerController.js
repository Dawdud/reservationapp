const PlannerService = require("../services/PlannerService");
const plannerController = {
  Create(req, res) {
    let service = new PlannerService();
    const plannerDto = req.body;
    const userId = req.params.id;
    service
      .CreatePlannerItem(plannerDto, userId)
      .then((item) => res.status(201).send(item))
      .catch((err) => res.status(400).send(err));
  },
  list(req, res) {
    let service = new PlannerService();

    if (req.isAuthenticated()) {
      if (typeof req.query.id === "string") {
        const userId = req.query.id;
        service
          .GetPlannerItem(userId)
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
    let service = new PlannerService();
    const reservationDto = req.body;
    const reservationId = req.query.id;
    service
      .UpdatePlannerItem(reservationDto, reservationId)
      .then((item) => res.status(201).send(item))
      .catch((err) => res.status(400).send(err));
  },

  delete(req, res) {
    let service = new PlannerService();
    const reservationId = req.query.id;
    service
      .DeletePlannerItem(reservationId)
      .then((item) => res.status(201).send(item))
      .catch((err) => res.status(400).send(err));
  },
};
module.exports = {
  plannerController,
};
