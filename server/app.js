import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import reservationItemController from "./controllers/ItemController";
import itemRouter from "./src/resources/item/item.router";
import reservationItemModel from "./models/item";

const app = express();
app.use(cors());
// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api/item", itemRouter);
//app.get("/api/reservationitem", reservationItemController.list);
// catch 404 and forward to error handler

// error handler

app.listen(process.env.PORT || 8080, () => {
  console.log(` 
    starting development server at http://localhost:8080/ `);
});

module.exports = app;
