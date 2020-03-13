const { distanceCalc, getLondonDistance } = require("../utils/utils.js");

describe("distanceCalc(), takes latitude and longitude as parameters, and calculated the distance in miles between the given coordinates and the coordinates for central London", () => {
  test("Function returns a value", () => {
    const lat = 34.003135;
    const long = -117.7228641;
    const output = distanceCalc(lat, long);
    expect(typeof output === "number").toBe(true);
  });

  test("when given a set of lat and long values, function calculates the distance the distance between two points and output the answer in miles", () => {
    const lat = 34.003135;
    const long = -117.7228641;
    expect(distanceCalc(lat, long)).toBe(5426);

    const lat2 = -2.9623869;
    const long2 = 104.7399789;
    expect(distanceCalc(lat2, long2)).toBe(7014);
  });
});

describe("getLondonDistance(), maps over array of user objects and invokes distanceCalc() with the lat and long props of the user object. Returns new array with additional prop of london_distance on the user objects", () => {
  test("function returns an array", () => {
    expect(getLondonDistance()).toEqual([]);
  });
  test.only("Single user object, takes lat and long values and returns new array with additional prop distance from london", () => {
    const input = [
      {
        id: 1,
        first_name: "Maurise",
        last_name: "Shieldon",
        email: "mshieldon0@squidoo.com",
        ip_address: "192.57.232.111",
        latitude: 34.003135,
        longitude: -117.7228641
      }
    ];

    const output = [
      {
        id: 1,
        first_name: "Maurise",
        last_name: "Shieldon",
        email: "mshieldon0@squidoo.com",
        ip_address: "192.57.232.111",
        latitude: 34.003135,
        longitude: -117.7228641,
        london_distance: 5426
      }
    ];

    expect(getLondonDistance(input)).toEqual(output);
  });
});
