const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b7a2e7e90b4af90a2620e1049048ef4a/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?&units=si'
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, 
                //{
                body.daily.data[0].summary + ' temperature: ' + body.currently.temperature + '. There is a ' + body.currently.precipProbability + '% changce of rain'
                //temperature: response.body.currently.temperature,
                //precipProbability: response.body.currently.precipProbability,
                //timezone: response.body.timezone
                //}
            )
        }

    })
}

module.exports = forecast