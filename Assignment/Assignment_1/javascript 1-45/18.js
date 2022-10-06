const countries = ["Pakistan", "Russia", "India", "USA", "China"];
const modified_countries = countries;

console.log(`\nMy fav Countries in original order ${countries}`);

function sorted_alpha() {
  const sorted_alpha = modified_countries.slice().sort();
  console.log(
    `\nMy fav Countries in aplhabatically sorted from a-z ${sorted_alpha}` //sorted
  );
}

sorted_alpha();

console.log(`\nMy fav Countries in original order ${modified_countries}`);

function sorted_alpha_reverse() {
  const sorted_alpha_reverse = countries.slice().sort().reverse();

  console.log(
    `\nMy fav Countries in aplhabatically sorted from z-a  ${sorted_alpha_reverse}` //sorted reverse
  );
}

sorted_alpha_reverse();

console.log(`\nMy fav Countries in original order is ${modified_countries}`);

console.log(`\nNow  again changing order ${modified_countries}`);
console.log("order changed", sorted_alpha());
console.log("order changed", sorted_alpha_reverse());
