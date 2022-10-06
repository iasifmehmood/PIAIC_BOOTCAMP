var username = [];

// if (username) {
//   for (let i = 0; i <= username.length; i++)
//     if (username[i] === "admin")
//       console.log("You are logged in from admin account");
//     else console.log("Hi! " + username[i] + " you are logged in");
// } else {
//   console.log("We need to find some users!");
// }

// i in means searching by index/key and of is use for values
for (let i in username) {
  //does not run because array is empty and index=0
  if (username.includes("admin", username)) {
    console.log("You are logged in from admin account");
  } else {
    console.log("Hi! " + username + " you are logged in");
  }
}
// to check array is empty or not
if (Array.isArray(username) && username.length) {
  console.log("Hello " + username + ", thanks again.");
} else {
  console.log("We need to find some users!");
}
