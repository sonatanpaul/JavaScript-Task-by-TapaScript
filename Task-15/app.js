{
  // T-001: Create an array of 5 elements using the Array Constructor.
  const numbers = new Array(1, 2, 3, 4, 5);
  console.log(numbers); // [1, 2, 3, 4, 5]
}
{
  // T-002: Create an array of 3 empty slots.
  const emptyArray = new Array(3);
  console.log(emptyArray); // [empty × 3]
}

{
  // T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
  const number = [1, 2, 3, 4, 5, 6];
  const fourthElement = number.length - 2;
  const fourElement = number[3];
  console.log(fourElement); // 4
  console.log(fourthElement); // 4
}
{
  // T-004: Use the for loop on the above array to print elements in the odd index.
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      console.log(i); // 1,3,5,7
    }
  }
}

{
  // T-005: Add one element at the front and the end of an array.
  const friends = ["asraful", "anik"];
  // add front side element
  friends.unshift("tom");
  console.log(friends); //  ['tom', 'asraful', 'anik']

  // add end side element
  friends.push("jhon");
  console.log(friends); // ['tom', 'asraful', 'anik', 'jhon']
}
{
  // T-006: Remove an element from the front and the end of an array.
  const friend = ["anik", "tom", "paul", "akash", "rayhan"];
  // remove front side element
  friend.shift();
  console.log(friend); // ['tom', 'paul', 'akash', 'rayhan']

  // remove end side element
  friend.pop();
  console.log(friend); // ['tom', 'paul', 'akash']
}

{
  // T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
  const foods = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Tacos",
    "Salad",
    "Ice Cream",
    "Steak",
    "Sandwich",
    "Fried Rice",
  ];

  const [, , , , , salad, , , ,] = foods;
  console.log(salad); // Salad
}

{
  // T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
  const foods = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Tacos",
    "Salad",
    "Ice Cream",
    "Steak",
    "Sandwich",
    "Fried Rice",
  ];
  const [pizza, burger, ...rest] = foods;
  console.log(pizza); // Pizza
  console.log(burger); //  Burger
  console.log(rest); // ['Pasta', 'Sushi', 'Tacos', 'Salad', 'Ice Cream', 'Steak', 'Sandwich', 'Fried Rice']
}

{
  // T-009: Clone an Array(Shallow cloning)
  const numbers = [10, 20, 11, 22, 45, 62];
  // option 1
  const numbersCopy = numbers.slice();
  console.log(numbersCopy); // [10, 20, 11, 22, 45, 62]
  console.log(numbers === numbersCopy); //  false

  // option 2
  const newNumbers = [...numbers];
  console.log(newNumbers); // [10, 20, 11, 22, 45, 62]
  console.log(numbers === newNumbers); //  false
}

{
  // T-010: Empty an array using its length property
  const number = [1, 2, 3, 4, 5];
  console.log(number); // [1, 2, 3, 4, 5]

  number.length = 0;
  console.log(number); // []
}

{
  // T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < number.length; i++) {
    if (number[i] === 5) {
      number.length = 6;
      console.log(number); // [1, 2, 3, 4, 5, 6];
    }
  }
  console.log(number); // [1, 2, 3, 4, 5, 6]
}

{
  // T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(number); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  number.splice(0, number.length);
  console.log(number); // []
}

{
  // T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // my refer array.lenth = 0,
  //   reason : other method create new variable then empty thats why array. lenght fast and efficient
  number.length = 0;
  console.log(number); // []
}

{
  // T-014: What happens when you concatenate two empty arrays?
  const arr1 = [];
  const arr2 = [];
  const concatArray = arr1.concat(arr2);
  console.log(concatArray); // []
  // when we concat two empty array return empty array
}

// {
//   // T-015: How can you check if a value is partially matching with any of the elements of an Array?
//   const fruits = ["banana", "orange"];
//   const partiallyMatch = fruits.includes("an");
//   console.log(partiallyMatch);
// }

{
  // T-016: What is the difference between the slice() and splice() methods?
  // slice method
  // 01. slice method is immutable method
  // 02. slice method can't modified orginal array give me new array
  // 03 . when we need new copy array then useing slcie method
  // splice method
  // 01. splice method is muteable method
  // 02. splice method orginal array modified
  // 03. when we need array element add , delete then use splcie method
}

