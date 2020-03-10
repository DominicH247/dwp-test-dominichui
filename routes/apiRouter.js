const express = require("express");
const apiRouter = express.Router();

// routers

// Paths
apiRouter.use("/users", usersRouter);
