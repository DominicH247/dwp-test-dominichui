const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
process.env.NODE_ENV = "test";
const app = require("../index.js");
const request = require("supertest")(app);

describe("/api/users", () => {
  test("GET, responds with status code 200 and an array of user objects", () => {
    return request
      .get("/api/users")
      .expect(200)
      .then(({ body: users }) => {
        expect(typeof users).toBe("object");
        expect(Array.isArray(users.users)).toBe(true);
        expect(users.users.length === 1000).toBe(true);
      });
  });
  test("Not found error, responds with status code 404 and error message for incorrect route", () => {
    return request
      .get("/api/users-typo")
      .expect(404)
      .then(({ body: { msg } }) => {
        expect(msg).toEqual("Not Found.");
      });
  });
});

describe("/api/users/london", () => {
  test("GET, responds with status code 200 and an array of user object of people living within 50 miles of the city of london", () => {
    return request.get("/api/users/london").then(({ body: users }) => {
      console.log(users);
      expect(typeof users).toBe("object");
      expect(users.london_users.usersInLondonByCoords[0]).toHaveProperty(
        "london_distance"
      );
      expect(users.london_users.usersListedInLondon[0]).toHaveProperty(
        "london_distance"
      );
      expect(
        users.london_users.usersInLondonByCoords[0]["london_distance"] <= 50
      ).toEqual(true);
      expect(Array.isArray(users.london_users.usersInLondonByCoords)).toBe(
        true
      );
      expect(users.london_users.usersInLondonByCoords.length === 3).toBe(true);
      expect(Array.isArray(users.london_users.usersListedInLondon)).toBe(true);
      expect(users.london_users.usersListedInLondon.length === 6).toBe(true);
    });
  });
});
