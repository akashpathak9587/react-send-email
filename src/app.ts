import express from "express";
import { commonRouter } from "./routes/commonRoutes";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config();

console.log(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
  })
);
app.use(express.json());

app.use("/v1", commonRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
