const express = require("express");
const app = express();
const cors = require("cors");

//enable cors
app.use(cors());

// router
const apiRouter = require("./routes/apiRouter.js");

// error handlers
const { handleInvalidPath404 } = require("./errors/index.js");

// route
app.use("/api", apiRouter);

//controller error handlers
app.all("/*", handleInvalidPath);

module.exports = app;
