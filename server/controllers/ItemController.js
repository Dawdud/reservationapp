import reservationItemModel from "../models";

const reservationItemController = {
  Create(req, res) {
    return reservationItemModel
      .create({
        name: req.body.name,
        description: req.body.description,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        user: req.body.user,
        id: req.params.id
      })
      .then(item => res.status(201).send(item))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
    return reservationItemModel
      .findAll({
        include: [
          {
            model: reservationItemModel,
            as: "reservationItem"
          }
        ]
      })
      .then(items => res.status(200).send(items))
      .catch(error => res.status(400).send(error));
  }
};
export default reservationItemController;
