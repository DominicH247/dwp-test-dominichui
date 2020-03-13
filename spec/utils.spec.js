const { distanceCalc } = require("../utils/utils.js");

describe("distanceCalc(), takes latitude and longitude as parameters, and calculated the distance in miles between the given coordinates and the coordinates for central London", () => {
  test("Function returns a value", () => {
    const lat = 34.003135;
    const long = -117.7228641;
    const output = distanceCalc(lat, long);
    expect(typeof output === "number").toBe(true);
    expect(output).toBe(5426);

    const lat2 = -2.9623869;
    const long2 = 104.7399789;
    expect(distanceCalc(lat2, long2)).toBe(7014);
  });
});
