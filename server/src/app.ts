import express from "express";
import config from "config";
import connectToDb from "./utils/connecttToDb";
import log from "./utils/logger";
import router from "./routes";
import deserializeUser from "./middleware/deserializeUser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: config.get<string>("origin"),
    methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use(deserializeUser);

app.use("/api/0.1/", router);

const PORT = config.get<number>("port");

app.listen(PORT, () => {
  log.info(`App started at http://localhost:${PORT}`);
  connectToDb();
});
