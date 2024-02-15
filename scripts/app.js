import { displayExpenses, addExpense, deleteExpense } from '../scripts/ui.js';
const name = document.getElementById('name');
const amount = document.getElementById('amount');
// Wait for the entire DOM content to be fully loaded before running the script.
// This ensures all HTML elements are available for manipulation.
document.addEventListener('DOMContentLoaded', () => {
    // Add a click event listener to the 'Add Expense' button.
    document.getElementById('addExpense').addEventListener('click', () => {
        // Retrieve the user input values from the expense name and amount fields.
      name.value;
   amount.value;
        
        // Check if both name and amount inputs are not empty.
        if (name && amount) {
            // Call the addExpense function, passing in the name and amount, to add the expense to the list.
            addExpense(name.value, amount.value);
            // Clear the input fields for name and amount after adding the expense,
            // making it ready for the next entry.
            name.value = '';
            amount.value = '';
        }
    });

    // Add a click event listener to the entire expense list container.
    // This uses event delegation to handle clicks on dynamically added delete buttons.
    document.getElementById('expenseList').addEventListener('click', (e) => {
        // Check if the clicked element is a delete button.
        if (e.target.classList.contains('delete-btn')) {
            // Retrieve the data-index attribute of the clicked delete button,
            // which holds the index of the expense in the list.
            const index = e.target.getAttribute('data-index');
            
            // Call the deleteExpense function with the index to remove the expense from the list.
            deleteExpense(index);
        }
    });

    // Initially display all stored expenses on the page by calling the displayExpenses function.
    // This function reads the expenses from local storage and updates the UI accordingly.
    displayExpenses();
});