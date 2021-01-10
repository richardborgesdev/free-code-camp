/*
  test: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice
*/

var http = require("http");

const timestampToUTC = (d) => {
  const intDate = parseInt(d, 10);
  return new Date(intDate).toUTCString();
};

/*
  Your project can handle dates that can be successfully parsed
  by new Date(date_string)
*/
const isValidDate = (d) => new Date(d).toString() !== "Invalid Date";

const toTimestampDate = (d) => new Date(d).getTime();

const routes = {
  "/timestamp:get": async (request, response) => {
    const { url, method } = request;
    console.log(url, method);

    console.log(url.split("/"));
    const [, first, route, data] = url.split("/");
    console.log(first, route, data);

    /*
      If the input date string is invalid, the api returns an object
      having the structure { error : "Invalid Date" }
    */
    let resolved = { error: "Invalid Date" };

    if (!data) {
      /*
        An empty date parameter should return the current time in
        a JSON object with a unix key

        An empty date parameter should return the current time in
        a JSON object with a utc key
      */
      const todayDate = Date.now();
      resolved = {
        unix: todayDate,
        utc: timestampToUTC(todayDate)
      };
    } else if (data.match(/^\d*$/)) {
      /*
        A request to /api/timestamp/1451001600000 should
        return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
      */
      const intDate = parseInt(data, 10);

      resolved = {
        unix: intDate,
        utc: timestampToUTC(data)
      };
    } else if (isValidDate(data)) {
      /*
        A request to /api/timestamp/:date? with a valid date should return
        a JSON object with a unix key that is a Unix timestamp of the
        input date in milliseconds

        A request to /api/timestamp/:date? with a valid date should return
        a JSON object with a utc key that is a string of the input date in
        the format: Thu, 01 Jan 1970 00:00:00 GMT
      */
      resolved = {
        unix: toTimestampDate(data),
        utc: new Date(data).toUTCString()
      };
    }

    console.log(JSON.stringify(resolved));
    response.write(JSON.stringify(resolved));
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

  const chosen = routes[key] || routes.default;

  /** CORS */
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json"
    /** add other headers as per requirement */
  };

  if (response.method === "OPTIONS") {
    response.writeHead(204, headers);
    return chosen(request, response);
  }

  if (["GET"].indexOf(request.method) > -1) {
    response.writeHead(200, headers);
    return chosen(request, response);
  }

  response.writeHead(405, headers);
  response.end(`${request.method} is not allowed for the request.`);
  /** */
};

//create a server object:
http.createServer(handler).listen(8080); //the server object listens on port 8080
