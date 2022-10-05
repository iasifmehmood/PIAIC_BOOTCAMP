let guests = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Hamza" },
];

for (const [key, value] of Object.entries(guests)) {
  console.log(`Your are invited Mr. ${value.name}`);
}

console.log(`Invited guests are ${guests.length}`);
