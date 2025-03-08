// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

for (let i = 1; i <= 5; i++) {
  //   console.log(i);
  let star = "";
  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }
  //   console.log(star);
}

// reverse way

for (let i = 5; i >= 1; i--) {
  //   console.log(i);
  let star = "";
  for (let j = i; j >= 1; j--) {
    // console.log(j);
    star = star + "*";
  }
  //   console.log(star);
}

// 2. Craete Multiplication Table (Using for loop)
let count = 3;
for (let i = 1; i <= 10; i++) {
  //   console.log(i);
  let multi = count + "X" + i + "=" + count * i;
  console.log(multi);
}

// 4. Skipping Multiples of 3

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  //   console.log(i);
}

// 5. Reverse Digits of a Number (Using while loop)

let number = 6789;
console.log(number.length);
for (let i = 5; i >= 1; i--) {
  console.log(number[i]);
}

for (initialize - variable; conditon; Update) {
  // code
}

let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 5);
