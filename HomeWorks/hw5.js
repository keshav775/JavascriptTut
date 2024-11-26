/*
1. WAP to print day name when user enters day number.
2. WAP to print no of days in month when user enter any month no.
3. WAP to make a simple calculator.
4. WAP to check whether an entered character is lower case vowel, lower case constant, upper case vowel, upper case vowel
    upper case constant, digit, space or any special characters.
5. DO QN NO 2 & 3 by using switch case...
*/
// 1
// var dayNo = parseInt(prompt("Enter the day number: "))
// if (dayNo == 1)
//     document.write("Monday")
// else if (dayNo === 2)
//     document.write("Tuesday")
// else if (dayNo == 3)
//     document.write("Wednesday")
// else if (dayNo == 4)
//     document.write("Thursday")
// else if (dayNo == 5)
//     document.write("Friday")
// else if (dayNo == 6)
//     document.write("Saturday")
// else if (dayNo == 7)
//     document.write("Sunday")
// else
//     document.write("Invalid choice")

//2
// var monthNo = parseInt(prompt("Enter the month number: "))
// if (monthNo === 1 || monthNo === 3 || monthNo === 5 || monthNo === 7 || monthNo === 8 || monthNo === 10 || monthNo === 12)
//     document.write(`${monthNo}'th number month has 31 days`)
// else if (monthNo === 2 || monthNo === 4 || monthNo === 6 || monthNo === 9 || monthNo === 11)
//     document.write(`${monthNo}'th number month has 30 days`)
// else
//     document.write("Not a month")

//3
// var num1 = Number(prompt("Enter first number"))
// var num2 = Number(prompt("Enter second number"))
// var calcOperation = prompt("Enter your operation by only these operators(+,-,*,/ & %)")
// var result = 0
// if (calcOperation == "+") {
//     result = num1 + num2
//     document.write(`Sum of ${num1} & ${num2} is ${result}`)
// }
// else if (calcOperation == "-") {
//     result = num1 - num2
//     document.write(`Difference of ${num1} & ${num2} is ${result}`)
// }
// else if (calcOperation == "*") {
//     result = num1 * num2
//     document.write(`Product of ${num1} & ${num2} is ${result}`)
// }
// else if (calcOperation == "/") {
//     result = num1 / num2
//     document.write(`Division of ${num1} & ${num2} is ${result}`)
// }
// else if (calcOperation == "%") {
//     result = num1 % num2
//     document.write(`Rwmainder of ${num1} / ${num2} is ${result}`)
// }
// else
//     document.write("Invalid Operation")

//4
// var ch = prompt("Enter a single Character: ");
// if (ch.length != 1) {
//     document.write("Character is greater than 1... Try Again!");
// } else if (ch >= 'a' && ch <= 'z') {
//     if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
//         document.write(`'${ch}' is a lowercase vowel`);
//     } else {
//         document.write(`'${ch}' is a lowercase consonant`);
//     }
// } else if (ch >= 'A' && ch <= 'Z') {
//     if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
//         document.write(`'${ch}' is an uppercase vowel`);
//     } else {
//         document.write(`'${ch}' is an uppercase consonant`);
//     }
// }
// else if (ch >= 0 && ch <= 9) {
//     document.write(`'${ch}' is a digit`)
// }
// else if (ch == ' ') {
//     document.write(`'${ch}' is a space`);
// } else {
//     document.write(`'${ch}' is a special symbol`);
// }

//2
// var month = parseInt(prompt("Enter no of month: "))
// switch (month) {
//     case 1:
//         document.write("January")
//         break
//     case 2:
//         document.write("February")
//         break
//     case 3:
//         document.write("March")
//         break
//     case 4:
//         document.write("April")
//         break
//     case 5:
//         document.write("May")
//         break
//     case 6:
//         document.write("June")
//         break
//     case 7:
//         document.write("July")
//         break
//     case 8:
//         document.write("August")
//         break
//     case 9:
//         document.write("September")
//         break
//     case 10:
//         document.write("October")
//         break
//     case 11:
//         document.write("November")
//         break
//     case 12:
//         document.write("December")
//         break
//     default:
//         document.write("Invalid Choice...!!!")
// }

//3 
var num1 = Number(prompt("Enter First Number: "))
var num2 = Number(prompt("Enter Second Number: "))
var calc = prompt("Enter your choice by given operators value only: \n '+' for Addition \n '-' for substraction \n '*' for multiplication \n '/' for division  ")
var result = 0
switch (calc) {
    case "+":
        result = num1 + num2
        document.write(`Addition of ${num1} & ${num2} is: ${result}`)
        break
    case "-":
        result = num1 - num2
        document.write(`Substraction of ${num1} & ${num2} is: ${result}`)
        break
    case "*":
        result = num1 * num2
        document.write(`Product of ${num1} & ${num2} is: ${result}`)
        break
    case "/":
        result = num1 / num2
        document.write(`Division of ${num1} & ${num2} is: ${result}`)
        break
    default:
        document.write(`Invalid Statement...`)

}