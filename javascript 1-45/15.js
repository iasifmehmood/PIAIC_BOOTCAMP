//Initailize array of objects.
let guests = [
    { id: 0, name: "Ali" },
    { id: 1, name: "Sara" },
    { id: 2, name: "Hamza" },
  ],
  objIndex = guests.findIndex((obj) => obj.id == 1);

console.log("Total Guests: ", guests);

guests[objIndex].name = "Laila";

console.log("Total Guests after sara left: ", guests);
