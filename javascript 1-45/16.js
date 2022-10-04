let guests = [
  { id: 0, name: "Ali" },
  { id: 1, name: "Sara" },
  { id: 2, name: "Hamza" },
];
console.log("Guests: ", guests);

objIndex = guests.findIndex((obj) => obj.id == 1);

guests[objIndex].name = "Khushbakh";

console.log("Guests after sara left: ", guests);

function displayfunc() {
  for (const [key, value] of Object.entries(guests)) {
    console.log(`Your are invited Mr. ${value.name}`);
  }
}

displayfunc();

const obj1 = { id: 0, name: "asif" }; //creating new object

guests.unshift(Object.assign(obj1));

console.log("Added at the start\n", guests);

displayfunc();

const obj2 = { id: 10, name: "watto" }; //creating new object

guests.push(Object.assign(obj2)); //adding element end of array

console.log("Added at the end\n", guests);

displayfunc();

const obj3 = { id: 6, name: "shaur" }; //creating new object
guests.splice(2, 0, Object.assign(obj3));

console.log("Added at the middle\n", guests);

displayfunc();
