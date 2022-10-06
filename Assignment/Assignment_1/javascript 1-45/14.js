let guests = [
  { id: 0, name: "Ali" },
  { id: 1, name: "Sara" },
  { id: 2, name: "Hamza" },
];

for (const [key, value] of Object.entries(guests)) {
  console.log(`Your are invited Mr. ${value.name}`);
}
