// var x=;
// first line error shows function wrapping function arguments

// function sayHello(name){
//     console.log('Hello ' + name);
// }

// sayHello('Anmol');
// console.log(window);

// console.log(); //global

//  //also global
// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();
// // is same as and will be turned into
// window.setInterval();   // for browsers
// global.setInterval();   // for node --- as node is JS runtime not browser

// var message = '';

// this can be accessed eaily in a browser as
// console.log(window.message);

//but doing the same with global in node gives 'undefined'
// console.log(global.message);










// console.log(global.module);

// console.log(module);







// node specific function 'require' is used to load modules

// require('./logger')
// var logger = require('./logger');
//let us see what we get when we log the logger object
// console.log(logger);

// logger=1; // leads to TypeError: logger.log is not a function
// Therefore the following is better implementation
const logger = require('./logger');

// for a constant, re assignment is not allowed
// logger =1; // gives error - TypeError: Assignment to constant variable.
logger.log('message');