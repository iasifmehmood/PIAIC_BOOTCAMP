let guests = [
  { id: 0, name: "Ali" },
  { id: 1, name: "Sara" },
  { id: 2, name: "Hamza" },
];
console.log("Guests: ", guests);

objIndex = guests.findIndex((obj) => obj.id == 1);

guests[objIndex].name = "Khushbakh";

console.log("Guests after sara left: ", guests);

for (const [key, value] of Object.entries(guests)) {
  console.log(`Your are invited Mr. ${value.name}`);
}
