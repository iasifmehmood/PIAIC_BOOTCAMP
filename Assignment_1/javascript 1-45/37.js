/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
size with a different message. */

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

make_shirt("medium", "I love Javascript");

make_shirt("large", "I love Javascript");

make_shirt("small medium", "Lumber 1 force");
