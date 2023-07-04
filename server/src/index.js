const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../", "./.env"),
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const githubApiRouter = require("./routes/githubApi.route");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use("/api", githubApiRouter);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
