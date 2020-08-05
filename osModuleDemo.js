const os = require('os');

const totalMem = os.totalmem();
const freeMem = os.freemem();

// console.log('Total Memory: ' + totalmem);
// template string from ES6/ES2015/ ECMAScript6

console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);