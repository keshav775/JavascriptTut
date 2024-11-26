/*
1. WAP to Check wether two numbers are equal or not.
2. WAP to check wether a person can vote or not.
3. WAP to check wether a number is perfect square or not.
4. WAP to check wether a year is leap or not.
        solve by using if-else
*/
//1
// var num1 = Number(prompt("Enter first number: "))
// var num2 = Number(prompt("Enter second number: "))
// if (num1 == num2) {
//     document.write(`${num1} = ${num2}`)
// }
// else {
//     if (num1 > num2)
//         document.write(`${num1} > ${num2}`)
//     else
//         document.write(`${num1} < ${num2}`)
// }

//2
// var age = Number(prompt("Enter the age of voter: "))
// if (age >= 18) {
//     document.write("You can vote")
// }
// else {
//     document.write("You can't vote")
// }

//3
// var num = Number(prompt("Enter a number: "))
// var n = num ** 0.5
// if (n * n == num)
//     document.write(`${num} is a perfect square number`)
// else
//     document.write(`${num} is not a perfect square number`)

//4
var year = parseInt(prompt("Enter a year: "))
if (year % 4 == 0 || year % 400 == 0 && year % 100 != 0)
    document.write(`${year} is a leap year`)
else
    document.write(`${year} is not a leap year`)