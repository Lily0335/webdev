
const mysym = Symbol("key1");

const objects ={
    name: "laraib",
    [mysym]: "mykey2",
    age: "19",
    country: "Pakistan",
    city: "Karachi",
    hobbies: ["reading", "painting", "traveling"],
    
}

console.log(objects.name);

console.log(objects["name"]);

console.log( objects[mysym]);
console.log(objects);
