/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be 
printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message 
printed on it. Call the function. */

function make_shirt(s, t) {
  let size, text;
  shirtSize = s;
  shirtText = t;
  console.log(
    `The size of shirt is ${shirtSize} and text printed on shirt is ${shirtText}`
  );
}

const size = 44;
const text = "Lumber 1";

make_shirt(size, text);
