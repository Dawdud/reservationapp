const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
//const passport = require("passport");
const passport = require("../config/passport");

router.post("/", (req, res, next) => {
  console.log("Inside GET / login callback");
  passport.authenticate("local", (err, user, info) => {
    console.log(
      `req.session.passport: ${JSON.stringify(req.session.passport)}`
    );
    req.login(user, err => {
      console.log("Inside req.login() callback");
      console.log(
        `req.session.passport: ${JSON.stringify(req.session.passport)}`
      );
      console.log(`req.user: ${JSON.stringify(req.user)}`);
      return res.send("You were authenticated & logged in!\n");
    });
  })(req, res, next);
});
module.exports = router;
