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
// var num = Number(prompt("Enter the number: "))
// if (num % 2 == 0) {
//     if (num % 3 == 0)
//         document.write(`${num} is divisble by 2 & 3`)
//     else
//         document.write(`${num} is divisble by 2 but not 3`)
// } else {
//     if (num % 3 == 0)
//         document.write(`${num} is divisble by 3 but not 2`)
//     else
//         document.write(`${num} is not divisible by both 2 and 3`)
// }

//------------------------------SWITCH CASE--------------------------------------------------------
// Syntax
// switch(expression){
//     case constant1:
//         ...........code.......
//         ...........code.......
//         ...........code.......
//    break
//     case constant2:
//         ............code.........
//         ............code.........
//         ............code.........
//     default
//        ...........code.......
//        ...........code.......
// }

//programt to print day of week by using Switch Case
// var day = Number(prompt("Enter Day Number"))
// switch (day) {
//     case 1:
//         document.write("Monday")
//         break
//     case 2:
//         document.write("Tuesday")
//         break
//     case 3:
//         document.write("Wednesday")
//         break
//     case 4:
//         document.write("Thursday")
//         break
//     case 5:
//         document.write("Friday")
//         break
//     case 6:
//         document.write("Saturday")
//         break
//     case 7:
//         document.write("Sunday")
//         break
//     default:
//         document.write("Invalid choice...!")
// }

//Program to check whether an entered character is a lowercase vowel, lower case consonent, upper case vowel, upper case consonant,
// digit, space or any other special character. 
// var ch = prompt("Enter the Single Character: ")
// if (ch.length != 1)
//     document.write(`${ch} is not a valid character <br> Enter only one character...`)
// else if (ch >= 'a' && ch <= 'z') {
//     if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
//         document.write(`${ch} is lower case Vowel`)
//     else
//         document.write(`${ch} is lower case Consonent`)
// }
// else if (ch >= 'A' && ch <= 'Z') {
//     if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
//         document.write(`${ch} is upper case Vowel`)
//     else
//         document.write(`${ch} is upper case Consonent`)
// }
// else if (ch >= '0' && ch <= '9') {
//     document.write(`${ch} is a digit`)
// }
// else if (ch == ' ') {
//     document.write(`${ch} is a space`)
// }
// else {
//     document.write(`${ch} is a special character`)
// }

//---------------------------------------LOOPS---------------------------------------------------------------------
//.......................................FOR LOOP...................................
// for (var i = 1; i <= 10; i++) {
//     console.log("Hello world")
// }

// for (var i = 10; i >= 1; i--)
//     console.log(`Hello World ${i}`)

//print table of a number
// var num = Number(prompt("Enter a number: "))
// for (var i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i} <br>`)
// }

//Calculate sum in a particular range......
// var start = Number(prompt("Enter the Range \n Start from: "))
// var end = Number(prompt("To: "))
// var sum = 0
// for (var i = start; i <= end; i++) {
//     sum = sum + i
// }
// document.write(`Sum of Numbers from ${start} to ${end} is: ${sum}`)

//---------------------------------LOGICAL QUESTIONS FOR INTERVIEW---------------------------------
// for (var i = 1; i <= 10; i++) {
//     console.log(`Hello world ${i}`)
// }

// for (i = 1; i <= 10; ++i) {
//     console.log("Hello World")
// }

// for (var i = 10; i >= 1; i--) {
//     console.log("Hello world")
// }

// for (var i = 1; i <= 10; i = ++i) {
//     console.log(`Hello world ${i}`)
// }
/*  output
Hello world 1
Hello world 2
Hello world 3
Hello world 4
Hello world 5
Hello world 6
Hello world 7
Hello world 8
Hello world 9
Hello world 10
*/

// for (var i = 1; i <= 10; i = i++) {
//     console.log(`Hello World ${i}`)
// }
//output -- Infinite times Hello World 1

// for (var i = 1; i <= 10; i++); {
//     console.log(`Hello World ${i}`)
// }
// Output - Hello World 11(Control not enters into loop and loop is till 11 times then it inters into Hello world ${i})

// for (let i = 1; i <= 10; i++); {
//     console.log(`Hello World ${i}`)
// } output -> ReferenceError: i is not defined(due to let keyword)

// var i = 1;
// for (; i <= 10;) {
//     console.log(`Hello World ${i}`)
//     i++
// } output - Hello World 1 to 10 times

// var i = 1;
// for (; ;) {
//     if (i > 10)
//         break
//     console.log(`Hello World ${i}`)
//     i++
// } same output

// ------------------------------------------WHILE LOOP------------------------------------------
// var i = 1
// while (i <= 10) {
//     console.log(`Hello World ${i}`)
//     i++
// }

//Digital Sum Program
// var num = Number(prompt("Enter a Number: "))
// var sum = 0
// while (num != 0) {
//     let r = num % 10
//     sum = sum + r
//     num = parseInt(num / 10)
// }
// document.write(`sum= ${num}`)