{
  // T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
  const friends = ["rayhan", "anik", "paul", "tom", "bikash", "akash"];

  //   ascending orders
  const ascendingFriends = friends.toSorted((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
  });
  console.log(ascendingFriends);
  // ['akash', 'anik', 'bikash', 'paul', 'rayhan', 'tom']

  //   descending orders
  const descendingFriends = friends.toSorted((a, b) => {
    return a === b ? 0 : a < b ? 1 : -1;
  });
  console.log(descendingFriends);
  // ['tom', 'rayhan', 'paul', 'bikash', 'anik', 'akash']
}

{
  // T-018: Can you give examples of sparse and dense arrays?
  // sparse Array :
  const sparseArray = [1, , , 4, , 6];
  console.log(sparseArray); // [1, empty × 2, 4, empty, 6]
  console.log(sparseArray[0]); // 1
  console.log(sparseArray[1]); // undefined
  console.log(sparseArray[2]); // undefined
  console.log(sparseArray[3]); // 4
  console.log(sparseArray[4]); // undefined
  console.log(sparseArray[5]); // 6

  //   dense Array :
  const denseArray = [1, 2, 3, 4, 5];
  console.log(denseArray); // [1, 2, 3, 4, 5]
  console.log(denseArray[0]); // 1
  console.log(denseArray[1]); // 2
  console.log(denseArray[2]); // 3
  console.log(denseArray[3]); // 4
  console.log(denseArray[4]); // 5
}

{
  // T-019: Give a practical usages of the .fill() method

  const busSeat = ["booked", "available", "booked", "booked", "booked"];
  const newBusSeat = busSeat.fill("available", 1, 4);
  console.log(newBusSeat); // ['booked', 'available', 'available', 'available', 'booked']
}

{
  // T-020: How to convert an array to a string?
  const number = [1, 2, 3, 4, 5, 6];
  const arrayToString = number.join(" ");
  console.log(arrayToString); // 1 2 3 4 5 6
}

// Consider these input arrays for question T-21 to T-48

// employees array: An array of emplyees working in a department.
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
// departments array: An array of departments where emplyees work.

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

// =================================================

// {
//   // T-021: Can you filter employees who work in the "Engineering" department?
//   const engDeperatment = departments.find(
//     (departemnt) => departemnt.name === "Engineering"
//   );
//   console.log(engDeperatment); //  {id: 2, name: 'Engineering'}
//   const empDepartment = employees.filter(
//     (employee) => employee.departmentId === engDeperatment.id
//   );
//   console.log(empDepartment); //  (3) [{…}, {…}, {…}]
// }

// {
//   // T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
//   const newArray = employees.map((employee) => {
//     const departmentArray = departments.find(
//       (department) => department.id === employee.departmentId
//     );
//     return `${employee.name} (${departmentArray.name})`;
//   });
//   console.log(newArray);
// }

// {
//   // T-023: Find the highest salary among employees.
//   const highestSalary = employees.reduce((max, employee) => {
//     return employee.salary > max ? employee.salary : max;
//   }, employees[0].salary);

//   console.log(highestSalary);

//   // T-023: Find the lowest salary among employees.
//   const lowestSalary = employees.reduce((min, employee) => {
//     return employee.salary < min ? employee.salary : min;
//   }, employees[0].salary);
//   console.log(lowestSalary);
// }

// {
//   // T-024: Check if there is at least one employee in the "Sales" department.
//   const salesId = departments.find((dept) => dept.name === "Sales");
//   console.log(salesId);
//   const salesEmployee = employees.some(
//     (employee) => employee.departmentId === salesId.id
//   );
//   console.log(salesEmployee); // true
// }

// {
//   // T-025: Write a function to filter employees earning more than 6000.
//   function filterHighEarners(employees, amount) {
//     return employees.filter((employee) => employee.salary > amount);
//   }

//   const highEarners = filterHighEarners(employees, 6000);
//   const highEarners1 = filterHighEarners(employees, 5000);
//   console.log(highEarners); // 3
//   console.log(highEarners1); // 7
// }

// {
//   // T-026: Create an array of employee names only.
//   const namesArray = employees.map((employee) => employee.name);
//   console.log(namesArray); // ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Helen', 'Ian', 'Jane']
// }

// {
//   // T-027: Calculate the total salary of all employees using
//   const totalSalary = employees.reduce((accumulator, employee) => {
//     return accumulator + employee.salary;
//   }, 0);
//   console.log(totalSalary); // 58300
// }

// {
//   // T-028: Is there any employee earning less than 5000?
//   const employeeEarning = employees.filter(
//     (employee) => employee.salary < 5000
//   );
//   console.log(employeeEarning); // 2 person

//   // Option 2

//   const employeeEarning1 = employees.some((employee) => employee.salary < 5000);
//   console.log(employeeEarning1); //  true
// }

