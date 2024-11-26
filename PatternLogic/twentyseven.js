/*
1
12   
123  
1234 
12345
1234 
123  
12   
1 
*/
let n = 5
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${j}`)
    }
    console.log()
}
for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${j}`)
    }
    console.log()
}