//Program of Fabbonacci Series
// var num = Number(prompt("Enter the last term range of Fabonacci series: "))
// var a = 0
// var b = 1
// var sum = a + b
// document.write(`${a} ${b}`)
// while (sum <= num) {
//     document.write(`${sum}`)
//     a = b
//     b = sum
//     sum = a + b
// }

//Program To Reverse a number
// var num = Number(prompt("Enter the Number: "))
// var rev = 0
// while (num != 0) {
//     let r = num * 10
//     rev = rev * 10 + d
//     num = Math.floor(num / 10)
// }
// document.write(`Reverse Number = ${rev}`)

//------------------------DO-WHILE LOOP-----------------------------------------
//Program of Calculator using do-while loop
// do {
//     var a = Number(prompt("Enter First Number: "))
//     var b = Number(prompt("Enter Second Number: "))
//     var ch = prompt("Press + for addition \n Press - for Substraction \n Press * for Multiplication \n Press / for Division \n Press * % for Remainder \n Press ** for power \n Enter your choice:  ")
//     switch (ch) {
//         case '+':
//             alert(`${a} + ${b} =${a + b}`)
//             break
//         case '-':
//             alert(`${a} - ${b} =${a - b}`)
//             break
//         case '*':
//             alert(`${a} * ${b} =${a * b}`)
//             break
//         case '/':
//             alert(`${a} / ${b} =${a / b}`)
//             break
//         case '%':
//             alert(`${a} % ${b} =${a % b}`)
//             break
//         case '**':
//             alert(`${a} ** ${b} =${a ** b}`)
//             break
//         default:
//             alert("Invalid Choice!")
//             break
//     }
//     ch = prompt("Press n to Exit \n Press any Key to continue...")
// } while (ch != n)

//Program of Magical Number
// var num = Number(prompt("Enter a number: "))
// var sum = 0
// var n = num
// while (num != 0) {
//     let r = num % 10
//     sum = sum + r
//     num = parseInt(num / 10)
// }
// num = sum
// let rev = 0
// while (num != 0) {
//     let r = num % 10
//     rev = rev * 10 + r
//     num = parseInt(num / 10)
// }
// if (sum * rev == n) {
//     document.write(`${n} is a Magical Number`)
// }
// else
//     document.write(`${n} is not a Magical Number`)

//Prime Number logic.....Fast
// var num = Number(prompt("Enter the Number: "))
// var flag = false
// for (let i = 2; i <= num ** 0.5; i++) {
//     if (num % i == 0) {
//         flag = true
//         break
//     }
// }
// if (flag == false && num > 2)
//     document.write(`${num} is a Prime Number`)
// else
//     document.write(`${num} is not  a Prime Number`)

//Armstrong Number.......
// var num = Number(prompt("Enter the Number: "))
// var n = num
// var sum = 0
// while (num != 0) {
//     let r = num % 10
//     sum = sum + r ** 3
//     num = parseInt(num / 10)
// }
// if (n == sum)
//     document.write(`${n} is an Armstrong Number`)
// else
//     document.write(`${n} is not an Armstrong Number`)

//Armstrong number new logic........
// var num = Number(prompt("Enter the Number: "))
// var n = num
// var d = 0
// var sum = 0
// while (num != 0) {
//     d++ //How many digits in a no.
//     num = parseInt(num / 10)
// }
// num = n
// while (num != 0) {
//     let r = num % 10
//     sum = sum + r ** d
//     num = parseInt(num / 10)
// }
// if (n == sum)
//     document.write(`${n} is an Armstrong Number`)
// else
//     document.write(`${n} is not an Armstrong Number`)

//---------------------------------NESTED LOOPS---------------------------------

//Program to print table from 1 to 20
// for (let num = 1; num <= 20; num++) {
//     document.write(`Table of ${num} is: <br><br>`)
//     for (let i = 1; i <= 10; i++)
//         document.write(`${num} * ${i} =${num * i} <br>`)
// }

//Program to count and print Prime numbers in a given range
// var start = Number(prompt("Enter the Range \n Start: "))
// var end = Number(prompt("To: "))
// var count = 0
// for (let num = start; num <= end; num++) {
//     let flag = false
//     for (let i = 2; i <= num ** 0.5; i++) {
//         if (num % i == 0) {
//             flag = true
//             break
//         }
//     }
//     if (flag == false && num >= 2) {
//         count++
//         document.write(`${num}`)
//     }
// }
// document.write(`<br> Total Prime numbers from ${start} to ${end} = ${count}`)

// //Program to print all Magical Numbers from 1 to 2000
// for (let i = 1; i <= 2000; i++) {
//     let sum = 0
//     let num = i
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }
//     let rev = 0
//     num = sum
//     while (num != 0) {
//         let r = num % 10
//         rev = rev * 10 + d
//         num = parseInt(num / 10)
//     }
//     if (num * rev == i)
//         console.log(i)
// }

//Now Solve and See all Pattern logics............