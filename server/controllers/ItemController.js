const itemModel = require("../models").reservations;
const itemController = {
  Create(req, res) {
    return itemModel
      .create({
        name: req.body.name,
        description: req.body.description,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        guests: req.body.guests,
        userId: req.body.userId,
        id: req.params.id,
      })
      .then((item) => res.status(201).send(item))
      .catch((err) => res.status(400).send(err));
  },
  list(req, res) {
    if (req.isAuthenticated()) {
      return itemModel
        .findAll({
          where: {
            userId: req.query.id,
          },
        })
        .then((items) => res.status(200).send(items))
        .catch((error) => res.status(400).send(error));
    } else {
      res.send("not logged in");
    }
  },
};
module.exports = {
  itemController,
};
