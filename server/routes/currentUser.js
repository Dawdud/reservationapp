const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");
router.get("/", function(req, res, next) {
  res.send(req.user.name);
});
module.exports = router;
