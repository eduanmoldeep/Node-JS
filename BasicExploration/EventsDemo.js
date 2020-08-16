const EventEmitter = require('events');
const emitter = new EventEmitter();

// register a listener
// emitter.on('messageLogged', function(){
//     console.log('Listener Called');
// });
// arrow function implementation
emitter.on('messageLogged', (arg) => {
    console.log('Listener Called', arg);
});

// // Raise an event
// emitter.emit('messageLogged',{id: 1, url: 'http://'});
// // emit - make a noise - signalling

const log = require('./logger');
log(message)