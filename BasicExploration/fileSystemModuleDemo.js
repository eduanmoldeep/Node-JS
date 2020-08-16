const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err, files) {
//     if(err) console.log('Error',err);
//     else console.log('Result', files);
// });
fs.readdir('$', function(err, files) {
    if(err) console.log('Error',err);
    else console.log('Result', files);
}); //produces error - no such file or directory