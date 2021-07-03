exports.handler = async (event, context, callback) => {
  //declare array of vanity numbers
  //pull number from event and set it to a variable
  //covert number to string
  //set max number to 25
  //have a while loop that increases max at the end and runs until max is 25
  //loop through string and have a switch statement that based on what number it is, it randomly picks one letter for each number
  //loop returns vanity number
  //outer while loop pushes vanity number into an array of vanity numbers
  //function returns vanity numbers array
  let test2 = 123;
  test2 = test2.toString();
  function vanity(number) {
    let vn = '';
    for (let i = 0; i < number.length; i++) {
      let letter = Math.floor(Math.random() * 1);
      vn += letter;
    }
    return vn;
  }
  const test3 = vanity(test2);
  console.log('this test works2');
  return test3;
};
