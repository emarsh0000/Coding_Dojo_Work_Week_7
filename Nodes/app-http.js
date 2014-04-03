var http = require('http');
server = http.createServer(function (request, response){
	response.writeHead(200, {'Content-type': 'text/html'});
	response.end('hello world');
});
server.listen(9999);
console.log('Server running at port AWESOME!(no, actually 9999.)');
