const axios = require("axios");
const {
  getLondonDistance,
  getUsersWithinLondon
} = require("../utils/utils.js");

exports.fetchAllUsers = () => {
  return axios.get("https://bpdts-test-app.herokuapp.com/users");
};
exports.fetchUsersWithinLondon = allUsers => {
  return axios
    .get("https://bpdts-test-app.herokuapp.com/city/London/users")
    .then(({ data: users }) => {
      const listedInLondon = users;
      const userDistances = getLondonDistance(allUsers);
      const usersWithinLondon = getUsersWithinLondon(userDistances);

      const formattedListedInLondon = getLondonDistance(listedInLondon);

      return {
        usersInLondonByCoords: [...usersWithinLondon],
        usersListedInLondon: [...formattedListedInLondon]
      };
    });
};
