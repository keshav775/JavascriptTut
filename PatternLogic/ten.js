/*
* * * * * 
 * * * *  
  * * *   
   * *    
    *     
   * *    
  * * *   
 * * * *  
* * * * *
*/for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}
for (let i = 2; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}