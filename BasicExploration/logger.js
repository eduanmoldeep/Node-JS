var url = 'http://mylogger.io/log';
const EventEmitter = require('events');
const emitter = new EventEmitter();


function log(message) {
    // send and http request
    console.log(message);

    // Raise an Event
    emitter.emit('messageLogged',{id: 1, url: 'http://'});
}

module.exports.log = log;
// if is module.exports = log; then the 
// returned item would be a function and not an object