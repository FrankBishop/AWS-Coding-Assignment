const AWS = require('aws-sdk');
const dbb = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

exports.handler = async (event, context, callback) => {

  await vanityNumbers().then(() => {
    callback(null, {
      statusCode: 201,
      body: '',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }).catch((err) => {
    console.error(err);
  });

};

function vanityNumbers() {
  let vanityNumbers = [];
  let number = '555-123-4567';
  let max = 0;
  while (max < 25) {
    let vanityNum = '';
    let letters = [];
    let letter;
    for (let i = 0; i < number.length; i++) {

      switch (number[i]) {
        case "1":
          vanityNum += '1';
          break;
        case "2":
          letters = ['A', 'B', 'C'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          break;
        case "3":
          letters = ['D', 'E', 'F'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          break;
        case "4":
          letters = ['G', 'H', 'I'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          break;
        case "5":
          letters = ['J', 'K', 'L'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          break;
        case "6":
          letters = ['M', 'N', 'O'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          break;
        case "7":
          letters = ['P', 'Q', 'R', 'S'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          break;
        case "8":
          letters = ['T', 'U', 'V'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          break;
        case "9":
          letters = ['W', 'X', 'Y', 'Z'];
          letter = letters[Math.floor(Math.random() * letters.length)];
          vanityNum += letter;
          break;
        case "0":
          vanityNum += '0';
        case "-":
          vanityNum += '-';
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
    TableName: 'topVanityNumbers',
    Item: {
      'number': number,
      'vnumber1': bestVanity[0],
      'vnumber2': bestVanity[1],
      'vnumber3': bestVanity[2],
      'vnumber4': bestVanity[3],
      'vnumber5': bestVanity[4],
    }
  };

  return dbb.put(params).promise();
}

//using vowel count since vowels mean it is more likely to make a real word


//use regex to pick best vanity numbers and return those
//loop through vanityNumbers array and use regex to determing the best
//maybe least unique characters since it would be easier to remember
//once five have been pushed into the best array, return it

//send to DynamoDB

//for ways to do this better with more time, maybe have regex look for certain phrases or characters
//maybe set i=4



// exports.handler = async (event, context, callback) => {
//   //declare array of vanity numbers
//   let vanityNumbers = [];

//   //pull number from event and set it to a variable
//   // let number = event;
//   //covert number to string

//   let number = '555-123-4567'



//   //set max number to 0
//   let max = 0
//   //have a while loop that increases max at the end and runs until max is 25
//   while (max < 25) {
//     let vanityNum = '';
//     for (let i = 0; i < number.length; i++) {
//       // if (number[i] !== '-') {
//       //   vanityNum += "a";
//       // }
//       switch(number[i]) {
//         case "2":
//           vanityNum += 'a';
//           break;
//         case "3":
//           vanityNum += 'd';
//           break;
//         case "4":
//           vanityNum +='g';
//           break;
//         case "5":
//           vanityNum +='j';
//           break;
//         case "6":
//           vanityNum +='m';
//         case "7":
//           vanityNum +='p';
//         case "8":
//           vanityNum +='q';
//         case "9":
//           vanityNum +='x';
//       }
//     }
//     vanityNumbers.push(vanityNum)
//     max++
//   }
//   return vanityNumbers;
  //loop through string and have a switch statement that based on what number it is, it randomly picks one letter for each number
  //loop returns vanity number
  //outer while loop pushes vanity number into an array of vanity numbers
  //function returns vanity numbers array


  //test code
  // let test2 = 123;
  // test2 = test2.toString();
  // function vanity(number) {
  //   let vn = '';
  //   for (let i = 0; i < number.length; i++) {
  //     let letter = Math.floor(Math.random() * 1);
  //     vn += letter;
  //   }
  //   return vn;
  // }
  // const test3 = vanity(test2);
  // console.log('this test works2');
  // return test3;
  //end test
// };
