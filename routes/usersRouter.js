const express = require("express");
const usersRouter = express.Router();

// controllers
const { getAllUsers } = require("../controllers/usersController.js");

usersRouter.route("/").get(getAllUsers);

module.exports = usersRouter;
