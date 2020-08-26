const express = require("express");
const router = express.Router();
const controller = require("../controllers/PlannerController");
router.get("/", controller.plannerController.list);

module.exports = router;
