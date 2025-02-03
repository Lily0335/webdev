 let myArray =  [9,8,6,2,3,4,5]

 console.log(myArray) // [9, 8, 6, 2, 3, 4, 5]

 console.log(myArray.length) // 7
 console.log(myArray[6]) // 5
 console.log(myArray[7]) // undefined

 myArray.push(23)

 console.log(myArray) // [9, 8, 6, 2, 3, 4, 5, 23]

 myArray.pop()

 console.log(myArray) // [9, 8, 6, 2, 3, 4, 5]

 myArray.unshift(11)
 console.log(myArray) // [11, 9, 8, 6, 2, 3, 4, 5]

 myArray.shift()
 console.log(myArray)
 const n1 = myArray
 console.log("A", myArray) 
 console.log(n1.slice(2,5)) // [6, 2, 3]
 console.log("B", myArray) // [9, 8, 6, 2, 3]

 const n2 = myArray.slice(2,5)

 console.log("C", n2) 
