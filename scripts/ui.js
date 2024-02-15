import { saveExpenses, getExpenses } from '../scripts/storage.js';
// Function to display all expenses on the UI.
export function displayExpenses() {
    // Retrieve the current list of expenses from local storage.
    const expenses = getExpenses();
    // Get the expense list HTML element to display each expense.
    const expenseList = document.getElementById('expenseList');
    // Clear the current list to avoid duplication when adding new items.
    expenseList.innerHTML = '';
    // Iterate over each expense object in the expenses array.
    expenses.forEach((expense, index) => {
        // Create a new list item element for each expense.
        const expenseItem = document.createElement('li');
        // Set the inner HTML of the list item to include the expense name, amount, and a delete button.
        // The delete button includes a data-index attribute to identify which expense to delete.
        expenseItem.innerHTML = `${expense.name}: $${expense.amount} <span class="delete-btn" data-index="${index}">X</span>`;
        // Append the newly created list item to the expense list in the UI.
        expenseList.appendChild(expenseItem);
    });
    // Update the total expenses displayed on the UI.
    updateTotal();
}

// Function to add a new expense to the list.
export function addExpense(name, amount) {
    // Retrieve the current list of expenses from local storage.
    const expenses = getExpenses();
    // Add the new expense to the array with the provided name and amount.
    expenses.push({ name, amount });
    // Save the updated expenses array back to local storage.
    saveExpenses(expenses);
    // Refresh the displayed list of expenses on the UI.
    displayExpenses();
}

// Function to delete an expense from the list based on its index.
export function deleteExpense(index) {
    // Retrieve the current list of expenses from local storage.
    let expenses = getExpenses();
    // Remove the expense at the specified index from the array.
    expenses.splice(index, 1);
    // Save the updated expenses array back to local storage.
    saveExpenses(expenses);
    // Refresh the displayed list of expenses on the UI.
    displayExpenses();
}

// Internal function to update the total expenses displayed on the UI.
function updateTotal() {
    // Retrieve the current list of expenses from local storage.
    const expenses = getExpenses();
    // Calculate the total amount of all expenses.
    // Convert each expense amount to a float and accumulate the total.
    const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
    // Update the total expenses displayed on the UI with the calculated total.
    // Use toFixed(2) to format the total as a currency value.
    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}
