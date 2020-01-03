const express = require("express");
const router = express.Router();
const controller = require("../controllers/ItemController");
router.post("/", controller.itemController.Create);

module.exports = router;
