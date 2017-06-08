exports.handler = (event, context, callback) => {
  const name =
   (event.queryStringParameters && event.queryStringParameters.name)
    ? event.queryStringParameters.name : 'World'

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: `Hello ${name}`})
  }

  callback(null, response)
}
