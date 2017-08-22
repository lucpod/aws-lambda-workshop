# aws-lambda-workshop

Some examples for AWS lambda workshops

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![CircleCI](https://circleci.com/gh/lmammino/aws-lambda-workshop.svg?style=shield)](https://circleci.com/gh/lmammino/aws-lambda-workshop)


## Requirements

In order to use the examples in this repository you will need to have:

  1. An AWS account
  2. the AWS [CLI tool](https://aws.amazon.com/cli/) installed and configured to use your AWS account
  3. Node.js (version >= 6.10) and NPM installed in your machine
  4. [Lambda-local package](https://www.npmjs.com/package/lambda-local) installed globally in your machine


## Usage

Check the [`lessons` folder](lessons/) to access the examples.

Every example comes with its own documentation about how to run and deploy the code.

[**➡️  Start with LESSON 01**](lessons/01-simple-hello-world-api)


## Running tests

To run the tests just run from the main directory (be sure you have all the dependency installed first with `npm install`):

```bash
npm test
```


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.


## Contributing

Everyone is very welcome to contribute to this repository. Feel free to raise issues or to submit Pull Requests.

Just remember that every PR should have proper testing and respect the coding standard observed here (through ESLint).
