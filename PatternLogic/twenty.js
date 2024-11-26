/*
    1
   12
  123
 1234
12345
*/
var n = 5
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j.toString())
    }
    console.log()
}