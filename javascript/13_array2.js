 const n2 =[ 9, 8, 6, 2, 3, 6, 2, 3,]


const n3 = ["alias","kiddo","alice"]
 console.log(n1.concat(n2, n3)) // [9, 8, 6, 2, 3, 6, 2, 3, "alias", "kiddo", "alice"] 

 console.log(myArray.includes(3)) // true
//                                 best approach
 const n4 = n3.concat(n2);
 console.log(n4) // [9, 8, 6, 2, 3, "alias", "kiddo", "alice", 6, 2, 3]

 console.log(n4.indexOf(6)) // 6
 console.log(n4.lastIndexOf(6)) // 8
 //                                 best approach
 console.log(n4.indexOf("alias")) // 6

