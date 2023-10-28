import express from "express";
const cors = require("cors");
import {
  morganLogger,
  morganSetup,
  defaultError,
  controllerWraper,
  errorCatcher,
} from "./middlewares";
import path from "path";
import { postArduinoController } from "./controllers/postArduinoController";
import { getDataController } from "./controllers/getDataController";

export const app = express();

const publickPath = path.join(__dirname, "../../public");

app.use(cors());
app.use(express.json());
app.use(morganLogger(morganSetup));
app.use(express.static(publickPath));
app.post("/", controllerWraper(postArduinoController));
app.get("/data", controllerWraper(getDataController));
app.use("/", controllerWraper(defaultError));
app.use(errorCatcher);
