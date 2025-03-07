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

// 2. Build an ATM Cash Withdrawal System
// Task = 02

let multiples = 300;
if (multiples % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

// Task - 03:
let number1 = 20;
let number2 = 11;
let operator = "+";

switch (operator) {
  case "+":
    let result1 = number1 + number2;
    console.log(result1);
    break;
  case "-":
    let result2 = number1 - number2;
    console.log(result2);
    break;
  case "*":
    let result3 = number1 * number2;
    console.log(result3);
    break;
  case "/":
    let result4 = number1 / number2;
    console.log(result4);
    break;
  case "%":
    let result5 = number1 % number2;
    console.log(result5);
    break;
  default:
    console.log("Invalid Number");
}

// task 4

let age = 26;

if (age < 18) {
  console.log("Ticket Price $3");
} else if (age >= 18 && age <= 60) {
  console.log("Ticket Price $10");
} else {
  console.log("Ticket Price $8");
}

// task - 5;

let month = "june";

switch (month) {
  case "march":
  case "april":
    console.log("Aries");
    break;
  case "april":
  case "may":
    console.log("Taurus");
    break;
  case "may":
  case "june":
    console.log("Gemini");
    break;
  case "june":
  case "july":
    console.log("Cancer");
    break;
  case "july":
  case "august":
    console.log("Leo");
    break;
  case "august":
  case "september":
    console.log("Virgo");
    break;
  case "spetember":
  case "october":
    console.log("Libra");
    break;
  case "October":
  case "November":
    console.log("Scorpio");
    break;
  case "November":
  case "December":
    console.log("Sagittarius");
    break;
  default:
    console.log("Invalid Month");
}
