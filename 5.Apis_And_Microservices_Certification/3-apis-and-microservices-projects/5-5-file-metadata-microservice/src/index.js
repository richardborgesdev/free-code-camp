/*
  You can submit a form that includes a file upload.

  The form file input field has the name attribute set to upfile.

  When you submit a file, you receive the file name, type,
  and size in bytes within the JSON response.

  test: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice
*/

var http = require("http");

/** CORS */
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000, // 30 days
  "Content-Type": "application/json"
  /** add other headers as per requirement */
};

const buildResponse = (response, body) => {
  console.log("buildResponse", JSON.stringify(body));
  response.end(JSON.stringify(body));
};

const routes = {
  default: (request, response) => {
    buildResponse(response, "hello!");
  }
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
