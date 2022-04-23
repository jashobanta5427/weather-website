const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b1eb56174bba1739902e0f7bfadbac64&query='+ latitude +','+ longitude

    request({ url: url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currenty ' + body.current.temperature + ' dgress out. It feels like ' + body.current.feelslike + ' dgress out.')
        }
    })
}

module.exports = forecast