// {
//   // T-029: Find the first employee who earns exactly 5100.
//   const earning5100 = employees.find((employee) => employee.salary === 5100);
//   console.log(earning5100); // {id: 10, name: 'Jane', departmentId: 1, salary: 5100}

//   // T-029: Find the Last employee who earns exactly 5100.
//   const earning5100Last = employees.findLast(
//     (employee) => employee.salary === 5100
//   );
//   console.log(earning5100Last);
// }

// {
//   // T-030: Find the last employee in the "HR" department.
//   const hrDept = departments.find((employee) => employee.name === "HR");
//   // console.log(hrDept);
//   const lastEmployeeHr = employees.findLast(
//     (employee) => employee.departmentId === hrDept.id
//   );
//   console.log(lastEmployeeHr); // {id: 10, name: 'Jane', departmentId: 1, salary: 5100}
// }

// {
//   // T-031: Find the first employee in the "Marketing" department.
//   const marketingDept = departments.find((dept) => dept.name === "Marketing");
//   console.log(marketingDept); // {id: 3, name: 'Marketing'}
//   const firstEmployeeMarketing = employees.find(
//     (employee) => employee.departmentId === marketingDept.id
//   );
//   console.log(firstEmployeeMarketing);
// }

// {
//   // T-032: Check if all employees earn more than 4000.
//   const allEmployees = employees.every((employee) => employee.salary > 4000);
//   console.log(allEmployees); // true
// }

// {
//   // T-033: Find the last employee in the "HR" department.
//   const hrDept = departments.find((dept) => dept.name === "HR");
//   const lastEmployeeHr = employees.findLast(
//     (employee) => employee.departmentId === hrDept.id
//   );
//   console.log(lastEmployeeHr); // {id: 10, name: 'Jane', departmentId: 1, salary: 5100}
// }

{
  // T-034: Verify if all employees belong to a department listed in the departments array.
  const verifyAllEmployee = employees.every((employee) =>
    departments.some((dept) => employee.departmentId === dept.id)
  );
  console.log(verifyAllEmployee); //  true
}

{
  const employeeDept = employees.map((employee) => {
    const department = departments.find(
      (dept) => dept.id === employee.departmentId
    );
    return ` ${employee.name} works in ${department.name}`;
  });
  console.log(employeeDept);
}

{
  // T-036: Extract all employee names into a single array.
  const allEmployees = employees.map((employee) => employee.name);
  console.log(allEmployees); // ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Helen', 'Ian', 'Jane']
}

{
  // T-037: Increment each employee's salary by 10%
  const incrementSalary = employees.map((employee) => ({
    ...employee,
    salary: employee.salary * 1.1,
  }));
  console.log(incrementSalary);
}

{
  // T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
  const employees = [
    {
      id: 1,
      name: "Alice",
      departmentId: 1,
      salary: 5000,
      skills: ["Excel", "Management"],
    },
    {
      id: 2,
      name: "Bob",
      departmentId: 2,
      salary: 7000,
      skills: ["JavaScript", "React"],
    },
    {
      id: 3,
      name: "Charlie",
      departmentId: 3,
      salary: 4500,
      skills: ["Marketing", "SEO"],
    },
    {
      id: 4,
      name: "Diana",
      departmentId: 1,
      salary: 5500,
      skills: ["Recruitment", "Training"],
    },
    {
      id: 5,
      name: "Edward",
      departmentId: 2,
      salary: 8000,
      skills: ["Leadership", "Communication"],
    },
  ];

  const allSkills = employees.flatMap((employee) => employee.skills);
  console.log(allSkills); // ['Excel', 'Management', 'JavaScript', 'React', 'Marketing', 'SEO', 'Recruitment', 'Training', 'Leadership', 'Communication']
}

{
  // T-039: Find the total salary of all employees working in the "Engineering" department.
  const findDept = departments.find((dept) => dept.name === "Engineering");
  console.log(findDept);
  const filterEmpDept = employees.filter(
    (employee) => employee.departmentId === findDept.id
  );
  console.log(filterEmpDept);
  const totalEngDeptSalary = filterEmpDept.reduce((intialValue, empSlary) => {
    return intialValue + empSlary.salary;
  }, 0);
  console.log(totalEngDeptSalary); // 19800
}
{
  // T-040: Check if there is any department where all employees earn more than 5000.
  const marketingDept = departments.find((dept) => dept.name === "Marketing");
  console.log(marketingDept);
  const filterMakDept = employees
    .filter((employee) => employee.departmentId === marketingDept.id)
    .every((employee) => employee.salary > 5000);
  console.log(filterMakDept);
}


