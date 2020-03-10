const express = require("express");
const app = express();
const cors = require("cors");

//enable cors
app.use(cors());

// router
const apiRouter = require("./routes/apiRouter.js");

// route
app.use("/api", apiRouter);

module.exports = app;
