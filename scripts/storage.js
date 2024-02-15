// Export a function named saveExpenses, which takes an array of expense objects as its argument.
export function saveExpenses(expenses) {
    // Use localStorage's setItem method to store the expenses array.
    // Since localStorage can only store strings, we convert the array to a string using JSON.stringify.
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Export a function named getExpenses that retrieves the stored expenses from localStorage.
export function getExpenses() {
    // Use localStorage's getItem method to fetch the stored expenses string by its key ('expenses').
    const expenses = localStorage.getItem('expenses');
    // Check if any expenses were retrieved. If so, convert the string back to an array using JSON.parse.
    // If no expenses are found (null is returned), default to returning an empty array.
    return expenses ? JSON.parse(expenses) : [];
}
