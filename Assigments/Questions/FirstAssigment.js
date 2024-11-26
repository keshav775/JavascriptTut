/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not
4. WAP to check whether a number is prime number or not

while Loop Questions:
1. WAP to calculate sum of even and odd digits of a specific number
2. WAP to count even and odd digits in a number
3. WAP to reverse a number
4. WAP to check whether a number is NEON number or not
    (1,9)
5. WAP to check whether a number is Armstrong number or not
    (1,153,370,371,407)
6. WAP to check whether a number is Palindrome Number or not
    (121,1234321)
7. WAP to check whether a number is Magical Number or not
    (81,1458,1729)

1. WAP to print  all perfect numbers(6,28,496,8128)
2. WAP to print and count all palindrome numbers in a range
3. WAP to print and count all armstrong numbers(153,370,371,407)
4. WAP to print all magical Numbers (81,1458,1729)
5. WAP to count and print all prime numbers in a range

 */

// 1. WAP to print sum of Even and Odd Numbers in specific Range
// function evenOddinSpecificRange() {
//     var start = parseInt(prompt("Enter the starting value: "))
//     var stop = parseInt(prompt("Enter the ending value: "))
//     var sume = 0
//     var sumo = 0
//     if (start < stop) {
//         for (var i = start; i <= stop; i++) {
//             if (i % 2 === 0)
//                 sume = sume + i
//             else
//                 sumo = sumo + i
//         }
//         document.write(`Sum of Even numbers between range ${start} to ${stop} are: ${sume}<br>`)
//         document.write(`Sum of Odd numbers between range ${start} to ${stop} are: ${sumo}`)
//     }
//     else {
//         document.write("Starting value must be less than ending value")
//     }
// }
// evenOddinSpecificRange()


//2.Program to print factorial of a number

// function isFactorial(num) {
//     var fact = 1
//     for (var i = 1; i <= num; i++)
//         fact = fact * i
//     document.write(`Factorial of ${num} is ${fact}`)
// }
// var num = Number(prompt("Enter a number: "))
// isFactorial(num)

// 3. WAP to check whether a number is perfect number or not

// function isPerfect(num) {
//     let n = num
//     let sum = 0
//     for (var i = 0; i <= num / 2; i++) {
//         if (num % i === 0) {
//             sum = sum + i
//         }
//     }
//     if (n === sum)
//         document.write(`${n} is a perfect number`)
//     else
//         document.write(`${n} is not a perfect number`)
// }
// function check() {
//     var num = Number(prompt("Enter a number: "))
//     isPerfect(num)
// }
// check()

//4. WAP to check whether a number is prime number or not
// function isPrime(num) {
//     if (num <= 1)
//         return false
//     else {
//         for (var i = 2; i <= num ** 0.5; i++) {
//             if (num % i == 0) {
//                 return false
//                 break
//             }
//             return true
//         }
//     }
// }
// function check() {
//     var num = Number(prompt("Enter a number: "))
//     if (isPrime(num))
//         document.write(`${num} is a Prime Number`)
//     else
//         document.write(`${num} is not a  Prime Number`)
// }
// check()


//5 WAP to calculate sum of even and odd digits of a specific number
// function oddEvenCount(num) {
//     var n = num
//     var evenCount = 0;
//     var oddCount = 0;
//     var digit = 0;

//     while (num != 0) {
//         digit = num % 10;
//         if (digit % 2 === 0) {
//             evenCount += digit
//         } else {
//             oddCount += digit
//         }
//         num = parseInt(num / 10)
//     }

//     document.write(`Sum of Even digits of ${n} is: ${evenCount} <br>`)
//     document.write(`Sum of Odd digits of ${n} is: ${oddCount}`)
// }
// var num = Number(prompt("Enter a number: "));
// oddEvenCount(num)

//6 WAP to count even and odd digits in a number.
// function oddEvenCount(num) {
//     let n = num
//     let evenCount = 0
//     let oddCount = 0
//     let digit = 0

//     while (num != 0) {
//         digit = num % 10
//         if (digit % 2 === 0) {
//             evenCount++
//         } else {
//             oddCount++;
//         }
//         num = parseInt(num / 10)
//     }

//     document.write(`Number of Even digits in ${n} is: ${evenCount} <br>`)
//     document.write(`Number of Odd digits in ${n} is: ${oddCount}`)
// }
// function checkValue() {
//     var num = Number(prompt("Enter a number: "))
//     oddEvenCount(num)
// }
// checkValue()

//7 Program to reverse a number
// function isReverse(num) {
//     var digit = 0
//     var rev = 0
//     while (num != 0) {
//         digit = num % 10
//         rev = rev * 10 + digit
//         num = parseInt(num / 10)
//     }
//     return rev
// }
// function check() {
//     var num = Number(prompt("Enter a number: "))
//     document.write(`Reverse of ${num} is ${isReverse(num)}`)
// }
// check()

