const express = require("express");
const usersRouter = express.Router();

// error handlers
const { handle405InvalidMethods } = require("../errors/index");

// controllers
const {
  getAllUsers,
  getUsersWithinLondon
} = require("../controllers/usersController.js");

usersRouter
  .route("/")
  .get(getAllUsers)
  .all(handle405InvalidMethods);
usersRouter
  .route("/london")
  .get(getUsersWithinLondon)
  .all(handle405InvalidMethods);

module.exports = usersRouter;
