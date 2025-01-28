//               stack and heap 

// stack stores all the primitives datatypes in it 

// heap stores all the non primitives datatypes in it
// heap is dynamic memory allocation
 
//                           Example of heap
let user1={
    name: "John",
    age: 30
}

let user2=user1

console.log(user1===user2) // true as user 1 and user 2 points the same value 

//                   example of stack

let myname="laraib"

let myNameCopy=myname

myNameCopy="user"

console.log(myname) 
console.log(myNameCopy) // laraib, user  as myNameCopy changes the original value  of myname  in the stack
