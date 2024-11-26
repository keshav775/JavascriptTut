/*
    1
   2 1 2
  3 2 1 2 3       
 4 3 2 1 2 3 4    
5 4 3 2 1 2 3 4 5 
*/
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(` `)
    }
    for (let j = i; j >= 1; j--) {
        process.stdout.write(`${j} `)
    }
    for (let j = 2; j <= i; j++) {
        process.stdout.write(`${j} `)
    }
    console.log()
}