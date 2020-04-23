const userModel = require("../models").User;

const userController = {
  Create(req, res) {
    return userModel
      .create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      })
      .then(item => res.status(200).send(item))
      .catch(err => res.status(400).send(err));
  },
  currentUser(req, res) {
    return res.status(200).send({ name: req.user.name, email: req.user.email });
  },
  list(req, res) {
    console.log(req.sessionID);
    return userModel
      .findAll()
      .then(items => res.status(200).send(items))
      .catch(error => res.status(400).send(error));
  }
};
module.exports = {
  userController
};
