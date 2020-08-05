var url = 'http://mylogger.io/log';

function log(message) {
    // send and http request
    console.log(message);
}

module.exports.log = log;
// if is module.exports = log; then the 
// returned item would be a function and not an object