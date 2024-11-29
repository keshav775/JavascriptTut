//function without return value and parameter
// function add() {
//     var a = 50
//     var b = 20
//     var sum = a + b
//     console.log(`sum = ${sum}`)
// }
// function test() {
//     add()
// }
// test()

//function with return value without parameter
// function add() {
//     var a = 50
//     var b = 20
//     var sum = a + b
//     return sum
// }
// function test() {
//     var res = add()
//     console.log(`Sum is: ${res}`)
// }
// test()

//function without return value with parameter
// function add(x, y) {
//     var sum = x + y
//     console.log(`Sum = ${sum}`)
// }
// function test() {
//     var a = 10
//     var b = 20
// }
// test()

//function with return value with parameter
// function add(x, y) {
//     var sum = x + y
//     return sum
// }
// function test() {
//     var a = 10
//     var b = 20
//     var s = add(a, b)
//     console.log(`Sum = ${s}`)
// }
// test()

//Digital sum  program by using Funciton

// No parameter no return type
// function sumDigit() {
//     var num = 12345
//     var sum = 0
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }
//     console.log(`Sum = ${sum}`)
// }
// function test() {
//     sumDigit()
// }
// test()

//Function without parameter with return type
// function sumDigit() {
//     var num = 12345
//     var sum = 0
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }
//     return sum
// }
// function test() {
//     var sum = sumDigit()
//     clg(`Sum = ${sum}`)
// }
// test()

//function without return type with parameter
// function sumDigit(num) {
//     var sum = 0
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }
//     console.log(`sum = ${sum}`)
// }
// function test() {
//     sumDigit(12345)
// }
// test()

// funciton with parameter with return type
// function sumDigit(num) {
//     var sum = 0
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }
//     return sum
// }
// function test() {
//     var sum = sumDigit(12345)
//     console.log(`Sum = ${sum}`)
// }
// test()

//-----------------------DEFAULT PARAMETER--------------------------
// function test(a = 0, b = 0, c = 0) {
//     console.log(`a = ${a} b=${b} and c=${c}`)
// }
// test(10, 20, 30)
// test(10, 20)
// test()

//----------------------FUNCTION RETURNING AN ARRAY----------------
// function test() {
//     // return(10,20,30) //output 30
//     return [10, 20, 30, 40, 50]
// }
// console.log(test())

//---------------------------ANONYMOUS FUNCTION--------------------
// function test() {
//     console.log("In regular function")
// }
// test()

// function add(x, y) {
//     return x + y
// }
// console.log(add(10, 20))

//Anonymous function..........
// var test = function () {
//     console.log("In Anonymous Function")
// }
// test()

// var add = function (x, y) {
//     return x + y
// }
// console.log(add(10, 20))

//---------------ARROW FUNCTION OR FAT ARROW FUNCTION-----------------
// var test = () => {
//     console.log("In fat arrow function")
// }
// test()

// var add = (x, y) => x + y //return is not written in it we can write one line code in this way
// console.log(add(10, 20))

// var add = (x, y) => {
//     return x + y
// }
// console.log(add(10, 20))

//--------SELF INVOLKED FUNCTION OR IMMEDIATELY INVOLKED FUNCTION EXPRESSION(IIFE)---------

//Regular Function
// (function test() {
//     console.log("In regular Self Involked Function")
// })()

// (
//     function test(x, y) {
//         clg(`${x} + ${y} =${x + y}`)
//     }
// )(10, 20)

//Anonymous function
// (function () {
//     console.log("In Anonymous Self Involked Function")
// })()

// (function (x, y) {
//     console.log(`${x}+${y} = ${x + y}`)
// })(10.20)

// console.log((function (x, y) {
//     return (x + y)
// }))

//Fat Arrow Function
// (() =>  console.log("In Fat Arrow Self Involked Function") )()

// ((x, y) => console.log(`${x} + ${y} = ${x + y}`))(10,20)

// console.log((x, y) => x + y)(10, 20)

//------------------HIGHER ORDER FUNCTION & CALLBACK FUNCTION-----------------

//Regular Function
// function higherOrder(fun()) {
//     console.log("In high order function")
//     fun()
//     fun()
//     fun()
// }

//Anonymous function
// higherOrder(function callback() {
//     console.log("In callback Function")
// })

//Fat Arrow Function
// higherOrder(() => console.log("In Callback function"))

//Other Examples of Callback Functions....

// function callback(){
//     console.log("In callback function")
// }

// var callback = function () {
//     console.log("In callback function")
// }
// callback()

// var callback = () => console.log("In callback function")
// callback()

//-----------------------STORAGE CLASS--------------------------------------
// function test() {
//     if (true) {
//         a = 10                      //global scope
//         var b = 20                 //function scope
//         let c = 30                  //block scope
//         const d = 42                //block scope
//         console.log(`In if block of test function a = ${a} , b = ${b}, c=${c} & d=${d}`)
//     }
//     console.log(`Outside of if block of test function a = ${a} & b = ${b} `)
// }
// test()
// console.log(`In main global scope a = ${a}`)
// function example() {
//     console.log(`In example function a = ${a}`)
// }
// example()

//other examples......
// function test() {
//     var a = 10
//     {
//         var a = 20
//         console.log(`Inside block a =${a}`)
//     }
//     console.log(`Outside block a=${a}`)
// }
// test()

// function test() {
//     var a = 10
//     {
//         var a = 20
//         console.log(`Inside block a =${a}`)
//     }
//     console.log(`Outside block = ${a}`)
// }
// test()

// function test() {
//     let a = 10
//     {
//         var a = 20
//         console.log(`Inside block a =${a}`)
//     }
//     console.log(`Outside block = ${a}`)
// }
// test()

// function test() {
//     const a = 10
//     a = 20
//     console.log(`Outside block a = ${a}`)
// }
// test()

