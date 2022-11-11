require("dotenv").config();
require("./src/db/connect");

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const paginate = require("express-paginate");

const domainRouter = require("./src/routes/domain");

app.enable("trust proxy");
app.use(cors());
app.use(paginate.middleware(20, 60));
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/v1/domains", domainRouter);

module.exports = app;
