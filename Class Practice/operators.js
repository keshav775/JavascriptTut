//Arthimatic Operators

//Addition +
// console.log(15 + 6)                        //15
// console.log(15 + "6")                      //156
// console.log("15" + "6")                    //156
// console.log('15' + "Hello World")          //15Hello World

//Substraction -
// console.log(15 - 6)                        //9
// console.log(15 - "6")                      //9
// console.log("15" - "6")                    //156
// console.log('15' - "Hello World")          //NaN

// Multiplication *
// console.log(15 * 6)                        //90
// console.log(15 * "6")                      //90
// console.log("15" * "6")                    //90
// console.log('15' * "Hello World")          //NaN


//Division /
// console.log(15 / 6)                        //2.5
// console.log(15 / "6")                      //2.5
// console.log("15" / "6")                    //2.5
// console.log('15' / "Hello World")          //NaN

//Modulas %
// console.log(15 % 6)                        //3
// console.log(15 % "6")                      //3
// console.log("15" % "6")                    //3
// console.log('15' % "Hello World")          //NaN

//Power **
// console.log(15 ** 6)                        //111390625
// console.log(15 ** "6")                      //111390625
// console.log("15" ** "6")                    //111390625
// console.log('15' ** "Hello World")          //NaN

// Expression 
// var a = 20 / 4 / 10 * 7 % 100 / 8 * 5 - 23 * 2 % 50 * 5 % 2087 / 20 * 7 / 20 * 10 + 34 * 2 % (45 * 2 ** 6 % 100)
// //WORKS on BODMAS 
// console.log(a)       //29.9375

//Assigment Operators
//RHS value is assigned into LHS
// ex - sum=a + b //valid
// a + b=sum //invalid
// a = b = c //valid

//composite operators -> a=a+b => a+=b, a=a-b = a-=b...........such type of operators are short hand/composite operators

//Relational Operators -> True /False (Boolean values) returned by it. Used to make relations

//< Less than
// console.log(10 < 20)         //true
// console.log(10 < 2)          //false
// console.log(10 < 10)         //false
// console.log("10" < "20")     //true (1<2)
// console.log("10" < 2)        //fasle (10<2)
// console.log(10 < "20")        //true (10<20)

//  Less than equals to <=
// console.log(10 <= 20)         //true
// console.log(10 <= 2)          //false
// console.log(10 <= 10)         //true
// console.log("10" <= "20")     //true (1<=2)
// console.log("10" <= 2)        //fasle (10<=2)
// console.log(10 <= "20")       //true

//Greater than >
// console.log(10 > 20)         //false
// console.log(10 > 2)          //true
// console.log(10 > 10)         //false
// console.log("10" > "20")     //false (1>2)
// console.log("10" > 2)        //true (10>2)
// console.log(10 > "20")       //false

//Greater than equals to
// console.log(10 >= 20)         //true
// console.log(10 >= 2)          //false
// console.log(10 >= 10)         //true
// console.log("10" >= "20")     //true (1>=2)
// console.log("10" >= 2)        //fasle (10>=2)
// console.log(10 >= "20")       //false

//Equals to
// console.log(10 == 20)         //false
// console.log(10 == 2)          //false
// console.log(10 == 10)         //true
// console.log("10" == "20")     //false
// console.log("10" == 2)        //fasle 
// console.log(10 == "20")       //false

//Equals to Identical
// console.log(10 === 20)           //false
// console.log(10 === 10)           //true
// console.log(10 === "10")         //false

//Not Equals to
// console.log(10 != 20)            //true
// console.log(10 != 10)            //false
// console.log(10 != "10")          //true

//Logical operators

//Logical And (&&) //Anyone operands is false result is false

// console.log(10 && 20)        //true i.e 20 (last true value is printed)
// console.log(0 && 20)         //false i.e (first false value is printed)
// console.log(false && 20)     //false i.e first false value is false so, false is printed
// console.log(10 && 0)         //false i.e last false value is printed so 0
// console.log(0 && 20)         //false so output is 0
// console.log(0 && 0)           //false i.e 0 (first 0)
// console.log(0 && false)       //false i.e 0
// console.log(false && 0)       //false ie false

//Logical OR -> Anyone is true the output is true
// console.log(10 || 20)        //10 first value is true result is value
// console.log(0 || 20)         //20 last value is true result is value( value which is greater)
// console.log(false || 20)     //20
// console.log(10 || 0)         //10
// console.log(0 || 20)         //20
// console.log(0 || 0)          //0
// console.log(0 || false)      //false //last value is true (0 , false) result is value i.e false
// console.log(false || 0)      //0

//Logical Not
// console.log(!10)              //false
// console.log(!0)               //true

//Bitwise Operators -> WOrks on bits see the truth table
//Bitwise And
//Bitwise Or
//Bitwise Xor
//Bitwise Left Shift
//Bitwise Right Shift
//Bitwise Negation

// var a = 77
// var b = 138
// var c = a & b
// var d = a | b
// var e = a ^ b
// console.log(c, d, e)   //8 207 199

//Left Shift
//i.e num * 2^n
// console.log(25 << 10) //25600

//Right Shift
//i.e num/2^n
// console.log(2500 >> 5)  //78

//Negation Operator
// var a = 20
// var b = -30
// console.log(~a)    //-21
// console.log(~b)    //29
// console.log(-a)    //-20
// console.log(-b)    //30


//Increament / Decreament
// Pre Increament -> First increament then assign
// Pre Decreament -> First decreament then assign
// Post Increamnet -> First print then increament
// Post Decreamnet -> First print then  Decreamnet

// var a = 10
// var b = a++
// var c = ++a
// var d = a--
// var e = --a
// --a
// a--
// console.log(a, b, c, d, e)  // 8 10 12 12 10


// var a = 10
// var b = a-- - --a
// var c = --a + a-- + b++ + ++b - b++
// c = c--
// var d = a++ + ++a - b-- - --b + c-- - c--
// console.log(a, b, c, d)   // 8 3 14 7
