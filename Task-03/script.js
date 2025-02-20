//Task - 01

//Option One
let number1 = 40;
const result1 = number1 % 2 === 0 ? "Even Number " : "Odd Number";
console.log(result1); // Even Number

// Option Two
let number2 = 42;
const result2 = number2 % 2 === 1 ? "Even Number" : "Odd Number";
console.log(result2); // Odd Number

// Task - 02

// Option - 01
let age1 = 18;
const result3 =
  age1 >= 18
    ? "eligible for a driving license "
    : "not eligible for a driving license ";
console.log(result3); //eligible for a driving license

// Option - 02
let age2 = 14;
const result4 =
  age2 >= 18
    ? "eligible for a driving license"
    : "not eligible for a driving license ";
console.log(result4); //not eligible for a driving license

// Task - 03
let monthSalary = 12300;
let annualSalary = monthSalary * 12;
console.log(annualSalary);
let CTCMoney = (annualSalary * 20) / 100;
console.log(CTCMoney); // 29520

// Task - 04
let color1 = "green";

const result5 = color1 === "green" ? "Go" : "Stop";
console.log(result5);

//Task - 05

let units = 12;
let dayUnitPrice = 12 * 150;
console.log(dayUnitPrice);
let monthUnitPrice = dayUnitPrice * 30;
console.log(monthUnitPrice);
let yearUnitPrice = monthUnitPrice * 12;
console.log(yearUnitPrice);
let discountPrice = (yearUnitPrice * 20) / 100;
console.log(discountPrice);
let afterDiscountPrice = yearUnitPrice - discountPrice;
console.log(afterDiscountPrice);

// Task- 6

let year = 2025;
let leapYear =
  (year % 4 === 0 && year % 100 !== 100) || year % 400 === 0
    ? "Leap Year"
    : "Not Leap Year";
console.log(leapYear); // Leap Year

// Task - 7
let p = 18;
let q = 15;
let r = 12;

let bigNumber =
  p > q && p > r
    ? "First Number Big"
    : q > p && q > r
    ? "Second Number Big"
    : "Third Number Big";
console.log(bigNumber); // First Number Big

// Task - 08
let count = 5;
let doubleCount1 = count << 1; // 10
let doubleCount2 = count << 2; // 20
console.log(doubleCount1);
