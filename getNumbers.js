const AWS = require('aws-sdk');
const dbb = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

exports.handler = async (event, context) => {

  await getVanityNumbers().then((result) => {
    console.log(JSON.stringify(result))
  }).catch((err) => {
    console.error(err);
  })

};

getVanityNumbers();

async function getVanityNumbers() {
  // let pnumber = '+5127669831';
  try {
    const params = {
      KeyConditionExpression: 'pnumber = :pnumber',
      ExpressionAttributeValues: {
        ':pnumber': '+15127669831'
      },
      TableName: 'vanityNums',
    };
    const result = await dbb.query(params).promise();
    console.log(JSON.stringify(result))
    return result;
  } catch (error) {
    console.error(error)
  }
}

