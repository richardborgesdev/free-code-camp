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
  const unit = /(gal|lbs|mi|L|km|kg)$/i.exec(input);

  return unit && unit.length ? unit[0] : false;
};

const getValue = (input, unit) => {
  return parseFloat(input.replace(new RegExp(unit, "i"), ""));
};

/*
  convertHandler should correctly convert gal to L.
*/
const galToL = (value) => {
  return parseFloat(value * 3.78541).toFixed(5);
};

/*
  convertHandler should correctly convert L to gal.
*/
const lToGal = (value) => {
  return parseFloat(value / 3.78541).toFixed(5);
};

/*
  convertHandler should correctly convert mi to km.
*/
const miToKm = (value) => {
  return parseFloat(value * 1.60934).toFixed(5);
};

/*
  convertHandler should correctly convert km to mi.
*/
const kmToMi = (value) => {
  return parseFloat(value / 1.60934).toFixed(5);
};

/*
  convertHandler should correctly convert lbs to kg.
*/
const lbsToKg = (value) => {
  return parseFloat(value * 0.453592).toFixed(5);
};

/*
  convertHandler should correctly convert kg to lbs.
*/
const kgToLbs = (value) => {
  return parseFloat(value / 0.453592).toFixed(5);
};

const convert = (input) => {
  const unit = getUnit(input);
  const value = getValue(input, unit);
  console.log("convert", input, value, unit);
  let returnNum = false;
  let convertedObj = {};

  if (isNaN(value) && !unit) {
    return "invalid number and unit";
  } else if (isNaN(value)) {
    return "invalid number";
  } else if (!unit) {
    return "invalid unit";
  }

  const lowerCaseUnit = unit.toLocaleLowerCase();

  switch (lowerCaseUnit) {
    case "gal":
      returnNum = galToL(value);

      convertedObj = {
        initUnit: lowerCaseUnit,
        returnUnit: "L",
        string: `${value} gallons converts to ${returnNum} liters`
      };
      break;
    case "l":
      returnNum = lToGal(value);

      convertedObj = {
        initUnit: "L",
        returnUnit: "gal",
        string: `${value} liters converts to ${returnNum} gallons`
      };
      break;
    case "mi":
      returnNum = miToKm(value);

      convertedObj = {
        initUnit: lowerCaseUnit,
        returnUnit: "km",
        string: `${value} miles converts to ${returnNum} kilometers`
      };
      break;
    case "km":
      returnNum = kmToMi(value);

      convertedObj = {
        initUnit: lowerCaseUnit,
        returnUnit: "mi",
        string: `${value} kilometers converts to ${returnNum} miles`
      };
      break;
    case "lbs":
      returnNum = lbsToKg(value);

      convertedObj = {
        initUnit: lowerCaseUnit,
        returnUnit: "kg",
        string: `${value} pounds converts to ${returnNum} kilograms`
      };
      break;
    case "kg":
      returnNum = kgToLbs(value);

      convertedObj = {
        initUnit: lowerCaseUnit,
        returnUnit: "lbs",
        string: `${value} kilograms converts to ${returnNum} lbs`
      };
      break;
    default:
      return "invalid unit";
  }

  return {
    returnNum,
    initNum: value,
    ...convertedObj
  };
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
