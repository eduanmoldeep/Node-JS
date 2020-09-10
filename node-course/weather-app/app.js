const request = require('postman-request')
const fs = require('fs');
const { exit } = require('process');
var KeysJSON
var keys

try {
    KeysJSON = fs.readFileSync('./creds.json').toString()
    keys = JSON.parse(KeysJSON)
} catch {
    console.log('JSON read failed, terminating');
    exit()
}


const url = 'http://api.weatherstack.com/current?access_key=' + keys['weatherAPI'] + '&query=37.8267,-122.4233&units=s'
// const url = 'http://api.weatherstack.com/current?access_key=' + keys['weatherAPI'] + '&query=&units=s'
// console.log( url);




request({ url: url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.current); 
    // console.log(response.body.current);
    if (error) {
        console.log('Unable to connect to weather service');
    } else if (response.body.error) {
        console.log('Unable to find location');
        console.log('Error Code: ' + response.body.error.code);
        console.log('Error Type: ' + response.body.error.type);
        console.log('Error Info: ' + response.body.error.info);
    } else {
        data = response.body.current
        console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees out. It feels like ' + data.feelslike + ' degrees out.');
    }

})


// geocoding service --- converts area name to co ordinates


const place = 'nagpur maharashtra'
// const place = ''
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(decodeURI(place)) + '.json?access_token=' + keys['mapboxAPI'] + '&limit=1'
console.log( geocodeURL);




request({ url: geocodeURL, json: true }, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.current); 
    // console.log(response.body.current);
    if (error) {
        console.log('Unable to connect to geocoding service');
    } else if (response.body.message === 'Not Found') {
        console.log('Geocoding service cannot find location');
    } else {
        latitude = response.body.features[0].center[1] //latitude comes as second value
        longitude = response.body.features[0].center[0]//longitude comes as first value
        location = response.body.features[0].place_name
        console.log('Place Name: ' + location);
        console.log('Co-ordinates are: ');
        console.log('Latitude: ' + latitude);
        console.log('Longitude: ' + longitude);

    }
})
