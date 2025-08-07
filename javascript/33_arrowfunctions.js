const sayhello = () => {
    console.log("heyy")
};

sayhello();

const add = (a,b) =>{
    return a + b;
}
//Arguments 
const addNumbers = (...nums) => {
    console.log(nums);
};
addNumbers(10, 22, 33, 44, 5); // argument keyword can be used for only normal func

// hoisting
sayhey();
function sayhey(){
    console.log("Hey there"); // available for only normal function
}


