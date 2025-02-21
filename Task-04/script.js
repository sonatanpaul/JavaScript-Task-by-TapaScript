// 01. What will be the output of this code snippet and why?
// Task - 01
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

// Ans : It's a normal day.
//Explanation : variable "Monday" and case "monday" two separate word .
//that's why code executed default case, javascript always case sensitive
