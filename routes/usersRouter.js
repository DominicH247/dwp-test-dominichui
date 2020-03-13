const express = require("express");
const usersRouter = express.Router();

// controllers
const {
  getAllUsers,
  getUsersWithinLondon
} = require("../controllers/usersController.js");

usersRouter.route("/").get(getAllUsers);
usersRouter.route("/london").get(getUsersWithinLondon);

module.exports = usersRouter;
