
const request = require('postman-request');

const geocode = (address, key, callback) => {

    const url =
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) +
        '.json?access_token=' +
        key +
        '&limit=1';

    request(
        { url, json: true },
        (error, {body}) => {
            // console.log(response.body);
            if (error) {
                callback('Unable to connect to location services!',
                    undefined);
            } else if (body.message === 'Not Authorized - Invalid Token') {
                console.log('Please use a valid API Key.');
            }

            else if (body.features.length === 0) {
                callback('Unable to find location, Try Another Search.',
                    undefined);
            } else {
                callback(undefined, {
                    latitude: body.features[0].center[1], //latitude comes as second value
                    longitude: body.features[0].center[0],//longitude comes as first value
                    location: body.features[0].place_name
                })
            }
        }
    );
}

module.exports = geocode