require("ignore-styles");

import express from "express";
import ssr from "./routes/ssr";
import svg from "./routes/svg";
const app = express();

app.use(express.static("public"));

app.use("/", ssr);

app.use("/pimp-my-readme", svg);

const port = process.env.PORT || 3001;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}`);
});