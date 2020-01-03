const express = require("express");
const router = express.Router();
const controller = require("../controllers/ItemController");
router.get("/", controller.itemController.list);

module.exports = router;
