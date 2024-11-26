/*
*****    
 *****   
  *****  
   ***** 
    *****
*/
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j < i; j++) {
        process.stdout.write(" ")
    }
    for (var k = 1; k <= 5; k++) {
        process.stdout.write("*")
    }
    k--
    console.log()
}