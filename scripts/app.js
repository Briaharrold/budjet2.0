import { displayExpenses, addExpense, deleteExpense } from '../scripts/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addExpense').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        if (name && amount) {
            addExpense(name, amount);
            document.getElementById('name').value = '';
            document.getElementById('amount').value = '';
        }
    });

    document.getElementById('expenseList').addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            deleteExpense(index);
        }
    });

    displayExpenses();
});
