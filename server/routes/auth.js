const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
//const passport = require("passport");
const passport = require("../config/passport");

router.post("/", (req, res, next) => {
  console.log("Inside GET / login callback");
  passport.authenticate("local", { session: false }, (err, user, info) => {
    console.log(err);
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : "Login failed",
        user: user,
      });
    }

    req.login(user, { session: false }, (err) => {
      // You have have a req.user
      if (err) {
        res.status(500);
      }
      if (!user) {
        res.status(404).send("not logged in");
      }
      console.log(user);
      const token = jwt.sign(
        { email: user.email, name: user.name },
        "oUoWbw923fHBZDsH68Hf625yYb8tBsIAs24hdZeOzfd4qT3IIrW2jI69Rrdo8mp",
        { expiresIn: "3h" }
      );
      return res.json({ user: user.name, userId: user.id, token });
    });
  })(req, res, next);
});
module.exports = router;
