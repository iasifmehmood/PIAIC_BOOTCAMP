const number = 5;
let greeting;

if (number < 17) {
  greeting = "True";
} else {
  greeting = "False";
}

console.log(greeting); //1

if (number > 17) {
  greeting = "True";
} else {
  greeting = "False";
}

console.log(greeting); //2

let x1 = 17;
if (x1 == 17) {
  greeting = "True";
} else {
  greeting = "False";
}

console.log(greeting); //3

let x2 = 17;
if (x2 != 17) {
  greeting = "True";
} else {
  greeting = "False";
}

console.log(greeting); //4

let x3 = "true";
if (x3 == "true") {
  greeting = "True";
} else {
  greeting = "False";
}

console.log(greeting); //5

let x4 = 1;
if (x4 == "true") {
  greeting = "True"; // no type checking
} else {
  greeting = "False";
}

console.log(greeting); //6

// let x5 = 1;
// if (x6 === "true") {
//   greeting = "True"; // Strong type checking
// } else {
//   greeting = "False";
// }

// console.log(greeting);

let x5 = 5;
if (x5 >= 5) {
  greeting = "True";
} else {
  greeting = "False";
}

console.log(greeting); //7

let x6 = 5;
if (x6 <= 4) {
  greeting = "True";
} else {
  greeting = "False";
}

console.log(greeting); //8

console.log("boolean value:", Boolean(10 > 7)); //9

console.log("boolean value:", Boolean(6 > 7)); //10
