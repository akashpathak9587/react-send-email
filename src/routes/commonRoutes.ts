import express from "express";
import { sendEmail } from "../controller/commonController";
const commonRouter = express.Router();


commonRouter.get("/", (req, res) => {
  res.send("Hello World!");
});

commonRouter.post("/send-email", sendEmail);

export { commonRouter };