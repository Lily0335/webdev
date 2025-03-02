let tasks = [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Finish homework", completed: true },
    { id: 3, title: "Go for a run", completed: false }
];

// Function to get all tasks
function getTasks() {
    return tasks;
}

// Function to add a new task
function addTask(id, title) {
    tasks.push({ id, title, completed: false });
}

// Function to mark a task as completed
function completeTask(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: true } : task
    );
}

// Function to remove a task by ID
function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Function to get only completed tasks
function getCompletedTasks() {
    return tasks.filter(task => task.completed);
}

// Testing the functions
console.log("Initial Tasks:", getTasks());

addTask(4, "Read a book");
console.log("After Adding Task:", getTasks());

completeTask(3);
console.log("After Completing Task ID 3:", getTasks());

removeTask(1);
console.log("After Removing Task ID 1:", getTasks());

console.log("Completed Tasks:", getCompletedTasks());

