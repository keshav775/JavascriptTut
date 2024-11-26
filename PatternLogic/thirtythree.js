/*
A
AB   
ABC  
ABCD 
ABCDE
*/
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${String.fromCharCode(j + 64)}`)
    }
    console.log()
}