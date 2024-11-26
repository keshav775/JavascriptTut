// if statement

// if (true) {
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

// if (!true) {
//     console.log("Hello world1")
//     console.log("Hello world2")
//     console.log("Hello world3")
// }
// console.log("Hello world4")
// console.log("Hello world5")
// console.log("Hello world6")

// if (!true)
//     console.log("Hello world1")
// console.log("Hello world2")
// console.log("Hello world3")
// console.log("Hello world4")

//if-else statement
// if (true) {
//     console.log("Hello world1")
//     console.log("Hello world2")
//     console.log("Hello world3")
// }
// else {
//     console.log("Hello world4")
//     console.log("Hello world5")
//     console.log("Hello world6")
// }

// if (!true) {
//     console.log("Hello world1")
//     console.log("Hello world2")
// }
// else {
//     console.log("Hello world3")
//     console.log("Hello world4")
// }

//Program to check wether a number is even or odd
// var num = Number(prompt("Enter a number: "))
// if (num % 2 == 0) {
//     document.write(`${num} is even`)
// }
// else {
//     document.write(`${num} is odd`)
// }

//Nested if-else
//Program to check greater among three numbers...

// var a = Number(prompt("Enter the first number: "))
// var b = Number(prompt("Enter the second number: "))
// var c = Number(prompt("Enter the third number: "))
// if (a < b) {
//     if (a < c) {
//         document.write(`${a} is smallest`)
//     }
//     else {
//         document.write(`${c} is smallest`)
//     }
// }
// else {
//     if (b < c)
//         document.write(`${b} is smallest`)
//     else
//         document.write(`${c} is smallest`)
// }

//Program to check wether a number is divisible by 2&3
var num = Number(prompt("Enter the number: "))
if (num % 2 == 0) {
    if (num % 3 == 0)
        document.write(`${num} is divisble by 2 & 3`)
    else
        document.write(`${num} is divisble by 2 but not 3`)
} else {
    if (num % 3 == 0)
        document.write(`${num} is divisble by 3 but not 2`)
    else
        document.write(`${num} is not divisible by both 2 and 3`)
}
