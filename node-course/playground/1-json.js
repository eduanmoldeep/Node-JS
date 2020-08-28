const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// } 

// const bookJSON = JSON.stringify(book)

// console.log(bookJSON)
// console.log(book);
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(dataBuffer);
// console.log(dataJSON);
// console.log(data);
// console.log(data.title);


data = fs.readFileSync('data.json')
dataJSON = data.toString()
object = JSON.parse(dataJSON)
object.name = 'Anmoldeep'
object.age = 19
dataJSON = JSON.stringify(object)
fs.writeFileSync('data.json',dataJSON)
