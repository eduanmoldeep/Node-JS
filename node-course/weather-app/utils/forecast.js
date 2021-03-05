
const request = require('postman-request');

const forecast = (latitude, longitude, key, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key='
        + key
        + '&query='
        + latitude + ','
        + longitude
        + '&units=m'


    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
            console.log('Error Code: ' + body.error.code);
            console.log('Error Type: ' + body.error.type);
            console.log('Error Info: ' + body.error.info);
        } else {
            data = body.current
            callback(
                undefined,
                data.weather_descriptions[0]
                + '. It is currently '
                + data.temperature
                + ' degrees out. It feels like '
                + data.feelslike
                + ' degrees out.');
        }

    })
}


module.exports = forecast