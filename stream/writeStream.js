var fs = require('fs');
var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writeStream = fs.createWriteStream('output.txt');
// 使用 utf8 编码写入数据

writeStream.write(data, 'UTF8');
// 标记文件末尾
writeStream.end();

// 处理流事件 --> data, end, and error
writeStream.on('finish', function () {
    console.log('写入完成。')
})