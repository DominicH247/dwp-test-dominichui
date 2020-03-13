const express = require("express");
const apiRouter = express.Router();

// error handlers
const { handle405InvalidMethods } = require("../errors/index");

// routers
const usersRouter = require("./usersRouter.js").all(handle405InvalidMethods);

// Paths
apiRouter.use("/users", usersRouter).all(handle405InvalidMethods);

module.exports = apiRouter;
