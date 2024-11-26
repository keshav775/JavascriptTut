/*
ABCDE
ABCDE
ABCDE
ABCDE
ABCDE
*/
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        process.stdout.write(`${String.fromCharCode(j + 64)}`)
    }
    console.log()
}