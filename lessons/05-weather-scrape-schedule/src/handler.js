const request = require('request')
const db = require('dynamise')

exports.handler = (event, context, callback) => {
  const { API_KEY, LOCATION, TABLE_NAME } = process.env

  const url = `http://api.openweathermap.org/data/2.5/forecast`
  const qs = { q: LOCATION, appid: API_KEY }

  request({url, qs}, (err, {body}) => {
    if (err) {
      return callback(err)
    }

    const data = JSON.parse(body)

    const client = db()
    const items = data.list.map((rawRecord) => ({
      id: String(rawRecord.dt),
      Temp_min: rawRecord.main.temp_min,
      Temp_max: rawRecord.main.temp_max,
      Humidity: rawRecord.main.humidity,
      Weather: rawRecord.weather[0].main,
      Weather_description: rawRecord.weather[0].description,
      Weather_icon: rawRecord.weather[0].icon,
      Wind_speed: rawRecord.wind.speed,
      Wind_deg: rawRecord.wind.deg
    }))

    client
      .table(TABLE_NAME)
      .multiUpsert(items)
      .then(result => callback(null, result))
      .catch(err => callback(err))
  })
}
