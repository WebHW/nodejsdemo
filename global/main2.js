// 
process.stdout.write('Hello World!' + '\n');

// 
process.argv.forEach(function(val, index, array){
    console.log(index + ':' + val);
});

// 
console.log(process.execPath);

// 
console.log(process.platform);
// 输出当前目录
console.log('当前目录: ' + process.cwd());
// 输出当前版本
console.log('当前版本: ' + process.version);
// 输出内存使用情况
console.log('当前内存使用情况: ', process.memoryUsage());