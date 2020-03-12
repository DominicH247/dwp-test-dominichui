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
