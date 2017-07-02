# Example 02 - Advanced Hello World API

This example implements a slightly advanced version of the previous simple Hello World API using AWS Lambda and AWS API Gateway.

As in the previous example, the API will respond to GET requests returning:

```json
{"message":"Hello World"}
```

But, if you specify a `name` option in the query string parameter, the `World` part of the message will be replaced with the name you provided. E.g. if you pass `?name=Podge` then the API will respond with:

```json
{"message":"Hello Podge"}
```

## Test locally

With [lambda-local](https://www.npmjs.com/package/lambda-local) installed and your shell in this project folder (`lessons/02-advanced-hello-world-api/`), run:

```bash
lambda-local -l src/handler.js -h handler -e sample-event.json
```

## Deploy on AWS

You can deploy on your AWS account with the following commands using [AWS cli](https://aws.amazon.com/cli/):

```
export BUCKET=your-unique-bucket-name
export STACK_NAME=advanced-hello-world

aws cloudformation package --template-file template.yml --s3-bucket $BUCKET --output-template-file packaged-template.yml

aws cloudformation deploy --template-file packaged-template.yml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM
```

Be sure to replace the value of `BUCKET` with your own unique bucket name

---

# Navigation

| << Prev | Next >> |
| :---         |          ---: |
| [01 - Simple Hello World API](../01-simple-hello-world-api)   | [03 - POST data Fizz-Buzz API](../03-post-data-fizz-buzz-api) |
