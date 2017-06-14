const { handler } = require('./handler')

test('It fail if the body of the request is not a number', () => {
  handler({
    body: 'aaa'
  }, {}, (err, response) => {
    expect(err).toMatchSnapshot()
    expect(response).toBe(undefined)
  })
})

test('1 is 1', () => {
  handler({
    body: '1'
  }, {}, (err, response) => {
    expect(err).toBe(null)
    expect(response).toMatchSnapshot()
  })
})

test('6 is Fizz', () => {
  handler({
    body: '6'
  }, {}, (err, response) => {
    expect(err).toBe(null)
    expect(response).toMatchSnapshot()
  })
})

test('10 is Buzz', () => {
  handler({
    body: '10'
  }, {}, (err, response) => {
    expect(err).toBe(null)
    expect(response).toMatchSnapshot()
  })
})

test('15 is FizzBuzz', () => {
  handler({
    body: '15'
  }, {}, (err, response) => {
    expect(err).toBe(null)
    expect(response).toMatchSnapshot()
  })
})
