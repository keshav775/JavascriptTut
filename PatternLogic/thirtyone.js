/*
    11        
   22332      
  33445543    
 44556677654  
55667788998765
*/
var n = 0
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(` `)
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j <= i) {
            n++
            process.stdout.write(`${n}`)
        }
        else
            n--
        process.stdout.write(`${n}`)
    }
    console.log()
}