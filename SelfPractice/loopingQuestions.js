/*
Here’s a list of looping programming questions for practice, arranged by difficulty level. You can use these to strengthen your understanding of loops (for, while, do-while).

### **Beginner**
1. Print numbers from 1 to 100.
2. Print the first 10 natural numbers in reverse order.
3. Display the multiplication table of a number entered by the user.
4. Calculate the sum of the first `n` natural numbers.
5. Print all even numbers between 1 and 50.
6. Count the number of digits in a given number.
7. Check if a number is a palindrome (same forwards and backwards).
8. Display all odd numbers from 1 to `n`.

### **Intermediate**
9. Calculate the factorial of a given number.
10. Print the Fibonacci sequence up to `n` terms.
11. Find the largest and smallest number in an array using loops.
12. Reverse a given number (e.g., 12345 → 54321).
13. Print all prime numbers between 1 and 100.
14. Check if a given number is an Armstrong number (e.g., 153 = 1³ + 5³ + 3³).
15. Display a pattern using loops, such as:
   ```
   *
   **
   ***
   ****
   *****
   ```

### **Advanced**
16. Check if a number is a strong number (sum of factorials of its digits equals the number).
17. Print Pascal’s Triangle up to `n` rows.
18. Print numbers in a spiral matrix format (e.g., 3x3 matrix).
19. Count and print all pairs in an array whose sum is equal to a given number.
20. Implement a basic bubble sort using nested loops.

### **Creative Patterns**
21. Print a pyramid pattern:
   ```
      *
     ***
    *****
   ```
22. Print a diamond pattern:
   ```
      *
     ***
    *****
     ***
      *
   ```
23. Print numbers in a pattern:
   ```
   1
   12
   123
   1234
   ```

### **Challenge**
24. Write a program to find all perfect numbers between 1 and 10,000.
25. Implement a number guessing game with limited attempts using a loop.
26. Check if two strings are anagrams of each other using loops.
27. Simulate a simple login system with 3 attempts using loops.
28. Generate all subsets of a given array using loops.

Would you like detailed solutions to any of these problems?
*/
//2 Print first 10 Natural Numbers in Reverse order
// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }

// 3
// var sum = 0
// for (let i = 1; i <= 10; i++)
//     sum = sum + i
// console.log(sum)

//16
// var num = Number(prompt("Enter a Number: "))
// n = num
// var fact = 1
// var sum = 0
// var d = 0
// while (num != 0) {
//    d = num % 10
//    let i = 1
//    while (i <= d) {
//       fact = fact * i
//       i++
//    }
//    sum = sum + fact
//    num = parseInt(num / 10)
// }
// if (n == sum)
//    document.write("Strong Number")
// else
//    document.write("Not a Strong Number")

// // wrong logic check it again

//Number Guessing attempt in 3 terms
var count = 5
var ch = ''
do {
   while (count != 0) {
      var num = parseInt(Math.random() * 11)
      var n = parseInt(prompt("Enter a Number from 1 to 10\n"))

      if (n >= 1 && n <= 10) {
         if (n == num) {
            alert(`Your entered number is ${n} which is correct`)
            break
         }
         else
            alert(`Your entered num ber is ${n} which is not correct the correct number is: ${num} `)
      }
      else {
         alert(`Number is not in range from 1 to 10`)
      }
      count--
      alert(` You have ${count} remaining chances to guess the correct number..`)
   }
   ch = prompt("\tGAME OVER\t \n Press n for exit \n Press any key to Play Again...")
} while (ch != 'n')
if (ch === 'n' || ch === 'N') {
   document.write("Thanks for Playing this game...")
}



