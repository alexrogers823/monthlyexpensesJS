const http = require('http');

http.createServer(req, res) {
  //Create server here
}.listen(3000, '127.0.0.1');

console.log("Listening on http://127.0.0.1:3000");
