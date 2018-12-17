var http = require('http');

var querystring = require('querystring');


http.createServer(function(req, res){
    // 定义了一个post变量，用于暂存请求体的信息
    var post = '';   
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
   
    // 解析 url 参数
    req.on('data', function(chunk){
        post += chunk;
    });
     // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
     
    res.end();
}).listen(3000);

console.log('server start at 127.0.0.1:3000');