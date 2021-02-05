/*
  You should provide your own project, not the example URL.

  You can POST to /api/exercise/new-user with form data username to create a new user.
  The returned response will be an object with username and _id properties.

  You can make a GET request to api/exercise/users to get an array of all users.
  Each element in the array is an object containing a user's username and _id.

  You can POST to /api/exercise/add with form data userId=_id, description, duration,
  and optionally date. If no date is supplied, the current date will be used.
  The response returned will be the user object with the exercise fields added.

  You can make a GET request to /api/exercise/log with a parameter of userId=_id
  to retrieve a full exercise log of any user. The returned response will be the
  user object with a log array of all the exercises added. Each log item has the
  description, duration, and date properties.

  A request to a user's log (/api/exercise/log) returns an object with a count
  property representing the number of exercises returned.

  You can add from, to and limit parameters to a /api/exercise/log request to
  retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format.
  limit is an integer of how many logs to send back.

  test: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker
*/

var http = require("http");
const { parse } = require("querystring");
const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
const urlBase = [];
/** CORS */
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000, // 30 days
  "Content-Type": "application/json"
  /** add other headers as per requirement */
};

const isValidURL = (url) => urlRegex.test(url);

const routes = {
  "/shorturl:post": async (request, response) => {
    /*
      You can POST a URL to /api/shorturl/new and get a JSON response
      with original_url and short_url properties.
      Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}
    */
    const { url } = request;
    const [, first, route, data] = url.split("/");
    console.log("post", first, route, data);

    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      console.log("parse", parse(body));
      body = parse(body);

      if (isValidURL(body.url)) {
        urlBase.push(body.url);
        buildResponse(response, {
          original_url: body.url,
          short_url: urlBase.length - 1
        });
      } else {
        /*
          If you pass an invalid URL that doesn't follow the valid http://www.example.com format,
          the JSON response will contain { error: 'invalid url' }
        */
        buildResponse(response, { error: "invalid url" });
      }

      console.log("urlBase", urlBase);
    });
  },
  "/shorturl:get": async (request, response) => {
    /*
      When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.
    */
    const { url } = request;
    const [, first, route, data] = url.split("/");
    console.log("get", first, route, urlBase[data]);
    const redirectHeaders = { ...headers, Location: urlBase[data] };
    console.log("redirectHeaders", redirectHeaders);

    response.writeHead(301, redirectHeaders);
    response.end();
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
  const [, , route] = url.split("/");
  const key = `/${route}:${method.toLowerCase()}`;
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