/*
1 
3 5
7 9 11
13 15 17 19    
21 23 25 27 29 
*/
var num = 1
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${num} `)
        num = num + 2
    }
    console.log()
}