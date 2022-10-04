const guests = {
  firstPerson: "Hamza",
  secondPerson: "usman",
  thirdPerson: "Talha",
};

for (const [key, value] of Object.entries(guests)) {
  console.log(`Your are invited Mr. ${value}`);
}
