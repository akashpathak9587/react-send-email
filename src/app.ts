import express from 'express';
import { commonRouter } from './routes/commonRoutes';
const app = express();

app.use(express.json());

app.use("/v1", commonRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});