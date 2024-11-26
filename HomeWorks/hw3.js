/*
1. WAP TO Check wether two numbers are equal or not.
2. WAP to check wether a person can vote or not.
3. WAP to check wether a number is perfect square or not.
*/
//1
// var num1 = Number(prompt("Enter first Number: "))
// var num2 = Number(prompt("Enter second Number: "))
// var result = num1 > num2 ? num1 : num2
// document.write(`${result} is greater`)

//2
// var age = parseInt(prompt("Enter your age: "))
// age >= 18 ? document.write("You can vote") : document.write("You can't vote")

//3
var num = Number(prompt("Enter a Number: "))
var n = parseInt(Math.sqrt(num))
n * n == num ? document.write(num + " is a perfect square") : document.write(num + " is  Not a perfect square")