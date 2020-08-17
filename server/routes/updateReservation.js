const express = require("express");
const router = express.Router();
const controller = require("../controllers/ItemController");
router.put("/", controller.itemController.update);

module.exports = router;
