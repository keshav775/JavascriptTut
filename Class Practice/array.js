//1St Type to create an Array by Using String Literal

// var a = [10, 20, 30, 40, 50, 60, "ducat", "Kn", true, false, 70, 80, 90, 100]
// console.log(a)
// console.log(a[8])
// console.log(a[8])

//2nd Type to create an array using empty array
// var a = []
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40, 50, 60, 70, 80, 90, 100)
// console.log(a)

//Important question of array

// var a = [10, 20, 30]
// a[100] = 1000
// console.log(a.length)
// console.log(a)

//3rd Type to Create an Array Using Array Constructor

// var a = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
// console.log(a)

// var a = Array(10) //size of array is 10
// console.log(a.length)
// console.log(a)

//4th Type using Array Constructor
// var a = Array(10)
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40)
// a.push(50, 60, 70, 80, 90, 100)
// console.log(a)

//Array using loop(Traverion)

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//accessing using for loop
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

//accessing using while loop
// let i = 0
// while (i < a.length) {
//     console.log(a[i])
//     i++
// }

//accessing using do-while loop
// let i = 0
// do {
//     console.log(a[i])
//     i++
// } while (i < a.length)

//for-in loop
// for (let i in a) {
//     console.log(i) //Print index
//     console.log(a[i])
// } 

// for of loop 
// for (let i of a) {
//     console.log(i) //Print element
// }

//---------------------------Array Functions---------------------------------

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log(a)

// console.log("Updated length", a.push(110))
// console.log(a)

// console.log("Updated length", a.push(120, 130, 140, 150))
// console.log(a)

// console.log("Updated length", a.unshift(5))
// console.log(a)

// console.log("Updated length", a.unshift(1, 2, 3, 4))
// console.log(a)

// console.log("Deleted Array Element is: ", a.pop())
// console.log("Deleted Array Element is: ", a.pop())
// console.log("Deleted Array Element is: ", a.pop())
// console.log("Deleted Array Element is: ", a.pop())
// console.log("Deleted Array Element is: ", a.pop())
// console.log(a)

// console.log("Deleted Array Element is: ", a.shift())
// console.log("Deleted Array Element is: ", a.shift())
// console.log("Deleted Array Element is: ", a.shift())
// console.log("Deleted Array Element is: ", a.shift())
// console.log("Deleted Array Element is: ", a.shift())
// console.log(a)

// console.log("Deleted Elements from Array are: ", a.splice(3, 5))  //3 to 5
// console.log(a)

// console.log("Deleted Elements from Array are: ", a.splice(3, 0, 33, 34, 35, 36, 37)) //add at 3rd index without deletion
// console.log(a)

// delete a[2]
// delete a[5]
// delete a[8]
// console.log(a)

//slice()
// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]
// console.log(a)
// console.log(a.slice(5, 15)) //5 to 14th index elements are printed
// console.log(a.slice(15)) //return element at 15th index
// console.log(15) //return element at 15th index
// console.log(-15) //return last 15 elements

//concat()
// var a = [1, 2, 3, 4, 5]
// var b = [10, 20, 30, 40, 50]
// var c = [100, 200, 300, 400, 500]
// var d = ["Nitin", "Amit", "Sumit", "Tarun"]
// var e = [true, false, false, true]
// var f = a.concat(b, c, d, e)
// console.log(f)

//enteries
var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// for (let i of a.entries) {
//     console.log(i)
// }

// console.log(a.includes(50))
// console.log(a.includes(500))

// console.log(a.indexOf(50))
// console.log(a.indexOf(500))  //-1 output

// console.log(a.lastIndexOf(50))
// console.log(a.lastIndexOf(500))  //-1