const express = require("express");
const usersRouter = express.Router();

// controllers
const { getAllUsers } = require("../controllers/usersControllers.js");

usersRouter.route("/").get(getAllUsers);

module.exports = usersRouter;
