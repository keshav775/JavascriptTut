/*
12345
23456
34567
45678
56789
*/
for (var i = 1; i <= 5; i++) {
    for (let j = i; j <= i + 4; j++) {
        process.stdout.write(`${j}`)
    }
    console.log()
}