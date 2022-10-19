// happy coding 👻
//import { add } from "./cal";       only one func
import { add, mul, div, sub } from "./cal";

import promptSync from "prompt-sync";
import { count } from "console";
const prompt = promptSync();
let n1: number = parseInt(prompt("Enter First Number:"));
let n2: number = parseInt(prompt("Enter Second Number:"));
let operator: string = prompt("Enter operator clear(+,-,*,/) :");

switch (operator) {
  case "+":
    console.log(add(n1, n2));
    break;
  case "*":
    console.log(mul(n1, n2));
    break;
  case "/":
    console.log(div(n1, n2));
    break;
  case "-":
    console.log(sub(n1, n2));
    break;
  default:
    console.log("enter correct number");
}
