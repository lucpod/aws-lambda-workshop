const request = require('request')
const { DynamoDB } = require('aws-sdk')

exports.handler = (event, context, callback) => {
  const API_KEY = process.env.API_KEY
  const LOCATION = process.env.LOCATION
  const TABLE_NAME = process.env.TABLE_NAME

  const url = `http://api.openweathermap.org/data/2.5/forecast`
  const qs = { q: LOCATION, appid: API_KEY }

  request({url, qs}, (err, {body}) => {
    if (err) {
      return callback(err)
    }

    const data = JSON.parse(body)

    const batchItems = data.list.map((rawRecord) => ({
      PutRequest: {
        Item: {
          'Date': {S: rawRecord.dt},
          'Temp_min': {S: rawRecord.main.temp_min},
          'Temp_max': {S: rawRecord.main.temp_max},
          'Humidity': {S: rawRecord.main.humidity},
          'Wheater': {S: rawRecord.weather[0].main},
          'Wheater_description': {S: rawRecord.weather[0].description},
          'Wheater_icon': {S: rawRecord.weather[0].icon},
          'Wind_speed': {S: rawRecord.wind.speed},
          'Wind_deg': {S: rawRecord.wind.deg}
        }
      }
    }))

    const params = {
      RequestItems: {[TABLE_NAME]: batchItems}
    }

    const dynamodb = new DynamoDB({apiVersion: '2012-08-10'})

    dynamodb.batchWriteItem(params, function (err, data) {
      if (err) {
        console.error(err, err.stack)
        return callback(err)
      }

      console.log(data)
      return callback(null, params)
    })
  })
}
