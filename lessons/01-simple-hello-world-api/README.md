# Example 01 - Simple Hello World API

This example implements a very simple Hello World API using AWS Lambda and AWS API Gateway.

The API will respond to GET requests always returning:

```json
{"message":"Hello World"}
```

## Goal

The goal of this exercise is to learn how to write a very simple Lambda, test it locally and deploy it on AWS.

## Validate yaml file
With [aws-sam-local](https://github.com/awslabs/aws-sam-locall) you can test if your template.yaml file is valid by typing

```bash
sam validate
```

## Test locally

With [aws-sam-local](https://github.com/awslabs/aws-sam-locall) installed and your shell in this project folder (`lessons/01-simple-hello-world-api/`), run:

```bash
sam local invoke HelloWorldApi -e sample-event.json
```

To run it as a local API, i.e. run it using a local API Gateway.

```bash
sam local start-api
```

## Deploy on AWS

You can deploy on your AWS account with the following commands using [AWS cli](https://aws.amazon.com/cli/):

```
export BUCKET=your-unique-bucket-name
export STACK_NAME=simple-hello-world

sam package --template-file template.yaml --s3-bucket $BUCKET --output-template-file packaged-template.yml

sam deploy --template-file packaged-template.yml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM
```

Be sure to replace the value of `BUCKET` with your own unique bucket name

---

# Navigation

| << Prev | Next >> |
| :---         |          ---: |
| .   | [02 - Advanced Hello World API](../02-advanced-hello-world-api) |
