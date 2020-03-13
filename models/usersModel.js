const axios = require("axios");
const {
  getLondonDistance,
  getUsersWithinLondon
} = require("../utils/utils.js");

exports.fetchAllUsers = () => {
  return axios.get("https://bpdts-test-app.herokuapp.com/users");
};
exports.fetchUsersWithinLondon = users => {
  const userDistances = getLondonDistance(users);
  const usersWithinLondon = getUsersWithinLondon(userDistances);
  console.log(usersWithinLondon);
};
