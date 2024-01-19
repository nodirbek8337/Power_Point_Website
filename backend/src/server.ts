import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import videoRouter from "./routers/video.router";
import { dbConnect } from "./config/database.config";
dbConnect();

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/videos", videoRouter);
// app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http:Localhost:" + port);
});
