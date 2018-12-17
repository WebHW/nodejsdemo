var fs = require("fs");

console.log("查看  e:/code/nodejsdemo/file 目录");
fs.readdir('e:/code/nodejsdemo/file', function(err, files){
    if(err){
        return console.error(err.stack);
    }
    files.forEach( function (file){
        console.log( file );
    });
});