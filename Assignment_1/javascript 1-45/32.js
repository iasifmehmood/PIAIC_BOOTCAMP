const currentUsers = ["asif", "shoaib", "shaur", "wajahat", "bilal idress"];
const newUsers = ["daniyal", "asif", "hamza", "shoaib", "ibrahim"];

//to lower case array

const currentUsersLower = currentUsers.map((element) => {
  return element.toLowerCase();
});

const newUsersLower = newUsers.map((element) => {
  return element.toLowerCase();
});

//to find common value in both array

const UserFound = newUsersLower.filter((element) =>
  currentUsersLower.includes(element)
);

// to find opposite
const userNotFound = newUsersLower.filter(
  (e) => !currentUsersLower.includes(e)
);

console.log("Sorry " + UserFound + ", that name is taken"); // asif and shoaib

console.log("Great, " + userNotFound + " is still available"); //opposite array
