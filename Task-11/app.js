// 1. What will be the output of the following code and why?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2

// Reason : we know when outer function inside inner function decalare and inner function when use outer function any variable access innerfunction and memorise , this call closure

// 2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()()); // 100

// reason : reason is closure inner function access outer function and multipay x *x

// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

function buttonClick() {
  let number = 0;
  document.getElementById("handleClick").addEventListener("click", function () {
    number++;
    console.log("Button Click", number, "Item");
  });
}

buttonClick();

// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
  return function (number) {
    console.log(multiplier * number);
  };
}

// createMultiplier(10);
const innerFunc = createMultiplier(10);
innerFunc(10);

// 5. What happens if a closure references an object?

// 01. The object is garbage collected immediately
// 02. The object remains in memory as long as the closure exists
// 03. The object is automatically cloned
// 04. None of the Above.

// Ans : 02. The object remains in memory as long as the closure exists

// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function factoryCounter() {
  let counter = 0;
  console.log(counter);
  return {
    increment: () => {
      counter++;
      console.log(counter);
    },
    decrement: () => {
      counter--;
      console.log(counter);
    },
    reset: () => {
      counter = 0;
      console.log(counter);
    },
  };
}

const counter1 = factoryCounter();
counter1.increment(); // 1
counter1.increment(); // 2
counter1.increment(); // 3
counter1.reset(); // 0
counter1.increment(); // 1
counter1.decrement(); // 0
counter1.decrement(); // -1
counter1.reset(); // 0
