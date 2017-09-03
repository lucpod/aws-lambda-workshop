'use strict';

exports.handler = (event, context, callback) => {
    console.log("event querystrings: ", event.queryStringParameters);
    callback(null, {
        statusCode: 200,
        headers: {"test": "test"},
        body: "event querystrings: " + JSON.stringify(event.queryStringParameters)
    });
}
