// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


// Customizing Yargs
yargs.version('1.1.0')


// add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Adding a new note!');
        console.log('Title: ', argv.title);
        console.log('Body: ', argv.body);
    }
})

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the Note!');
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'Lists all the notes!',
    handler: function () {
        console.log('Listing all the notes!');
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function () {
        console.log('Reading the note');
    }
})




// makes it work, without an operative call
yargs.parse()
// console.log(yargs.argv);





// console.log(validator.isEmail('anmol@dev.in'));
// console.log(validator.isURL('https://google'));
// const msg = getNotes()
// console.log(msg);
// console.log(chalk.green.bold.inverse('Success!'));