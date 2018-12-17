var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});

    response.write('Hello , World');
    response.end();
}).listen(8000);

console.log('server start at 127.0.0.1:8000')