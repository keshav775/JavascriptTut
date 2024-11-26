/*
10101
10101
10101
10101
10101
*/
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j % 2 == 0)
            process.stdout.write(`0`)
        else
            process.stdout.write(`1`)
    }
    console.log()
}