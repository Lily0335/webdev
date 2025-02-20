let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

// Function to get all fruits
function getFruits() {
    return fruits;
}

// Function to add multiple fruits
function addFruits(...newFruits) {
    fruits.push(...newFruits);
}

// Function to remove the last fruit
function removeLastFruit() {
    return fruits.pop();
}

// Function to remove the first fruit
function removeFirstFruit() {
    return fruits.shift();
}

// Function to insert a fruit at a specific index
function insertFruit(index, fruit) {
    fruits.splice(index, 0, fruit);
}

// Function to remove a fruit at a specific index
function removeFruitAt(index) {
    fruits.splice(index, 1);
}

// Function to find a fruit
function findFruit(fruit) {
    return fruits.includes(fruit);
}

// Function to filter fruits by a condition (e.g., names longer than 5 characters)
function filterFruitsByLength(length) {
    return fruits.filter(fruit => fruit.length > length);
}

// Function to sort fruits alphabetically
function sortFruits() {
    fruits.sort();
}

// Function to reverse the fruit array
function reverseFruits() {
    fruits.reverse();
}

// Function to join all fruits into a string
function joinFruits(separator = ", ") {
    return fruits.join(separator);
}

// Testing the functions
console.log("Initial Fruits:", getFruits());

addFruits("Peach", "Strawberry");
console.log("After Adding Fruits:", getFruits());

console.log("Removed Last Fruit:", removeLastFruit());
console.log("After Removing Last Fruit:", getFruits());

console.log("Removed First Fruit:", removeFirstFruit());
console.log("After Removing First Fruit:", getFruits());

insertFruit(2, "Grapes");
console.log("After Inserting 'Grapes' at Index 2:", getFruits());

removeFruitAt(1);
console.log("After Removing Fruit at Index 1:", getFruits());

console.log("Is 'Mango' in the List?", findFruit("Mango"));
console.log("Is 'Pineapple' in the List?", findFruit("Pineapple"));

console.log("Fruits with More than 5 Letters:", filterFruitsByLength(5));

sortFruits();
console.log("After Sorting:", getFruits());

reverseFruits();
console.log("After Reversing:", getFruits());

console.log("Joined Fruits String:", joinFruits(" | "));

