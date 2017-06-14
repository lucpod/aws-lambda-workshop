const moment = require('moment-timezone')

exports.handler = (event, context, callback) => {
  const {timestamp, sourceTimezone, targetTimezone} = event.pathParameters

  const resultTimestamp = moment.tz(timestamp, sourceTimezone).tz(targetTimezone).format()

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({timestamp: resultTimestamp})
  }

  return callback(null, response)
}
