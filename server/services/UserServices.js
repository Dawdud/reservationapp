const userModel = require("../models").User;

class UserService {
  CreateUser(user) {
    return userModel.create({
      name: user.name,
      password: user.password,
      email: user.email,
    });
  }
  GetUsersList() {
    return userModel.findAll();
  }
}
module.exports = UserService;
