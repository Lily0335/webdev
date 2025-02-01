const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const ask = (q) => new Promise((res) => rl.question(q, (a) => res(a.trim())));

async function convertTemperature() {
    let temp = parseFloat(await ask("Enter temperature: "));
    let unit = (await ask("Convert to (C/F): ")).toUpperCase();
    let result = unit === "C" ? (temp - 32) * 5/9 : (temp * 9/5) + 32;
    console.log(`Converted: ${result.toFixed(2)}°${unit}`);
    showMenu();
}

async function convertLength() {
    let meters = parseFloat(await ask("Enter meters: "));
    console.log(`Feet: ${(meters * 3.281).toFixed(2)}, Miles: ${(meters / 1609).toFixed(2)}`);
    showMenu();
}

async function showMenu() {
    console.log("\n1. Temperature  2. Length  3. Exit");
    let choice = await ask("Enter choice: ");
    if (choice === "1") convertTemperature();
    else if (choice === "2") convertLength();
    else rl.close();
}

console.log("\nSimple Unit Converter");
showMenu();
