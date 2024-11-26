/*
    EDCBA
   EDCBA 
  EDCBA  
 EDCBA   
EDCBA
*/
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(` `)
    }
    for (let j = 5; j >= 1; j--) {
        process.stdout.write(`${String.fromCharCode(j + 64)}`)
    }
    console.log()
}