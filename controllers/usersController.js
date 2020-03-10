const { fetchAllUsers } = require("../models/usersModel.js");

exports.getAllUsers = (req, res, next) => {
  fetchAllUsers()
    .then(({ data: users }) => {
      res.status(200).send({ users });
    })
    .catch(next);
};
