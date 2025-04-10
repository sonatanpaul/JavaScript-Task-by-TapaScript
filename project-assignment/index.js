function createExpenseTracker(username, initialBudget) {
  //   console.log(initialBudget, username);
  let user = {
    name: username,
    budget: initialBudget,
  };

  let expenses = [];
  let id = 1;
  console.log(expenses);

  return {
    addExpense(amount, category, description) {
      const expense = {
        id: id++,
        amount,
        category,
        description,
      };
      expenses.push(expense);
    },
    removeExpense(id) {
      const removeitem = expenses.filter((item) => item.id !== id);
      console.log(`Expense id ${id} has been delete sucessfuly`);
    },
    updateExpense(newId, newAmount, newCategory, newDescription) {
      const expense = expenses.find((exp) => exp.id === newId);
      if (expense) {
        expense.amount = newAmount;
        expense.category = newCategory;
        expense.description = newDescription;
      }
      console.log("Update Sucessfuly");
      //   console.log(expenses); //
    },
    totalExpense() {
      const totalExpense = expenses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      }, 0);
      return totalExpense;
    },
    expenseByCategory() {
      const categoryExpense = expenses.filter(
        (expense) => expense.category === "Shopping"
      );
      return categoryExpense;
    },
    highestExpense() {
      const hightExpense = expenses.reduce(
        (accumulator, currentValue) =>
          Math.max(accumulator, currentValue.amount),
        0
      );
      return hightExpense;
    },
    lowestExpense() {
      const lowestExpense = expenses.reduce((accumulator, currentValue) => {
        return accumulator < currentValue.amount
          ? accumulator
          : currentValue.amount;
      });
      return lowestExpense; // 20
    },
    getUser() {
      return user;
    },
    allExpenses() {
      return expenses;
    },
    updateUser(newName, newBudget) {
      user.name = newName;
      user.budget = newBudget;
      console.log(user); //
    },
  };
}

const expenseTracker = createExpenseTracker("Tapas", 5000);

// Adding Data
expenseTracker.addExpense(200, "Food", "Lunch"); // adding
expenseTracker.addExpense(280, "Food", "Lunch"); // adding
expenseTracker.addExpense(500, "Shopping", "New Shoes"); // adding
expenseTracker.addExpense(700, "Shopping", "New Shoes"); // adding

// Removing Data
expenseTracker.removeExpense(1);
expenseTracker.removeExpense(2);

// Updating Expense
expenseTracker.updateExpense(1, 250, "Food", "Updated Lunch"); ///

//Getting total expenses done by the user
console.log(expenseTracker.totalExpense()); // 450

// Getting expense by category
console.log(expenseTracker.expenseByCategory()); // (2) [{…}, {…}]

// Get the Highest Expense
console.log(expenseTracker.highestExpense());

// Get the Lowest Expense
console.log(expenseTracker.lowestExpense());

// Get the user info
console.log(expenseTracker.getUser()); //

// Show all the expenses
console.log(expenseTracker.allExpenses());

// Update User data
console.log(expenseTracker.updateUser("Sonatan", 8000));
