const http = require('http');
const getKeys = require('./getKeys');

const keys = getKeys()
const key = keys['weatherAPI']
const latitude = 21.15389;
const longitude = 79.08306;
const location = 'Nagpur, Maharashtra, India'

const url = 'http://api.weatherstack.com/current?access_key='
        + key
        + '&query='
        + latitude + ','
        + longitude
        + '&units=f';

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString();

        // console.log(chunk.toString());
        // data += chunk.toString()
    })

    response.on('end', () => {
        // console.log(data);
        const body = JSON.parse(data)
        console.log(body);
        
    })
});

request.on('error', (error) => {
    console.log('An error', error);
})

request.end()