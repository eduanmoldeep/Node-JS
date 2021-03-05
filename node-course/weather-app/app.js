const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const getKeys = require('./utils/getKeys')

keys = getKeys()

address = process.argv[2]
console.log(address);

if (!address) {
    return console.log('Please provide an address.');
}


geocode(
    encodeURIComponent(address), 
    keys['mapboxAPI'], 
    (error, {latitude, longitude, location} = {}) => {

    if (error) {
        return console.log(error);
    }

    console.log(latitude, longitude, location);

    forecast(
        latitude,
        longitude,
        keys['weatherAPI'],
        (error, forecast) => {
            
            if (error)
                return console.log(error);

            console.log(location);
            console.log(forecast);
        })
})
