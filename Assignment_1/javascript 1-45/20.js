const arr = {
  mountains: ["k2", "nagaparbat"],
  rivers: ["ravi", "chenab"],
  countries: ["pakistan", "india"],
  cities: ["rawalpindi", "islamabad"],
  languages: ["urdu", "pasto"],
};

const myArray = Object.values(arr);
console.log("show list", arr);
console.log(JSON.stringify(arr, null, 2)); // another method to print
