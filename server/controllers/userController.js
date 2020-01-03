const userModel = require("../models").User;

const userController = {
  Create(req, res) {
    console.log(req.body);
    return userModel
      .create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      })
      .then(item => res.status(201).send(item))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
    return userModel
      .findAll()
      .then(items => res.status(200).send(items))
      .catch(error => res.status(400).send(error));
  }
};
module.exports = {
  userController
};
