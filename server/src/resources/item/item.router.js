import express from "express";

import { getItems } from "./item.controler";
import { getItemById } from "./item.controler";
const router = express.Router();

const controller = (req, res) => {
  res.send({ message: "it's item and my new api" });
};

router
  .route("/")
  .get(getItems)
  .post(controller);
router
  .route("/:id")
  .put(controller)
  .delete(controller)
  .get(getItemById);
module.exports = router;
