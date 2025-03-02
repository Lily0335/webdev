// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Function to check if a number is even or odd
function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Function to generate a random number between a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Testing the functions
console.log("Area of rectangle:", calculateArea(10, 5)); // 50
console.log("Number 7 is:", isEven(7)); // Odd
console.log("Reversed string:", reverseString("JavaScript")); // "tpircSavaJ"
console.log("Random number (1-100):", getRandomNumber(1, 100)); 
console.log("30°C in Fahrenheit:", celsiusToFahrenheit(30)); // 86°F
