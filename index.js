exports.handler = async (event, context, callback) => {
  let vanityNumbers = [];
  let number = '555-123-4567';
  let max = 0;
  while (max < 25) {
    let vanityNum = '';
    let letters = [];
    let letter;
    for (let i = 0; i < number.length; i++) {
      if (number[i] === '-') {
        vanityNum += '-';
      }

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
          vanityNum += '0'
        case "-":
          vanityNum += '-';
          break;
      }
    }
    vanityNumbers.push(vanityNum);
    max++;
  }
  return vanityNumbers;
};


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
