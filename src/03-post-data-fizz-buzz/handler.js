exports.handler = (event, context, callback) => {
  const number = parseInt(event.body)

  if (Number.isNaN(number)) {
    return callback(new Error('Invalid body, a number was expected'))
  }

  const result = (
    number % 3 === 0 && number % 5 === 0 ? 'FizzBuzz'
    : number % 3 === 0 ? 'Fizz'
    : number % 5 === 0 ? 'Buzz'
    : number
  )

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({result})
  }

  return callback(null, response)
}
