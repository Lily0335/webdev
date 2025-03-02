let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 }
];

// Function to get all users
function getUsers() {
    return users;
}

// Function to add a new user
function addUser(id, name, age) {
    users.push({ id, name, age });
}

// Function to remove a user by ID
function removeUser(id) {
    users = users.filter(user => user.id !== id);
}

// Function to update a user's details
function updateUser(id, newName, newAge) {
    users = users.map(user => 
        user.id === id ? { ...user, name: newName, age: newAge } : user
    );
}

// Testing the functions
console.log("Initial Users:", getUsers());

addUser(4, "David", 28);
console.log("After Adding User:", getUsers());

removeUser(2);
console.log("After Removing User with ID 2:", getUsers());

updateUser(3, "Charlie Brown", 23);
console.log("After Updating User with ID 3:", getUsers());
