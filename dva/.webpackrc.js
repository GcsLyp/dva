const path = require('path');
console.log('进入webpack.config.js')
console.log(process.argv[process.argv.length - 1]);

const startType = process.argv[process.argv.length -1]

// 项目根目录
const basePath = path.join(__dirname, './');

// console.log(basePath);

const adminEntryPath = path.resolve(basePath, 'src/admin-index.js')

console.log(adminEntryPath);

export default {
  entry: './src/admin-index.js'
}
