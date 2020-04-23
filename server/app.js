import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import logger from "morgan";
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");

const reservation = require("./routes/findReservation");
const createReservation = require("./routes/createReservation");
const register = require("./routes/createUser");
const users = require("./routes/findUser");
const currentUser = require("./routes/currentUser");
const db = require("./models");
const uuid = require("uuid/v4");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const passport = require("./config/passport");
const auth = require("./routes/auth");
const app = express();

app.use(cookieParser());
app.use(cors());

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(passport.initialize());
//app.use(passport.session());

app.use("/reservation", reservation);
app.use("/createreservation", createReservation);
app.use("/users", passport.authenticate("jwt", { session: false }), users);
app.use(
  "/isauth",
  passport.authenticate("jwt", { session: false }),
  currentUser
);
app.use("/login", auth);
app.use("/register", register);

// catch 404 and forward to error handler

// error handler

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
