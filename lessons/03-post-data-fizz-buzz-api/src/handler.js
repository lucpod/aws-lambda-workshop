exports.handler = (event, context, callback) => {
  const number = parseInt(event.body)

  if (Number.isNaN(number) || !Number.isInteger(number) || number <= 0) {
    const error = 'Invalid body, a positive integer was expected'
    return callback(null, {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({error})
    })
  }

  const result = (
    number % 3 === 0 && number % 5 === 0 ? 'Fizz Buzz'
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
