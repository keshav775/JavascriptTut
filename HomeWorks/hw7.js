/*
1. WAP to calculate even and odd digits of a number.
2. WAP to count even and odd digits in a number.
3. WAP to reverse a number.
4. WAP to check whether a number is NEON number or not.
5. WAP to check whether a number is armstrong number or not.
6. WAP to check whether a number is Palindrome number or not.
7. WAP to check whether a number is Magical number or not.
*/

//1
// var num = Number(prompt("Enter a number: "));
// var n = num;
// var evenCount = 0;
// var oddCount = 0;
// var digit = 0;

// while (num != 0) {
//     digit = num % 10;
//     if (digit % 2 === 0) {
//         evenCount += digit;
//     } else {
//         oddCount += digit;
//     }
//     num = parseInt(num / 10);
// }

// document.write(`Sum of Even digits of ${n} is: ${evenCount} <br>`);
// document.write(`Sum of Odd digits of ${n} is: ${oddCount}`);

//2.
// var num = Number(prompt("Enter a number: "));
// var n = num;
// var evenCount = 0;
// var oddCount = 0;
// var digit = 0;

// while (num != 0) {
//     digit = num % 10;
//     if (digit % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
//     num = parseInt(num / 10);
// }

// document.write(`Number digits of ${n} is: ${evenCount} <br>`);
// document.write(`Sum of Odd digits of ${n} is: ${oddCount}`);

//3
// var num = Number(prompt("Enter a number: "))
// var n = num
// var digit = 0
// var rev = 0
// while (num != 0) {
//     digit = num % 10
//     rev = rev * 10 + digit
//     num = parseInt(num / 10)
// }
// document.write(`Reverse of ${n} is ${rev}`)

//4
// NEON number: A number where sum of digits of square of the no is equals to the number ex- 9
// 9-> 9*9=81 and 8+1=9 that's why 9 is NEON number . other examples - 12,81...
// var num = Number(prompt("Enter a number: "))
// var n = num
// var sum = 0
// var digit = 0
// var result = num * num
// while (result != 0) {
//     digit = result % 10
//     sum = sum + digit
//     result = parseInt(result / 10)
// }
// if (n === sum)
//     document.write(n + " is a NEON number")
// else
//     document.write(n + " is Not a NEON number")

//5
// var num = Number(prompt("Enter a number: "))
// var n = num
// var sum = 0
// var digit = 0
// while (num != 0) {
//     digit = num % 10
//     sum = sum + digit ** 3
//     num = Math.floor(num / 10)
// }
// if (n === sum)
//     document.write(`${n} is an Armstrong Number`)
// else
//     document.write(`${n} is not an armstrong number`)

//6
// var num = Number(prompt("Enter a Number: "))
// var n = num
// var d = 0
// var rev = 0
// while (num != 0) {
//     d = num % 10
//     rev = rev * 10 + d
//     num = parseInt(num / 10)
// }
// if (n === rev)
//     document.write(`${n} is a Pallindrome Number`)
// else
//     document.write(`${n} is not a Pallindrome Number`)

//7
// Magic Number:doubt 