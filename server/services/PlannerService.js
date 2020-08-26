const itemModel = require("../models").Planner;

class ItemService {
  CreatePlannerItem(planner, plannerId) {
    console.log(itemModel);
    return itemModel.create({
      name: planner.name,
      description: planner.description,
      schedule: planner.schedule,
      userId: planner.userId,
      id: plannerId,
    });
  }
  GetPlannerItem(userId) {
    return itemModel.findAll({
      where: {
        userId: userId,
      },
    });
  }
  UpdatePlanenrItem(planner, plannerId) {
    return itemModel.update(
      {
        name: planner.name,
        description: planner.description,
        schedule: planner.schedule,
        id: plannerId,
      },
      {
        where: {
          id: plannerId,
        },
      }
    );
  }
  DeleteReservationItem(plannerId) {
    return itemModel.destroy({
      where: {
        id: plannerId,
      },
    });
  }
}
module.exports = ItemService;
