// 1. Write a Function to Convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
  let celsiusToFahrenheit = (celsius * 9) / 5 + 32;
  return celsiusToFahrenheit;
}

const result = celsiusToFahrenheit(10);
console.log(result);

// 2. Create a Function to Find the Maximum of Two Numbers

function findMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
    // return num1
  } else {
    console.log(num2);
    // return num2
  }
}

findMax(10, 15);

// 4. Write a Function to Find Factorial of a Number

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const output = factorial(5);
console.log(output);

//7. Use an IIFE to Print “Hello, JavaScript!”

(function (name) {
  console.log("Hello", name);
})("World");

// 8. Create a Simple Callback Function

function greet(name, callback) {
  callback(name);
}
greet("Sonatan", function (name) {
  console.log(name);
});

// 9. Create Call Stack Execution Diagram for this flow

function f1() {}
function f2() {
  f1();
}
f2();

// 10. Create Call Stack Execution Diagram for this flow

function f1() {}
function f2() {}
function f3() {
  f1();
}
f2();
f3();
f1();
