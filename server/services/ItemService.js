const itemModel = require("../models").reservations;

class ItemService {
  CreateReservationItem(user, userId) {
    return itemModel.create({
      name: user.name,
      description: user.description,
      startdate: user.startdate,
      enddate: user.enddate,
      guests: user.guests,
      userId: user.userId,
      id: userId,
    });
  }
  GetReservationItem(userId) {
    return itemModel.findAll({
      where: {
        userId: userId,
      },
    });
  }
}
module.exports = ItemService;
