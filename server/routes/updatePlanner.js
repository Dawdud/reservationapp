const express = require("express");
const router = express.Router();
const controller = require("../controllers/PlannerController");
router.put("/", controller.plannerController.update);

module.exports = router;
