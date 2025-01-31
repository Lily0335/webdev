const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate a random number
function generateRandomNumber() {
    rl.question("Enter minimum value: ", (min) => {
        rl.question("Enter maximum value: ", (max) => {
            min = parseInt(min);
            max = parseInt(max);

            if (isNaN(min) || isNaN(max) || min > max) {
                console.log("Invalid input. Please enter valid numbers.");
            } else {
                console.log(Random Number: ${Math.floor(Math.random() * (max - min + 1)) + min});
            }
            showMenu();
        });
    });
}

// Function to format a string
function formatString() {
    rl.question("Enter a string: ", (inputStr) => {
        const trimmedStr = inputStr.trim();
        console.log(Uppercase: ${trimmedStr.toUpperCase()});
        console.log(First Character: ${trimmedStr.charAt(0)});
        showMenu();
    });
}

// Function to perform math operations
function performMathOperations() {
    rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ", (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Invalid input. Please enter valid numbers.");
            } else {
                console.log(Rounded: ${Math.round(num1)});
                console.log(Power: ${Math.pow(num1, num2)});
                console.log(Min: ${Math.min(num1, num2)});
                console.log(Max: ${Math.max(num1, num2)});
                console.log(Square Root: ${Math.sqrt(num1)});
            }
            showMenu();
        });
    });
}

// Function for type conversion
function convertType() {
    rl.question("Enter a number: ", (num) => {
        num = parseFloat(num);

        if (isNaN(num)) {
            console.log("Invalid input. Please enter a valid number.");
        } else {
            console.log(To String: "${String(num)}");
            console.log(Truthy/Falsy: ${Boolean(num)});
        }
        showMenu();
    });
}

// Function to display menu
function showMenu() {
    console.log("\n--- Menu ---");
    console.log("1. Generate Random Number");
    console.log("2. Format String");
    console.log("3. Perform Math Operations");
    console.log("4. Convert Type");
    console.log("5. Exit");

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                generateRandomNumber();
                break;
            case "2":
                formatString();
                break;
            case "3":
                performMathOperations();
                break;
            case "4":
                convertType();
                break;
            case "5":
                console.log("Exiting program...");
                rl.close();
                break;
            default:
                console.log("Invalid choice! Please select a valid option.");
                showMenu();
        }
    });
}

// Start program
console.log("\nWelcome to the Number & String Utility");
showMenu();   