//8 WAP to check whether a number is NEON number or not.
// function isNeon(num) {
//     var n = num
//     var sum = 0
//     var digit = 0
//     var result = num * num
//     while (result != 0) {
//         digit = result % 10
//         sum = sum + digit
//         result = parseInt(result / 10)
//     }
//     if (n === sum)
//         document.write(n + " is a NEON number")
//     else
//         document.write(n + " is Not a NEON number")
// }
// var num = Number(prompt("Enter a number: "))
// isNeon(num)

//9 WAP to check whether a number is armstrong number or not.
// function isArmstrong() {
//     var num = Number(prompt("Enter a number: "))
//     var n = num
//     var sum = 0
//     var digit = 0
//     while (num != 0) {
//         digit = num % 10
//         sum = sum + digit ** 3
//         num = Math.floor(num / 10)
//     }
//     if (n === sum)
//         document.write(`${n} is an Armstrong Number`)
//     else
//         document.write(`${n} is not an armstrong number`)
// }
// isArmstrong()

//10 WAP to check whether a number is Palindrome number or not.
// isPallindrome = (num) => {
//     var n = num
//     var d = 0
//     var rev = 0
//     while (num != 0) {
//         d = num % 10
//         rev = rev * 10 + d
//         num = parseInt(num / 10)
//     }
//     if (n === rev)
//         document.write(`${n} is a Pallindrome Number`)
//     else
//         document.write(`${n} is not a Pallindrome Number`)
// }
// var num = Number(prompt("Enter a Number: "))
// isPallindrome(num)

//11 WAP to check whether a number is Magical number or not.
// function isMagical() {
//     var sum = 0
//     var n = num
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }
//     num = sum
//     let rev = 0
//     while (num != 0) {
//         let r = num % 10
//         rev = rev * 10 + r
//         num = parseInt(num / 10)
//     }
//     if (sum * rev === n) {
//         document.write(`${n} is a Magical Number`)
//     }
//     else {
//         document.write(`${n} is a Magical Number`)
//     }
// }
// var num = Number(prompt("Enter the number: "))
// isMagical(num)

//12 WAP to print  all perfect numbers(6,28,496,8128)
// function perfectNumbers(start, end) {
//     for (let num = start; num < end; num++) {
//         let sum = 0
//         for (let i = 0; i <= num / 2; i++) {
//             if (num % i === 0) {
//                 sum = sum + i
//             }
//         }
//         if (num === sum)
//             document.write(`${num} is a perfect number<br>`)
//         else
//             document.write(`${num} is not a perfect number<br>`)
//     }
// }
// var start = Number(prompt("Enter the Range: \n Start From: "))
// var end = Number(prompt("To: "))
// perfectNumbers(start, end)

//13 WAP to print and count all palindrome numbers in a range
// function printPalindrome(start, end) {
//     for (let num = start; num <= end; num++) {
//         let n = num
//         let rev = 0
//         while (n > 0) {
//             let d = n % 10
//             rev = rev * 10 + d
//             n = Math.floor(n / 10)
//         }
//         if (num === rev) {
//             document.write(`${num} is a Palindrome Number<br>`)
//         } else {
//             document.write(`${num} is not a Palindrome Number<br>`)
//         }
//     }
// }

// var start = Number(prompt("Enter the Range: \n Start From: "))
// var end = Number(prompt("To: "))
// printPalindrome(start, end)

//14 WAP to print and count all armstrong numbers(153,370,371,407)
// function countArmstrong(start, end) {
//     for (let i = start; i <= end; i++) {
//         let n = i
//         let sum = 0
//         let digit = 0
//         while (n != 0) {
//             digit = n % 10
//             sum = sum + digit ** 3
//             n = Math.floor(n / 10)
//         }
//         if (i === sum)
//             document.write(`${i} is an Armstrong Number<br>`)
//         else
//             document.write(`${i} is not an armstrong number<br>`)
//     }
// }
// var start = Number(prompt("Enter the Range: \n Start From: "))
// var end = Number(prompt("To: "))
// countArmstrong(start, end)

//15 WAP to print all magical Numbers (81,1458,1729)
// function printMagicalNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//         let sum = 0
//         let num = i
//         while (num != 0) {
//             let r = num % 10
//             sum = sum + r
//             num = parseInt(num / 10)
//         }
//         let rev = 0
//         num = sum
//         while (num != 0) {
//             let r = num % 10
//             rev = rev * 10 + r
//             num = parseInt(num / 10)
//         }
//         if (sum * rev == i)
//             document.write(i)
//     }
// }
// var start = Number(prompt("Enter the Range: \n Start From: "))
// var end = Number(prompt("To: "))
// printMagicalNumbers(start, end)

//16 WAP to count and print all prime numbers in a range
function countPrime() {
    var start = Number(prompt("Enter the Range\nStart From : "))
    var end = Number(prompt("To : "))
    var count = 0
    for (let num = start; num <= end; num++) {
        let flag = false
        for (let i = 2; i <= num ** 0.5; i++) {
            if (num % i == 0) {
                flag = true
                break
            }
        }
        if (flag == false && num >= 2) {
            count++
            document.write(`${num} `)
        }
    }
    document.write(`<br>Total Prime Number from ${start} to ${end} = ${count}`)
}
countPrime()