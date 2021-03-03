/*
  Complete the necessary conversion logic in /controllers/convertHandler.js
  Complete the necessary routes in /routes/api.js
  Copy the sample.env file to .env and set the variables appropriately
  To run the tests uncomment NODE_ENV=test in your .env file
  To run the tests in the console, use the command npm run test. To open the Repl.it console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"
  Write the following tests in tests/1_unit-tests.js:

  convertHandler should correctly read a whole number input.
  convertHandler should correctly read a decimal number input.
  convertHandler should correctly read a fractional input.
  convertHandler should correctly read a fractional input with a decimal.
  convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
  convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
  convertHandler should correctly read each valid input unit.
  convertHandler should correctly return an error for an invalid input unit.
  convertHandler should return the correct return unit for each valid input unit.
  convertHandler should correctly return the spelled-out string unit for each valid input unit.
  Write the following tests in tests/2_functional-tests.js:

  Convert a valid input such as 10L: GET request to /api/convert.
  Convert an invalid input such as 32g: GET request to /api/convert.
  Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
  Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
  Convert with no number such as kg: GET request to /api/convert.

  test: https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter
*/

var http = require("http");
const url = require("url");

/** CORS */
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000, // 30 days
  "Content-Type": "application/json"
  /** add other headers as per requirement */
};

const getUnit = (input) => {
  return /gal|lbs|mi|L|km|kg/.exec(input);
};

const getValue = (input, unit) => {
  return input.replace(unit, "");
};

const galToL = (value) => {
  return value;
};

const lToGal = (value) => {
  return value;
};

const miToKm = (value) => {
  return value;
};

const kmToMi = (value) => {
  return value;
};

const lbsToKg = (value) => {
  return value;
};

const kgToLbs = (value) => {
  return value;
};

const convert = (input) => {
  const unit = getUnit(input);
  const value = getValue(input, unit);

  switch (unit) {
    case "gal":
      return galToL(value);
    case "L":
      return lToGal(value);
    case "mi":
      return miToKm(value);
    case "Km":
      return kmToMi(value);
    case "lbs":
      return lbsToKg(value);
    case "kg":
      return kgToLbs(value);
    default:
      return "unknown unit";
  }
  /*
    convertHandler should correctly convert gal to L.
    convertHandler should correctly convert L to gal.
    convertHandler should correctly convert mi to km.
    convertHandler should correctly convert km to mi.
    convertHandler should correctly convert lbs to kg.
    convertHandler should correctly convert kg to lbs.
  */
  return `${input} unity: ${getUnit(input)}`;
};

const routes = {
  "/convert:get": async (request, response) => {
    const { input } = url.parse(request.url, true).query;

    buildResponse(response, convert(input));
  },
  "/get-tests:get": async (request, response) => {
    const { url } = request;
    const [, first, route, data] = url.split("/");
    console.log("get", first, route, data);

    buildResponse(response, "get-tests!");
  },
  default: (request, response) => {
    buildResponse(response, "default!");
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
  const routeWithoutParam = route ? route.split("?")[0] : "";
  const key = `/${routeWithoutParam}:${method.toLowerCase()}`;
  console.log("key", key);

  const chosen = routes[key] || routes.default;

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
