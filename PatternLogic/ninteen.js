/*
    12345
   12345 
  12345  
 12345   
12345 
*/
var n = 5
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= 5; j++) {
        process.stdout.write(j.toString())
    }
    console.log()
}