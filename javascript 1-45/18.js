let countries = ["Pakistan", "Russia", "India", "USA", "China"];
console.log(`\nMy fav Countries ${countries}`);

console.log(`\nMy fav Countries in alphabatical order ${countries.sort()}`); //alpha order

console.log(`\nMy fav Countries in original order ${countries}`);

let x = countries.sort();
for (let i = countries.length - 1; i >= 0; i--) {
  console.log(`\nMy fav Countries in alphabatical order`, x[i]); //reverse order
}

console.log(`\nMy fav Countries ${countries}`);
