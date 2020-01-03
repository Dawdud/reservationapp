const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
//const passport = require("passport");
const passport = require("../config/passport");
/*router.post("/login", function(req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something goes wrong ",
        user: user
      });
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign(user, "your_jwt_secret");
      return res.json({ user, token });
    });
  })(req, res);
});*/

router.post("/", passport.authenticate("local"), function(req, res) {
  res.json("/members");
});
module.exports = router;
