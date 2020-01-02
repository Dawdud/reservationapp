const itemModel = require("../models").reservation;

const itemController = {
  Create(req, res) {
    return itemModel
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
    return itemModel
      .findAll()
      .then(items => res.status(200).send(items))
      .catch(error => res.status(400).send(error));
  }
};
module.exports = {
  itemController
};
