/*
    1     
   2 2    
  3 3 3   
 4 4 4 4  
5 5 5 5 5
*/
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${i} `)
    }
    console.log()
}