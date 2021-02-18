/*
  You can submit a form that includes a file upload.

  The form file input field has the name attribute set to upfile.

  When you submit a file, you receive the file name, type,
  and size in bytes within the JSON response.

  test: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice
*/

var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
