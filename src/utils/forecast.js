const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + longitude + ',' + longitude
    
    console.log(url)
    console.log(latitude)
    console.log(longitude)

    request({ url, json: true }, (error, { body }) => {

        console.log(body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else { 
            callback(undefined, body.location.name + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}
 
module.exports = forecast