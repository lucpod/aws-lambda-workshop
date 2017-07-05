# Example 05 - Weather Scrape Schedule

This example implements a scheduled lambda that runs every two hours, invokes a weather API and save some weather forecast data in a DynamoDB table.


## Goal

The goal of this exercise is to get confident with scheduled events, Environment
variables and storing data in DynamoDB.


## Install dependencies

Before being able to run this example locally or to deploy it you need to download
the necessary dependencies in the src folder (`lessons/05-weather-scrape-schedule/src`):

```
npm install
```


## Open Weather Map API KEY

This example uses the [Open Weather Map APIs](https://openweathermap.org/api), for which you
need your own API KEY. Be sure to [sign up for an Open Weather Map API key](http://openweathermap.org/appid)
before starting this exercise. You should be able to use the free plan for the amount of query
required in this exercise (1 every 2 hours).


## Test locally

With [lambda-local](https://www.npmjs.com/package/lambda-local) installed and your shell in this project folder (`lessons/05-weather-scrape-schedule/`), run:

```bash
export API_KEY=XXXX
lambda-local -l src/handler.js -h handler -e sample-event.json
```

Of course, replace `XXXX` with your own Open Weather Map API Key.


## Deploy on AWS

You can deploy on your AWS account with the following commands using [AWS cli](https://aws.amazon.com/cli/):

```
export BUCKET=your-unique-bucket-name
export API_KEY=XXXX
export STACK_NAME=weather-scrape-schedule


rm -f src.zip && cd src && zip -r ../src.zip . && cd ..

aws cloudformation package --template-file template.yml --s3-bucket $BUCKET --output-template-file packaged-template.yml

aws cloudformation deploy --template-file packaged-template.yml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM --parameter-overrides ApiKey=$API_KEY
```

Be sure to replace the value of `BUCKET` with your own unique bucket name and to
export the `API_KEY` variable with your own Open Weather Map API Key


---


# Navigation

| << Prev | Next >> |
| :---         |          ---: |
| [04 - Timezone conversion API](../04-timezone-conversion-api)   | [06 - Azure File Sync Integration](../06-azure-file-sync-integration) |
