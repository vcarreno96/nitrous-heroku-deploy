var http = require('http'),
    port = Number(process.env.PORT || 3000);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello Noders DevOp');
}).listen(port);

console.log('Server running on port ' + port);