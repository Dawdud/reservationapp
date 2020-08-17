const userModel = require("../models").User;
const UserService = require("../services/UserServices");
const userController = {
  Create(req, res) {
    const service = new UserService();
    service
      .CreateUser(req.body)
      .then((item) => res.status(200).send(item))
      .catch((err) => res.status(400).send(err));
  },

  list(req, res) {
    console.log(req.sessionID);
    const service = new UserService();
    service
      .GetUsersList()
      .then((items) => res.status(200).send(items))
      .catch((error) => res.status(400).send(error));
  },
};
module.exports = {
  userController,
};
