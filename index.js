exports.handler = async (event, context, callback) => {
  // TODO implement
  // const response = {
  //     statusCode: 200,
  //     body: JSON.stringify('Hello from Lambda!'),
  // };
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
