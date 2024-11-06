/*
1. WAP to print area of a circle
2. WAP to print area of a Rectangle
3. WAP to print area of cuboid
4. WAP to print area of Right angeled triangle.
5. WAP to print area of square.
6. WAP to swap value of 2 variables.
7. WAP to convert temperature in deg F rom deg C.
8. WAP to convert temperature in deg C from deg F.
*/

//1.
// var pi = 3.14;
// var r = 4;
// var circle = pi * r ** 2;
// console.log("Area of Circle: " + circle);

//2.
// var l = 5.1
// var b = 4
// var area = l * b
// console.log("Area of Rectangle: " + area)

//3.
// var l = 4
// var b = 5
// var h = 7
// var area = 2 * (l * b + l * h + b * h)
// console.log("Area of cuboid: " + area)

//4.
// var b = 2.5
// var h = 4
// var area = 0.5 * b * h;
// console.log(`Area of Right angeled triangle: ${area}`);

//5
// var side = 5.3
// var area = side * side
// console.log("Area of Square: " + area)

//6
//swapping by using third variable
// var a = 5
// var b = 6
// console.log("Without swapping first value is: " + a)
// console.log("Without swapping second value is: " + b)
// var z = a
// a = b
// b = z
// console.log("After swapping first value is: " + a)
// console.log("After swapping second value is: " + b)

//swapping without using third variable
// var a = 5
// var b = 6
// console.log("Without swapping first value is: " + a)
// console.log("Without swapping second value is: " + b)
// a = a + b
// b = a - b
// a = a - b
// console.log("After swapping first value is: " + a)
// console.log("After swapping second value is: " + b)

//7
// var c = 25
// var f = c * 9 / 5 + 32
// console.log(`${c} deg C = ${f} deg F`)

//8
var f = 74
var c = (f - 32) * 5 / 9
console.log(`${f} deg F= ${c.toFixed(2)} deg C`)