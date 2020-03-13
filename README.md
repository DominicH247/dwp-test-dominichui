## DWP-test-dominichui

This is a repo for the DWP technical test. This REST API was built using Express.js, it contacts the API provided by DWP - [https://bpdts-test-app.herokuapp.com/]().

The API contacts the `/users` endpoint and retrieves a list of all the users. By using the haversine formula, the distance from London is calculated for each user (in miles) using their latitude and longitude. This list of users is then filtered down by their distance from London, users with a distance of less than or equal to 50 miles are kept.

The API makes another GET request to the `/city/{city}/users` (`{city} = London`) endpoint to obtain a list of users who are listed as living within London.

The results are combined and served on the endpoint `/api/users/london`, the results can be seen below.

```
{
    "london_users": {
        "usersInLondonByCoords": [
            {
                "id": 266,
                "first_name": "Ancell",
                "last_name": "Garnsworthy",
                "email": "agarnsworthy7d@seattletimes.com",
                "ip_address": "67.4.69.137",
                "latitude": 51.6553959,
                "longitude": 0.0572553,
                "london_distance": 12
            },
            {
                "id": 322,
                "first_name": "Hugo",
                "last_name": "Lynd",
                "email": "hlynd8x@merriam-webster.com",
                "ip_address": "109.0.153.166",
                "latitude": 51.6710832,
                "longitude": 0.8078532,
                "london_distance": 41
            },
            {
                "id": 554,
                "first_name": "Phyllys",
                "last_name": "Hebbs",
                "email": "phebbsfd@umn.edu",
                "ip_address": "100.89.186.13",
                "latitude": 51.5489435,
                "longitude": 0.3860497,
                "london_distance": 21
            }
        ],
        "usersListedInLondon": [
            {
                "id": 135,
                "first_name": "Mechelle",
                "last_name": "Boam",
                "email": "mboam3q@thetimes.co.uk",
                "ip_address": "113.71.242.187",
                "latitude": -6.5115909,
                "longitude": 105.652983,
                "london_distance": 7245
            },
            {
                "id": 396,
                "first_name": "Terry",
                "last_name": "Stowgill",
                "email": "tstowgillaz@webeden.co.uk",
                "ip_address": "143.190.50.240",
                "latitude": -6.7098551,
                "longitude": 111.3479498,
                "london_distance": 7497
            },
            {
                "id": 520,
                "first_name": "Andrew",
                "last_name": "Seabrocke",
                "email": "aseabrockeef@indiegogo.com",
                "ip_address": "28.146.197.176",
                "latitude": "27.69417",
                "longitude": "109.73583",
                "london_distance": 5515
            },
            {
                "id": 658,
                "first_name": "Stephen",
                "last_name": "Mapstone",
                "email": "smapstonei9@bandcamp.com",
                "ip_address": "187.79.141.124",
                "latitude": -8.1844859,
                "longitude": 113.6680747,
                "london_distance": 7674
            },
            {
                "id": 688,
                "first_name": "Tiffi",
                "last_name": "Colbertson",
                "email": "tcolbertsonj3@vimeo.com",
                "ip_address": "141.49.93.0",
                "latitude": 37.13,
                "longitude": -84.08,
                "london_distance": 4031
            },
            {
                "id": 794,
                "first_name": "Katee",
                "last_name": "Gopsall",
                "email": "kgopsallm1@cam.ac.uk",
                "ip_address": "203.138.133.164",
                "latitude": 5.7204203,
                "longitude": 10.901604,
                "london_distance": 3225
            }
        ]
    }
}

```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This application was created using Express v4.17.1 on Node v13.7.0.

Clone the repo and install the required dependencies:

```
$ git clone https://github.com/DominicH247/dwp-test-dominichui.git
$ cd PROJECT
$ npm install
```

## Start and watch

To start and watch the application in development mode :

```
$ npm start
```

Open [http://localhost:9090](http://localhost:9090) in the browser.

Navigate to [http://localhost:9090/api/users/london]() to see the results.

## Run tests

Launches the Jest test runner in the interactive watch mode. Which can be used for testing the util functions and endpoints.

```
$ npm test
$ npm test-utils
```

## Languages and tools

### Javascript

- Axios - HTTP client for making requests to the API
- Jest - util function testing and endpoint testing
- Supertest - HTTP assertion library
- Nodemon - Running development environment

## Version

This application is currently at version 0.1.0. For the versions available, see the [tags on this repository](https://github.com/DominicH247/news-app/releases).

## Authors

- **[Dominic Hui](https://github.com/DominicH247)**
