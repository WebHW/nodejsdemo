var http = require("http");

http.createServer(function(request, response){
    //  发送 HTTP 头部 
    //  HTTP 状态值: 200 : OK 
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf8'});

    //  发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8080);

console.log('Server running at 127.0.0.1:8080')