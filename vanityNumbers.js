const AWS = require('aws-sdk');
const dbb = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

exports.handler = async (event, context, callback) => {
  const callerNumber = event['Details']['ContactData']['CustomerEndpoint']['Address'];

  await vanityNumbers(callerNumber).then(() => {
    callback(null, {
      message: 'We found the best three numbers for you',
    });
  }).catch((err) => {
    console.error(err);
  });

};

function vanityNumbers(call) {
  const number = call;
  let vanityNumbers = [];
  let max = 0;
  while (max < 25) {
    let vanityNum = '';
    let letters = [];
    let letter;
    for (let i = 0; i < number.length; i++) {

      switch (number[i]) {
        case "1":
          vanityNum += '1';
          vanityNum += ' ';
          break;
        case "2":
          letters = ['A', 'B', 'C'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          vanityNum += ' ';
          break;
        case "3":
          letters = ['D', 'E', 'F'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          vanityNum += ' ';
          break;
        case "4":
          letters = ['G', 'H', 'I'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          vanityNum += ' ';
          break;
        case "5":
          letters = ['J', 'K', 'L'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          vanityNum += ' ';
          break;
        case "6":
          letters = ['M', 'N', 'O'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          vanityNum += ' ';
          break;
        case "7":
          letters = ['P', 'Q', 'R', 'S'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          vanityNum += ' ';
          break;
        case "8":
          letters = ['T', 'U', 'V'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          vanityNum += ' ';
          break;
        case "9":
          letters = ['W', 'X', 'Y', 'Z'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          vanityNum += ' ';
          break;
        case "0":
          vanityNum += '0';
          vanityNum += ' ';
        case "-":
          vanityNum += '-';
          vanityNum += ' ';
          break;
      }
    }
    vanityNumbers.push(vanityNum);
    max++;
  }
  let bestVanity = [];
  let top5 = [
    {
      vanity: '',
      vowels: 0
    },
    {
      vanity: '',
      vowels: 0
    },
    {
      vanity: '',
      vowels: 0
    },
    {
      vanity: '',
      vowels: 0
    },
    {
      vanity: '',
      vowels: 0
    }
  ];

  for (let i = 0; i < vanityNumbers.length; i++) {

    let bestNum = vanityNumbers[i];
    let vowels = 0;
    for (let j = 0; j < bestNum.length; j++) {
      if (bestNum[j] === 'A' || bestNum[j] === 'E' || bestNum[j] === 'I' || bestNum[j] === 'O' || bestNum[j] === 'U') {
        vowels++;
      }
    }

    let bestVan = {
      vanity: bestNum,
      vowels: vowels
    };

    for (let j = 0; j < top5.length; j++) {
      if (vowels > top5[j].vowels) {
        top5.splice(j, 1, bestVan);
        break;
      }
    }
  }

  for (let j = 0; j < top5.length; j++) {
    bestVanity.push(top5[j].vanity);
  }

  const params = {
    TableName: 'vanityNums',
    Item: {
      'pnumber': number,
      'vnumber1': bestVanity[0],
      'vnumber2': bestVanity[1],
      'vnumber3': bestVanity[2],
      'vnumber4': bestVanity[3],
      'vnumber5': bestVanity[4],
    }
  };

  return dbb.put(params).promise();
}
