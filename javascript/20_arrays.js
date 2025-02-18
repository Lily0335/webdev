let numbers = [10, 5, 8, 20, 15, 30];

// Function to get all numbers
function getNumbers() {
    return numbers;
}

// Function to add a number to the array
function addNumber(num) {
    numbers.push(num);
}

// Function to remove a number from the array
function removeNumber(num) {
    numbers = numbers.filter(n => n !== num);
}

// Function to find the maximum number in the array
function getMaxNumber() {
    return Math.max(...numbers);
}

// Function to find the minimum number in the array
function getMinNumber() {
    return Math.min(...numbers);
}

// Function to sort the array in ascending order
function sortAscending() {
    numbers.sort((a, b) => a - b);
}

// Function to sort the array in descending order
function sortDescending() {
    numbers.sort((a, b) => b - a);
}

// Function to calculate the sum of all numbers
function getSum() {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to calculate the average of numbers
function getAverage() {
    return numbers.length > 0 ? getSum() / numbers.length : 0;
}

// Testing the functions
console.log("Initial Array:", getNumbers());

addNumber(25);
console.log("After Adding 25:", getNumbers());

removeNumber(10);
console.log("After Removing 10:", getNumbers());

console.log("Maximum Number:", getMaxNumber());
console.log("Minimum Number:", getMinNumber());

sortAscending();
console.log("Sorted in Ascending Order:", getNumbers());

sortDescending();
console.log("Sorted in Descending Order:", getNumbers());

console.log("Sum of Numbers:", getSum());
console.log("Average of Numbers:", getAverage());

