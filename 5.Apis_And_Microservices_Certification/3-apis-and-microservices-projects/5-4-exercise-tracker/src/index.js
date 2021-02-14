/*
  test: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker
*/

var http = require("http");
const { parse } = require("querystring");
const url = require("url");
const userBase = [];
const userExerciseBase = [];
/** CORS */
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000, // 30 days
  "Content-Type": "application/json"
  /** add other headers as per requirement */
};

const getFromToUserData = (id, from, to) => {
  console.log("getFromToUserData", id, from, to);
  console.log("userExerciseBase", userExerciseBase);

  if (from && to) {
    return "user data from to WIP";
  }

  return userExerciseBase[id].length;
};

const routes = {
  "/new-user:post": async (request, response) => {
    /*
      You can POST to /api/exercise/new-user with form data username to create a new user.
      The returned response will be an object with username and _id properties.
    */
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      console.log("parse", parse(body));
      body = parse(body);

      userBase.push({ username: body.username, _id: userBase.length });
      buildResponse(response, {
        username: body.username,
        _id: userBase.length - 1
      });
    });
  },
  "/add:post": async (request, response) => {
    /*
      You can POST to /api/exercise/add with form data userId=_id, description, duration,
      and optionally date. If no date is supplied, the current date will be used.
      The response returned will be the user object with the exercise fields added.
    */
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      console.log("parse", parse(body));
      body = parse(body);

      const exerciseToAdd = {
        description: body.description,
        duration: parseInt(body.duration, 10),
        date: body.date ? body.date : new Date()
      };

      userExerciseBase[body.userId] = userExerciseBase[body.userId]
        ? userExerciseBase[body.userId].push(exerciseToAdd)
        : (userExerciseBase[body.userId] = [exerciseToAdd]);

      buildResponse(response, {
        ...userBase[body.userId],
        ...exerciseToAdd
      });
    });
  },
  "/users:get": async (request, response) => {
    /*
      You can make a GET request to api/exercise/users to get an array of all users.
      Each element in the array is an object containing a user's username and _id.
    */
    const { url } = request;
    const [, first, , route, data] = url.split("/");
    console.log("get", first, route, data);

    buildResponse(response, userBase);
  },
  "/log:get": async (request, response) => {
    /*
      You can make a GET request to /api/exercise/log with a parameter of userId=_id
      to retrieve a full exercise log of any user. The returned response will be the
      user object with a log array of all the exercises added. Each log item has the
      description, duration, and date properties.

      A request to a user's log (/api/exercise/log) returns an object with a count
      property representing the number of exercises returned.

      You can add from, to and limit parameters to a /api/exercise/log request to
      retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format.
      limit is an integer of how many logs to send back.
    */
    const queryObject = url.parse(request.url, true).query;
    const { userId, from, to } = queryObject;

    buildResponse(response, getFromToUserData(userId, from, to));
  },
  default: (request, response) => {
    buildResponse(response, "hello!");
  }
};

const buildResponse = (response, body) => {
  console.log("buildResponse", JSON.stringify(body));
  response.end(JSON.stringify(body));
};

const handler = (request, response) => {
  console.log("============================");
  const { url, method } = request;
  const [, , , route] = url.split("/");
  const routeWithoutParam = route ? route.split("?")[0] : "";
  const key = `/${routeWithoutParam}:${method.toLowerCase()}`;
  console.log("key", key);

  const chosen = routes[key] || routes.default;

  if (["GET", "POST"].indexOf(request.method) > -1) {
    response.writeHead(200, headers);
    return chosen(request, response);
  }

  response.writeHead(405, headers);
  response.end(`${request.method} is not allowed for the request.`);
  /** */
};

//create a server object:
http.createServer(handler).listen(8080); //the server object listens on port 8080
