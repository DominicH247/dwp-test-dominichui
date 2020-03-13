## DWP-test-dominichui

This is a repo for the DWP technical test. This REST API was built using Express.js, it contacts the API provided by DWP - [https://bpdts-test-app.herokuapp.com/]().

The API contacts the `/users` endpoint and retrieves a list of all the users. By using the haversine formula, the distance from London is calculated for each user (in miles) using their latitude and longitude. This list of users is then filtered down by their distance from London, users with a distance of less than or equal to 50 miles are kept.

The API makes another GET request to the `/city/{city}/users` (`{city} = London`) endpoint to obtain a list of users who are listed as living within London.

The results are combined and served on the endpoint `/api/users/london`.

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
