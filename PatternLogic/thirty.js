/*
2 
4 6
8 10 12        
14 16 18 20    
22 24 26 28 30 t
*/
var num = 2
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${num} `)
        num = num + 2
    }
    console.log()
}