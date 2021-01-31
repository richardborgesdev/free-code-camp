/*
  HINT: Do not forget to use a body parsing middleware to handle the POST requests.
  Also, you can use the function dns.lookup(host, cb) from the dns core module
  to verify a submitted URL.

  test: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice
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
