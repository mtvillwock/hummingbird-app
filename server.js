var http = require("http");

function onRequest(request, response) {
  // Where are request and response coming from?
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}
// Where are request and response coming from?
http.createServer(onRequest).listen(8888);

console.log("Server has started.");