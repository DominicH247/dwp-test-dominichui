const distanceCalc = (latitude, longitude) => {
  /* Haversine
  formula:	a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
  c = 2 ⋅ atan2( √a, √(1−a) )
  d = R ⋅ c
  where	φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);
  note that angles in radians */

  // Central London
  const londonLat = 51.509865;
  const londonLong = -0.118092;

  // Input
  const inputLat = latitude;
  const inputLong = longitude;

  // Radius of earth in meters
  const rads = (Math.PI / 180).toPrecision(4);

  const R = 6371e3;
  const phi1 = londonLat * rads; // in radians
  const phi2 = inputLat * rads;
  const deltaPhi = phi2 - phi1;
  const deltaLambda = (inputLong - londonLong) * rads;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) *
      Math.cos(phi2) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // distance in m
  const d = R * c;

  // distance in miles
  const kilometers = d / 1000;

  const resultInMiles = Math.floor(kilometers * 0.62137);

  return resultInMiles;
};

const getLondonDistance = users => {
  const formatted = users.map(user => {
    const london_distance = distanceCalc(user.latitude, user.longitude);
    return { ...user, london_distance };
  });

  return formatted;
};

const getUsersWithinLondon = users => {
  return users.filter(user => {
    return user.london_distance <= 50 && user;
  });
};

module.exports = { distanceCalc, getLondonDistance, getUsersWithinLondon };
