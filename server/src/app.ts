require("dotenv").config();
import express from "express";
import config from "config";
import connectToDb from "./utils/connecttToDb";
import log from "./utils/logger";
import router from "./routes";

const app = express();
connectToDb();
app.use(router);

const PORT = config.get("port");

app.listen(PORT, () => {
  log.info(`App started at http://localhost:${PORT}`);
});
