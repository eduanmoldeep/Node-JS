const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your Notes...'

const addNote = (title, body) => {

    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)


    // debugger
    // if (duplicateNote === undefined) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(notes);

        saveNotes(notes)
        console.log(chalk.bgGreen.black('New Note added!'));

    } else {
        console.log(chalk.bgRed('Note Title Taken, Try Another!'));
    }
}

// read a note from given title
const readNote = (title) => {
    const notes = loadNotes()
    const showNote = notes.find((note) => note.title === title) 

    if(showNote) {
        console.log(chalk.green.inverse(showNote.title) + ' : ' + chalk.green(showNote.body));
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

// listing all the available notes
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.yellow('Your Notes:'));
    notes.forEach(note => {
        console.log(chalk.grey('Title: ') + chalk.green(note.title));
    });
}

// deleting note from list
const removeNote = (title) => {
    const notes = loadNotes()
    // console.log(title);
    
    const notesToKeep = notes.filter( (note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        
        console.log(notesToKeep);

        saveNotes(notesToKeep)
        console.log(chalk.bgGreen.black('Note deleted!'));

    } else {
        console.log(chalk.bgRed('Note Title not found , Try Another!'));
    }
}



// possible mistake is improper type conversions, 
// make sure to implement defence mechanisms that avoid
// writing onto unexpected data
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        // const notes = JSON.parse(dataBuffer.toString())
        return JSON.parse(dataBuffer.toString())

    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}