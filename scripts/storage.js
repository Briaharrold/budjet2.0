export function saveExpenses(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

export function getExpenses() {
    const expenses = localStorage.getItem('expenses');
    return expenses ? JSON.parse(expenses) : [];
}
