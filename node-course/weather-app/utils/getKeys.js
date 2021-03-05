const fs = require('fs');
const { exit } = require('process');

const getKeys = () => {
    
    try {
        KeysJSON = fs.readFileSync('./creds.json').toString()
        keys = JSON.parse(KeysJSON)
        return keys
    } catch {
        console.log('JSON read failed, terminating');
        exit()
    }
    
};

module.exports = getKeys;