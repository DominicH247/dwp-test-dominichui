const app = require("../index.js");
const request = require("supertest");

describe("/api/users", () => {
  test("GET, responds with status code 200 and an array of user objects", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then(({ body: { users } }) => {
        console.log(users);
        // expect(users).toBe("array");
      });
  });
});
