# Example 07 - aws-sam-local

This example is using a new tool just released by AWS(August 2016), it allows a developer to run lambda's and API Gateway locally on your laptop as well as create sample events for AWS.


## Goal

The goal of this exercise is to get confident with AWS tool for doing local development. You will be able to execute a lambda locally and also run an API gateway locally.


## Install aws-sam-local

Before being able to run this example locally or to deploy it you need to install the tool.

```
npm install -g aws-sam-local
```

You can verify the installation worked by
```
sam --version
```

## Create an event for your lambda

To create an event for API gateway


```
sam local generate-event api > event.json
```

## Create a template.yaml for your service

This describes the lambda and what services it will be attached to.

## Validate the template.yaml file

```
sam validate
```

## Create a hello.js

This method returns the query string paramaeters from the event you created earlier.


## Package your service

```
sam package --template-file template.yaml --s3-bucket yourbucket
```

## Deploy your service

```
sam deploy --template-file ./template.yaml --stack-name lambdalabs --capabilities CAPABILITY_IAM
```
