// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// const { readNote } = require('./notes.js')

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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'Lists all the notes!',
    handler() {
        notes.listNotes()
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
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