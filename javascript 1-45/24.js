// starting from equality of string

let str = "asif";

if (str === "asif") {
  console.log("true");
} else {
  console.log("false");
}

if (str != "asif") {
  console.log("true");
} else {
  console.log("false");
}

if (str == str.toLowerCase()) {
  //lowercase
  console.log("true");
} else {
  console.log("false");
}

if (str == str.toUpperCase()) {
  //uppercase
  console.log("true");
} else {
  console.log("false");
}

let no = 5;
if (no > 3 && no < 6) {
  console.log("true");
} else {
  console.log("false");
}
//and
if (no < 3 && no < 6) {
  console.log("true");
} else {
  console.log("false");
}

//or
if (no < 3 || no < 6) {
  console.log("true");
} else {
  console.log("false");
}

let arr = [3, 5, 6];

let value = arr.includes(5);

if (value) {
  console.log("found"); //found returns true or false
} else {
  console.log("not found");
}

let value2 = arr.includes(88);

if (value2) {
  console.log("found"); //not found returns true or false
} else {
  console.log("not found");
}
