# Example 03 - Post data Fizz Buzz API

This example implements a little [Fizz Buzz](https://en.wikipedia.org/wiki/Fizz_buzz) web server.

The server has a single endpoint that accepts POST requests. The body of the request must contain an integer.

The api response follows these rules:

1. if the provided number is divisible by 3:

```json
{"result":"Fizz"}
```

2. if the provided number is divisible by 5:

```json
{"result":"Buzz"}
```

3. if the provided number is divisible by both 3 and 5:

```json
{"result":"Fizz Buzz"}
```

4. otherwise the response will be:

```json
{"result": n}
```

Where `n` is the number passed as input.

Also, if an invalid input is given the api will return a 400 Bad Request error.


## Goal

The goal of this exercise is to learn how to read from the body in API Lambdas and how to create error responses.


## Test locally

With [lambda-local](https://www.npmjs.com/package/lambda-local) installed and your shell in this project folder (`lessons/03-post-data-fizz-buzz-api/`), run:

```bash
lambda-local -l src/handler.js -h handler -e sample-event-fizz.json
```

You can also use the event files `sample-event-buzz.json`, `sample-event-fizz-buzz.json`, `sample-event-n.json` and `sample-event-error.json` to test all the other cases supported by this API.


## Deploy on AWS

You can deploy on your AWS account with the following commands using [AWS cli](https://aws.amazon.com/cli/):

```
export BUCKET=your-unique-bucket-name
export STACK_NAME=post-data-fizz-buzz-api

aws cloudformation package --template-file template.yml --s3-bucket $BUCKET --output-template-file packaged-template.yml

aws cloudformation deploy --template-file packaged-template.yml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM
```

Be sure to replace the value of `BUCKET` with your own unique bucket name

---

# Navigation

| << Prev | Next >> |
| :---         |          ---: |
| [02 - Advanced Hello World API](../02-advanced-hello-world-api)   | [04 - Timezone Conversion API](../03-timezone-conversion-api) |
