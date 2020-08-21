const express = require("express");
const router = express.Router();
const controller = require("../controllers/ItemController");
router.delete("/", controller.itemController.delete);

module.exports = router;
