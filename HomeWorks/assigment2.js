//Assigment - 1, User's Input

//1
// var r = Number(prompt("Enter the radius"))
// document.write("Area of circle: " + 3.14 * r ** 2)

//2
// var l = Number(prompt("Enter the length"))
// var b = Number(prompt("Enter the bredth"))
// var area = l * b
// document.write("Area of Rectangle: " + l * b)

//3
// var l = Number(prompt("Enter the length"))
// var b = Number(prompt("Enter the bredth"))
// var h = Number(prompt("Enter the height"))
// var area = 2 * (l * b + l * h + b * h)
// document.write("Area of cuboid: " + area)

//4
// var b = Number(prompt("Enter the Base"))
// var h = Number(prompt("Enter the Height"))
// var area = 0.5 * b * h
// document.write("Area of Right Angeled Triangle: " + area)

//5
// var s = Number(prompt("Enter the side of Square"))
// var area = s * s
// document.write("Area of Square: " + area)

// 6
// swapping by using third variable
// var a = Number(prompt("Enter First Number"))
// var b = Number(prompt("Enter Second Number"))
// document.write("Without swapping first value is: " + a)
// document.write("Without swapping second value is: " + b)
// var z = a
// a = b
// b = z
// document.write("After swapping first value is: " + a)
// document.write("After swapping second value is: " + b)

//swapping without using third variable
// var a = Number(prompt("Enter First Number"))
// var b = Number(prompt("Enter Second Number"))
// console.log("Without swapping first value is: " + a)
// console.log("Without swapping second value is: " + b)
// a = a + b
// b = a - b
// a = a - b
// document.write("After swapping first value is: " + a)
// document.write("After swapping second value is: " + b)

//7
// var c = Number(prompt("Enter the temperature in degree Celcius"))
// var f = c * 9 / 5 + 32
// document.write(`${c} deg C = ${f} deg F`)

//8
var f = Number(prompt("Enter the temperature in degree Farenheit"))
var c = (f - 32) * 5 / 9
document.write(`${f} deg F= ${c.toFixed(2)} deg C`)