const { distanceCalc } = require("../utils/utils.js");

describe("distanceCalc(), takes latitude and longitude as parameters, and calculated the distance in miles between the given coordinates and the coordinates for central London", () => {
  test("Function returns a value", () => {
    const lat = 34.003135;
    const long = -117.7228641;
    const output = distanceCalc(lat, long);
    expect(typeof output === "number").toBe(true);
  });
});
