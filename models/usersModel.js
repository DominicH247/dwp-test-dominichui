const axios = require("axios");

exports.fetchAllUsers = () => {
  return axios.get("https://bpdts-test-app.herokuapp.com/users");
};

// london center lat 51.509865 long -0.118092
// calculate distance between two points if greater than 50 miles exclude
