var http = require('http'),
    port = Number(process.env.PORT || 3000);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello World1');
}).listen(port);

console.log('Server running on port ' + port);