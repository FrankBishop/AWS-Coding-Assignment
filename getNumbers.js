const AWS = require('aws-sdk');
const dbb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });

exports.handler = async (event, context, callback) => {

  await getVanityNumbers().then(() => {
    callback(null, {
      statusCode: 201,
      body: '',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
  }).catch((err) => {
    console.error(err);
  })

};

function getVanityNumbers() {
  let number = '555-123-4567';
  const params = {
    TableName: 'topVanityNumbers',
    KeyConditionExpression: "number = number",
  }
  return dbb.scan(params).promise();
}
