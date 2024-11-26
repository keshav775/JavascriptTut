/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not
4. WAP to check whether a number is prime number or not
 */
//1
// var start = parseInt(prompt("Enter the starting value: "))
// var stop = parseInt(prompt("Enter the ending value: "))
// var sume = 0
// var sumo = 0
// if (start < stop) {
//     for (var i = start; i <= stop; i++) {
//         if (i % 2 === 0)
//             sume = sume + i
//         else
//             sumo = sumo + i
//     }
//     document.write(`Sum of Even numbers between range ${start} to ${stop} are: ${sume}<br>`)
//     document.write(`Sum of Odd numbers between range ${start} to ${stop} are: ${sumo}`)
// }
// else {
//     document.write("Starting value must be less than ending value")
// }

//2
// var num = Number(prompt("Enter a number: "))
// var fact = 1
// for (var i = 1; i <= num; i++)
//     fact = fact * i
// document.write(`Factorial of ${num} is ${fact}`)

//3 perfect no : 6-> 1,2,3(divisors) && 1+2+3=6
// var num = Number(prompt("Enter a number: "))
// var sum = 0
// for (var i = 0; i <= num / 2; i++) {
//     if (num % i === 0) {
//         sum = sum + i
//     }
// }
// if (num === sum)
//     document.write(`${num} is a perfect number`)
// else
//     document.write(`${num} is not a perfect number`)

//4
var num = Number(prompt("Enter a number: "))
var temp = 0
if (num == 1)
    document.write(`${num} is a prime number`)
else {
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            temp++
            break
        }
    }
}
if (!temp)
    document.write(`${num} is a prime number`)
else
    document.write(`${num} is not a prime number`)