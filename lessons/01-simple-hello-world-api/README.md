# Example 01 - Simple Hello World API

This example implements a very simple Hello World API using AWS Lambda and AWS API Gateway.

The API will respond to GET requests always returning:

```json
{"message":"Hello World"}
```

## Test locally

With [lambda-local](https://www.npmjs.com/package/lambda-local) installed and your shell in this project folder (`lessons/01-simple-hello-world-api/`), run:

```bash
lambda-local -l src/handler.js -h handler -e sample-event.json
```

## Deploy on AWS

You can deploy on your AWS account with the following commands using [AWS cli](https://aws.amazon.com/cli/):

```
export BUCKET=your-unique-bucket-name
export STACK_NAME=simple-hello-world

aws cloudformation package --template-file template.yml --s3-bucket $BUCKET --output-template-file packaged-template.yml

aws cloudformation deploy --template-file packaged-template.yml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM
```

Be sure to replace the value of `BUCKET` with your own unique bucket name
