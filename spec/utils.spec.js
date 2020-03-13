const {
  distanceCalc,
  getLondonDistance,
  getUsersWithinLondon
} = require("../utils/utils.js");

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
    expect(getLondonDistance([])).toEqual([]);
  });
  test("Single user object, takes lat and long values and returns new array with additional prop distance from london", () => {
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
  test("function will map over multiple users", () => {
    const input = [
      {
        id: 1,
        first_name: "Maurise",
        last_name: "Shieldon",
        email: "mshieldon0@squidoo.com",
        ip_address: "192.57.232.111",
        latitude: 34.003135,
        longitude: -117.7228641
      },
      {
        id: 2,
        first_name: "Bendix",
        last_name: "Halgarth",
        email: "bhalgarth1@timesonline.co.uk",
        ip_address: "4.185.73.82",
        latitude: -2.9623869,
        longitude: 104.7399789
      },
      {
        id: 3,
        first_name: "Meghan",
        last_name: "Southall",
        email: "msouthall2@ihg.com",
        ip_address: "21.243.184.215",
        latitude: "15.45033",
        longitude: "44.12768"
      },
      {
        id: 4,
        first_name: "Sidnee",
        last_name: "Silwood",
        email: "ssilwood3@gizmodo.com",
        ip_address: "77.55.231.220",
        latitude: -26.94087,
        longitude: 29.24905
      },
      {
        id: 5,
        first_name: "Rosita",
        last_name: "Ferrulli",
        email: "rferrulli4@unesco.org",
        ip_address: "182.189.27.66",
        latitude: 33.5719791,
        longitude: -84.3396421
      },
      {
        id: 6,
        first_name: "Ferdinand",
        last_name: "Dun",
        email: "fdun5@google.es",
        ip_address: "219.245.140.98",
        latitude: 47.3879065,
        longitude: 19.1150392
      },
      {
        id: 7,
        first_name: "Keven",
        last_name: "Paling",
        email: "kpaling6@alexa.com",
        ip_address: "144.96.77.21",
        latitude: 9.9578348,
        longitude: 124.1789637
      },
      {
        id: 8,
        first_name: "Carri",
        last_name: "Server",
        email: "cserver7@google.nl",
        ip_address: "222.203.3.67",
        latitude: -6.1130137,
        longitude: 106.1610343
      },
      {
        id: 9,
        first_name: "Keelia",
        last_name: "Gillian",
        email: "kgillian8@independent.co.uk",
        ip_address: "153.44.232.220",
        latitude: 5.9630513,
        longitude: 10.1591213
      },
      {
        id: 10,
        first_name: "Brennan",
        last_name: "Matej",
        email: "bmatej9@umich.edu",
        ip_address: "252.214.166.100",
        latitude: 41.1086264,
        longitude: -7.6901721
      },
      {
        id: 11,
        first_name: "test",
        last_name: "test",
        email: "test@squidoo.com",
        ip_address: "182.47.212.121",
        latitude: 51.540981,
        longitude: -0.00164
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
      },
      {
        id: 2,
        first_name: "Bendix",
        last_name: "Halgarth",
        email: "bhalgarth1@timesonline.co.uk",
        ip_address: "4.185.73.82",
        latitude: -2.9623869,
        longitude: 104.7399789,
        london_distance: 7014
      },
      {
        id: 3,
        first_name: "Meghan",
        last_name: "Southall",
        email: "msouthall2@ihg.com",
        ip_address: "21.243.184.215",
        latitude: "15.45033",
        longitude: "44.12768",
        london_distance: 3477
      },
      {
        id: 4,
        first_name: "Sidnee",
        last_name: "Silwood",
        email: "ssilwood3@gizmodo.com",
        ip_address: "77.55.231.220",
        latitude: -26.94087,
        longitude: 29.24905,
        london_distance: 5705
      },
      {
        id: 5,
        first_name: "Rosita",
        last_name: "Ferrulli",
        email: "rferrulli4@unesco.org",
        ip_address: "182.189.27.66",
        latitude: 33.5719791,
        longitude: -84.3396421,
        london_distance: 4213
      },
      {
        id: 6,
        first_name: "Ferdinand",
        last_name: "Dun",
        email: "fdun5@google.es",
        ip_address: "219.245.140.98",
        latitude: 47.3879065,
        longitude: 19.1150392,
        london_distance: 906
      },
      {
        id: 7,
        first_name: "Keven",
        last_name: "Paling",
        email: "kpaling6@alexa.com",
        ip_address: "144.96.77.21",
        latitude: 9.9578348,
        longitude: 124.1789637,
        london_distance: 7055
      },
      {
        id: 8,
        first_name: "Carri",
        last_name: "Server",
        email: "cserver7@google.nl",
        ip_address: "222.203.3.67",
        latitude: -6.1130137,
        longitude: 106.1610343,
        london_distance: 7245
      },
      {
        id: 9,
        first_name: "Keelia",
        last_name: "Gillian",
        email: "kgillian8@independent.co.uk",
        ip_address: "153.44.232.220",
        latitude: 5.9630513,
        longitude: 10.1591213,
        london_distance: 3201
      },
      {
        id: 10,
        first_name: "Brennan",
        last_name: "Matej",
        email: "bmatej9@umich.edu",
        ip_address: "252.214.166.100",
        latitude: 41.1086264,
        longitude: -7.6901721,
        london_distance: 803
      },
      {
        id: 11,
        first_name: "test",
        last_name: "test",
        email: "test@squidoo.com",
        ip_address: "182.47.212.121",
        latitude: 51.540981,
        longitude: -0.00164
      }
    ];

    expect(getLondonDistance(input)).toEqual(output);
  });

  test("original input is not mutated", () => {
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
    getLondonDistance(input);

    expect(input).toEqual([
      {
        id: 1,
        first_name: "Maurise",
        last_name: "Shieldon",
        email: "mshieldon0@squidoo.com",
        ip_address: "192.57.232.111",
        latitude: 34.003135,
        longitude: -117.7228641
      }
    ]);
  });
});

describe("getUsersWithinLondon(), takes an array of user objects that have the property london_distance and filters out users who live > 50 miles from london center", () => {
  test("function returns an array", () => {
    expect(getUsersWithinLondon([])).toEqual([]);
  });
  test("When given, two user objects, one user withn 50 miles of london and other > 50 miles of london, a new array is returned containing the user living within London", () => {
    const input = [
      {
        id: 1,
        first_name: "Maurise",
        last_name: "Shieldon",
        email: "mshieldon0@squidoo.com",
        ip_address: "192.57.232.111",
        latitude: 34.003135,
        longitude: -117.7228641,
        london_distance: 5426
      },
      {
        id: 2,
        first_name: "test",
        last_name: "test",
        email: "test@squidoo.com",
        ip_address: "182.47.212.121",
        latitude: 51.540981,
        longitude: -0.00164,
        london_distance: 5
      }
    ];

    const output = [
      {
        id: 2,
        first_name: "test",
        last_name: "test",
        email: "test@squidoo.com",
        ip_address: "182.47.212.121",
        latitude: 51.540981,
        longitude: -0.00164,
        london_distance: 5
      }
    ];

    expect(getUsersWithinLondon(input)).toEqual(output);
  });
});
