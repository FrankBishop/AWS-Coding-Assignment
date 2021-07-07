const AWS = require('aws-sdk');
const dbb = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

exports.handler = async (event, context, callback) => {

  await getVanityNumbers().then((result) => {
    callback(null, {
      vnumber1: result["Items"][0]["vnumber1"],
      vnumber2: result["Items"][0]["vnumber2"],
      vnumber3: result["Items"][0]["vnumber3"]
    });
  }).catch((err) => {
    console.error(err);
  });

};

async function getVanityNumbers() {
  try {
    const params = {
      KeyConditionExpression: 'pnumber = :pnumber',
      ExpressionAttributeValues: {
        ':pnumber': '+15127669831'
      },
      TableName: 'vanityNums',
    };
    const result = await dbb.query(params).promise();
    return result;
  } catch (err) {
    console.error(err);
  }
}

