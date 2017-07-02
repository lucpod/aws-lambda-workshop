const { handler } = require('../src/handler')

test('It should convert timezone', () => {
  handler({
    pathParameters: {
      timestamp: '2018-05-17T22:13:10',
      sourceTimezone: 'Europe/London',
      targetTimezone: 'Australia/Sydney'
    }
  }, {}, (err, response) => {
    expect(err).toBe(null)
    expect(response).toMatchSnapshot()
  })
})
