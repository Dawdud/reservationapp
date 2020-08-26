const express = require("express");
const router = express.Router();
const controller = require("../controllers/PlannerController");
router.post("/", controller.plannerController.Create);

module.exports = router;
