var http = require("http");

/*
  A request to /api/timestamp/:date? with a valid date should return
  a JSON object with a unix key that is a Unix timestamp of the
  input date in milliseconds

  A request to /api/timestamp/:date? with a valid date should return
  a JSON object with a utc key that is a string of the input date in
  the format: Thu, 01 Jan 1970 00:00:00 GMT

  A request to /api/timestamp/1451001600000 should
  return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

  Your project can handle dates that can be successfully parsed
  by new Date(date_string)

  If the input date string is invalid, the api returns an object
  having the structure { error : "Invalid Date" }

  An empty date parameter should return the current time in
  a JSON object with a unix key

  An empty date parameter should return the current time in
  a JSON object with a utc key

  test: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice
*/
const DEFAULT_HEADER = { "Content-Type": "application/json" };

const routes = {
  "/timestamp:get": async (request, response) => {
    const { url, method } = request;
    console.log(url, method);

    console.log(url.split("/"));
    const [, first, route, data] = url.split("/");
    console.log(first, route, data);

    let resolved = { unix: Date.now() };

    if (data && data.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const timestampDate = new Date(data).valueOf();
      resolved = JSON.stringify({ unix: timestampDate });
    } else if (data && data.match(/^\d*$/)) {
      const intDate = parseInt(data, 10);
      const timestampToUTC = new Date(intDate).toUTCString();
      resolved = JSON.stringify({ unix: intDate, utc: timestampToUTC });
    }

    console.log(resolved);
    response.write(resolved);
    response.end();
  },
  default: (request, response) => {
    response.write("Hello!");
    response.end();
  }
};

const handler = (request, response) => {
  console.log("============================");
  const { url, method } = request;
  const [, , route] = url.split("/");
  const key = `/${route}:${method.toLowerCase()}`;
  console.log("key", key);
  /*
  response.write("Hello World!"); //write a response to the client
  */

  response.writeHead(200, DEFAULT_HEADER);

  const chosen = routes[key] || routes.default;

  /** CORS */
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000 // 30 days
    /** add other headers as per requirement */
  };

  if (response.method === "OPTIONS") {
    response.writeHead(204, headers);
    response.end();
    return;
  }

  if (["GET", "POST"].indexOf(request.method) > -1) {
    response.writeHead(200, headers);
    response.end("Hello World");
    return;
  }

  response.writeHead(405, headers);
  response.end(`${request.method} is not allowed for the request.`);
  /** */
  return chosen(request, response);
};

//create a server object:
http.createServer(handler).listen(8080); //the server object listens on port 8080
