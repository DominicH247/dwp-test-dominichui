const express = require("express");
const app = express();
const cors = require("cors");
app.set("json spaces", 4);

//enable cors
app.use(cors());

// router
const apiRouter = require("./routes/apiRouter.js");

// error handlers
const { handleInvalidPath404 } = require("./errors/index.js");

// route
app.use("/api", apiRouter);

//controller error handlers
app.all("/*", handleInvalidPath404);

module.exports = app;
