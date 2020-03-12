exports.distanceCalc = (latitude, longitude) => {
  /* Haversine
  formula:	a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
  c = 2 ⋅ atan2( √a, √(1−a) )
  d = R ⋅ c
  where	φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);
  note that angles need to be in radians to pass to trig functions!  */

  // Central London
  const londonLat = 51.509865;
  const londonLong = -0.118092;

  // Input
  const inputLat = latitude;
  const inputLong = longitude;

  // Radius of earth in meters
  const R = 6371e3;
  const phi1 = (londonLat * Math.PI) / 180; // in radians
  const phi2 = (inputLat * Math.PI) / 180;

  console.log(phi2);

  return 50;
};
