const path = require('path')
module.exports = {

    //代表运行的模式，可选有开发模式和产品模式production,打包方式的取决值
    mode: 'development',
    // entry: '指定处理哪个文件',__dirname是指当前文件所处的目录的路径
    entry: path.join(__dirname, './src/index1.js'),
    // output:打包好的文件放到哪里
    output: {
        // 存放的目录
        path: path.join(__dirname, 'dist'),
        // 生成的文件名
        filename: 'bundle.js'
    }
}