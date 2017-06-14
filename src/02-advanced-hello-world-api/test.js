const { handler } = require('./handler')

test('It should respond with hello world', () => {
  handler({}, {}, (err, response) => {
    expect(err).toBe(null)
    expect(response).toMatchSnapshot()
  })
})

test('It should respond hello wonderful people', () => {
  handler({
    queryStringParameters: {
      name: 'wonderful people'
    }
  }, {}, (err, response) => {
    expect(err).toBe(null)
    expect(response).toMatchSnapshot()
  })
})
