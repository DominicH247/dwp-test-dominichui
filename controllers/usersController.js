const {
  fetchAllUsers,
  fetchUsersWithinLondon
} = require("../models/usersModel.js");

exports.getAllUsers = (req, res, next) => {
  fetchAllUsers()
    .then(({ data: users }) => {
      res.status(200).send({ users });
    })
    .catch(next);
};

exports.getUsersWithinLondon = (req, res, next) => {
  fetchUsersWithinLondon();
};
