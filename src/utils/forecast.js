const request = require('request')






const forecast = (latitude, longitude, callback) => {
     const url = 'http://api.weatherstack.com/current?access_key=6cf1b9100a1acbfcf3886e1b739e6e7c&query=' + latitude + ',' + longitude + '&units=f'
     
     request({ url, json: true}, (error, {body}) => {
         if (error) {
              callback('Unable to connect to weather services!', undefined)
         } else if (body.error) {
               callback('Unable to find location', undefined)
         } else {   
            callback(undefined, body.current.weather_descriptions.summary + ' It is currently ' + body.current.temperature + ' degrees out. The windspeed today is ' + body.current.wind_speed + ' with a wind degree of ' + body.current.wind_degree + '. It is ' + body.current.feelslike + ' degrees out. ')
         }
    })
    }


module.exports = forecast 