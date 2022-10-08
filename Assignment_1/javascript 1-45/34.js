/* Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and 
then use a for loop to print the name of each pizza. */

const pizza = ["bb-pizza", "chicken tikka pizza", "Cheese Pizza"];

for (let x of pizza) {
  console.log(x);
}

/* Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of 
the pizza. For each pizza you should have one line of output containing a simple statement like I like 
pepperoni pizza */

for (let x of pizza) {
  console.log("I like:", x);
}

console.log(
  "\nI like italian pizza very much\nI like bb chiken pizza\nI like chicken tikka pizza\nI like Cheese Pizza\nI really love pizza!"
);
