var fs = require("fs");
// tmp 目录必须存在
console.log("创建目录 e:/code/nodejsdemo/file/test");

fs.mkdir('e:/code/nodejsdemo/file/test', function(err){
    if(err){
        return console.error(err.stack);

    }

    console.log('目录创建成功。');
});