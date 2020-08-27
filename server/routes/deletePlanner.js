const express = require("express");
const router = express.Router();
const controller = require("../controllers/PlannerController");
router.delete("/", controller.plannerController.delete);

module.exports = router;
