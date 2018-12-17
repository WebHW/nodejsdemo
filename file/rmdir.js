var fs = require("fs");

console.log("查看  e:/code/nodejsdemo/file/test 目录");
fs.rmdir('e:/code/nodejsdemo/file/test', function(err){
    if(err){
        return console.error(err.stack);
    }
    console.log("读取  e:/code/nodejsdemo/file 目录");

    fs.readdir("/test", function(err, files){
        
        if(err){
            return console.error(err.stack);
        }
        files.forEach(function(file){
            console.log(file);
        })
    })
});