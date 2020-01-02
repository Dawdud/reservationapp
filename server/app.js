import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import logger from "morgan";
const controllers = require("./controllers/ItemController");

const app = express();
app.use(cors());
// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.get("/api/reservationitem", controllers.itemController.list);
app.post("/api/create", controllers.itemController.Create);
// catch 404 and forward to error handler

// error handler

app.listen(process.env.PORT || 8080, () => {
  console.log(` 
    starting development server at http://localhost:8080/ `);
});

module.exports = app;
