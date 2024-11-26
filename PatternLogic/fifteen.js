/*
1
23   
456  
78910
1112131415
*/
var num = 1
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(num.toString())
        num++
    }
    console.log()
}