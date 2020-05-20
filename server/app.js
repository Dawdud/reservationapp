import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import logger from "morgan";
import passport from "./config/passport";
import reservation from "./routes/findReservation";
import createReservation from "./routes/createReservation";
import db from "./models";
import users from "./routes/findUser";
import register from "./routes/createUser";
import auth from "./routes/auth";
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(passport.initialize());
//app.use(passport.session());

app.use(
  "/reservation",
  passport.authenticate("jwt", { session: false }),
  reservation
);
app.use(
  "/createreservation",
  passport.authenticate("jwt", { session: false }),
  createReservation
);
app.use("/users", passport.authenticate("jwt", { session: false }), users);

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
