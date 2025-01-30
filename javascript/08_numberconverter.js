// Random Number Generator
function generateRandomNumber(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Random Number: ${randomNum}`);
}

// String Formatter
function formatString(inputStr) {
    const trimmedStr = inputStr.trim();
    const upperStr = trimmedStr.toUpperCase();
    const firstChar = trimmedStr.charAt(0);
    console.log(`Uppercase: ${upperStr}, First Character: ${firstChar}`);
}

// Math Operations
function performMathOperations(num1, num2) {
    const roundedNum1 = Math.round(num1);
    const powerResult = Math.pow(num1, num2);
    const minNum = Math.min(num1, num2);
    const maxNum = Math.max(num1, num2);
    const sqrtNum1 = Math.sqrt(num1);

    console.log(`
        Rounded First Number: ${roundedNum1}
        Power of First Number ^ Second Number: ${powerResult}
        Min of Numbers: ${minNum}
        Max of Numbers: ${maxNum}
        Square Root of First Number: ${sqrtNum1}
    `);
}

// Type Conversion
function convertType(num) {
    const stringConversion = String(num);
    const booleanConversion = Boolean(num);

    console.log(`
        Number to String: ${stringConversion}
        Number to Boolean (non-zero): ${booleanConversion}
    `);
}

// Example Usage

// Random Number Generator
generateRandomNumber(1, 100); // Generates a random number between 1 and 100

// String Formatter
formatString('  hello world  '); // Converts string to uppercase and trims spaces

// Math Operations
performMathOperations(10, 2); // Performs operations on 10 and 2

// Type Conversion
convertType(42); // Converts number 42 to string and boolean

