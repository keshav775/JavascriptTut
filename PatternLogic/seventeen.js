/*
12345
1234 
123  
12   
1    

*/
let n = 5 //may be inputted by user
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n + 1 - i; j++) {
        process.stdout.write(j.toString())
    }
    console.log()
}