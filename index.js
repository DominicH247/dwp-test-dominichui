const express = require(express);
const app = express();

// router
const apiRouter = require("./routes/apiRouter.js");

// route
app.use("/api", apiRouter);

module.exports = app;
