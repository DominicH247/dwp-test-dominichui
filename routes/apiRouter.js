const express = require("express");
const apiRouter = express.Router();

// routers
const usersRouter = require("./usersRouter.js");

// Paths
apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
