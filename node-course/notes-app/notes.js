const fs = require('fs')

const getNotes = function () {
    return 'Your Notes...'
}

const addNote = function (title, body) {

    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log(notes);

        saveNotes(notes)
        console.log('New Note added!');

    } else {
        console.log('Note Title Taken, Try Another!');
    }




}

// possible mistake is improper type conversions, 
// make sure to implement defence mechanisms that avoid
// writing onto unexpected data
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// deleting note from list
const removeNote = function (title) {
    // const notes = loadNotes()

    console.log(title);
    
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length !== notesToKeep.length) {
        
        console.log(notesToKeep);

        saveNotes(notesToKeep)
        console.log('Note deleted!');

    } else {
        console.log('Note Title do not exist, Try Another!');
    }
}



const loadNotes = function () {

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
    removeNote: removeNote
}