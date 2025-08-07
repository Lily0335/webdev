const sayhello = () => {
    console.log("heyy")
};

sayhello();

const add = (a,b) =>{
    return a + b;
}

const addNumbers = (...nums) => {
    console.log(nums);
};
addNumbers(10, 22, 33, 44, 5);
