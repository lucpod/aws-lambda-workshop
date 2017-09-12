# Example 04 - Timezone conversion API

This example implements a little timezone conversion REST API.

There is a single endpoint that accepts GET requests with several path parameters as per the following template:

```
/convert/{timestamp}/{sourceTimezone}/{targetTimezone}
```

where:

 - `timestamp` is a timestamp in ISO 8601 format (e.g. `2018-05-17T22:13:10`)
 - `sourceTimezone` the source timezone (e.g. `Europe/London`)
 - `targetTimezone` the source timezone (e.g. `Australia/Sydney`)

The API response is a JSON object containing the converted timestamp. E.g.:

```json
{"timestamp":"2018-05-18T07:13:10+10:00"}
```

## Goal

The goal of this exercise is to learn how to use external libraries like [moment-timezone](https://www.npmjs.com/package/moment-timezone) and path parameters in your Lambda Functions.


## Install dependencies

Before being able to run this example locally or to deploy it you need to download
the necessary dependencies in the src folder (`lessons/04-timezone-conversion-api/src`):

```
npm install
```


## Test locally

With [aws-sam-local](https://github.com/awslabs/aws-sam-locall) installed and your shell in this project folder (`lessons/04-timezone-conversion-api/`), run:

```bash
sam local invoke TimezoneConversionApi -e sample-event.json
```


## Deploy on AWS

You can deploy on your AWS account with the following commands using [AWS cli](https://aws.amazon.com/cli/):

```
export BUCKET=your-unique-bucket-name
export STACK_NAME=timezone-conversion-api

rm -f src.zip && cd src && zip -r ../src.zip . && cd ..

sam package --template-file template.yaml --s3-bucket $BUCKET --output-template-file packaged-template.yaml

sam deploy --template-file packaged-template.yaml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM
```

Be sure to replace the value of `BUCKET` with your own unique bucket name

---

# Navigation

| << Prev | Next >> |
| :---         |          ---: |
| [03 - Post data Fizz Buzz API](../03-post-data-fizz-buzz-api)   | [05 - Weather Scrape Schedule](../05-weather-scrape-schedule) |
