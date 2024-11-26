/*
    *
   * 
  *  
 *   
*    

*/
for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        if (i >= j)
            process.stdout.write("*")
        else
            process.stdout.write(" ")
    }
    console.log()
}