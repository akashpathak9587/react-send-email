import express from "express";
import { commonRouter } from "./routes/commonRoutes";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/v1", commonRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
