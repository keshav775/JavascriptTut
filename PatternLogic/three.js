/*
*****
**** 
***  
**   
*
*/
for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        process.stdout.write("*")
    }
    console.log()
}