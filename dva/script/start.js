const exec = require('child_process').exec


const mode = process.argv[process.argv.length - 1];
console.log('已进入start.js')
console.log(process.argv[process.argv.length - 1]);
// exec('roadhog server', () => {
//   console.log('success')
// })
