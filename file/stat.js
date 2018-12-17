var fs = require('fs');

fs.stat('e:/code/nodejsdemo/file/open.js', function(err, stats){
    if(err){
        return console.error(err.stack);
    }
    console.log(stats);
    console.log("是否为文件(isFile) ? " +stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());

});

